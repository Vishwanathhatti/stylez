var email= document.getElementById('email')
var contact= document.getElementById('contact-number')
var subject= document.getElementById('subject')
var query= document.getElementById('query')

function handleSubmit(){
    alert('Your query has been submitted');
    clearValue()
}

function clearValue(){
    email.value= '';
    contact.value='';
    subject.value='';
    query.value='';
}