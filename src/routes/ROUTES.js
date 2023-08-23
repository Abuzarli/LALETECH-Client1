import AdminRoot from "../pages/Admin/AdminRoot";
import DASHBOARD from "../pages/Admin/dashboard";
import MainRoot from "../pages/User/MainRoot";
import Home from "../pages/User/ana_sehife";
import Contact from "../pages/User/elaqe";
import About from "../pages/User/haqqimizda";
import Projects from "../pages/User/layiheler";
import Products from "../pages/User/mehsullar";
import References from "../pages/User/referanslar";
import Service from "../pages/User/servis";
import Xidmet from "../pages/User/xidmetler";
import PRODUCTS from "../pages/Admin/products";
import REFERENCES from "../pages/Admin/references/reference";
import EKIN from "../pages/User/mehsullar/ekinmakina";
import ATLASICS from "../pages/User/mehsullar/atlasics";
import AWETA from "../pages/User/mehsullar/aweta";
import SeriMakina from "../pages/User/mehsullar/serimakina";
import TurVarMakina from "../pages/User/mehsullar/turvarMakina";
import IleriMakina from "../pages/User/mehsullar/ileriMakina";
import SoleyMakina from "../pages/User/mehsullar/soleyMakina";
import OsmanCubuk from "../pages/User/mehsullar/osmanCubuk";
import CEYLIFT from "../pages/User/mehsullar/ceylift";
import KaradumanKalip from "../pages/User/mehsullar/karadumanKalip";
import HAKNERSAN from "../pages/User/mehsullar/haknersan";
import CETINEL from "../pages/User/mehsullar/cetinel";
import UzayBaskul from "../pages/User/mehsullar/uzayBaskul";
import FiloKompresor from "../pages/User/mehsullar/filoKompresor";
import ElaveMehsullar from "../pages/User/mehsullar/elaveMehsullar";
import PAGENOTFOUND from "../pages/User/page-not-found/not_found";
import LOGIN from "../pages/Admin/Login/login";
import EKINADMIN from "../pages/Admin/products/ekinmakina";
import ATLASICSADMIN from "../pages/Admin/products/atlasics";
import AWETAADMIN from "../pages/Admin/products/aweta";
import SeriMakinaADMIN from "../pages/Admin/products/serimakina";
import TurVarMakinaADMIN from "../pages/Admin/products/turvarMakina";
import IleriMakinaADMIN from "../pages/Admin/products/ileriMakina";
import SoleyMakinaADMIN from "../pages/Admin/products/soleyMakina";
import OsmanCubukADMIN from "../pages/Admin/products/osmanCubuk";
import CEYLIFTADMIN from "../pages/Admin/products/ceylift";
import KaradumanKalipADMIN from "../pages/Admin/products/karadumanKalip";
import HAKNERSANADMIN from "../pages/Admin/products/haknersan";
import CETINELADMIN from "../pages/Admin/products/cetinel";
import UzayBaskulADMIN from "../pages/Admin/products/uzayBaskul";
import FiloKompresorADMIN from "../pages/Admin/products/filoKompresor";
import ElaveMehsullarADMIN from "../pages/Admin/products/elaveMehsullar";
import AddEkinProduct from "../pages/Admin/products/ekinmakina/addProduct/addEkinProduct";
import AddAtlasProduct from "../pages/Admin/products/atlasics/addProdduct/addAtlasProduct";
import AddAwetaProduct from "../pages/Admin/products/aweta/addProduct/addAwetaProduct";
import AddSeriProduct from "../pages/Admin/products/serimakina/addProduct/addSeriProduct";
import AddTurVarProduct from "../pages/Admin/products/turvarMakina/addProduct/addTurvarProduct";
import AddIleriProduct from "../pages/Admin/products/ileriMakina/addProduct/addIleriProduct";
import AddSoleyProduct from "../pages/Admin/products/soleyMakina/addProduct/addSoleyProduct";
import AddOsmanProduct from "../pages/Admin/products/osmanCubuk/addProduct/addOsmanProduct";
import AddCeyliftProduct from "../pages/Admin/products/ceylift/addProduct/addCeyliftProduct";
import AddKaradumanProduct from "../pages/Admin/products/karadumanKalip/addProduct/addKaradumanProduct";
import AddHaknersanProduct from "../pages/Admin/products/haknersan/addProduct/addHaknersanProduct";
import AddCetinelProduct from "../pages/Admin/products/cetinel/addProduct/addCetinelProduct";
import AddUzayProduct from "../pages/Admin/products/uzayBaskul/addProduct/addUzayProduct";
import AddFiloProduct from "../pages/Admin/products/elaveMehsullar/addProduct/addOtherProduct";
import AddOtherProduct from "../pages/Admin/products/elaveMehsullar/addProduct/addOtherProduct";
import AddReference from "../pages/Admin/references/addReference/addReferense";


