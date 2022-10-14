'use strict'

gsap.registerPlugin(ScrollTrigger);

let detect = new MobileDetect(window.navigator.userAgent);

const sectionCategory = document.querySelector('.jsSectionCategory');
const listCategory    = document.querySelector('.side-panel__list');
const inputForm       = document.querySelector('.side-panel__form-input');
const btnForm         = document.querySelector('.side-panel__form-btn');
const menu            = document.querySelector('.menu');

//Анимация для кнопок меню (для PC и Mobile)
if(detect.mobile() != null){

    menu.addEventListener('pointerdown', function(event){
        if(event.target.closest('.menu__item')){

            gsap.to(event.target.closest('.menu__item'), {
                duration: .2,
                color: '#cdcdcd',
                ease: 'power4.out(1)',
            });
        };
    });

     menu.addEventListener('pointerup', function(event){
        if(event.target.closest('.menu__item')){

            gsap.to(event.target.closest('.menu__item'), {
                duration: .2,
                color: '#000',
                ease: 'power4.out(1)',
            });
        };
    });
} 
else{

    for (const item of menu.children) {
        item.appendChild(newSpan());
    }

    menu.addEventListener('pointerover', function(event){
        if(event.target.closest('.menu__item')){

            let item = event.target.closest('.menu__item');

            gsap.to(item, {
                duration: .1,
                color: '#cdcdcd',
                ease: 'power4.out(1)',
            });

            gsap.to(item.children[0], {
                duration: 1,
                scaleX: '1',
                transformOrigin: 'left',
                ease: 'power4.out(1)',
            });
        };
    })

     menu.addEventListener('pointerout', function(event){
        if(event.target.closest('.menu__item')){

            let item = event.target.closest('.menu__item');

            gsap.to(item.children[0], {
                duration: 1,
                transformOrigin: 'right',
                scaleX: '0',
                ease: 'power4.out(1)',
            });

            gsap.to(item, {
                duration: .1,
                color: '#000',
                ease: 'power4.out(1)',
            });
        };
    })
}

//Анимация для кнопки формы
btnForm.addEventListener('click', function(){
    gsap.to(btnForm, {duration: .5, backgroundSize: '0', backgroundPosition: 'top right'});

    inputForm.value = '';
});

btnForm.addEventListener('pointerout', function(){
    gsap.to(btnForm, {duration: .5, backgroundSize: '80%', backgroundPosition: 'center center'});
});

btnForm.addEventListener('pointerover', function(){
    gsap.to(btnForm, {duration: .5, backgroundSize: '50%', backgroundPosition: 'center center'});
});

//Анимация иконки списка и выпадающего меню в разделе "Категории"
listCategory.addEventListener('click', function(event){
    

    if(event.target.closest('.side-panel__list-item')){

        let item         = event.target.closest('.side-panel__list-item');
        let itemChildren = item.children[1].children.length; //Количества дочерных элементов у дочернего элемента
        let itemWidth    = item.children[1].children[0].offsetWidth; //Высота дочернего элемента
        
        if(item.classList.contains('side-panel__list-item--no-active')){
           
            item.classList.add('side-panel__list-item--active');

            item.classList.remove('side-panel__list-item--no-active');

            gsap.to(item, {
                duration: .7,
                marginBottom: itemWidth * itemChildren,
            });

            if(item.children[1]){
                gsap.to(item.children[1], {
                    duration: .7, 
                    opacity: 1, 
                    y: 35,
                    delay: .2,
                })

                let count = 0;

                gsap.to(item.children[1].children[0], {
                    duration: 2,
                    y: 8,
                    ease: 'power4.out(1)',
                });  
              
                for (let i = 1; i < itemChildren; i++) {
                    gsap.to(item.children[1].children[i], {
                        duration: 2,
                        delay: .5,
                        y:8 + (count += 30) ,
                        ease: 'power4.out(1)',
                    });  
                }
            }  
        }
        else{

            item.classList.remove('side-panel__list-item--active');

            item.classList.add('side-panel__list-item--no-active');

             if(item.children[1]){
                gsap.to(item.children[1], {
                    duration: 2, 
                    opacity: 0, 
                    y: 10,
                })

                gsap.to(item.children[1].children, {
                    duration: 2,
                    y: 0,
                    ease: 'power4.out(1)',
                });  
            }  
           
            gsap.to(item, {
                duration: .7,
                marginBottom: 0,
                delay: .2,
            })
        }
    }
});

function newSpan(){
    let span = document.createElement('span');

    gsap.to(span, {
        height: '1px',
        width: '100%',
        position: 'absolute',
        top: 30,
        left: 0,
        scaleX: '0',
        transformOrigin: 'right',
        backgroundColor: '#A4A0A0',
    });

    return span;
}