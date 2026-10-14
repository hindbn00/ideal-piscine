const PH="213793041789",MAIL="idealhmpiscine@gmail.com";
const nav=[["/","Accueil"],["/piscines","Piscines"],["/services","Hydraulique & Services"],["/realisations","Réalisations"]];
const page=location.pathname.replace(/\/$/,"").replace(/\.html$/,"")||"/";
document.body.insertAdjacentHTML("afterbegin",`<header><div class="wrap nav"><a href="/" class="brand"><img src="/assets/mark-white.png" alt=""><span class="wm">IDEAL HM <b>PISCINE</b></span></a><button class="burger" aria-label="Menu" onclick="document.querySelector('.links').classList.toggle('open')">Menu</button><nav class="links">${nav.map(([h,t])=>`<a href="${h}" class="${h===page?"on":""}">${t}</a>`).join("")}<a href="/contact" class="btn btn-y">Devis gratuit</a></nav></div></header>`);
document.body.insertAdjacentHTML("beforeend",`<footer><div class="wrap"><div class="grid"><div><a href="/" class="brand" style="margin-bottom:16px"><img src="/assets/mark-white.png" alt=""><span class="wm">IDEAL HM <b>PISCINE</b></span></a>
<p>Votre oasis, notre expertise. Construction de piscines, travaux hydrauliques et bâtiment à Alger.</p></div>
<div><h4>Navigation</h4>${nav.map(([h,t])=>`<a href="${h}">${t}</a>`).join("")}<a href="/contact">Contact</a></div>
<div><h4>Contact</h4><a href="tel:+213793041789">0793 04 17 89</a><a href="tel:+213778330153">0778 33 01 53</a><a href="tel:+213541953546">0541 95 35 46</a><a href="mailto:${MAIL}">${MAIL}</a><span>Alger, Kouba</span></div></div>
<div class="copy">© ${new Date().getFullYear()} IDEAL HM PISCINE — RC 16/00-1243500 B 25 — NIF 0025161243500</div></div></footer>
<a class="wa" href="https://wa.me/${PH}?text=Bonjour, je souhaite un devis." target="_blank" rel="noopener" aria-label="WhatsApp"><svg width="28" height="28" viewBox="0 0 24 24" fill="#fff"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm5.2 14.2c-.2.6-1.300 1.200-1.800 1.200-.5.100-1 .2-3.300-.7-2.800-1.200-4.600-4-4.700-4.200-.1-.2-1.100-1.500-1.100-2.800s.7-2 1-2.300c.2-.3.600-.3.800-.3h.6c.2 0 .5-.1.700.5l.9 2.200c.1.200.1.400 0 .600l-.4.600-.4.500c-.2.200-.3.400-.1.700.2.300.8 1.300 1.700 2.100 1.100 1 2.100 1.300 2.400 1.500.3.100.5.100.7-.1l1-1.200c.2-.3.400-.2.700-.1l2 1c.3.100.5.200.5.400.1.100.1.700-.1 1.300z"/></svg></a>`);
const io=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add("in")),{threshold:.12});
document.querySelectorAll(".rv").forEach(el=>io.observe(el));
const f=document.getElementById("devis");
if(f)f.addEventListener("submit",e=>{e.preventDefault();const d=Object.fromEntries(new FormData(f));
const m=`Bonjour IDEAL HM PISCINE,%0ANom: ${d.nom}%0ATéléphone: ${d.tel}%0AService: ${d.service}%0ALocalisation: ${d.ville}%0A${encodeURIComponent(d.msg||"")}`;
window.open(`https://wa.me/${PH}?text=${m}`,"_blank")});
