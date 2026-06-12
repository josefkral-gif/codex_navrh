const sectors=[
  {title:'Průmysl',text:'Dodáváme průmyslová řešení pro výrobní podniky od ocelových konstrukcí po komplexní technologické celky.',tags:['Svařované konstrukce','Tlakové nádoby','Potrubní systémy','Montáže']},
  {title:'Obce a města',text:'Navrhujeme technologie pro vodohospodářství, komunální infrastrukturu a veřejný sektor.',tags:['Technologie ČOV','Vzduchotechnika','Infrastruktura','Servis']},
  {title:'Zakázková výroba',text:'Realizujeme individuální zakázky na míru od kusové výroby po speciální konstrukce.',tags:['Kovovýroba','Malosérie','Přípravky','Rekonstrukce']}
];
const services=[
  ['Svařované konstrukce','Zakázková výroba ocelových konstrukcí','service-1.png'],['Tlakové nádoby','Výroba tlakových celků pro průmysl','service-2.png'],['Vzduchotechnika','Kompletní VZT systémy na klíč','service-3.png'],['Technologie ČOV','Čistírny odpadních vod na klíč','service-4.png'],['Opravy a údržba','Servisní smlouvy a havarijní zásahy','service-5.png'],['Elektromontáže','Průmyslové elektroinstalace na klíč','service-6.png']
];
const steps=[['Konzultace','Zhodnotíme technickou proveditelnost a navrhneme optimální řešení.'],['Návrh a projekce','Zpracujeme dokumentaci, výrobní výkresy a specifikace.'],['Výroba','Realizujeme výrobu ve vlastních dílnách s důrazem na kvalitu.'],['Montáž a dodání','Zajistíme dopravu, montáž, zkoušky a uvedení do provozu.'],['Servis a údržba','Poskytujeme záruční i pozáruční servis a technickou podporu.']];
document.querySelector('#sector-grid').innerHTML=sectors.map((s,i)=>`<article class="sector-card"><span class="number">0${i+1}</span><h3>${s.title}</h3><p>${s.text}</p><div class="tags">${s.tags.map(t=>`<span>${t}</span>`).join('')}</div></article>`).join('');
document.querySelector('#service-grid').innerHTML=services.map(s=>`<article class="service-card"><img src="assets/${s[2]}" alt="${s[0]}" loading="lazy"><div class="service-overlay"><h3>${s[0]}</h3><p>${s[1]}</p></div></article>`).join('');
document.querySelector('#process-grid').innerHTML=steps.map((s,i)=>`<article class="process-card"><span class="number">0${i+1}</span><h3>${s[0]}</h3><p>${s[1]}</p></article>`).join('');
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});nav.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')});
document.querySelector('#contact-form').addEventListener('submit',event=>{event.preventDefault();event.currentTarget.querySelector('.form-status').textContent='Formulář je připraven k napojení na váš e-mail nebo API.'});
