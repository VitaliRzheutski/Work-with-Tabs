window.addEventListener('DOMContentLoaded',function(){

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'); //накидываем обработчики событий
    let info = document.querySelector('.info-header');
    let tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a){
        for(let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');//скроем все элементы
            tabContent[i].classList.add('hide');//скроем элементы
            

        }
            
    }
    hideTabContent(1);//перва будет видна


    function showTabContent(b){
        if(tabContent[b].classList.contains('hide')){ //проверем действительно ли контент скрыт
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
    info.addEventListener('click',function(event){ //event так как будем сравнивать с тем куда будем кликать
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')){ //должны проверить что кликаем на нужное нам место
            for(let i = 0; i < tab.length;i++){
                if(target == tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
});