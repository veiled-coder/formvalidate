const name = document.getElementById('Name');
const form=document.getElementById('form');
const mail=document.getElementById('email');
const errorElement=document.getElementById('error-text');
const user=document.getElementById('user-data');


form.addEventListener('submit',(e)=>{
    let messages=[];

    if (name.value ===""|| name.value == null || (name.value.length) < 3 || name.value.length>20){
        messages.push('required minimum of 3 characters and maximum of 20 characters')
    
    }
    console.log(messages.length);
    if (messages.length > 0){
        e.preventDefault()
        errorElement.innerText=messages.join(',')
        //if our empty message array has content,length wont be 0 anymore but 1 which is the
        // content i.e text gotten from the first if statemnt 
    }
})

form.onsubmit=function(){
    
    const Name=name.value;
    const mail=email.value
    

    if (Name && mail){
        localStorage.setItem(Name,mail);
        location.reload()
    }

   
}
for (let i=0; i<localStorage.length;i++){
    const key=localStorage.key(i);
    const value=localStorage.getItem(key);

    user.innerHTML+=`${key}: ${value} <br />`
}