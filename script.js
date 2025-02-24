// https://preview.themeforest.net/item/royal-bakery-cakery-bakery-html-template/full_screen_preview/16256958?_ga=2.200980334.1935259582.1731497152-392077757.1726656111&_gac=1.89293545.1731497152.CjwKCAiAudG5BhAREiwAWMlSjEtghagiCYQ-29GdjNFpJzCQrhc0IWFVtKfAVUSO0mdvdystsc4jKBoCJGYQAvD_BwE

// for sticky header

let header_target = document.querySelector(".header_target")
let fixed_up = document.querySelector(".fixed_up")
window.addEventListener("scroll",()=>{

   if (window.scrollY > 200 && window.scrollY < 600) {
      header_target.classList.add("sticky_before")
   }
   else if(window.scrollY > 600){
      header_target.classList.add("sticky")
      fixed_up.classList.add("block")
   }
   else{
      header_target.classList.remove("sticky")
      header_target.classList.remove("sticky_before")
      fixed_up.classList.remove("block")  
   }
})


// for search bar

document.getElementById("search_label").addEventListener("click",()=>{
     let searchinput = document.getElementById("search");
     searchinput.classList.toggle("search_block")
});

// header nav bar responsive js

document.querySelector(".bar").addEventListener("click",()=>{
   let nav_bar = document.querySelector(".nav_bar");
   nav_bar.classList.toggle("nav_bar_2")
});

// section one slider banner

$('.sec_1_slider').slick({
   dots: false,
   infinite: true,
   speed: 300,
   autoplay: false,
   slidesToShow: 1,
   slidesToScroll: 1,
 });

// section 6 slider


$('.sec_6_slider').slick({
   dots: false,
   infinite: true,
   speed: 300,
   autoplay: true,
   slidesToShow: 1,
   slidesToScroll: 1,
 });


 // inner html content change js

document.getElementById("cake_festival").addEventListener("click",()=>{
   document.getElementById("cake_change").innerHTML = "Cake Festival"
})
document.getElementById("softcakes").addEventListener("click",()=>{
   document.getElementById("cake_change").innerHTML = "softcakes"
})
document.getElementById("cupcakes").addEventListener("click",()=>{
   document.getElementById("cake_change").innerHTML = "cupcakes"
})
document.getElementById("berrycakes").addEventListener("click",()=>{
   document.getElementById("cake_change").innerHTML = "berrycakes"
})
document.getElementById("nutcake").addEventListener("click",()=>{
   document.getElementById("cake_change").innerHTML = "nutcake"
})

// for submenu responsive

let sub_open = document.querySelectorAll(".sub_open");
sub_open.forEach((item,index) => {
   item.addEventListener("click",()=>{
      let sub_menu_div = document.querySelectorAll(".submenu_nav");
      let sub_menu = document.querySelectorAll(".submenu");
      sub_menu[index].classList.toggle("open_header_submenu")
      sub_menu_div[index].classList.toggle("open_header_submenu")
   })
});

// pop up

let popup_btn = document.querySelectorAll(".popup_btn");
let pop_close = document.querySelector(".pop_close");
let popup_main = document.querySelector(".popup_main");

popup_btn.forEach((item) => {
  item.addEventListener("click", function(){
     console.log("bvhdfkh");
     popup_main.classList.add("popup_block");
    });
});

pop_close.addEventListener("click", function(){
  popup_main.classList.remove("popup_block");   // for remove input block
});










