// shared section builders: each template supplies wrappers via CSS
window.S={
 nav:(cls)=>D.nav.map(n=>`<a href="#${n[0]}" class="${cls||''}">${n[1+L()]}</a>`).join(''),
 lang:()=>`<div class="lang" role="group" aria-label="Language"><button data-l="0" aria-pressed="${!L()}">KZ</button><button data-l="1" aria-pressed="${!!L()}">RU</button></div>`,
 title:id=>D.nav.find(n=>n[0]==id)[1+L()],
 feats:()=>(L()?D.t.fru:D.t.f).map((f,i)=>`<li><span class="fi">${['🗣️','🎒','🎨','🍲','⭐','🧩'][i%6]}</span><b>${f[0]}</b><span>${f[1]}</span></li>`).join(''),
 groups:()=>D.groups.map((g,i)=>`<li style="--c:${g[3]}"><span class="ge">${g[4]}</span><b>«${g[L()]}»</b><span>${D.gtype[i][L()]}${g[2]?` · ${g[2]} ${T('age')}`:''}</span></li>`).join(''),
 staff:()=>D.staff.map(s=>`<li><span class="av">${s[L()].split(' ').map(w=>w[0]).join('')}</span><b>${s[L()]}</b><span>${s[2+L()]}</span></li>`).join(''),
 news:()=>D.news.map(n=>`<article><img src="${n[5]}" alt="" loading="lazy"><div><time>${fmtDate(n[0])}</time><h3>${n[1+L()]}</h3><p>${n[3+L()]}</p></div></article>`).join(''),
 docs:()=>D.docs.map(d=>`<li><a href="#docs" onclick="return false">📄 ${d[L()]}</a><small>PDF</small></li>`).join(''),
 sym:()=>D.t.sym.map((s,i)=>`<li>${['<svg viewBox="0 0 60 30"><rect width="60" height="30" fill="#00afca"/><circle cx="30" cy="14" r="6" fill="#fec50c"/></svg>','<svg viewBox="0 0 60 60"><circle cx="30" cy="30" r="27" fill="#00afca" stroke="#fec50c" stroke-width="4"/><circle cx="30" cy="30" r="10" fill="#fec50c"/></svg>','<svg viewBox="0 0 60 60"><text x="30" y="42" font-size="34" text-anchor="middle">🎼</text></svg>'][i]}<b>${s[L()]}</b></li>`).join(''),
 contacts:()=>`<dl><dt>${T('addr')}</dt><dd>${T('loc')}</dd><dt>${T('phone')}</dt><dd><a href="tel:${D.contact.tel}">${D.contact.phone}</a></dd><dt>${T('mail')}</dt><dd><a href="mailto:${D.contact.mail}">${D.contact.mail}</a></dd></dl><p>${T('hours')}</p>`,
 i18n:()=>document.querySelectorAll('[data-t]').forEach(e=>e.textContent=T(e.dataset.t))
};
document.addEventListener('click',e=>{const b=e.target.closest('.lang button');if(b)setLang(+b.dataset.l)});
document.documentElement.lang=L()?'ru':'kk';
