export default function Validation(values){
    const errors = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/
    // const number_pattern =/?:0|994)(?:12|51|50|55|70|77)[^\w]{0,2}[2-9][0-9]{2}[^\w]{0,2}[0-9]{2}[^\w]{0,2}[0-9]{2}[^\d]/

    if(values.name ===""){
        errors.name = "Name is Required!"
    }
    if(values.email ===""){
        errors.email = "Email is Required"
    }
    else if(!email_pattern.test(values.email))
    {
        errors.email = "Email didn't match"
    }

    if(values.number===""){
        errors.number = 'Number is Required!'
    }
    if(values.subject===""){
        errors.subject = 'Subject is Required!'
    }
    if(values.message===""){
        errors.message = 'Message is Required!'
    }
    
}