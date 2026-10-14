const PH="213793041789",MAIL="idealhmpiscine@gmail.com";
const nav=[["/","Accueil"],["/piscines","Piscines"],["/services","Hydraulique & Services"],["/realisations","Réalisations"]];
const page=location.pathname.replace(/\/$/,"").replace(/\.html$/,"")||"/";
document.body.insertAdjacentHTML("afterbegin",`<header><div class="wrap nav"><a href="/"><img src="/assets/logo.jpg" alt="Ideal HM Piscine"></a>
<button class="burger" aria-label="Menu" onclick="document.querySelector('.links').classList.toggle('open')">☰</button>
<nav class="links">${nav.map(([h,t])=>`<a href="${h}" class="${h===page?"on":""}">${t}</a>`).join("")}<a href="/contact" class="btn btn-b">Devis gratuit</a></nav></div></header>`);
document.body.insertAdjacentHTML("beforeend",`<footer><div class="wrap"><div class="grid"><div><img class="lg" src="/assets/logo.jpg" alt="Ideal HM Piscine">
<p>Votre oasis, notre expertise. Construction de piscines, travaux hydrauliques et bâtiment à Alger.</p></div>
<div><h4>Navigation</h4>${nav.map(([h,t])=>`<a href="${h}">${t}</a>`).join("")}<a href="/contact">Contact</a></div>
<div><h4>Contact</h4><a href="tel:+213793041789">0793 04 17 89</a><a href="tel:+213778330153">0778 33 01 53</a><a href="tel:+213541953546">0541 95 35 46</a><a href="mailto:${MAIL}">${MAIL}</a><span>Alger, Kouba</span></div></div>
<div class="copy">© ${new Date().getFullYear()} IDEAL HM PISCINE — RC 16/00-1243500 B 25 — NIF 0025161243500</div></div></footer>
<a class="wa" href="https://wa.me/${PH}?text=Bonjour, je souhaite un devis." target="_blank" rel="noopener" aria-label="WhatsApp">💬</a>`);
const io=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add("in")),{threshold:.12});
document.querySelectorAll(".rv").forEach(el=>io.observe(el));
const f=document.getElementById("devis");
if(f)f.addEventListener("submit",e=>{e.preventDefault();const d=Object.fromEntries(new FormData(f));
const m=`Bonjour IDEAL HM PISCINE,%0ANom: ${d.nom}%0ATéléphone: ${d.tel}%0AService: ${d.service}%0ALocalisation: ${d.ville}%0A${encodeURIComponent(d.msg||"")}`;
window.open(`https://wa.me/${PH}?text=${m}`,"_blank")});
