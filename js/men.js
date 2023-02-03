let btn = document.getElementById('posh');
let name = document.getElementById('Name');
let bont = document.getElementById('bont');




btn.addEventListener('click', function(e){
    validate_mail()
    validate_Name()
    validate_Password()
    
    appclick()
})

function appclick(){
    let text ={
        name:name.value
    }

    bont=text
}



function validate_Name() {
    let name_error = document.getElementById('name_error');


    let regx = /^[A-Z][a-z]{3,8}$/;

    if(regx.test(name.value)==true){
        name_error.style.display='none';
        return true;
    }else{
        name_error.style.display='block';
        
        return false;
    }

}

function validate_mail() {
    let mail = document.getElementById('Email');
   let email_error = document.getElementById('email_error');

    let regex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
  
    if(regex.test(mail.value)==true){
         email_error.style.display='none';
         window.open('index.html','_self');
        return true;
    }else{
        email_error.style.display='block';
        return false;
    }
}

function validate_Password(){
let password = document.getElementById('Password');
let password_error= document.getElementById('password_error');

var regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/

    if(regex.test(password.value)==true){
        password_error.style.display='none';
        // window.open('index.html','_self');
       return true;
    
    }
    else{
        password_error.style.display='block';
        return false;
    }
}



