const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const workplace = document.getElementById('workplace');

form.addEventListener('submit', (e) => {
    e.preventDefault ();

    checkInputs();
});

function checkInputs (){
    //get the values from the inputs
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const workplaceValue = workplace.value.trim();

    if(fnameValue === ''){
        //show error
        //add error class
       setErrorFor(fname, 'Oops! User first name cannot be blank');     
    }else{
       //add success class 
       setSuccessFor(fname);
    }

    if(lnameValue === ''){

        setErrorFor(lname, 'Please, fill in your last name');
    }else{
        setSuccessFor(lname);
    }

    if(emailValue === ''){
        setErrorFor(email, 'User email cannot be blank');

    }else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid, please check again');
        
    }else{
        setSuccessFor(email);
    }

    if(workplaceValue === ''){
        setErrorFor(workplace, 'Please, fill in your workplace');
    }else{
        setSuccessFor(workplace);
    }
}

function setErrorFor(input, message){
    const item = input.parentElement; //to get the true class .item
    const errorMsg = item.querySelector('.error-msg')

    //add error message to small tag
    errorMsg.innerText = message;

    //add error class
    item.className = 'item error';
}

function setSuccessFor(input){
    const item = input.parentElement;
    item.className = 'item success';
}
// function isEmail(email) {
    // /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
    // ^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$
// }
function isEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}