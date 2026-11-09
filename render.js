// shared section builders: each template supplies wrappers via CSS
window.S={
 nav:(cls)=>D.nav.map(n=>`<a href="#${n[0]}" class="${cls||''}">${n[1+L()]}</a>`).join(''),
 lang:()=>`<div class="lang" role="group" aria-label="Language"><button data-l="0" aria-pressed="${!L()}">KZ</button><button data-l="1" aria-pressed="${!!L()}">RU</button></div>`,
 title:id=>{const n=D.nav.find(n=>n[0]==id);return n?n[1+L()]:''},
 feats:()=>{const icons=D.ficons||['🛡️','👩‍🏫','🎓','🍲','🏠','🧩','🎨','🇰🇿'];return (L()?D.t.fru:D.t.f).map((f,i)=>`<li><span class="fi">${icons[i%icons.length]}</span><b>${f[0]}</b><span>${f[1]}</span></li>`).join('')},
 groups:()=>D.groups.map((g,i)=>`<li style="--c:${g[3]}${g[5]?`;--im:url(${g[5]})`:''}"><span class="ge">${g[4]||''}</span><b>«${g[L()]}»</b><span>${(D.gtype[i]||['',''])[L()]}${g[2]?` · ${g[2]} ${T('age')}`:''}</span></li>`).join(''),
 staff:()=>D.staff.map(s=>`<li>${s[4]?`<img class="pt" src="${s[4]}" alt="${s[L()]}" loading="lazy" style="width:120px;height:150px;object-fit:cover;border-radius:20px;display:block;margin:0 auto 10px">`:`<span class="av">${s[L()].split(' ').slice(0,2).map(w=>w[0]).join('')}</span>`}<b>${s[L()]}</b><span>${s[2+L()]}</span></li>`).join(''),
 news:()=>(D.news||[]).map(n=>`<article>${n[5]?`<img src="${n[5]}" alt="" loading="lazy">`:''}<div><time>${fmtDate(n[0])}</time><h3>${n[1+L()]}</h3><p>${n[3+L()]}</p></div></article>`).join(''),
 docs:()=>(D.docs||[]).map(d=>d[2]?`<li><a href="${d[2]}" target="_blank" rel="noopener">📄 ${d[L()]}</a><small>PDF</small></li>`:`<li><a href="#docs" onclick="return false" aria-disabled="true">📄 ${d[L()]}</a><small>PDF</small></li>`).join(''),
 sym:()=>(D.t.sym||[]).map((s,i)=>`<li>${['<svg viewBox="0 0 60 30"><rect width="60" height="30" fill="#00afca"/><circle cx="30" cy="14" r="6" fill="#fec50c"/></svg>','<svg viewBox="0 0 60 60"><circle cx="30" cy="30" r="27" fill="#00afca" stroke="#fec50c" stroke-width="4"/><circle cx="30" cy="30" r="10" fill="#fec50c"/></svg>','<svg viewBox="0 0 60 60"><text x="30" y="42" font-size="34" text-anchor="middle">🎼</text></svg>'][i]||''}<b>${s[L()]}</b></li>`).join(''),
 contacts:()=>`<dl><dt>${T('addr')}</dt><dd>${T('loc')}</dd><dt>${T('phone')}</dt><dd><a href="tel:${D.contact.tel}">${D.contact.phone}</a></dd>${D.contact.watel||D.contact.wa?`<dt>${T('wa2')||'WhatsApp'}</dt><dd><a href="https://wa.me/${D.contact.watel||''}">${D.contact.wa||D.contact.phone}</a></dd>`:''}<dt>${T('mail')}</dt><dd><a href="mailto:${D.contact.mail}">${D.contact.mail}</a></dd>${D.contact.ig?`<dt>Instagram</dt><dd><a href="${String(D.contact.ig).startsWith('http')?D.contact.ig:'https://instagram.com/'+D.contact.ig}" target="_blank" rel="noopener">${String(D.contact.ig).replace(/^https?:\/\/(www\.)?instagram\.com\//,'@')}</a></dd>`:''}</dl><p>${T('hours')}</p>`,
 i18n:()=>document.querySelectorAll('[data-t]').forEach(e=>{const v=T(e.dataset.t);if(v!=null)e.textContent=v})
};
document.addEventListener('click',e=>{const b=e.target.closest('.lang button');if(b)setLang(+b.dataset.l)});
document.documentElement.lang=L()?'ru':'kk';

// CMS: data/site.json (редактируется в /admin) -> window.D + window.DX
window.applySite=J=>{const b=o=>[o&&o.kk||'',o&&(o.ru||o.kk)||''];
 if(J.texts)for(const k in J.texts)D.t[k]=b(J.texts[k]);
 if(J.nav)D.nav=J.nav.map(n=>[n.id,n.kk,n.ru||n.kk]);
 if(J.features){D.t.f=J.features.map(f=>[b(f.title)[0],b(f.text)[0]]);D.t.fru=J.features.map(f=>[b(f.title)[1],b(f.text)[1]]);D.ficons=J.features.map(f=>f.icon||'⭐')}
 if(J.symbols)D.t.sym=J.symbols.map(b);
 if(J.groups){D.groups=J.groups.map(g=>[...b(g.name),g.age||'',g.color||'#2bb3a3',g.emoji||'',g.photo||'']);D.gtype=J.groups.map(g=>b(g.type))}
 if(J.staff)D.staff=J.staff.map(s=>[...b(s.name),...b(s.role),s.photo||'']);
 if(J.docs)D.docs=J.docs.map(d=>[...b(d.name),d.file||'']);
 if(J.contact)Object.assign(D.contact,J.contact);
 D.news=(J.news||[]).slice().sort((x,y)=>String(y.date||'').localeCompare(String(x.date||''))).map(n=>[n.date,...b(n.title),...b(n.text),n.photo||'']);
 D.gallery=(J.gallery||[]).map(g=>typeof g==='string'?[g,'','']:[g.photo||'',...(b(g.caption||{}))]);
 D.teachers=(J.teachers||[]).map(t=>t.photo||t);D.hero=J.hero;D.h1=J.h1&&b(J.h1);
 // DX (extra.js)
 const X=window.DX=window.DX||{};
 if(J.wa_digits)X.wa=J.wa_digits;
 if(J.hours_short)X.hours=b(J.hours_short);
 if(J.stats)X.stats=J.stats.map(s=>[s.value,s.kk,s.ru||s.kk]);
 if(J.price){X.price=X.price||{};if(J.price.sum)X.price.sum=b(J.price.sum);if(J.price.note)X.price.note=b(J.price.note);if(J.price.inc)X.price.inc=J.price.inc.map(i=>b(i))}
 if(J.clubs)X.clubs=J.clubs.map(c=>[c.icon||'doc',...b(c.name)]);
 if(J.docs)X.docs=J.docs.map((d,i)=>{const name=b(d.name||d);return [String(i),name[0],name[1],d.file||'']});
 if(J.map)Object.assign(X.map=X.map||{},J.map);
 if(J.extra_texts){X.t=X.t||{};for(const k in J.extra_texts)X.t[k]=b(J.extra_texts[k])}
 if(D.contact&&D.contact.watel)X.wa=String(D.contact.watel).replace(/\D/g,'');
};
