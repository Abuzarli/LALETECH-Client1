import './index.scss'
import { Helmet } from "react-helmet"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { getAllReferences } from '../../../api/referenceRequest';

const References = () => {
  const [references,setReferences]=useState()
  useEffect(()=>{
    getAllReferences().then(res=>{
      setReferences(res);
    })
  },[setReferences])
  return (
    <section className="section-references">
      <Helmet>
       <meta charset="utf-8" />
       <title> Referanslar-LALETECH MMC | LALETECH MMC | Mühəndislik Şirkəti</title>
       </Helmet>

       <div className='partner-title'>
       <h1 className='partners'>PARTNYORLARIMIZ</h1>
       </div>
       

       <div className='div-grid'>
       <Grid className='grid' container spacing={{ xs: 12, sm:6, md:4, lg:3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {references && references.map((reference)=>{
          return  <Grid key={reference._id} item lg={3}>
             <div className='card'>
               <div><img className='reference-image' src={reference.imageURL} alt="" /></div>
               <div className='card-txt'>
               <div><p className='card-title'>{reference.name}</p></div>
               <div><p className='card-content'>{reference.content}</p></div>
               </div>
               <div className='line-ref'></div>
               <div className='buton-div'><a href={reference.link}><Button><MoreHorizIcon/> DAHA ÇOX</Button></a></div>
             </div>
         </Grid>
        })}

      </Grid>
       </div>
    </section>
  )
}

export default References
