
function onload(){
    "use strict"

    let menu = document.querySelector(".menu")
    

    menu.addEventListener('click',()=>{
        
        if(menu.classList.contains('menu-is-open')){
            menu.classList.remove('menu-is-open');
        }else{
            menu.classList.add('menu-is-open')
        }
    })
    
}