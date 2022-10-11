'use strict'

gsap.registerPlugin(ScrollTrigger);

const sectionCategory = document.querySelector('.jsSectionCategory');
const listCategory    = document.querySelector('.side-panel__list');

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
                    y: 40,
                    delay: .2,
                })
            }  
        }
        else{

            item.classList.remove('side-panel__list-item--active');

            item.classList.add('side-panel__list-item--no-active');

             if(item.children[1]){
                gsap.to(item.children[1], {
                    duration: .7, 
                    opacity: 0, 
                    y: 0,
                })
            }  
           
            gsap.to(item, {
                duration: .7,
                marginBottom: 0,
                delay: .2,
            })
        }
    }
});