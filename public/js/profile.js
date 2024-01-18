const form = document.forms.profileForm;
const avatat = document.getElementById('user-avatar');

form.elements.profileBtn.onclick = async (e)=>{

    if(form.elements.userFirstName.value == '' && form.elements.userLastName.value == ''){
        e.preventDefault();

        form.elements.userFirstName.style.boxShadow = '0 0 10px red';
        form.elements.userLastName.style.boxShadow = '0 0 10px red';
    }
}

form.elements.userAvatar.onchange = ()=>{
    avatat.src = URL.createObjectURL(form.elements.userAvatar.files[0]);
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