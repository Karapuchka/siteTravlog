const parallaxList = document.querySelectorAll('.parallax__item');

document.onmousemove = (e)=>{

    parallaxList.forEach(leyer => {

        let speed = leyer.getAttribute('data-show')
        gsap.to(leyer, {
            x: e.clientX * speed / 2000, 
            y: e.clientY * speed / 2000,
        }, {duration: .2});
    })
}