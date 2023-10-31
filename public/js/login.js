const parallaxList = document.querySelectorAll('.parallax__item');
const fromLogin = document.forms.formLogin;
const labelLogin = document.getElementById('labelLogin');
const labelPassword = document.getElementById('labelPassword');

document.onmousemove = (e)=>{

    parallaxList.forEach(leyer => {

        let speed = leyer.getAttribute('data-show')
        gsap.to(leyer, {
            x: e.clientX * speed / 2000, 
            y: e.clientY * speed / 2000,
        }, {duration: .2});
    })
}

fromLogin.elements.btnLogin.onclick = (e)=>{
    if(fromLogin.elements.login.value == '' ){

        e.preventDefault();

        fromLogin.elements.login.style.boxShadow = '0 0 10px red';
        labelLogin.style.color = 'red';
    }

    if(fromLogin.elements.password.value == ''){
        e.preventDefault();

        fromLogin.elements.password.style.boxShadow = '0 0 10px red';
        labelPassword.style.color = 'red';
    }
}

fromLogin.elements.login.oninput = (e)=>{
    fromLogin.elements.login.style.boxShadow = 'none';
    labelLogin.style.color = 'black';
}

fromLogin.elements.password.oninput = (e)=>{
    fromLogin.elements.password.style.boxShadow = 'none';
    labelPassword.style.color = 'black';
}
