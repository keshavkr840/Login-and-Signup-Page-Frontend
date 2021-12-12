export default function validateInfo(data){
    let errors = {}

    if(!data.name){
        errors.name = 'Name is Required';
    }
    else{
        var nameformat = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        if((nameformat.test(data.name))){
            errors.name = 'Name Cannot Contain Special Characters';
        }
    }
    if(!data.line_one){
        errors.line_one = 'Required';
    }
    if(!data.city){
        errors.city = 'Requried';
    }
    if(data.pincode.length!=6){
        errors.pincode = 'Pincode is invalid';
    }
    if(!data.state){
        errors.state = 'Required';
    }
    if(!data.vaccinated){
        errors.vaccinated = 'Vaccination Status is Required';
    }
    // else if(typeof(data.vaccinated)!==Boolean){
    //     errors.vaccinated = 'Only Boolean Values Allowed'
    // }

    if(!data.emergency_number){
        errors.emergency_number = 'Phone Number is Required';
    }
    else if(!(data.emergency_number).match('[0-9]{10}')){
        errors.emergency_number = 'Please put 10 digit mobile number';
    }
    // if(!data.username){
    //     errors.username = 'Username is Required';
    // }
    if(data.password && data.password.length<9){
        errors.password  = 'Password Needs to be more than 8 characters';
    }
    else if(data.password && data.password.length>15){
        errors.password  = 'Password length cannot exceed 15 characters';
    }
    else if(data.password){
        var pwdformat=  /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
        if(!(data.password.match(pwdformat))){
            errors.password = 'Password Must Contain Atleast one Special Character';
        } 
    }
    if(!data.skills){
        errors.skills = 'Skills are Required';
    }
    else{
        const skillarr = (data.skills).split(',');
        if(skillarr.length<2){
            errors.skills = 'Atleast 2 skills required';
        }
    }
    console.log(errors);
    return errors;
}