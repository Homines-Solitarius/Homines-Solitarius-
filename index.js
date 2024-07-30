const header = document.querySelector("#header"),
      nav_btn = document.querySelector("#nav_btn"),
      nav_bar = document.querySelector("#nav_bar"),
      nav_links = document.querySelectorAll(".nav_link");
      
window.addEventListener('DOMContentLoaded', function(){
  window.addEventListener('scroll', ()=>{
    header.classList.toggle(window.scrollY > 0)
  });
});

const toggleNav = () => {
  nav_bar.classList.toggle('active');
}

nav_btn.addEventListener("click", () => {}

const person = {
  name: "Daniel"
}
console.log(person)