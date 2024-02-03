const mobile_nav=document.querySelector(".mobile-icon");
const nav_header=document.querySelector(".header");
const toggle=()=>{
    // alert(" just clicked");
    nav_header.classList.toggle("active");

}
mobile_nav.addEventListener('click',()=>toggle());