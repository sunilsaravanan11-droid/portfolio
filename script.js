// Scroll reveal
const sections=document.querySelectorAll('.reveal');
const reveal=()=>{
 const trigger=window.innerHeight*0.85;
 sections.forEach(sec=>{
  if(sec.getBoundingClientRect().top<trigger){
    sec.classList.add('active');
  }
 });
};
window.addEventListener('scroll',reveal);
reveal();

// Theme toggle
const toggle=document.getElementById('themeToggle');
toggle.addEventListener('click',()=>{
 document.body.classList.toggle('dark');
 toggle.textContent=document.body.classList.contains('dark')?'🌙':'☀️';
});
