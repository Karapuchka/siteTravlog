'use strict'

gsap.registerPlugin(ScrollTrigger);

let detect = new MobileDetect(window.navigator.userAgent);

const linksIconArticle = document.querySelector('.article__links');
const sectionCategory  = document.querySelector('.jsSectionCategory');
const headerContent    = document.querySelector('.header-content');
const articleArrow     = document.querySelector('.article__arrow');
const listCategory     = document.querySelector('.side-panel__list');
const listFooter       = document.querySelector('.footer__list');
const inputForm        = document.querySelector('.side-panel__form-input');
const btnForm          = document.querySelector('.side-panel__form-btn');
const menu             = document.querySelector('.menu');


if(window.innerWidth <= 800){
    //Создание меню-бургер
    let burgerBtn = document.createElement('div');
    gsap.to(burgerBtn, {
        width: '50px',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '20px',        
    });   

    function burgerItem(marginBot){
        let burgerBtnItem = document.createElement('span');
        gsap.to(burgerBtnItem, {
            width: '100%',
            height: '3px',
            backgroundColor: '#f96060',
            marginBottom: marginBot,
        })

        return burgerBtnItem;
    }

    burgerBtn.appendChild(burgerItem('7px'));
    burgerBtn.appendChild(burgerItem('7px'));
    burgerBtn.appendChild(burgerItem('0'));

    headerContent.appendChild(burgerBtn);

    gsap.to(headerContent.children[1].children, {
        opacity: 0,
    });

    gsap.to(headerContent.children[1], {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '80px',
        width: '100%',
        backgroundColor: '#ebc0a7',
        padding: '10px 15px',
        display: 'none',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    });

    burgerBtn.addEventListener('click', function(){

        //Класс "active-burger" предназначен для проверки активности меню и не изменяет свойста объекта в DOM-дереве

        if(burgerBtn.classList.contains('active-burger')){

            burgerBtn.classList.remove('active-burger');

            gsap.to(headerContent.children[1], {
                duration: .7,
                opacity: 0,
            });

            gsap.to(headerContent.children[1].children, {
                duration: .7,
                opacity: 0,
            });

            gsap.to(headerContent.children[1], {
                display: 'none',
                top: 0,
                delay: .8,
            });

        }else{
            burgerBtn.classList.add('active-burger');

            gsap.fromTo(headerContent.children[1], {
                duration: .2,
                top: '15%',
                display: 'flex',
                opacity: 0,
                justifyContent: 'space-around',
                flexWrap: 'wrap',
            },
            {
                delay: .4,
                duration: .7,
                opacity: 1,
            });
    
            gsap.to(headerContent.children[1].children, {
                delay: 1,
                duration: .7,
                opacity: 1,
            });
        }
    });
}

if(window.innerWidth <= 650){
    console.log(true);
    gsap.to(headerContent.children[1], {
        padding: '10px 0px 10px 15px',
    });
}

