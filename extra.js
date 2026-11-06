// Extra blocks: topbar, hero CTA+stats, prices, clubs, excursion form, docs viewer, map, lightbox
(function(){
const X=window.DX=Object.assign({
 wa:"77000000000",
 hours:["Дс–Жм 7:30–19:00","Пн–Пт 7:30–19:00"],
 stats:[["7:30–19:00","жұмыс уақыты","режим работы"],["ҚАЗ · РУС","оқыту тілдері","языки обучения"],["4×","күніне ыстық ас","горячее питание в день"]],
 price:{sum:["айына 45 000 ₸ бастап","от 45 000 ₸ в месяц"],inc:[["Күніне 4 рет тамақ","4-разовое питание"],["Тәрбиеші мен көмекші","Воспитатель и помощник"],["Мектепке дайындық","Подготовка к школе"],["Медбике бақылауы","Наблюдение медсестры"],["Ағылшын және музыка","Английский и музыка"]],note:["Мемлекеттік тапсырыс бойынша орын бар: ата-ана тек тамақ ақысын төлейді. Толығырақ — телефон арқылы.","Есть места по госзаказу: родители оплачивают только питание. Подробности — по телефону."]},
 clubs:[["speech","Логопед","Логопед"],["abc","Ағылшын тілі","Английский язык"],["dance","Би","Танцы"],["art","Сурет (ИЗО)","Рисование (ИЗО)"],["music","Музыка","Музыка"],["sport","Спорт","Спорт"],["chess","Шахмат","Шахматы"],["psy","Психолог","Психолог"]],
 docs:[["lic","Лицензия / хабарлама","Лицензия / уведомление","docs/license.pdf"],["ustav","Жарғы","Устав","docs/ustav.pdf"],["att","Аттестация","Аттестация","docs/attestation.pdf"],["menu","Ас мәзірі","Меню питания","docs/menu.pdf"],["rules","Қабылдау ережесі","Правила приёма","docs/rules.pdf"],["rep","Есептер","Отчёты","docs/reports.pdf"]],
 map:{lat:51.128,lon:71.430,city:"astana"},
 t:{
  join:["Жазылу","Записаться"],call:["Қоңырау","Позвонить"],
  priceT:["Бағалар","Цены"],inc:["Бағаға кіреді","Что входит"],
  clubsT:["Үйірмелер","Кружки"],
  excT:["Экскурсияға жазылу","Записаться на экскурсию"],excL:["Балабақшаны өз көзіңізбен көріңіз. Өтінім қалдырыңыз — WhatsApp арқылы хабарласамыз.","Посмотрите сад своими глазами. Оставьте заявку — свяжемся в WhatsApp."],
  fName:["Атыңыз","Ваше имя"],fPhone:["Телефон","Телефон"],fAge:["Баланың жасы","Возраст ребёнка"],fCom:["Пікір (міндетті емес)","Комментарий (необязательно)"],fSend:["WhatsApp арқылы жіберу","Отправить в WhatsApp"],
  msg:["Сәлеметсіз бе! Экскурсияға жазылғым келеді.","Здравствуйте! Хочу записаться на экскурсию."],mName:["Аты","Имя"],mAge:["Баланың жасы","Возраст ребёнка"],mCom:["Пікір","Комментарий"],
  docsT:["Құжаттар","Документы"],open:["Ашу","Открыть"],dl:["Жүктеу","Скачать"],
  mapT:["Картада","На карте"],route:["2GIS-те маршрут","Маршрут в 2GIS"],close:["Жабу","Закрыть"]
 }},window.DX||{});
const l=()=>window.L?L():0, t=k=>X.t[k][l()];
const P={speech:'<path d="M4 5h16v10H9l-5 4z"/><path d="M8 9h8M8 12h5"/>',abc:'<path d="M4 19 9 5l5 14M6 14h6"/><path d="M15 9h3a2 2 0 0 1 0 4h-3v6h3.5a2.5 2.5 0 0 0 0-5"/>',dance:'<circle cx="12" cy="4.5" r="2"/><path d="M12 7v6l-4 7M12 13l4 7M7 9l5-1 5 3"/>',art:'<path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 2-2s-1-1.5-1-2.5S14 15 15 15h2a4 4 0 0 0 4-4c0-4.4-4-8-9-8z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/>',music:'<path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/>',sport:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',chess:'<path d="M8 21h8M9 18h6l-1-6h-4zM10 12V9h4v3M12 3v4M10 5h4"/>',psy:'<path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',lang:'<path d="M4 5h9M8.5 3v2M6 5c1 4 4 7 7 8M11 5c-1 4-4 7-7 8"/><path d="m13 21 4-9 4 9M14.5 18h5"/>',food:'<path d="M3 12h18a9 9 0 0 1-18 0zM7 3v5M12 3v5M17 3v5"/>',phone:'<path d="M5 3h4l2 5-3 2a11 11 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2z"/>',mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',doc:'<path d="M6 2h9l5 5v15H6z"/><path d="M14 2v6h6M9 13h8M9 17h6"/>',check:'<path d="m5 12 4 4 10-10"/>'};
const I=(k)=>`<svg class="xi" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[k]||P.doc}</svg>`;
const wa=()=>'https://wa.me/'+X.wa, tel=()=>'tel:+'+(D.contact.tel||'').replace(/\D/g,'');
window.XB={
 top:()=>`<div class="xtop"><div class="xw"><a href="${tel()}">${I('phone')}<span>${D.contact.phone}</span></a><a href="mailto:${D.contact.mail}" class="xm">${I('mail')}<span>${D.contact.mail}</span></a>${D.contact.ig?`<a href="${D.contact.ig}" target="_blank" rel="noopener" class="xig" aria-label="Instagram" title="Instagram"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>`:''}<span class="xh">${I('clock')}<span>${X.hours[l()]}</span></span></div></div>`,
 cta:()=>`<div class="xcta"><a class="xb xb1" href="#excursion">${t('join')}</a><a class="xb xb2" href="${tel()}">${I('phone')}${t('call')}</a></div><ul class="xstats">${X.stats.map((s,i)=>`<li>${I(['clock','lang','food'][i])}<b>${Array.isArray(s[0])?s[0][l()]:s[0]}</b><span>${s[1+l()]}</span></li>`).join('')}</ul>`,
 price:()=>`<div class="xprice"><div class="xpc"><b class="xps">${X.price.sum[l()]}</b><h3>${t('inc')}</h3><ul>${X.price.inc.map(i=>`<li>${I('check')}${i[l()]}</li>`).join('')}</ul><a class="xb xb1" href="#excursion">${t('join')}</a></div><p class="xpn">${X.price.note[l()]}</p></div>`,
 clubs:()=>`<ul class="xclubs">${X.clubs.map(c=>`<li>${I(c[0])}<b>${c[1+l()]}</b></li>`).join('')}</ul>`,
 exc:()=>`<form class="xform" id="xform"><p>${t('excL')}</p><label>${t('fName')}<input name="n" required autocomplete="name"></label><label>${t('fPhone')}<input name="p" type="tel" required inputmode="tel" placeholder="+7 7__ ___ __ __" autocomplete="tel"></label><label>${t('fAge')}<select name="a">${['1–2','2–3','3–4','4–5','5–6'].map(a=>`<option>${a}</option>`).join('')}</select></label><label class="xfull">${t('fCom')}<textarea name="c" rows="2"></textarea></label><button class="xb xb1 xfull">${t('fSend')}</button></form>`,
 docs:()=>`<ul class="xdocs">${X.docs.map((d,i)=>`<li><button type="button" data-doc="${i}">${I('doc')}<b>${d[1+l()]}</b><small>PDF · ${t('open')}</small></button></li>`).join('')}</ul>`,
 map:()=>{const o={pos:{lat:X.map.lat,lon:X.map.lon,zoom:16},opt:{city:X.map.city},org:X.map.org||""};return `<div class="xmap"><a class="xmapimg" target="_blank" rel="noopener" href="${X.map.link||`https://2gis.kz/${X.map.city}/geo/${X.map.lon},${X.map.lat}`}" aria-label="2GIS"><img loading="lazy" alt="2GIS" src="https://static.maps.2gis.com/1.0?s=780x520&c=${X.map.lat},${X.map.lon}&z=16&pt=${X.map.lat},${X.map.lon}~k:p~c:rd"></a><a class="xb xb2" target="_blank" rel="noopener" href="${X.map.link||`https://2gis.kz/${X.map.city}/geo/${X.map.lon},${X.map.lat}`}">${t('route')}</a></div>`},
 fill:()=>{const s=(id,f)=>{const e=document.getElementById(id);if(e)e.innerHTML=f()};s('xtop',XB.top);s('xcta',XB.cta);s('xprice',XB.price);s('xclubs',XB.clubs);s('xexc',XB.exc);s('xdocs',XB.docs);s('xmap',XB.map);document.querySelectorAll('[data-x]').forEach(e=>e.textContent=t(e.dataset.x));document.querySelectorAll('.xjoin').forEach(e=>e.textContent=t('join'))}
};
// modal (lightbox + pdf)
const M=document.createElement('div');M.className='xmod';M.hidden=true;M.innerHTML='<button class="xx" aria-label="close">×</button><button class="xp" aria-label="prev">‹</button><div class="xbody"></div><button class="xn" aria-label="next">›</button>';document.body.appendChild(M);
let G=[],gi=0;const body=M.querySelector('.xbody');
const show=()=>{body.innerHTML=`<img src="${G[gi]}" alt=""><span class="xc">${gi+1} / ${G.length}</span>`};
const open=()=>{M.hidden=false;document.body.style.overflow='hidden'},close=()=>{M.hidden=true;M.classList.remove('pdf');body.innerHTML='';document.body.style.overflow=''};
const step=d=>{if(M.classList.contains('pdf'))return;gi=(gi+d+G.length)%G.length;show()};
M.querySelector('.xx').onclick=close;M.querySelector('.xp').onclick=()=>step(-1);M.querySelector('.xn').onclick=()=>step(1);
M.addEventListener('click',e=>{if(e.target===M||e.target===body)close()});
addEventListener('keydown',e=>{if(M.hidden)return;if(e.key=='Escape')close();if(e.key=='ArrowLeft')step(-1);if(e.key=='ArrowRight')step(1)});
let sx=null;M.addEventListener('touchstart',e=>sx=e.touches[0].clientX,{passive:true});M.addEventListener('touchend',e=>{if(sx==null)return;const d=e.changedTouches[0].clientX-sx;if(Math.abs(d)>40)step(d<0?1:-1);sx=null});
document.addEventListener('click',e=>{
 const im=e.target.closest('.xgal img');
 if(im){const g=[...im.closest('.xgal').querySelectorAll('img')];G=g.map(i=>i.currentSrc||i.src);gi=g.indexOf(im);M.classList.remove('pdf');show();open();return}
 const d=e.target.closest('[data-doc]');
 if(d){const x=X.docs[+d.dataset.doc];M.classList.add('pdf');body.innerHTML=`<div class="xpdf"><div class="xpdfh"><b>${x[1+l()]}</b><a href="${x[3]}" target="_blank" rel="noopener">${t('open')} ↗</a><a href="${x[3]}" download>${t('dl')}</a></div><iframe src="${x[3]}#view=FitH" title="PDF"></iframe></div>`;open()}
});
document.addEventListener('submit',e=>{if(e.target.id!='xform')return;e.preventDefault();const f=new FormData(e.target);const m=[t('msg'),`${t('mName')}: ${f.get('n')}`,`${t('fPhone')}: ${f.get('p')}`,`${t('mAge')}: ${f.get('a')}`];if(f.get('c'))m.push(`${t('mCom')}: ${f.get('c')}`);window.open(wa()+'?text='+encodeURIComponent(m.join('\n')),'_blank')});
})();
