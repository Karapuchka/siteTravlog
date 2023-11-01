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

    for (let i = 0; i < fromLogin.elements.length - 1; i++) {
        if(fromLogin.elements[i].value == ''){
            e.preventDefault();
            gsap.to(fromLogin.elements[i], {boxShadow: '0 0 10px red'}, {duration: .4})
            gsap.to(fromLogin.elements[i].parentNode.children[0], {color: 'red'}, {duration: .4})
        }        
    }
}

for (let i = 0; i < fromLogin.elements.length - 1; i++) {
    fromLogin.elements[i].oninput = (e)=>{
        fromLogin.elements[i].style.boxShadow = 'none';
        fromLogin.elements[i].parentNode.children[0].style.color = 'black';
    }
}