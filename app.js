(function () {
  const P = window.PLAN, app = document.getElementById('app');
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const step = id => P.steps.find(s => s.id === id);
  const byN = n => P.steps.find(s => s.n === n);
  const list = items => `<ul>${items.map(i => `<li>${esc(i)}</li>`).join('')}</ul>`;
  const T = P.themes;
  const fitem = ([k, h, t]) => `<div class="fi" style="--tc:${T[k].color}"><b>${esc(h)}</b> ${esc(t)}</div>`;
  const sgo = obj => Object.entries(obj).map(([title, items]) => {
    const col = { Strengths: '#1E7A4C', Gaps: '#C8102E', Opportunities: '#B45309' }[title];
    const groups = Object.keys(T).filter(k => items.some(i => i[0] === k)).map(k =>
      `<div class="themebar" style="background:${T[k].color}">${esc(T[k].name)}</div>${items.filter(i => i[0] === k).map(fitem).join('')}`).join('');
    return `<h2 style="color:${col}">${title}</h2><div class="card">${groups}</div>`;
  }).join('');
  const legend = () => `<div style="display:flex;flex-wrap:wrap;gap:6px;margin:10px 0">${Object.values(T).map(t => `<span class="pill" style="background:${t.color};color:#fff">${esc(t.name)}</span>`).join('')}</div>`;
  const fblock = f => typeof f === 'string' ? `<li>${esc(f)}</li>` : '';
  const findings = (sec, label) => sec.findings && sec.findings.length
    ? (typeof sec.findings[0] === 'string' ? `<div class="card">${list(sec.findings)}</div>`
      : `<div class="grid2">${sec.findings.map(f => `<div class="card"><h3>${esc(f.h)}</h3>${list(f.items)}</div>`).join('')}</div>`)
    : `<div class="placeholder"><b>${label}</b><br>Key findings will be added here.</div>`;

  function home() {
    const scope = P.scope.map(p => {
      if (p.step === undefined) return esc(p.t);
      if (p.step === 0) return `<b>${esc(p.t)}</b>`;
      const s = byN(p.step);
      return `<a class="hl s${p.step}" href="#/${s.id}" title="Step ${s.n}: ${esc(s.title)}">${esc(p.t)}<sup>${s.n}</sup></a>`;
    }).join('');
    const cards = P.steps.map(s => `
      <a class="step ${s.active ? '' : 'off'}" ${s.active ? `href="#/${s.id}"` : 'aria-disabled="true"'} style="--c: var(${s.color})">
        <div class="n">${s.n}</div><h3>${esc(s.title)}</h3><p>${esc(s.short)}</p>
        <span class="wk">${esc(s.week)}</span>
      </a>`).join('');
    return `
      <div class="goal"><div class="eyebrow">The goal</div><h1>${esc(P.goal)}</h1></div>
      <div class="card">
        <div class="eyebrow">Our scope · each highlighted piece maps to a step</div>
        <p class="scope">${scope}</p>
      </div>
      <h2>The plan, in 8 steps</h2>
      <p class="lede">A marketing plan breaks down into eight parts. Grey steps come later; colored steps hold our work so far. Every step feeds back to the goal above.</p>
      <div class="steps">${cards}</div>
      <div class="flow"><b>How it connects:</b> Target audience (3) → Value proposition (4) → Marketing mix (5) → Channels & outreach (6) → more groups, more often (2)</div>`;
  }

  function header(s) {
    return `<div class="crumb"><a href="#/">← Back to the plan</a></div>
      <div class="sechead" style="--c: var(${s.color})"><div class="n">STEP ${s.n} OF 8</div><h1>${esc(s.title)}</h1>
      <span class="pill">${esc(s.week)}</span></div>`;
  }
  function pager(s) {
    const act = P.steps.filter(x => x.active), i = act.indexOf(s);
    const prev = act[i - 1], next = act[i + 1];
    return `<div class="navpn">${prev ? `<a href="#/${prev.id}">← ${prev.n}. ${esc(prev.title)}</a>` : '<span></span>'}${next ? `<a href="#/${next.id}">${next.n}. ${esc(next.title)} →</a>` : ''}</div>`;
  }

  const views = {
    situation(sec) {
      return `<p class="lede">${esc(sec.intro)}</p>
        <div class="card"><h3>The big picture</h3><ul>${sec.bigPicture.map(([h, t]) => `<li><b>${esc(h)}</b> ${esc(t)}</li>`).join('')}</ul></div>
        <h2>Strengths, gaps & opportunities</h2>${legend()}<div class="sgo">${sgo(sec.sgo)}</div>
        <h2>Numbers to remember</h2><div class="card"><table class="numtbl">${sec.numbers.map(([a, b]) => `<tr><td>${esc(a)}</td><td>${esc(b)}</td></tr>`).join('')}</table></div>
        <p class="ties">Sets up → <a href="#/goals">2. Goals</a> · <a href="#/audience">3. Target Audience</a></p>`;
    },
    goals(sec) {
      return `<p class="lede">${esc(sec.intro)}</p>
        <div class="grid3">${sec.blocks.map(b => `<div class="card"><h3>${esc(b.h)}</h3>${list(b.items)}</div>`).join('')}</div>
        <h2>Agreed objectives</h2>${findings(sec, 'Final goals & targets')}`;
    },
    audience(sec) {
      return `<p class="lede">${esc(sec.intro)}</p>
        <div class="card"><h3>${esc(sec.largeGroup.h)}</h3>${list(sec.largeGroup.items)}</div>
        <h2>Audience groups</h2>
        <div class="grid3">${sec.groups.map(g => `<div class="card"><h3>${esc(g.h)}</h3><p class="muted" style="margin:0 0 6px;font-size:.85rem">${esc(g.note)}</p>${list(g.items)}</div>`).join('')}</div>
        <h2>Demographic research (Week 3)</h2>${findings(sec, 'Demographic research')}
        <p class="ties">Feeds into → <a href="#/value">4. Value Proposition</a> (a value proposition for each group)</p>`;
    },
    value(sec) {
      return `<p class="lede">${esc(sec.intro)}</p>
        <div class="card"><div class="eyebrow">Framework</div><p class="vp">${esc(sec.framework)}</p></div>
        <div class="grid2" style="margin-top:16px">
          <div class="card"><div class="eyebrow">${esc(sec.global.h)}</div><p class="vp">“${esc(sec.global.vp)}”</p>${list(sec.global.items)}</div>
          <div class="card"><div class="eyebrow">${esc(sec.astros.h)}</div>
            <h3>Today</h3><p class="q">${esc(sec.astros.today)}</p>
            <h3>Draft: what it could be</h3><p class="vp">“${esc(sec.astros.draft)}”</p></div>
        </div>
        <h2>Definition</h2><div class="defn"><p>${esc(sec.definition)}</p></div>
        <div class="grid4" style="margin-top:14px">${sec.parts.map(([h, q], i) => `<div class="card"><div class="eyebrow">${i + 1} · ${esc(h)}</div>${esc(q)}</div>`).join('')}</div>
        <h2>Week 3 value propositions by audience</h2>
        ${sec.vps.map(v => { const c = T[v.theme].color; return `<div class="vpcard" style="--tc:${c}"><div class="vphead" style="background:${c}">${esc(v.name)}<span>${esc(v.seg)}</span></div>
          ${[['Target audience', v.audience], ['Problem', v.problem], ['Offer', v.offer], ['Value', v.value]].map(([l, t]) => `<div class="vprow"><div>${l}</div><div>${esc(t)}</div></div>`).join('')}
          <div class="vpstmt">“${esc(v.statement)}”</div></div>`; }).join('')}
        <div class="card"><h3>Watch out for</h3>${list(sec.watch)}</div>
        <p class="ties">Built from → <a href="#/audience">3. Target Audience</a> · Delivered through → <a href="#/mix">5. Marketing Mix</a></p>`;
    },
    mix(sec) {
      return `<p class="lede">${esc(sec.intro)}</p>
        <div class="grid4">${sec.parts.map(p => `<div class="card"><div class="eyebrow">${esc(p.h)}</div><p class="q" style="margin-top:0">${esc(p.q)}</p>${list(p.ideas)}
          <div class="placeholder" style="margin-top:12px;padding:12px">Findings coming</div></div>`).join('')}</div>
        <p class="ties">Delivers → <a href="#/value">4. Value Proposition</a> · Reaches groups through → <a href="#/channels">6. Channels & Outreach</a></p>`;
    },
    channels(sec) {
      return `<p class="lede">${esc(sec.intro)}</p>
        <div class="grid2">${sec.blocks.map(b => `<div class="card"><h3>${esc(b.h)}</h3>${list(b.items)}</div>`).join('')}</div>
        <h2>Findings so far</h2>${findings(sec, 'Outreach findings')}<div class="placeholder" style="margin-top:16px"><b>Week 4: outreach methods & automation research</b><br>Coming next.</div>
        <p class="ties">Goal it serves → <a href="#/goals">2. Goals & Objectives</a> (more groups, more often)</p>`;
    },
  };

  function render() {
    const id = location.hash.replace(/^#\/?/, '');
    const s = step(id);
    if (!id || !s || !s.active || !views[id]) { app.innerHTML = home(); document.title = 'Astros Group Sales Plan'; }
    else { app.innerHTML = header(s) + views[id](P.sections[id]) + pager(s); document.title = `${s.n}. ${s.title} · Astros Group Sales Plan`; }
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', render);
  render();
})();
