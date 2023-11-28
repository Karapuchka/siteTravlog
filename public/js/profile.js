const form = document.forms.profileForm;

form.elements.profileBtn.onclick = (e)=>{

    if(form.elements.userFirstName.value == '' && form.elements.userLastName.value == ''){
        e.preventDefault();

        form.elements.userFirstName.style.boxShadow = '0 0 10px red';
        form.elements.userLastName.style.boxShadow = '0 0 10px red';
    }    
}

form.elements.userFirstName.onclick = (e)=>{
    if(form.elements.userFirstName.value == ''){
        form.elements.userFirstName.style.boxShadow = 'none';
    }
}

form.elements.userLastName.onclick = (e)=>{
    if(form.elements.userLastName.value == ''){
        form.elements.userLastName.style.boxShadow = 'none';
    }
}