let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
var count=0;
menu.onclick=()=>{
   
    if(count%2==0){
        menu.classList.toggle('bx-x');
        navbar.classList.add("open");
        count++;
    }else{
        menu.classList.remove("bx-x");
        navbar.classList.remove("open");
        count++;
    }
}