//Анимация для кнопок меню (для PC и Mobile)
if(detect.mobile() != null){

    //Анимация для элементов меню
    menu.addEventListener('click', function(event){
        if(event.target.closest('.menu__item')){
            gsap.to(event.target.closest('.menu__item'), {
                duration: .2,
                color: '#cdcdcd',
                ease: 'power4.out(1)',
            });

            setTimeout(function(){
                gsap.to(event.target.closest('.menu__item'), {
                    duration: .2,
                    color: '#000',
                    ease: 'power4.out(1)',
                });
            }, 1000);
        };
    });

    //Анимация для кнопки формы
    btnForm.addEventListener('click', function(){
        gsap.to(btnForm, {
            duration: .7,
            backgroundSize: '0',
            backgroundPosition: 'top right',  
            ease: 'power4.out(2)',
        });

        inputForm.value = '';

        setTimeout(function(){
            gsap.to(btnForm, {
                duration: .7, 
                backgroundSize: '80%', 
                backgroundPosition: 'bottom left',  
                ease: 'power4.out(2)',
            });
        }, 1000);
    });

    //Анимация для иконок социальных сетей в разделе "Article";
    linksIconArticle.addEventListener('click', function(event){
        if(event.target.closest('.article__link-icon')){

            gsap.fromTo(event.target.closest('.article__link-icon'), {
                    duration: 1,
                    boxShadow: '2px 2px 3px gray',
                    ease: 'power4.out(1)',
                },
                {
                    duration: .7,
                    delay: 1,
                    boxShadow: 'none',
                    ease: 'power4.out(1)',
                }
            );
        }
    });

    //Анимация для стрелки "Продолжить чтение"
    articleArrow.addEventListener('click', function(event){
        if(event.target.closest('.article__arrow-rect') || event.target.closest('.article__arrow-text')){
            gsap.to('.article__arrow-rect', {
                duration: .7,
                transformOrigin: 'left',
                scaleX: 1.3,
                ease: 'power4.out(1)',
            });

            setTimeout(function(){
                gsap.to('.article__arrow-rect', {
                    duration: .7,
                    ease: 'power4.out(1)',
                    scaleX: 1,
                });
            }, 1500);
        }
    });

    //Анимация для списка иконов в footer
    listFooter.addEventListener('click', function(event){
        if(event.target.closest('.footer__list-icon')){
            gsap.to(event.target.closest('.footer__list-icon'), {
                duration: .7,
                scale: 1.2,
            });

            setTimeout(function(){
                gsap.to(event.target.closest('.footer__list-icon'), {
                    duration: .7,
                    scale: 1,
                });
            }, 1500);
        }
    });
} 
else{

    //Анимация для элементов меню
    for (const item of menu.children) {
        item.appendChild(menuSpan());
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

    //Анимация для кнопки формы
    btnForm.addEventListener('click', function(){
        gsap.to(btnForm, {
            duration: .7, 
            backgroundSize: '0', 
            backgroundPosition: 'top right',
        });

        inputForm.value = '';
    });

    btnForm.addEventListener('pointerout', function(){
        gsap.to(btnForm, {
            duration: .7, 
            backgroundSize: '80%',
            backgroundPosition: 'center center',
        });
    });
    
    btnForm.addEventListener('pointerover', function(){
        gsap.to(btnForm, {
            duration: .7, 
            backgroundSize: '50%', 
            backgroundPosition: 'center center',
        });
    });

    //Анимация для иконок социальных сетей в разделе "Article";
    linksIconArticle.addEventListener('pointerover', function(event){
        if(event.target.closest('.article__link-icon')){

            gsap.to(event.target.closest('.article__link-icon'), {
                duration: 1,
                boxShadow: '2px 2px 3px gray',
                ease: 'power4.out(1)',
            });
        }
    });

    linksIconArticle.addEventListener('pointerout', function(event){
        if(event.target.closest('.article__link-icon')){

            gsap.to(event.target.closest('.article__link-icon'), {
                duration: .7,
                delay: 1,
                boxShadow: 'none',
                ease: 'power4.out(1)',
            });
        }
    });

    //Анимация для стрелки "Продолжить чтение"
    articleArrow.addEventListener('pointerover', function(event){
        if(event.target.closest('.article__arrow-rect') || event.target.closest('.article__arrow-text')){
            gsap.to('.article__arrow-rect', {
                duration: .7,
                transformOrigin: 'left',
                ease: 'power4.out(1)',
                scaleX: 1.3,
            });
        }
    });

    articleArrow.addEventListener('pointerout', function(event){
        if(event.target.closest('.article__arrow-rect') || event.target.closest('.article__arrow-text')){
            gsap.to('.article__arrow-rect', {
                duration: .7,
                ease: 'power4.out(1)',
                scaleX: 1,
            });
        }
    });

    //Анимация для списка иконов в footer
    listFooter.addEventListener('pointerover', function(event){
        if(event.target.closest('.footer__list-icon')){
            gsap.to(event.target.closest('.footer__list-icon'), {
                duration: .7,
                scale: 1.2,
            });
        }
    });

    listFooter.addEventListener('pointerout', function(event){
        if(event.target.closest('.footer__list-icon')){
            gsap.to(event.target.closest('.footer__list-icon'), {
                duration: .7,
                scale: 1,
            });
        }
    });
}

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

function menuSpan(){
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