export const ROUTES = [
    {
        path:'/',
        element: <MainRoot/>,
        children:[
            {
                path:'',
                element: <Home/>
            },
            {
                path:'/about',
                element: <About/>
            },
            {
                path:'/references',
                element:<References/>
            },            
            {
                path:'/service',
                element:<Service/>
            },            
            {
                path:'/xidmet',
                element:<Xidmet/>
            },            
            {
                path:'/products/ekin-makina',
                element:<Products/>
            },            
            {
                path:'/projects',
                element:<Projects/>
            },            
            {
                path:'/contact',
                element:<Contact/>
            },

            // PARTNERS
            {
                path:'/products/ekin-makina',
                element:<EKIN/>
            },
            {
                path:'/products/atlasics',
                element:<ATLASICS/>
            },
            {
                path:'/products/aweta',
                element:<AWETA/>
            },
            {
                path:'/products/seri-makina',
                element:<SeriMakina/>
            },
            {
                path:'/products/tur-var-makina',
                element:<TurVarMakina/>
            },
            {
                path:'/products/ileri-makina',
                element:<IleriMakina/>
            },
            {
                path:'/products/soley-makina',
                element:<SoleyMakina/>
            },
            {
                path:'/products/osman-cubuk',
                element:<OsmanCubuk/>
            },
            {
                path:'/products/ceylift',
                element:<CEYLIFT/>
            },
            {
                path:'/products/karaduman-kalip',
                element:<KaradumanKalip/>
            },
            {
                path:'/products/haknersan',
                element:<HAKNERSAN/>
            },
            {
                path:'/products/cetinel',
                element:<CETINEL/>
            },
            {
                path:'/products/uzay-baskul',
                element:<UzayBaskul/>
            },
            {
                path:'/products/filo-kompressor',
                element:<FiloKompresor/>
            },
            {
                path:'/products/elave-mehsullar',
                element:<ElaveMehsullar/>
            }

        ]
    },

    {
        path:'*',
        element:<PAGENOTFOUND/>
    },

    // {
    //     path:'/diego',
    //     element:<LOGIN/>,
    // },
    {

        

        path:'/diego',
        element:<AdminRoot/>,
        children:[

            {
                path:'dashboard',
                element: <DASHBOARD/>
            },
            
            {
                path:'products',
                element: <PRODUCTS/>
            },

            {
                path:'references',
                element: <REFERENCES/>
            },

            {
                path:'references/add-reference',
                element:<AddReference/>
            },


            // PARTNERS ADMIN SIDE
            {
                path:'products/ekin-makina',
                element:<EKINADMIN/>
            },
            {
                path:'products/atlasics',
                element:<ATLASICSADMIN/>
            },
            {
                path:'products/aweta',
                element:<AWETAADMIN/>
            },
            {
                path:'products/seri-makina',
                element:<SeriMakinaADMIN/>
            },
            {
                path:'products/tur-var-makina',
                element:<TurVarMakinaADMIN/>
            },
            {
                path:'products/ileri-makina',
                element:<IleriMakinaADMIN/>
            },
            {
                path:'products/soley-makina',
                element:<SoleyMakinaADMIN/>
            },
            {
                path:'products/osman-cubuk',
                element:<OsmanCubukADMIN/>
            },
            {
                path:'products/ceylift',
                element:<CEYLIFTADMIN/>
            },
            {
                path:'products/karaduman-kalip',
                element:<KaradumanKalipADMIN/>
            },
            {
                path:'products/haknersan',
                element:<HAKNERSANADMIN/>
            },
            {
                path:'products/cetinel',
                element:<CETINELADMIN/>
            },
            {
                path:'products/uzay-baskul',
                element:<UzayBaskulADMIN/>
            },
            {
                path:'products/filo-kompressor',
                element:<FiloKompresorADMIN/>
            },
            {
                path:'products/elave-mehsullar',
                element:<ElaveMehsullarADMIN/>
            },

            // ADD PRODUCTS
            {
                path:'products/ekin-makina/add-product',
                element:<AddEkinProduct/>
            },
            {
                path:'products/atlasics/add-product',
                element:<AddAtlasProduct/>
            },
            {
                path:'products/aweta/add-product',
                element:<AddAwetaProduct/>
            },
            {
                path:'products/seri-makina/add-product',
                element:<AddSeriProduct/>
            },
            {
                path:'products/tur-var-makina/add-product',
                element:<AddTurVarProduct/>
            },
            {
                path:'products/ileri-makina/add-product',
                element:<AddIleriProduct/>
            },
            {
                path:'products/soley-makina/add-product',
                element:<AddSoleyProduct/>
            },
            {
                path:'products/osman-cubuk/add-product',
                element:<AddOsmanProduct/>
            },
            {
                path:'products/ceylift/add-product',
                element:<AddCeyliftProduct/>
            },
            {
                path:'products/karaduman-kalip/add-product',
                element:<AddKaradumanProduct/>
            },
            {
                path:'products/haknersan/add-product',
                element:<AddHaknersanProduct/>
            },
            {
                path:'products/cetinel/add-product',
                element:<AddCetinelProduct/>
            },
            {
                path:'products/uzay-baskul/add-product',
                element:<AddUzayProduct/>
            },
            {
                path:'products/filo-kompressor/add-product',
                element:<AddFiloProduct/>
            },
            {
                path:'products/elave-mehsullar/add-product',
                element:<AddOtherProduct/>
            },



        ]

    },
    // {
    //     path:'/admin',
    //     element:<LOGIN/>
    // },
]