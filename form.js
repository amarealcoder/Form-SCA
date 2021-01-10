const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const mail = document.getElementById('mail');
const workplace = document.getElementById('workplace');
const phone = document.getElementById('phone');
const msg = document.getElementById('msg');
const budget = document.getElementById('budget');
const fdback = document.getElementById('fback')

form.addEventListener('submit', (e) => {
    e.preventDefault ();

    checkInputs();
});

function checkInputs (){
    //get the values from the inputs
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const mailValue = mail.value.trim();
    const workplaceValue = workplace.value.trim();
    const phoneValue = phone.value.trim();
    const msgValue = msg.value.trim();
    const budgetValue = budget.value.trim();
    const fdbackValue = fdback.value.trim();

    if(fnameValue === ''){
        //show error
        //add error class
       setErrorFor(fname, 'Oops! User first name cannot be blank');     
    }else{
       //add success class 
       setSuccessFor(fname);
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