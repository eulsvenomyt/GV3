/*==============================
 GV3 Optimizer
 app.js
==============================*/

// Navbar muda ao rolar
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.style.background = "rgba(12,12,18,.95)";
        navbar.style.boxShadow = "0 10px 40px rgba(0,0,0,.35)";
        navbar.style.border = "1px solid rgba(138,46,255,.35)";

    } else {

        navbar.style.background = "rgba(18,16,24,.70)";
        navbar.style.boxShadow = "none";
        navbar.style.border = "1px solid rgba(255,255,255,.08)";

    }

});


/*==============================
 Fade ao aparecer
==============================*/

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll(".card,.about-box,.time-card,.faq-box,.stats div,.numbers div")
.forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});


/*==============================
 Contador Animado
==============================*/

function counter(el){

    const target=parseInt(el.innerText);

    if(isNaN(target)) return;

    let current=0;

    const speed=Math.max(5,target/120);

    const timer=setInterval(()=>{

        current+=speed;

        if(current>=target){

            current=target;

            clearInterval(timer);

        }

        el.innerText=Math.floor(current);

    },15);

}

document.querySelectorAll(".numbers h1").forEach(counter);


/*==============================
 FAQ
==============================*/

document.querySelectorAll(".faq-box").forEach(box=>{

box.addEventListener("click",()=>{

box.classList.toggle("active");

});

});


/*==============================
 Glow Botões
==============================*/

document.querySelectorAll(".btn-purple,.download").forEach(btn=>{

btn.addEventListener("mousemove",(e)=>{

const rect=btn.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

btn.style.background=

`radial-gradient(circle at ${x}px ${y}px,
rgba(190,120,255,.95),
#8a2eff 40%,
#6418ff 100%)`;

});

btn.addEventListener("mouseleave",()=>{

btn.style.background=
"linear-gradient(135deg,#8a2eff,#6418ff)";

});

});


/*==============================
 Hero Floating
==============================*/

const hero=document.querySelector(".hero-image img");

if(hero){

let pos=0;

setInterval(()=>{

pos+=0.02;

hero.style.transform=

`translateY(${Math.sin(pos)*12}px)`;

},16);

}


/*==============================
 Partículas simples
==============================*/

const bg=document.querySelector(".background");

for(let i=0;i<30;i++){

let p=document.createElement("span");

p.style.position="absolute";

p.style.width=Math.random()*5+2+"px";

p.style.height=p.style.width;

p.style.borderRadius="50%";

p.style.background="rgba(170,100,255,.4)";

p.style.left=Math.random()*100+"%";

p.style.top=Math.random()*100+"%";

p.style.animation=

`particle ${Math.random()*8+8}s linear infinite`;

bg.appendChild(p);

}
