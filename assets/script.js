document.querySelector(".burger").addEventListener("click",e=>{const o=document.querySelector(".links").classList.toggle("open");e.currentTarget.setAttribute("aria-expanded",o)});
const io=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add("in")),{threshold:.12});document.querySelectorAll(".rv").forEach(el=>io.observe(el));
const f=document.getElementById("devis");
if(f){const msg=()=>{const d=Object.fromEntries(new FormData(f));return `Bonjour IDEAL HM PISCINE,\nNom: ${d.nom}\nTéléphone: ${d.tel}\nService: ${d.service}\nLocalisation: ${d.ville}\n${d.msg||""}`};
f.addEventListener("submit",e=>{e.preventDefault();window.open("https://wa.me/213793041789?text="+encodeURIComponent(msg()),"_blank")});
document.getElementById("mailbtn").addEventListener("click",()=>{if(!f.reportValidity())return;location.href="mailto:idealhmpiscine@gmail.com?subject="+encodeURIComponent("Demande de devis")+"&body="+encodeURIComponent(msg())});
const q=new URLSearchParams(location.search).get("s");if(q)f.msg.value="Je souhaite un devis pour : "+q}
