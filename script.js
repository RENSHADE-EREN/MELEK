/* =====================================================================
   MELEK 18 — SİHİRLİ DOĞUM GÜNÜ SİTESİ · DAVRANIŞ DOSYASI (script.js)
   ---------------------------------------------------------------------
   Bu dosya siteyi çalıştırır. Metinleri değiştirmek için buraya değil,
   config.js dosyasına bak. Tüm içerik config.js'den okunur.
   ===================================================================== */

(() => {
  'use strict';

  /* ===================================================================
     0) YARDIMCILAR
  =================================================================== */
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const rand = (min, max) => min + Math.random() * (max - min);
  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

  function el(tag, cls, text) {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text !== undefined && text !== null) node.textContent = text;
    return node;
  }
  function svgIcon(viewBox, paths, size) {
    const wrap = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    wrap.setAttribute('viewBox', viewBox);
    wrap.setAttribute('width', size);
    wrap.setAttribute('height', size);
    wrap.setAttribute('aria-hidden', 'true');
    wrap.innerHTML = paths;
    return wrap;
  }
  const ICON = {
    heart: (s) => svgIcon('0 0 24 24', '<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>', s),
    image: (s) => svgIcon('0 0 24 24', '<rect x="3" y="4.5" width="18" height="15" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="8.6" cy="9.8" r="1.7" fill="currentColor"/><path d="M4 17l4.6-4.8 3.4 3.2 3.3-3.4L20 16.4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>', s),
    play: (s) => svgIcon('0 0 24 24', '<path d="M8 5.5v13l10.5-6.5z" fill="currentColor"/>', s),
    sparkle: (s) => svgIcon('0 0 24 24', '<path d="M12 2l2.1 6.2L20 10l-5.9 1.8L12 18l-2.1-6.2L4 10l5.9-1.8z" fill="currentColor"/>', s),
  };

  /* ===================================================================
     1) AYARLARI OKU — config.js bozuk olsa bile site çalışır
  =================================================================== */
  const raw = window.SITE_CONFIG || {};
  const DEFAULTS = {
    person: { name: 'Melek', age: 18, birthday: '27 Kasım 2008', celebrationDate: '27 Kasım 2026' },
    gift: { enabled: true, message: '', hint: '', openButton: "Hediye'yi Aç" },
    hero: { kicker: '27 Kasım 2026 · 18. Doğum Günü', line1: 'Happy Birthday', line2: '', bigNumber: 18, intro: '', scrollHint: 'Kaydır ve keşfet' },
    music: { enabled: true, provider: 'local', url: 'music.mp3', autoplay: false, showPlayer: true, loop: true, volume: 0.7, label: 'Müzik' },
    gallery: { kicker: '', title: 'Anılar', subtitle: '', items: [] },
    cake: { kicker: '', title: 'Dilek Tut', subtitle: '', candleCount: 18, wishMessage: '', blowButton: 'Mumları Söndür', completionTitle: '', completionMessage: '', relightButton: 'Yeniden Yak', micButton: 'Mikrofonla Üfle' },
    letter: { kicker: '', title: 'Mektup', subtitle: '', envelopeHint: '', greeting: '', text: '', paragraphs: [], signature: '', date: '' },
    finale: { kicker: '', title: 'İyi ki Doğdun', message: '', signature: '', date: '', backButton: 'Başa Dön' },
    navigation: [
      { label: 'Açılış', href: '#hero' },
      { label: 'Anılar', href: '#galeri' },
      { label: 'Pasta', href: '#pasta' },
      { label: 'Mektup', href: '#mektup' },
      { label: 'Kutlama', href: '#son' },
    ],
    footer: { note: '', legal: '' },
  };
  function deepMerge(base, over) {
    const out = Array.isArray(base) ? over : Object.assign({}, base);
    if (Array.isArray(base) || Array.isArray(over)) return over === undefined ? base : over;
    Object.keys(over || {}).forEach((key) => {
      if (over[key] && typeof over[key] === 'object' && base[key] && typeof base[key] === 'object') {
        out[key] = deepMerge(base[key], over[key]);
      } else if (over[key] !== undefined) {
        out[key] = over[key];
      }
    });
    return out;
  }
  const C = deepMerge(DEFAULTS, raw);

  const name = (C.person && C.person.name) || 'Melek';
  const age = Number((C.person && C.person.age) || 18) || 18;
  const autoLine2 = 'İYİ Kİ DOĞDUN ' + String(name).toUpperCase() + '!';

  function set(id, value) {
    const node = document.getElementById(id);
    if (node && value !== undefined && value !== null && value !== '') node.textContent = value;
    return node;
  }

  /* ===================================================================
     2) BİLDİRİMLER (TOAST)
  =================================================================== */
  const Toast = (() => {
    const root = $('#toasts');
    function show(message, ms) {
      if (!root) return;
      while (root.children.length >= 3) root.removeChild(root.firstChild);
      const t = el('div', 'toast');
      t.appendChild(el('span', 'toast-icon'));
      t.firstChild.appendChild(ICON.heart(18));
      t.appendChild(el('span', null, message));
      root.appendChild(t);
      setTimeout(() => {
        t.classList.add('leaving');
        setTimeout(() => t.remove(), 350);
      }, ms || 4600);
    }
    return { show };
  })();

  /* ===================================================================
     3) KONFETİ MOTORU — kontrollü patlamalar (sürekli değil)
  =================================================================== */
  const Confetti = (() => {
    const canvas = $('#confettiCanvas');
    if (!canvas) return { burst() {}, pause() {}, resume() {}, resize() {} };
    const ctx = canvas.getContext('2d');
    const COLORS = ['#ff5fa8', '#ff9dcd', '#ffd1e9', '#b9a3ff', '#d8c7ff', '#a855f7', '#ffffff', '#f2b8ff'];
    let parts = [];
    let raf = null;
    let dpr = 1;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
    }

    function heartPath(size) {
      ctx.beginPath();
      ctx.moveTo(0, -size * 0.25);
      ctx.bezierCurveTo(-size * 0.5, -size * 0.75, -size * 1.05, size * 0.05, 0, size * 0.6);
      ctx.bezierCurveTo(size * 1.05, size * 0.05, size * 0.5, -size * 0.75, 0, -size * 0.25);
      ctx.closePath();
    }

    function spawn(x, y, count, power) {
      for (let i = 0; i < count; i++) {
        const angle = rand(-Math.PI, 0) + rand(-0.3, 0.3);
        const speed = rand(2.2, 6.5) * (power || 1);
        parts.push({
          x, y,
          vx: Math.cos(angle) * speed * dpr,
          vy: Math.sin(angle) * speed * dpr - rand(1, 2.2),
          g: rand(0.09, 0.16) * dpr,
          rot: rand(0, Math.PI * 2),
          vr: rand(-0.16, 0.16),
          color: COLORS[(Math.random() * COLORS.length) | 0],
          size: rand(5, 11) * dpr,
          shape: Math.random() < 0.24 ? 'heart' : Math.random() < 0.5 ? 'circle' : 'rect',
          life: rand(150, 260),
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      parts = parts.filter((p) => p.life > 0 && p.y < canvas.height + 60);
      if (!parts.length) { raf = null; return; }
      for (const p of parts) {
        p.x += p.vx; p.y += p.vy;
        p.vy += p.g; p.vx *= 0.985; p.vy *= 0.992;
        p.rot += p.vr; p.life -= 1;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.globalAlpha = clamp(p.life / 40, 0, 1);
        ctx.fillStyle = p.color;
        if (p.shape === 'heart') {
          heartPath(p.size);
          ctx.fill();
        } else if (p.shape === 'circle') {
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.42, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillRect(-p.size / 2, -p.size / 3, p.size, p.size * 0.66);
        }
        ctx.restore();
      }
      raf = requestAnimationFrame(draw);
    }

    function ensureLoop() {
      if (!raf) raf = requestAnimationFrame(draw);
    }

    /* x,y: sayfa piksel konumu (0-1 oran); çoklu kaynak desteği */
    function burst(opts) {
      if (reduced || document.hidden) return;
      const o = opts || {};
      const xr = o.x === undefined ? 0.5 : o.x;
      const yr = o.y === undefined ? 0.22 : o.y;
      const cx = canvas.width * xr;
      const cy = canvas.height * yr;
      spawn(cx, cy, o.count || 90, o.power || 1);
      if (o.sideBursts) {
        spawn(canvas.width * 0.12, canvas.height * 0.9, Math.round((o.count || 90) * 0.55), 1.1);
        spawn(canvas.width * 0.88, canvas.height * 0.9, Math.round((o.count || 90) * 0.55), 1.1);
      }
      ensureLoop();
    }
    function pause() { if (raf) { cancelAnimationFrame(raf); raf = null; } }
    function resume() { if (!raf && parts.length) ensureLoop(); }

    resize();
    let resizeTimer = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 180);
    });

    return { burst, pause, resume, resize };
  })();

  /* ===================================================================
     4) AÇILIŞ HEDİYESİ — Gökhan'dan küçük bir sürpriz
     -------------------------------------------------------------------
     Site ilk açıldığında hediye kutusu süzülerek iner; açılınca ana
     doğum günü deneyimi (hero animasyonları + konfeti) başlar.
     index.html'in <head> kısmındaki küçük betik, config'de gift
     kapalıysa bekleme sınıfını hiç eklemez.
  =================================================================== */
  const Gift = (() => {
    const root = $('#giftIntro');
    const box = $('#giftBox');
    const btn = $('#giftOpenBtn');
    const G = C.gift || {};
    if (!root || !box || G.enabled === false) {
      /* Hediye gösterilmeyecekse bekleme sınıfını hemen kaldır */
      document.documentElement.classList.remove('gift-wait');
      if (root) root.remove();
      return { active: false, init() {} };
    }

    let opened = false;

    function init() {
      set('giftMessage', G.message);
      set('giftHint', G.hint);
      set('giftOpenBtn', G.openButton || "Hediye'yi Aç");
      root.hidden = false;
      requestAnimationFrame(() => root.classList.add('in'));
      if (btn) btn.focus({ preventScroll: true });
    }

    /* Kutunun ekrandaki oranlı konumundan konfeti patlat */
    function burstAtBox(count, power, delay) {
      if (reduced) return;
      setTimeout(() => {
        const r = box.getBoundingClientRect();
        if (!r.width) return;
        Confetti.burst({
          x: clamp((r.left + r.width / 2) / window.innerWidth, 0.1, 0.9),
          y: clamp((r.top + r.height * 0.35) / window.innerHeight, 0.05, 0.9),
          count,
          power,
        });
      }, delay || 0);
    }

    function dismiss() {
      if (root.hidden) return;
      /* Hero animasyonları ve kaydırma serbest kalır, örtü yumuşakça çekilir */
      document.documentElement.classList.remove('gift-wait');
      root.classList.remove('in');
      setTimeout(() => {
        root.hidden = true;
        root.remove();
      }, reduced ? 60 : 560);
      heroCelebration();
    }

    function openGift() {
      if (opened) return;
      opened = true;
      root.classList.add('open');
      box.disabled = true;
      burstAtBox(85, 0.95, reduced ? 0 : 150);
      burstAtBox(45, 0.65, reduced ? 0 : 430);
      setTimeout(dismiss, reduced ? 90 : 920);
    }

    box.addEventListener('click', openGift);
    if (btn) btn.addEventListener('click', openGift);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !root.hidden) openGift();
    });

    return { active: true, init };
  })();

  /* ===================================================================
     5) ÜST MENÜ + YAZI DOLDURMA
  =================================================================== */
  function buildNav() {
    set('navBrandName', name);
    set('navBrandAge', String(age));
    const nav = $('#navLinks');
    if (nav) {
      (C.navigation || []).forEach((item) => {
        if (!item || !item.href) return;
        const a = el('a', 'nav-link', item.label || '');
        a.href = item.href;
        a.setAttribute('data-target', item.href);
        nav.appendChild(a);
      });
    }
  }

  function fillHero() {
    set('heroKicker', C.hero.kicker);
    set('heroLine1', C.hero.line1);
    set('heroLine2', C.hero.line2 || autoLine2);
    const big = C.hero.bigNumber !== undefined ? C.hero.bigNumber : age;
    set('heroAgeNum', String(big));
    set('heroIntro', C.hero.intro);
    set('heroCueText', C.hero.scrollHint);
  }

  function fillSectionHeads() {
    set('galeriKicker', C.gallery.kicker);
    set('galeriBaslik', C.gallery.title);
    set('galeriSub', C.gallery.subtitle);
    set('pastaKicker', C.cake.kicker);
    set('pastaBaslik', C.cake.title);
    set('pastaSub', C.cake.subtitle);
    set('mektupKicker', C.letter.kicker);
    set('mektupBaslik', C.letter.title);
    set('mektupSub', C.letter.subtitle);
    set('sonKicker', C.finale.kicker);
    set('sonBaslik', C.finale.title);
    set('sonMsg', C.finale.message);
    set('sonSignature', C.finale.signature);
    set('sonDate', C.finale.date);
    set('footerNote', C.footer.note);
    set('footerLegal', C.footer.legal);
  }

  /* Menüde aktif bölümü işaretle */
  function setupActiveNav() {
    const links = $$('.nav-link');
    if (!links.length) return;
    const byId = {};
    links.forEach((l) => { byId[l.getAttribute('data-target').slice(1)] = l; });
    const sections = ['hero', 'galeri', 'pasta', 'mektup', 'son']
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!('IntersectionObserver' in window) || !sections.length) {
      links[0].classList.add('active');
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          links.forEach((l) => l.classList.remove('active'));
          const link = byId[e.target.id];
          if (link) link.classList.add('active');
        }
      });
    }, { rootMargin: '-42% 0px -52% 0px' });
    sections.forEach((s) => io.observe(s));
  }

  /* ===================================================================
     6) KAYDIRINCA GÖRÜNME
  =================================================================== */
  function setupReveal() {
    const items = $$('.reveal');
    if (reduced || !('IntersectionObserver' in window)) {
      items.forEach((n) => n.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    items.forEach((n) => io.observe(n));
  }

  /* ===================================================================
     7) HERO SÜSLEMELERİ + AÇILIŞ KUTLAMASI
  =================================================================== */
  let heroInView = true;
  function buildHeroDecor() {
    const decor = $('#heroDecor');
    if (!decor || reduced) return;
    const heartCount = window.innerWidth < 640 ? 8 : 12;
    const sparkCount = window.innerWidth < 640 ? 10 : 16;
    for (let i = 0; i < heartCount; i++) {
      const h = el('span', 'float-heart');
      h.innerHTML = '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/></svg>';
      h.style.setProperty('--x', rand(4, 96).toFixed(1) + '%');
      h.style.setProperty('--s', rand(0.5, 1.15).toFixed(2));
      h.style.setProperty('--o', rand(0.35, 0.75).toFixed(2));
      h.style.setProperty('--r', rand(-24, 24).toFixed(0) + 'deg');
      h.style.setProperty('--dur', rand(11, 19).toFixed(1) + 's');
      h.style.setProperty('--delay', (-rand(0, 18)).toFixed(1) + 's');
      decor.appendChild(h);
    }
    for (let i = 0; i < sparkCount; i++) {
      const s = el('span', 'spark');
      s.style.setProperty('--x', rand(2, 98).toFixed(1) + '%');
      s.style.setProperty('--y', rand(6, 92).toFixed(1) + '%');
      s.style.setProperty('--dur', rand(2.6, 5.5).toFixed(1) + 's');
      s.style.setProperty('--delay', (-rand(0, 5)).toFixed(1) + 's');
      decor.appendChild(s);
    }
  }

  function buildFinaleDecor() {
    const decor = $('#finaleDecor');
    if (!decor || reduced) return;
    const HEART = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/></svg>';
    for (let i = 0; i < 6; i++) {
      const h = el('span', 'float-heart');
      h.innerHTML = HEART;
      h.style.setProperty('--x', rand(6, 92).toFixed(1) + '%');
      h.style.setProperty('--s', rand(0.45, 0.9).toFixed(2));
      h.style.setProperty('--o', rand(0.3, 0.6).toFixed(2));
      h.style.setProperty('--r', rand(-20, 20).toFixed(0) + 'deg');
      h.style.setProperty('--dur', rand(12, 18).toFixed(1) + 's');
      h.style.setProperty('--delay', (-rand(0, 14)).toFixed(1) + 's');
      decor.appendChild(h);
    }
  }

  function heroCelebration() {
    if (reduced) return;
    setTimeout(() => Confetti.burst({ x: 0.5, y: 0.24, count: 130, power: 1 }), 500);
    setTimeout(() => Confetti.burst({ x: 0.35, y: 0.2, count: 60, power: 0.8 }), 1400);
    setTimeout(() => Confetti.burst({ x: 0.65, y: 0.2, count: 60, power: 0.8 }), 1750);

    /* Hero görünürken arada bir küçük kutlama (kontrollü, sınırlı) */
    let ambient = 0;
    const timer = setInterval(() => {
      if (ambient >= 4) { clearInterval(timer); return; }
      if (!document.hidden && heroInView) {
        ambient++;
        Confetti.burst({ x: rand(0.25, 0.75), y: rand(0.15, 0.3), count: 42, power: 0.7 });
      }
    }, 30000);

    const hero = $('#hero');
    if (hero && 'IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        heroInView = entries[0].isIntersecting;
      }, { threshold: 0.05 });
      io.observe(hero);
    }
  }

  /* ===================================================================
     8) GALERİ — her öğe kendi dosya adını taşır
  =================================================================== */
  const Gallery = (() => {
    const grid = $('#galleryGrid');
    const items = (C.gallery && C.gallery.items || []).filter((it) => it && typeof it.file === 'string' && it.file.trim() !== '');
    const media = items.map((it) => ({
      id: it.id || it.file,
      type: String(it.type || 'image').toLowerCase() === 'video' ? 'video' : 'image',
      file: it.file.trim(),
      poster: (it.poster && String(it.poster).trim()) || '',
      title: it.title || 'Bir Anı',
      note: it.note || '',
    }));

    function missingBlock(fileName) {
      const block = el('div', 'g-missing');
      block.appendChild(ICON.image(30));
      block.appendChild(el('span', null, 'Dosya bulunamadı'));
      block.appendChild(el('span', 'g-missing-file', fileName));
      return block;
    }

    function buildCard(item, index) {
      const card = el('button', 'g-card' + (item.type === 'video' ? ' g-card-video' : ''));
      card.type = 'button';
      card.setAttribute('aria-label', (item.type === 'video' ? 'Videoyu aç: ' : 'Fotoğrafı büyüt: ') + item.title);

      const mediaBox = el('span', 'g-media');
      if (item.type === 'video') {
        if (item.poster) {
          const img = el('img');
          img.loading = 'lazy';
          img.decoding = 'async';
          img.src = item.poster;
          img.alt = '';
          img.addEventListener('error', () => img.remove());
          mediaBox.appendChild(img);
        }
        const chip = el('span', 'g-chip');
        chip.appendChild(ICON.play(12));
        chip.appendChild(el('span', null, 'Video'));
        mediaBox.appendChild(chip);
        const play = el('span', 'g-play');
        play.appendChild(ICON.play(26));
        mediaBox.appendChild(play);
      } else {
        const img = el('img');
        img.loading = 'lazy';
        img.decoding = 'async';
        img.src = item.file;
        img.alt = item.title;
        img.addEventListener('error', () => {
          card.classList.add('is-missing');
          card.setAttribute('aria-label', 'Dosya bulunamadı: ' + item.title);
          mediaBox.appendChild(missingBlock(item.file));
        });
        mediaBox.appendChild(img);
      }
      card.appendChild(mediaBox);

      const info = el('span', 'g-info');
      info.appendChild(el('span', 'g-title', item.title));
      info.appendChild(el('span', 'g-note', item.note));
      card.appendChild(info);

      card.addEventListener('click', () => Lightbox.open(index));
      return card;
    }

    function render() {
      if (!grid) return;
      if (!media.length) {
        const empty = $('#galleryEmpty');
        if (empty) empty.hidden = false;
        return;
      }
      const frag = document.createDocumentFragment();
      media.forEach((item, i) => frag.appendChild(buildCard(item, i)));
      grid.appendChild(frag);
    }

    return { render, items: media };
  })();

  /* ===================================================================
     9) BÜYÜTEÇ (LIGHTBOX) — fotoğraf + video, önceki/sonraki, kapat
  =================================================================== */
  const Lightbox = (() => {
    const root = $('#lightbox');
    if (!root) return { open() {} };
    const mediaBox = $('#lbMedia');
    const titleEl = $('#lbTitle');
    const noteEl = $('#lbNote');
    const counterEl = $('#lbCounter');
    const prevBtn = $('#lbPrev');
    const nextBtn = $('#lbNext');
    const closeBtn = $('#lbClose');
    const backdrop = $('#lbBackdrop');
    let idx = 0;
    let lastFocus = null;
    let currentVideo = null;

    function missingPanel(file) {
      mediaBox.innerHTML = '';
      const box = el('div', 'lb-missing');
      box.appendChild(ICON.image(44));
      box.appendChild(el('span', null, 'Bu medya dosyası yüklenemedi ya da henüz yüklenmemiş.'));
      box.appendChild(el('span', 'lb-missing-file', file));
      mediaBox.appendChild(box);
    }

    function render() {
      const item = Gallery.items[idx];
      if (!item) return;
      mediaBox.innerHTML = '';
      currentVideo = null;
      if (item.type === 'video') {
        const video = el('video');
        video.controls = true;
        video.playsInline = true;
        video.setAttribute('playsinline', '');
        video.preload = 'metadata';
        if (item.poster) video.poster = item.poster;
        video.src = item.file;
        video.setAttribute('aria-label', item.title);
        video.addEventListener('error', () => missingPanel(item.file));
        mediaBox.appendChild(video);
        currentVideo = video;
        video.play().catch(() => {});
      } else {
        const img = el('img');
        img.decoding = 'async';
        img.src = item.file;
        img.alt = item.title;
        img.addEventListener('error', () => missingPanel(item.file));
        mediaBox.appendChild(img);
      }
      titleEl.textContent = item.title;
      noteEl.textContent = item.note;
      counterEl.textContent = (idx + 1) + ' / ' + Gallery.items.length;
    }

    function stopVideo() {
      if (currentVideo) {
        currentVideo.pause();
        currentVideo.removeAttribute('src');
        currentVideo.load();
        currentVideo = null;
      }
    }

    function go(step) {
      if (!Gallery.items.length) return;
      idx = (idx + step + Gallery.items.length) % Gallery.items.length;
      stopVideo();
      render();
    }

    function open(index) {
      if (!Gallery.items.length) return;
      idx = clamp(index, 0, Gallery.items.length - 1);
      lastFocus = document.activeElement;
      render();
      root.hidden = false;
      requestAnimationFrame(() => root.classList.add('in'));
      document.body.classList.add('no-scroll');
      if (closeBtn) closeBtn.focus();
    }

    function close() {
      stopVideo();
      root.classList.remove('in');
      document.body.classList.remove('no-scroll');
      setTimeout(() => { root.hidden = true; }, 260);
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    if (prevBtn) prevBtn.addEventListener('click', () => go(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => go(1));
    if (closeBtn) closeBtn.addEventListener('click', close);
    if (backdrop) backdrop.addEventListener('click', close);

    document.addEventListener('keydown', (e) => {
      if (root.hidden) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') go(-1);
      else if (e.key === 'ArrowRight') go(1);
    });

    /* Dokunmatik kaydırma */
    let touchX = null;
    let touchY = null;
    const body = $('.lb-body');
    if (body) {
      body.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
          touchX = e.touches[0].clientX;
          touchY = e.touches[0].clientY;
        }
      }, { passive: true });
      body.addEventListener('touchend', (e) => {
        if (touchX === null) return;
        const dx = e.changedTouches[0].clientX - touchX;
        const dy = e.changedTouches[0].clientY - touchY;
        touchX = null;
        if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.4) {
          go(dx < 0 ? 1 : -1);
        }
      }, { passive: true });
    }

    return { open };
  })();

  /* ===================================================================
     10) DOĞUM GÜNÜ PASTASI — mum söndürme + dilek
  =================================================================== */
  const Cake = (() => {
    const stage = $('#cakeScene');
    if (!stage) return { relight() {} };
    const holder = $('#cakeCandles');
    const msgEl = $('#cakeMsg');
    const blowBtn = $('#blowAllBtn');
    const micBtn = $('#micBtn');
    const relightBtn = $('#relightBtn');
    const doneEl = $('#cakeDone');
    const doneTitle = $('#cakeDoneTitle');
    const doneText = $('#cakeDoneText');

    const count = clamp(Number(C.cake.candleCount) || age, 1, 30);
    const candles = [];
    let outCount = 0;
    let celebrated = false;

    /* Söndür */
    function blowCandle(candle) {
      if (candle.classList.contains('out')) return;
      candle.classList.add('out');
      candle.setAttribute('aria-label', 'Mum söndü');
      outCount++;
      if (outCount >= count && !celebrated) {
        celebrated = true;
        setTimeout(finish, 650);
      }
    }

    function finish() {
      if (doneEl) doneEl.hidden = false;
      set('cakeDoneTitle', C.cake.completionTitle);
      set('cakeDoneText', C.cake.completionMessage);
      if (blowBtn) blowBtn.hidden = true;
      if (micBtn) micBtn.hidden = true;
      if (relightBtn) relightBtn.hidden = false;
      if (reduced) return;
      setTimeout(() => Confetti.burst({ x: 0.5, y: 0.3, count: 120, power: 1.1 }), 250);
      setTimeout(() => Confetti.burst({ x: 0.3, y: 0.24, count: 70, power: 0.9 }), 850);
      setTimeout(() => Confetti.burst({ x: 0.7, y: 0.24, count: 70, power: 0.9 }), 1150);
    }

    function build() {
      set('cakeMsg', C.cake.wishMessage);
      if (blowBtn) set('blowAllBtn', C.cake.blowButton);
      if (relightBtn) set('relightBtn', C.cake.relightButton);
      set('cakeAge', String(count));
      set('cakeDoneTitle', C.cake.completionTitle);
      set('cakeDoneText', C.cake.completionMessage);

      if (!holder) return;
      const half = Math.ceil(count / 2);
      for (let i = 0; i < count; i++) {
        const back = i < half; /* ilk yarı arka sıra */
        const rowLen = back ? half : count - half;
        const posInRow = back ? i : i - half;
        const candle = el('button', 'candle');
        candle.type = 'button';
        candle.setAttribute('aria-label', (i + 1) + '. mumu söndür');
        /* Arka sıra, ön sıraya göre yarım aralık kaydırılmış — iki sıra net görünsün */
        const xPct = back
          ? ((posInRow + 1) / (rowLen + 1)) * 100
          : ((posInRow + 0.5) / rowLen) * 100;
        candle.style.setProperty('--x', xPct.toFixed(2) + '%');
        candle.style.setProperty('--row', back ? '34px' : '0px');
        candle.style.setProperty('--s', back ? '0.84' : '1');
        candle.style.setProperty('--fd', rand(0.7, 1.15).toFixed(2) + 's');
        candle.style.setProperty('--fdel', (-rand(0, 1)).toFixed(2) + 's');
        candle.style.zIndex = back ? '1' : '3';
        candle.appendChild(el('span', 'candle-smoke'));
        candle.appendChild(el('span', 'candle-flame'));
        candle.appendChild(el('span', 'candle-body'));
        candle.addEventListener('click', () => blowCandle(candle));
        holder.appendChild(candle);
        candles.push(candle);
      }
    }

    /* Tümünü sırayla söndür */
    if (blowBtn) blowBtn.addEventListener('click', () => {
      const lit = candles.filter((c) => !c.classList.contains('out'));
      lit.forEach((candle, i) => {
        setTimeout(() => blowCandle(candle), 140 + i * 95);
      });
    });

    if (relightBtn) relightBtn.addEventListener('click', () => {
      candles.forEach((c) => {
        c.classList.remove('out');
        c.setAttribute('aria-label', 'Mumu söndür');
      });
      outCount = 0;
      celebrated = false;
      if (doneEl) doneEl.hidden = true;
      if (blowBtn) blowBtn.hidden = false;
      if (micBtn && micSupported) micBtn.hidden = false;
    });

    /* ---- Mikrofonla üfleme (tamamen isteğe bağlı, deneneysel) ---- */
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    const micSupported = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && AudioCtx);
    let micStream = null;
    let micCtx = null;
    let micTimer = null;
    let micHold = 0;
    let micLast = 0;
    let micOn = false;

    async function startMic() {
      try {
        micStream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: false, noiseSuppression: false } });
        micCtx = new AudioCtx();
        const source = micCtx.createMediaStreamSource(micStream);
        const analyser = micCtx.createAnalyser();
        analyser.fftSize = 512;
        source.connect(analyser);
        const buf = new Uint8Array(analyser.fftSize);
        micOn = true;
        micBtn.classList.add('is-active');
        micBtn.setAttribute('aria-pressed', 'true');
        Toast.show('Mikrofon açık: mumlara doğru üfle! (Kapatmak için düğmeye tekrar dokun.)', 5200);
        micTimer = setInterval(() => {
          analyser.getByteTimeDomainData(buf);
          let sum = 0;
          for (let i = 0; i < buf.length; i++) {
            const v = (buf[i] - 128) / 128;
            sum += v * v;
          }
          const rms = Math.sqrt(sum / buf.length);
          if (rms > 0.15) {
            micHold++;
            if (micHold >= 3 && Date.now() - micLast > 430) {
              micLast = Date.now();
              micHold = 0;
              const next = candles.find((c) => !c.classList.contains('out'));
              if (next) blowCandle(next);
            }
          } else {
            micHold = Math.max(0, micHold - 1);
          }
        }, 70);
      } catch (err) {
        stopMic();
        Toast.show('Mikrofon izni verilmedi ya da kullanılamadı — düğmeler her zaman çalışır.', 5200);
      }
    }
    function stopMic() {
      micOn = false;
      if (micTimer) { clearInterval(micTimer); micTimer = null; }
      if (micStream) { micStream.getTracks().forEach((t) => t.stop()); micStream = null; }
      if (micCtx) { micCtx.close().catch(() => {}); micCtx = null; }
      if (micBtn) {
        micBtn.classList.remove('is-active');
        micBtn.setAttribute('aria-pressed', 'false');
      }
    }
    if (micBtn) micBtn.addEventListener('click', () => {
      if (micOn) { stopMic(); return; }
      startMic();
    });

    build();
    if (micBtn && micSupported) {
      micBtn.hidden = false;
      set('micBtn', C.cake.micButton);
      micBtn.setAttribute('aria-pressed', 'false');
    }
    window.addEventListener('beforeunload', stopMic);

    return {
      relight() {
        if (relightBtn) relightBtn.click();
      },
    };
  })();

  /* ===================================================================
     11) ÖZEL MEKTUP — zarf açma + UZUN METİN DESTEĞİ
     -------------------------------------------------------------------
     Mektup iki biçimde tanımlanabilir (config.js → letter):
       - text:        Tek uzun yazı. Boş satırlar paragraf ayırır,
                      tek satır sonları korunur. Yapıştırması en kolayı.
       - paragraphs:  Her biri bir paragraf olan metin listesi.
     İkisi de girildiyse text önceliklidir. Uzunluk sınırı yoktur;
     kart içeriğe göre otomatik büyür (styles.css → .letter-body).
  =================================================================== */
  function setupLetter() {
    const env = $('#envelopeBtn');
    const letter = $('#letterCard');
    if (!env || !letter) return;

    set('envelopeHint', C.letter.envelopeHint);
    set('letterDate', C.letter.date);
    set('letterGreeting', C.letter.greeting);
    set('letterSignature', C.letter.signature);

    const body = $('#letterBody');
    if (body) {
      body.innerHTML = '';
      const rawText = String(C.letter.text || '').trim();
      let paras;
      if (rawText) {
        /* Boş satırlar (aralarında yalnızca boşluk olan satırlar) paragrafları ayırır */
        paras = rawText.split(/\n[ \t]*\n/).map((s) => s.trim()).filter(Boolean);
      } else {
        paras = (C.letter.paragraphs || []).filter(Boolean);
      }
      paras.forEach((p) => body.appendChild(el('p', null, p)));
    }

    let opened = false;
    env.addEventListener('click', () => {
      if (opened) return;
      opened = true;
      env.classList.add('open');
      env.setAttribute('aria-expanded', 'true');
      setTimeout(() => {
        letter.hidden = false;
        if (!reduced) {
          const rect = env.getBoundingClientRect();
          Confetti.burst({
            x: clamp((rect.left + rect.width / 2) / window.innerWidth, 0.1, 0.9),
            y: clamp((rect.top + rect.height / 2) / window.innerHeight, 0.1, 0.9),
            count: 55,
            power: 0.75,
          });
        }
        setTimeout(() => {
          letter.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'nearest' });
        }, 350);
      }, 620);
    });
  }

  /* ===================================================================
     12) FİNAL + BAŞA DÖN
  =================================================================== */
  function setupFinale() {
    const back = $('#backTopBtn');
    if (back) {
      set('backTopBtn', C.finale.backButton);
      back.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
      });
    }

    const finale = $('#son');
    if (finale && !reduced && 'IntersectionObserver' in window) {
      let fired = false;
      const io = new IntersectionObserver((entries) => {
        if (fired) return;
        if (entries[0].isIntersecting) {
          fired = true;
          Confetti.burst({ x: 0.5, y: 0.2, count: 110, power: 1 });
          setTimeout(() => Confetti.burst({ x: 0.5, y: 0.16, count: 60, power: 0.8 }), 700);
          io.disconnect();
        }
      }, { threshold: 0.25 });
      io.observe(finale);
    }
  }

  /* ===================================================================
     13) MÜZİK SİSTEMİ — YouTube / Spotify / yerel dosya
     -------------------------------------------------------------------
     Tek oynatıcı, tek örnek. Tarayıcı otomatik oynatma kurallarına
     saygı duyulur: müzik yalnızca kullanıcı dokunuşuyla başlar.
  =================================================================== */
  const Music = (() => {
    const fab = $('#musicFab');
    const panel = $('#musicPanel');
    const stage = $('#musicStage');
    const hint = $('#musicHint');
    const closeBtn = $('#musicPanelClose');
    const labelEl = $('#musicLabel');
    const M = C.music || {};
    let provider = String(M.provider || 'local').toLowerCase();
    let url = String(M.url || '').trim();
    let failed = false;
    let failedMsg = '';
    let panelOpen = false;
    let playing = false;
    let toastShown = false;

    if (!fab || !panel || !stage) return { init() {} };
    if (!M.enabled) {
      fab.remove();
      panel.remove();
      return { init() {} };
    }

    /* ---- yardımcılar ---- */
    function setPlaying(state) {
      playing = state;
      fab.classList.toggle('is-playing', state);
      fab.setAttribute('aria-pressed', state ? 'true' : 'false');
      fab.setAttribute('aria-label', state ? 'Müziği duraklat' : 'Müziği çal');
    }
    function openPanel() {
      if (!M.showPlayer && provider !== 'spotify') return;
      panelOpen = true;
      panel.hidden = false;
      requestAnimationFrame(() => panel.classList.add('open'));
    }
    function closePanel() {
      panelOpen = false;
      panel.classList.remove('open');
      setTimeout(() => { panel.hidden = true; }, 330);
    }
    function errorBox(msg) {
      stage.innerHTML = '';
      const box = el('div', 'music-error', msg);
      stage.appendChild(box);
      failed = true;
      failedMsg = msg;
    }
    function toastOnce(msg) {
      if (toastShown) return;
      toastShown = true;
      Toast.show(msg, 6000);
    }

    /* ---- YouTube ---- */
    function parseYouTubeId(input) {
      if (!input) return null;
      const s = String(input).trim();
      const m = s.match(/(?:youtube\.com\/(?:watch\?(?:[^#]*&)?v=|shorts\/|embed\/|live\/|v\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/);
      if (m) return m[1];
      if (/^[A-Za-z0-9_-]{11}$/.test(s)) return s;
      return null;
    }

    let ytPlayer = null;
    let ytPending = false;
    let ytApiPromise = null;
    function ensureYTApi() {
      if (ytApiPromise) return ytApiPromise;
      ytApiPromise = new Promise((resolve, reject) => {
        if (window.YT && window.YT.Player) { resolve(window.YT); return; }
        const prev = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = () => {
          if (typeof prev === 'function') prev();
          resolve(window.YT);
        };
        const script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        script.async = true;
        document.head.appendChild(script);
        setTimeout(() => {
          if (!(window.YT && window.YT.Player)) {
            reject(new Error('api-load'));
          }
        }, 12000);
      });
      return ytApiPromise;
    }
    function buildYouTube() {
      const vid = parseYouTubeId(url);
      if (!vid) {
        errorBox('YouTube bağlantısı tanınamadı. config.js → music → url kısmına tam bir YouTube linki yapıştır (örn: https://www.youtube.com/watch?v=...).');
        hint.textContent = 'Doğru biçim: youtube.com/watch?v=... veya youtu.be/...';
        return;
      }
      hint.textContent = 'Oynatıcıdaki düğmelerle kontrol edebilirsin.';
      ensureYTApi().then((YT) => {
        const mount = el('div');
        stage.appendChild(mount);
        ytPlayer = new YT.Player(mount, {
          videoId: vid,
          width: '300',
          height: '169',
          playerVars: { playsinline: 1, rel: 0, modestbranding: 1 },
          events: {
            onReady: () => {
              ytPlayer.setVolume(Math.round(clamp(Number(M.volume) || 0.7, 0, 1) * 100));
              if (ytPending) { ytPending = false; ytPlayer.playVideo(); }
            },
            onStateChange: (ev) => {
              if (ev.data === YT.PlayerState.PLAYING) setPlaying(true);
              else if (ev.data === YT.PlayerState.PAUSED || ev.data === YT.PlayerState.ENDED) setPlaying(false);
            },
            onError: (ev) => {
              const code = ev && ev.data;
              let msg = 'Bu video şu anda oynatılamıyor.';
              if (code === 2) msg = 'Video kimliği geçersiz görünüyor — linki config.js → music → url içinde kontrol et.';
              else if (code === 100) msg = 'Video bulunamadı (silinmiş ya da gizli olabilir). Başka bir şarkı seçebilirsin.';
              else if (code === 101 || code === 150) msg = 'Bu videonun sahibi başka sitelerde oynatmaya izin vermiyor. Farklı bir video ya da yerel mp3 (music.mp3) deneyebilirsin.';
              errorBox(msg);
              setPlaying(false);
              toastOnce(msg);
            },
          },
        });
      }).catch(() => {
        errorBox('YouTube oynatıcısı yüklenemedi (internet bağlantısı gerekli). Şarkıyı değiştirmek istersen config.js → music bölümünden yerel dosya (music.mp3) seçebilirsin.');
      });
    }
    function ytToggle() {
      if (!ytPlayer || !ytPlayer.playVideo) { ytPending = true; return; }
      if (playing) ytPlayer.pauseVideo();
      else { ytPlayer.playVideo(); }
    }

    /* ---- Spotify ---- */
    function parseSpotifyId(input) {
      if (!input) return null;
      const m = String(input).match(/spotify\.(?:com|link)\/(?:intl-[a-z-]+\/)?track\/([A-Za-z0-9]{22})/);
      if (m) return m[1];
      const bare = String(input).trim();
      if (/^[A-Za-z0-9]{22}$/.test(bare)) return bare;
      return null;
    }
    function buildSpotify() {
      const tid = parseSpotifyId(url);
      if (!tid) {
        errorBox('Spotify bağlantısı tanınamadı. config.js → music → url kısmına bir Spotify parça linki yapıştır (örn: https://open.spotify.com/track/...).');
        hint.textContent = 'Doğru biçim: open.spotify.com/track/...';
        return;
      }
      const iframe = document.createElement('iframe');
      iframe.src = 'https://open.spotify.com/embed/track/' + tid + '?utm_source=generator&theme=0';
      iframe.setAttribute('title', 'Spotify oynatıcı');
      iframe.setAttribute('allow', 'encrypted-media; clipboard-write');
      iframe.style.height = '152px';
      iframe.style.aspectRatio = 'auto';
      iframe.loading = 'lazy';
      stage.appendChild(iframe);
      hint.textContent = 'Not: Spotify kuralı gereği oynatma site üzerinden başlatılamaz — oynatıcıdaki oynat düğmesine dokunman gerekebilir.';
    }

    /* ---- Yerel dosya ---- */
    let audio = null;
    function buildLocal() {
      audio = new Audio(url);
      audio.loop = !!M.loop;
      audio.preload = 'none';
      audio.volume = clamp(Number(M.volume) || 0.7, 0, 1);
      audio.controls = true;
      audio.setAttribute('aria-label', 'Müzik oynatıcı');
      stage.appendChild(audio);
      audio.addEventListener('error', () => {
        errorBox('Müzik dosyası bulunamadı: "' + url + '". Dosyayı site klasörüne yükleyip adını config.js → music → url kısmına yaz (örn: music.mp3).');
        toastOnce('Müzik dosyası bulunamadı: ' + url);
        setPlaying(false);
      });
      audio.addEventListener('play', () => setPlaying(true));
      audio.addEventListener('pause', () => setPlaying(false));
      hint.textContent = 'Düğme sesi açıp kapatır; ayrıntılar küçük oynatıcıda.';
    }
    function localToggle() {
      if (!audio) return;
      if (audio.paused) audio.play().catch(() => Toast.show('Tarayıcı ses başlatmayı engelledi — küçük oynatıcıdaki oynat düğmesine dokun.', 4200));
      else audio.pause();
    }

    /* ---- Sağlayıcıyı kur ---- */
    function setup() {
      stage.innerHTML = '';
      failed = false;
      if (provider === 'youtube') buildYouTube();
      else if (provider === 'spotify') buildSpotify();
      else if (provider === 'local') buildLocal();
      else {
        errorBox('Bilinmeyen müzik sağlayıcısı: "' + provider + '". config.js → music → provider değeri "youtube", "spotify" veya "local" olmalı.');
      }
    }

    /* ---- Düğme davranışı ---- */
    function fabActivate() {
      if (failed) {
        openPanel();
        toastOnce(failedMsg || 'Müzik şu anda kullanılamıyor — config.js → music bölümünü kontrol et.');
        return;
      }
      if (provider === 'spotify') {
        if (panelOpen) closePanel(); else openPanel();
        fab.setAttribute('aria-pressed', panelOpen ? 'true' : 'false');
        return;
      }
      openPanel();
      if (provider === 'youtube') ytToggle();
      else localToggle();
    }

    fab.addEventListener('click', fabActivate);
    if (closeBtn) closeBtn.addEventListener('click', closePanel);

    /* ---- İlk kullanıcı dokunuşunda otomatik başlat (isteğe bağlı) ---- */
    if (M.autoplay) {
      const gesture = () => {
        document.removeEventListener('pointerdown', gesture);
        document.removeEventListener('keydown', gesture);
        setTimeout(() => {
          if (!failed) {
            if (provider === 'spotify') {
              if (!panelOpen) openPanel();
            } else if (provider === 'youtube') {
              openPanel();
              if (ytPlayer && ytPlayer.playVideo) ytPlayer.playVideo();
              else ytPending = true;
            } else if (audio) {
              openPanel();
              audio.play().catch(() => {});
            }
          }
        }, 60);
      };
      document.addEventListener('pointerdown', gesture, { passive: true });
      document.addEventListener('keydown', gesture);
    }

    function init() {
      set('musicLabel', M.label || 'Müzik');
      fab.hidden = false;
      fab.setAttribute('aria-pressed', 'false');
      setup();
    }

    return { init };
  })();

  /* ===================================================================
     14) SAYFA GÖRÜNÜRLÜĞÜ — dekorlar sekme gizliyken duraklar
  =================================================================== */
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      document.body.classList.add('paused');
      Confetti.pause();
    } else {
      document.body.classList.remove('paused');
      Confetti.resume();
    }
  });

  /* ===================================================================
     15) BAŞLAT
  =================================================================== */
  function boot() {
    Gift.init();
    buildNav();
    fillHero();
    fillSectionHeads();
    buildHeroDecor();
    buildFinaleDecor();
    Gallery.render();
    setupLetter();
    setupFinale();
    Music.init();
    setupActiveNav();
    setupReveal();
    /* Hediye açılışı varsa kutlama ondan sonra, yoksa hemen */
    if (!Gift.active) heroCelebration();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
