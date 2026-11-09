/* Penumbra — conteúdo estático (emoções, frases, perguntas). Tudo local, nada vem de servidor. */
var D = {};

D.EMOTIONS = [
  { id: 'feliz', n: 'Feliz', t: 'pos' },
  { id: 'triste', n: 'Triste', t: 'neg' },
  { id: 'ansioso', n: 'Ansioso', t: 'neg' },
  { id: 'solitario', n: 'Solitário', t: 'neg' },
  { id: 'saudade', n: 'Com saudade', t: 'neu' },
  { id: 'frustrado', n: 'Frustrado', t: 'neg' },
  { id: 'irritado', n: 'Irritado', t: 'neg' },
  { id: 'confuso', n: 'Confuso', t: 'neu' },
  { id: 'cansado', n: 'Cansado', t: 'neg' },
  { id: 'motivado', n: 'Motivado', t: 'pos' },
  { id: 'tranquilo', n: 'Tranquilo', t: 'pos' },
  { id: 'medo', n: 'Com medo', t: 'neg' },
  { id: 'apaixonado', n: 'Apaixonado', t: 'pos' },
  { id: 'indiferente', n: 'Indiferente', t: 'neu' },
  { id: 'esperancoso', n: 'Esperançoso', t: 'pos' }
];

D.FEEL_Q = [
  'O que aconteceu?',
  'O que estou sentindo exatamente?',
  'Existe algum motivo para me sentir assim?',
  'O que eu gostaria que fosse diferente?',
  'O que eu precisava ouvir neste momento?'
];

D.VENT_Q = [
  'O que está passando pela minha cabeça?',
  'O que mais está me machucando?',
  'Existe algo que eu gostaria de dizer para alguém?',
  'O que estou guardando para mim?',
  'Do que estou sentindo falta?',
  'O que eu gostaria que alguém entendesse sobre mim?',
  'O que eu não consegui dizer hoje?',
  'Qual é o pensamento que insiste em voltar?'
];

D.QUOTES = [
  'Nem tudo precisa ser resolvido hoje. Algumas coisas só precisam ser ditas.',
  'O silêncio também guarda coisas importantes.',
  'Você não precisa estar bem para escrever.',
  'Sentir já é um tipo de verdade, mesmo antes de ter nome.',
  'Algumas lembranças só ficam leves depois de postas em palavras.',
  'Cansaço também é uma informação.',
  'Não existe prazo para entender o que se passa por dentro.',
  'Hoje pode ser só um dia. E tudo bem.',
  'Escrever não conserta nada, mas ajuda a enxergar a bagunça.',
  'O que não cabe na conversa pode caber na página.',
  'Às vezes cuidar de si é só continuar.',
  'Nem toda pausa é desistência.',
  'Dá para sentir duas coisas opostas ao mesmo tempo.',
  'Você pode mudar de ideia sobre si mesmo. Isso não é incoerência.',
  'Há dias em que o suficiente é pouco, e ainda assim é suficiente.',
  'Não precisa ter um bom motivo para estar triste.',
  'Ninguém lê isto além de você.',
  'Escreva como se ninguém fosse julgar. Aqui, ninguém vai.',
  'A saudade também é um jeito de guardar.',
  'O que você sente hoje não é a história inteira.',
  'Algumas respostas só aparecem depois da pergunta certa.',
  'Dias lentos também contam.',
  'Palavras tortas valem mais do que silêncio forçado.',
  'Você não é obrigado a transformar dor em lição.',
  'Há coisas que mudam devagar demais para serem notadas — até você reler.',
  'Anotar o dia é uma forma de não deixá-lo desaparecer.',
  'Está tudo bem não estar tudo bem.',
  'Algumas noites pedem só uma luz baixa e uma página aberta.',
  'Não precisa terminar a frase para ela ter valido a pena.',
  'Lembrar com carinho e sentir falta podem ser a mesma coisa.',
  'Ser sincero aqui é o primeiro passo para ser mais gentil consigo.',
  'O que você escreve hoje será outra pessoa lendo, amanhã.'
];

D.REFLECT = [
  'O que mudou em mim nos últimos meses?',
  'O que eu ainda não consegui aceitar?',
  'Qual lembrança gostaria de reviver?',
  'O que tenho medo de perder?',
  'O que aprendi com uma experiência difícil?',
  'O que gostaria de mudar na minha vida?',
  'Quando foi a última vez que me senti verdadeiramente bem?',
  'Que parte de mim eu costumo esconder dos outros?',
  'O que eu faria se não tivesse medo de errar?',
  'Quem me fez bem recentemente, e eu nunca disse?',
  'Do que eu estou cansado de fingir?',
  'O que eu gostaria de ter ouvido aos 10 anos?',
  'Que hábito me faz mal e eu continuo repetindo?',
  'O que me dá paz, mesmo que por poucos minutos?',
  'Qual conversa eu tenho evitado?',
  'O que eu tenho carregado que não é meu?',
  'Em que momento recente me senti mais eu mesmo?',
  'O que eu perdoaria em mim, se pudesse?',
  'Do que eu sinto falta e não sei nomear?',
  'O que eu espero da minha vida daqui a um ano?',
  'Que pessoa eu era há dois anos? O que ela diria de mim hoje?',
  'O que me irrita com frequência e talvez esteja escondendo outra coisa?',
  'Qual foi a última vez que chorei, e por quê?',
  'O que eu gostaria que fosse mais simples?',
  'Que lugar me faz sentir seguro?',
  'O que eu admiro nas pessoas e gostaria de ter mais?',
  'Qual é o meu maior cansaço agora?',
  'O que eu adiei por medo?',
  'Que parte da minha rotina eu realmente gosto?',
  'Que decisão eu tomei e ainda me pergunto se foi certa?',
  'O que eu gostaria de dizer a quem já foi embora da minha vida?',
  'Quais são as três coisas que mais pesam hoje?',
  'O que eu preciso largar para seguir?',
  'Que memória boa eu quase esqueci?',
  'Quem eu sou quando ninguém está olhando?',
  'O que eu mais quero que as pessoas entendam sobre mim?',
  'Que pequeno gesto de cuidado eu consigo ter comigo hoje?',
  'Qual foi o melhor dia do último ano? O que ele tinha?',
  'O que está me faltando agora: descanso, companhia, tempo ou coragem?',
  'Como eu me trato quando erro? E como trataria um amigo?',
  'O que eu gostaria de aprender sobre mim?',
  'Qual limite eu preciso colocar e ainda não coloquei?',
  'Qual música ou cheiro me leva de volta a outra fase da vida?',
  'O que eu me proíbo de querer?',
  'Que parte da minha história eu ainda não contei para ninguém?',
  'O que eu estou esperando que aconteça para me sentir melhor?',
  'O que eu faria diferente se tivesse uma segunda chance de um dia específico?',
  'Qual foi a última coisa que me fez rir de verdade?',
  'O que me faz sentir pequeno? O que me faz sentir inteiro?',
  'Que versão de mim eu gostaria de proteger?',
  'Qual medo meu já não faz mais tanto sentido?'
];

D.LETTER_KINDS = [
  { id: 'future', n: 'Para o meu eu do futuro', d: 'Lacrada até uma data que você escolher.', needsDate: true, hello: 'Querido eu do futuro,' },
  { id: 'past', n: 'Para o meu eu do passado', d: 'Para quem você era, e talvez precisasse ouvir algo.', hello: 'Querido eu do passado,' },
  { id: 'never', n: 'Uma carta que nunca vou enviar', d: 'Escreva tudo. Ela fica só aqui.', hello: '' },
  { id: 'someone', n: 'Sobre alguém importante', d: 'Sobre quem faz ou fez diferença na sua vida.', hello: '' },
  { id: 'unsolved', n: 'Sobre algo que ainda não superei', d: 'Sem pressa de terminar.', hello: '' }
];

D.GROUND = [
  'Olhe ao redor e nomeie 5 coisas que você vê.',
  'Toque em 4 coisas e perceba a textura de cada uma.',
  'Escute 3 sons, mesmo os mais distantes.',
  'Perceba 2 cheiros. Se não houver, lembre de 2 de que você gosta.',
  'Perceba 1 gosto na boca, ou beba um gole de água.'
];

D.SPACES = [
  { id: 'reflect', n: 'Reflexões', d: 'Uma pergunta por vez, sem repetir.' },
  { id: 'letters', n: 'Cartas para o meu futuro', d: 'Cartas lacradas e abertas.' },
  { id: 'capsule', n: 'Cápsula do tempo', d: 'Pensamentos para abrir meses depois.' },
  { id: 'never', n: 'Coisas que nunca disse', d: 'O que ficou engasgado.' },
  { id: 'good', n: 'Pequenas coisas que me fizeram bem', d: 'Uma linha por vez.' },
  { id: 'moment', n: 'Momentos que quero guardar', d: 'Com foto, se quiser.' },
  { id: 'mural', n: 'Mural de lembranças', d: 'Suas imagens em um só lugar.' },
  { id: 'dream', n: 'Sonhos', d: 'Registre antes de esquecer.' },
  { id: 'thought', n: 'Pensamentos soltos', d: 'Sem forma, sem título.' }
];

D.WELCOME = {
  neg: [
    'Pelo que você registrou, o dia anda pesado. Aqui não precisa fazer sentido.',
    'Se estiver ruim, pode largar aqui o que não cabe em outro lugar.',
    'Sem pressa e sem obrigação de se sentir melhor. Só escreva.'
  ],
  pos: [
    'Dias mais leves também merecem registro. Guarde o que ele tem.',
    'Anote antes que passe — os dias bons também escapam.'
  ],
  neu: [
    'Escreva o que vier, mesmo que não faça sentido ainda.',
    'Sem tema, sem estrutura. Pode começar pelo meio.'
  ],
  none: [
    'Este espaço é só seu.',
    'Nada aqui sai do seu aparelho.',
    'Pode começar por qualquer ponto.'
  ]
};

D.SWATCHES = ['#b9a7e8', '#c4575f', '#8fae8b', '#8fb3d9', '#d4a35a', '#d9a0b3', '#e9e7e2'];

D.FONTS = {
  serif: { n: 'Serifada', v: "Georgia,'Noto Serif','Droid Serif',serif" },
  sans: { n: 'Simples', v: "Roboto,'Segoe UI',system-ui,sans-serif" },
  mono: { n: 'Máquina de escrever', v: "'Courier New','Droid Sans Mono',ui-monospace,monospace" }
};

D.DEFAULTS = {
  name: 'Penumbra',
  nick: '',
  accent: '#b9a7e8',
  theme: 'dark',
  font: 'serif',
  fsize: 17,
  lockMin: 5,
  customEmo: [],
  quotes: [],
  questions: [],
  trusted: { name: '', phone: '', msg: 'Estou passando por um momento difícil. Pode falar comigo?' },
  remind: { on: false, time: '21:00' },
  ambient: { kind: 'off', vol: 0.5 },
  usedQ: [],
  curQ: '',
  lastBackup: 0,
  created: 0
};
/* Penumbra — armazenamento local (IndexedDB) + criptografia (WebCrypto AES-GCM / PBKDF2). */
var Store = (function () {
  var enc = new TextEncoder(), dec = new TextDecoder();
  var ITER = 150000;
  var db = null, key = null, meta = null;
  var S = { items: [], set: null, enc: false, unlocked: false, bad: 0 };
  var q = Promise.resolve();

  var hasCrypto = !!(window.crypto && crypto.subtle);

  /* ---------- utilidades ---------- */
  function b64(u8) {
    var s = '', i, n = u8.length;
    for (i = 0; i < n; i += 0x8000) s += String.fromCharCode.apply(null, u8.subarray(i, i + 0x8000));
    return btoa(s);
  }
  function unb64(s) {
    var b = atob(s), n = b.length, u = new Uint8Array(n);
    for (var i = 0; i < n; i++) u[i] = b.charCodeAt(i);
    return u;
  }
  function rnd(n) { return crypto.getRandomValues(new Uint8Array(n)); }
  function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
  function enqueue(fn) {
    var p = q.then(fn);
    q = p.then(null, function (e) { console.error('store', e); });
    return p;
  }

  async function derive(pass, salt, iter) {
    var base = await crypto.subtle.importKey('raw', enc.encode(pass), 'PBKDF2', false, ['deriveKey']);
    return crypto.subtle.deriveKey(
      { name: 'PBKDF2', salt: salt, iterations: iter, hash: 'SHA-256' },
      base, { name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt']);
  }
  async function encBytes(k, bytes) {
    var iv = rnd(12);
    var ct = await crypto.subtle.encrypt({ name: 'AES-GCM', iv: iv }, k, bytes);
    return { iv: iv, ct: new Uint8Array(ct) };
  }
  async function pack(obj, k) {
    k = k === undefined ? key : k;
    if (!k) return { d: obj };
    return encBytes(k, enc.encode(JSON.stringify(obj)));
  }
  async function unpack(rec, k) {
    if (rec.ct) {
      var p = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: rec.iv }, k || key, rec.ct);
      return JSON.parse(dec.decode(p));
    }
    return rec.d;
  }

  /* ---------- IndexedDB ---------- */
  function openDB() {
    return new Promise(function (res, rej) {
      if (!window.indexedDB) return rej(new Error('IndexedDB indisponível'));
      var r = indexedDB.open('penumbra', 1);
      r.onupgradeneeded = function () {
        var d = r.result;
        d.createObjectStore('items', { keyPath: 'id' });
        d.createObjectStore('imgs', { keyPath: 'id' });
        d.createObjectStore('kv', { keyPath: 'id' });
      };
      r.onsuccess = function () { res(r.result); };
      r.onerror = function () { rej(r.error); };
      r.onblocked = function () { rej(new Error('bloqueado')); };
    });
  }
  function done(t) {
    return new Promise(function (res, rej) {
      t.oncomplete = function () { res(); };
      t.onerror = function () { rej(t.error); };
      t.onabort = function () { rej(t.error || new Error('abort')); };
    });
  }
  function reqp(r) {
    return new Promise(function (res, rej) { r.onsuccess = function () { res(r.result); }; r.onerror = function () { rej(r.error); }; });
  }
  function all(store) { return reqp(db.transaction(store).objectStore(store).getAll()); }
  function get(store, id) { return reqp(db.transaction(store).objectStore(store).get(id)); }
  async function put(store, rec) {
    var t = db.transaction(store, 'readwrite');
    t.objectStore(store).put(rec);
    return done(t);
  }
  async function putMany(list) { // list: [{s:store, r:rec}], uma transação (atômica)
    var names = [], i;
    for (i = 0; i < list.length; i++) if (names.indexOf(list[i].s) < 0) names.push(list[i].s);
    var t = db.transaction(names, 'readwrite');
    for (i = 0; i < list.length; i++) t.objectStore(list[i].s).put(list[i].r);
    return done(t);
  }

  function mergeSet(s) {
    var o = JSON.parse(JSON.stringify(D.DEFAULTS));
    if (s) for (var k in s) o[k] = s[k];
    o.trusted = Object.assign({}, D.DEFAULTS.trusted, o.trusted || {});
    o.remind = Object.assign({}, D.DEFAULTS.remind, o.remind || {});
    o.ambient = Object.assign({}, D.DEFAULTS.ambient, o.ambient || {});
    return o;
  }

  async function loadAll() {
    var raw = await all('items'), out = [], bad = 0;
    for (var i = 0; i < raw.length; i++) {
      try { var o = await unpack(raw[i]); o.id = raw[i].id; out.push(o); } catch (e) { bad++; }
    }
    S.items = out; S.bad = bad;
    var sr = await get('kv', 'settings');
    var sv = null;
    if (sr) { try { sv = await unpack(sr); } catch (e) { sv = null; } }
    S.set = mergeSet(sv);
    S.unlocked = true;
  }

  /* ---------- API ---------- */
  var API = {
    S: S, uid: uid, hasCrypto: hasCrypto, ITER: ITER,

    init: async function () {
      db = await openDB();
      meta = await get('kv', 'meta');
      var sr = await get('kv', 'settings');
      S.enc = !!(meta && meta.enc);
      var fresh = !meta && !sr;
      if (!S.enc) await loadAll();
      return { enc: S.enc, fresh: fresh };
    },

    unlock: async function (pass) {
      if (!meta || !meta.enc) return true;
      try {
        var k = await derive(pass, unb64(meta.salt), meta.iter);
        var v = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: unb64(meta.ver.iv) }, k, unb64(meta.ver.ct));
        if (dec.decode(v) !== 'penumbra-ok') return false;
        key = k;
      } catch (e) { return false; }
      await loadAll();
      return true;
    },

    flush: function () { return q; },

    lock: function () { key = null; S.items = []; S.set = null; S.unlocked = false; },

    isEncrypted: function () { return !!(meta && meta.enc); },

    /* itens */
    byId: function (id) { for (var i = 0; i < S.items.length; i++) if (S.items[i].id === id) return S.items[i]; return null; },

    saveItem: function (it) {
      it.u = Date.now();
      if (!it.c) it.c = it.u;
      if (!API.byId(it.id)) S.items.push(it);
      return enqueue(async function () {
        var r = await pack(it); r.id = it.id;
        await put('items', r);
      });
    },

    deleteItem: function (id) {
      var it = API.byId(id);
      if (it) {
        S.items.splice(S.items.indexOf(it), 1);
        var imgs = it.img || [];
        return enqueue(async function () {
          var t = db.transaction(['items', 'imgs'], 'readwrite');
          t.objectStore('items').delete(id);
          for (var i = 0; i < imgs.length; i++) t.objectStore('imgs').delete(imgs[i]);
          return done(t);
        });
      }
      return Promise.resolve();
    },

    saveSettings: function () {
      return enqueue(async function () {
        var r = await pack(S.set); r.id = 'settings';
        await put('kv', r);
      });
    },

    /* imagens */
    putImg: function (dataUrl) {
      var id = 'i' + uid();
      return enqueue(async function () {
        var r = await pack({ data: dataUrl }); r.id = id;
        await put('imgs', r);
        return id;
      });
    },
    getImg: async function (id) {
      var r = await get('imgs', id);
      if (!r) return null;
      return (await unpack(r)).data;
    },
    delImg: function (id) {
      return enqueue(function () {
        var t = db.transaction('imgs', 'readwrite');
        t.objectStore('imgs').delete(id);
        return done(t);
      });
    },

    /* senha / criptografia */
    setPassword: function (pass) {
      return enqueue(async function () {
        var salt = rnd(16), nk = await derive(pass, salt, ITER);
        var list = [], i, raw, o;
        for (i = 0; i < S.items.length; i++) {
          var r1 = await pack(S.items[i], nk); r1.id = S.items[i].id; list.push({ s: 'items', r: r1 });
        }
        raw = await all('imgs');
        for (i = 0; i < raw.length; i++) {
          o = await unpack(raw[i]);
          var r2 = await pack(o, nk); r2.id = raw[i].id; list.push({ s: 'imgs', r: r2 });
        }
        var r3 = await pack(S.set, nk); r3.id = 'settings'; list.push({ s: 'kv', r: r3 });
        var v = await encBytes(nk, enc.encode('penumbra-ok'));
        var nm = { id: 'meta', enc: true, salt: b64(salt), iter: ITER, ver: { iv: b64(v.iv), ct: b64(v.ct) } };
        list.push({ s: 'kv', r: nm });
        await putMany(list);
        key = nk; meta = nm; S.enc = true;
      });
    },

    removePassword: function () {
      return enqueue(async function () {
        var list = [], i, raw, o;
        for (i = 0; i < S.items.length; i++) list.push({ s: 'items', r: { id: S.items[i].id, d: S.items[i] } });
        raw = await all('imgs');
        for (i = 0; i < raw.length; i++) { o = await unpack(raw[i]); list.push({ s: 'imgs', r: { id: raw[i].id, d: o } }); }
        list.push({ s: 'kv', r: { id: 'settings', d: S.set } });
        var nm = { id: 'meta', enc: false };
        list.push({ s: 'kv', r: nm });
        await putMany(list);
        key = null; meta = nm; S.enc = false;
      });
    },

    checkPassword: async function (pass) {
      if (!meta || !meta.enc) return false;
      try {
        var k = await derive(pass, unb64(meta.salt), meta.iter);
        var v = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: unb64(meta.ver.iv) }, k, unb64(meta.ver.ct));
        return dec.decode(v) === 'penumbra-ok';
      } catch (e) { return false; }
    },

    /* backup */
    exportData: async function (pass) {
      await q;
      var raw = await all('imgs'), imgs = [], i;
      for (i = 0; i < raw.length; i++) { try { var o = await unpack(raw[i]); imgs.push({ id: raw[i].id, data: o.data }); } catch (e) { } }
      var payload = { app: 'penumbra', v: 1, t: Date.now(), set: S.set, items: S.items, imgs: imgs };
      var json = JSON.stringify(payload);
      if (!pass) return json;
      var salt = rnd(16), k = await derive(pass, salt, ITER), e = await encBytes(k, enc.encode(json));
      return JSON.stringify({ app: 'penumbra', v: 1, enc: true, iter: ITER, salt: b64(salt), iv: b64(e.iv), ct: b64(e.ct) });
    },

    parseBackup: function (text) {
      var o = JSON.parse(text);
      if (!o || o.app !== 'penumbra') throw new Error('Arquivo não é um backup do Penumbra.');
      return o;
    },

    decryptBackup: async function (o, pass) {
      var k = await derive(pass, unb64(o.salt), o.iter);
      var p;
      try { p = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: unb64(o.iv) }, k, unb64(o.ct)); }
      catch (e) { throw new Error('Senha do backup incorreta.'); }
      var payload = JSON.parse(dec.decode(p));
      if (!payload || !Array.isArray(payload.items)) throw new Error('Backup inválido.');
      return payload;
    },

    applyBackup: function (p, mode) {
      return enqueue(async function () {
        var list = [], i, n = { items: 0, imgs: 0 };
        var existing = {}, exImgs = {};
        if (mode === 'merge') {
          for (i = 0; i < S.items.length; i++) existing[S.items[i].id] = S.items[i];
          var rawI = await all('imgs');
          for (i = 0; i < rawI.length; i++) exImgs[rawI[i].id] = 1;
        }
        var newItems = mode === 'merge' ? S.items.slice() : [];
        for (i = 0; i < p.items.length; i++) {
          var it = p.items[i], cur = existing[it.id];
          if (!it || !it.id) continue;
          if (cur && (cur.u || 0) >= (it.u || 0)) continue;
          if (cur) newItems[newItems.indexOf(cur)] = it; else newItems.push(it);
          var r = await pack(it); r.id = it.id; list.push({ s: 'items', r: r }); n.items++;
        }
        var imgs = p.imgs || [];
        for (i = 0; i < imgs.length; i++) {
          if (exImgs[imgs[i].id]) continue;
          var r2 = await pack({ data: imgs[i].data }); r2.id = imgs[i].id; list.push({ s: 'imgs', r: r2 }); n.imgs++;
        }
        var ns;
        if (mode === 'merge') {
          ns = S.set;
          var inc = mergeSet(p.set || {});
          var ids = {}; ns.customEmo.forEach(function (e) { ids[e.id] = 1; });
          inc.customEmo.forEach(function (e) { if (!ids[e.id]) ns.customEmo.push(e); });
          inc.quotes.forEach(function (x) { if (ns.quotes.indexOf(x) < 0) ns.quotes.push(x); });
          inc.questions.forEach(function (x) { if (ns.questions.indexOf(x) < 0) ns.questions.push(x); });
        } else {
          ns = mergeSet(p.set || {});
        }
        var r3 = await pack(ns); r3.id = 'settings'; list.push({ s: 'kv', r: r3 });
        // substituição total: limpa antes (na mesma transação)
        var names = ['items', 'imgs', 'kv'];
        var t = db.transaction(names, 'readwrite');
        if (mode !== 'merge') { t.objectStore('items').clear(); t.objectStore('imgs').clear(); }
        for (i = 0; i < list.length; i++) t.objectStore(list[i].s).put(list[i].r);
        await done(t);
        S.items = newItems; S.set = ns;
        return n;
      });
    },

    /* restaurar numa instalação sem senha conhecida (esqueci a senha / celular novo) */
    resetAndRestore: async function (p) {
      await q;
      await API.wipeStores();
      key = null; meta = null; S.enc = false;
      S.items = []; S.set = mergeSet(null); S.unlocked = true;
      return API.applyBackup(p, 'replace');
    },

    wipeStores: async function () {
      var t = db.transaction(['items', 'imgs', 'kv'], 'readwrite');
      t.objectStore('items').clear(); t.objectStore('imgs').clear(); t.objectStore('kv').clear();
      await done(t);
      key = null; meta = null; S.enc = false; S.items = []; S.set = null; S.unlocked = false;
    },

    createFresh: async function (set) {
      S.set = mergeSet(set); S.set.created = Date.now();
      S.unlocked = true;
      await API.saveSettings();
    }
  };
  return API;
})();
/* Penumbra — helpers de interface: DOM, ícones, camadas (voltar do Android), diálogos, datas. */
function $(s, r) { return (r || document).querySelector(s); }

function h(tag, a) {
  var e = document.createElement(tag), val;
  if (a) {
    for (var k in a) {
      var v = a[k];
      if (v == null || v === false) continue;
      if (k === 'class') e.className = v;
      else if (k === 'on') { for (var ev in v) e.addEventListener(ev, v[ev]); }
      else if (k === 'text') e.textContent = v;
      else if (k === 'value') val = v;
      else if (k === 'checked') e.checked = !!v;
      else if (k === 'style') e.style.cssText = v;
      else e.setAttribute(k, v === true ? '' : v);
    }
  }
  for (var i = 2; i < arguments.length; i++) hAdd(e, arguments[i]);
  if (val !== undefined) e.value = val;
  return e;
}
function hAdd(e, c) {
  if (c == null || c === false) return;
  if (Array.isArray(c)) { for (var i = 0; i < c.length; i++) hAdd(e, c[i]); }
  else e.appendChild(c.nodeType ? c : document.createTextNode(String(c)));
}
function clear(el) { while (el.firstChild) el.removeChild(el.firstChild); return el; }

/* ---------- ícones (traço fino) ---------- */
var ICONS = {
  home: 'M4 11l8-7 8 7v9a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1z',
  book: 'M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3z M5 17a3 3 0 0 1 3-3h11',
  pulse: 'M3 12h4l2-6 4 12 2-6h6',
  spark: 'M12 3l2.2 6.8L21 12l-6.8 2.2L12 21l-2.2-6.8L3 12l6.8-2.2z',
  sliders: 'M4 7h9M17 7h3M4 17h3M11 17h9 M13 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0 M7 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0',
  plus: 'M12 5v14M5 12h14',
  search: 'M11 4a7 7 0 1 0 0 14a7 7 0 1 0 0-14 M20 20l-4-4',
  star: 'M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8-4.3-4.1 5.9-.9z',
  trash: 'M5 7h14M10 7V4h4v3M7 7l1 13h8l1-13',
  back: 'M15 5l-7 7 7 7',
  x: 'M6 6l12 12M18 6L6 18',
  image: 'M4 5h16v14H4z M4 16l5-5 4 4 3-3 4 4 M9 9a1 1 0 1 0 .01 0',
  check: 'M5 12.5l4.5 4.5L19 7',
  lock: 'M6 11h12v9H6z M8 11V8a4 4 0 0 1 8 0v3',
  moon: 'M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z',
  wind: 'M3 9h11a3 3 0 1 0-3-3 M3 15h15a3 3 0 1 1-3 3 M3 12h8',
  music: 'M9 18V6l10-2v12 M3 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0 M13 16a3 3 0 1 0 6 0a3 3 0 1 0-6 0',
  eye: 'M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0',
  down: 'M12 4v11 M7 11l5 5 5-5 M5 20h14',
  up: 'M12 16V5 M7 9l5-5 5 5 M5 20h14',
  mail: 'M4 6h16v12H4z M4 7l8 6 8-7',
  chev: 'M9 5l7 7-7 7',
  edit: 'M4 20h4L19 9l-4-4L4 16z',
  cal: 'M4 6h16v14H4z M4 10h16 M8 3v4 M16 3v4',
  phone: 'M6 4h4l2 5-2.5 1.5a11 11 0 0 0 4.5 4.5L15 12.5l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 4 6a2 2 0 0 1 2-2z',
  play: 'M7 4l13 8-13 8z',
  pause: 'M8 5v14M16 5v14',
  more: 'M5 12h.01M12 12h.01M19 12h.01',
  share: 'M12 15V4 M8 8l4-4 4 4 M5 12v8h14v-8',
  sos: 'M12 21s-7-4.6-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.4-7 10-7 10z'
};
function ico(n, s) {
  var sp = document.createElement('span');
  sp.className = 'ico';
  var z = s || 22;
  sp.innerHTML = '<svg width="' + z + '" height="' + z + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="' + ICONS[n] + '"/></svg>';
  return sp;
}

/* ---------- datas (pt-BR, sem depender de Intl) ---------- */
var U = {};
U.MES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
U.MESC = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
U.DIA = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
U.DIAC = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];
U.pad = function (n) { return n < 10 ? '0' + n : '' + n; };
U.dk = function (ts) { var d = new Date(ts); return d.getFullYear() + '-' + U.pad(d.getMonth() + 1) + '-' + U.pad(d.getDate()); };
U.time = function (ts) { var d = new Date(ts); return U.pad(d.getHours()) + ':' + U.pad(d.getMinutes()); };
U.date = function (ts) { var d = new Date(ts); return d.getDate() + ' de ' + U.MES[d.getMonth()] + ' de ' + d.getFullYear(); };
U.dateShort = function (ts) { var d = new Date(ts); return U.pad(d.getDate()) + '.' + U.pad(d.getMonth() + 1) + '.' + String(d.getFullYear()).slice(2); };
U.full = function (ts) { var d = new Date(ts); return U.DIAC[d.getDay()] + ', ' + d.getDate() + ' ' + U.MESC[d.getMonth()] + ' ' + d.getFullYear(); };
U.toLocalInput = function (ts) { var d = new Date(ts); return d.getFullYear() + '-' + U.pad(d.getMonth() + 1) + '-' + U.pad(d.getDate()) + 'T' + U.pad(d.getHours()) + ':' + U.pad(d.getMinutes()); };
U.dayStart = function (ts) { var d = new Date(ts); d.setHours(0, 0, 0, 0); return d.getTime(); };
U.ago = function (ts) {
  var m = Math.floor((Date.now() - ts) / 60000);
  if (m < 1) return 'agora';
  if (m < 60) return 'há ' + m + ' min';
  var hh = Math.floor(m / 60);
  if (hh < 24) return 'há ' + hh + ' h';
  var d = Math.floor(hh / 24);
  if (d < 30) return 'há ' + d + (d === 1 ? ' dia' : ' dias');
  var mo = Math.floor(d / 30.4);
  if (mo < 12) return 'há ' + mo + (mo === 1 ? ' mês' : ' meses');
  var y = Math.floor(mo / 12);
  return 'há ' + y + (y === 1 ? ' ano' : ' anos');
};
U.until = function (ts) {
  var d = Math.ceil((ts - Date.now()) / 86400000);
  if (d <= 0) return 'hoje';
  if (d === 1) return 'amanhã';
  if (d < 60) return 'em ' + d + ' dias';
  var mo = Math.round(d / 30.4);
  if (mo < 12) return 'em ' + mo + ' meses';
  var y = (d / 365).toFixed(1).replace('.', ',').replace(',0', '');
  return 'em ' + y + ' anos';
};
U.words = function (t) { t = (t || '').trim(); return t ? t.split(/\s+/).length : 0; };
U.hash = function (s) { var x = 0; for (var i = 0; i < s.length; i++) x = (x * 31 + s.charCodeAt(i)) | 0; return Math.abs(x); };
U.dayNum = function (ts) { var d = new Date(ts); return Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86400000); };

/* ---------- camadas com suporte ao botão Voltar do Android ---------- */
var Layers = (function () {
  var st = [], ign = 0, queue = [];
  function host() { return $('#layers'); }
  function push(el, onClose) {
    if (ign > 0) { queue.push(function () { push(el, onClose); }); return null; }
    try { history.pushState({ pn: st.length + 1 }, ''); } catch (e) { }
    var L = { el: el, onClose: onClose };
    st.push(L);
    host().appendChild(el);
    return L;
  }
  function drop(L) {
    var i = st.indexOf(L);
    if (i < 0) return;
    st.splice(i, 1);
    L.el.classList.add('out');
    setTimeout(function () { if (L.el.parentNode) L.el.parentNode.removeChild(L.el); }, 140);
    try { if (L.onClose) L.onClose(); } catch (e) { console.error(e); }
  }
  function close(L) {
    if (!L || st.indexOf(L) < 0) return;
    while (st.length && st[st.length - 1] !== L) { drop(st[st.length - 1]); ign++; history.back(); }
    drop(L); ign++; history.back();
  }
  function closeAll() {
    var n = st.length;
    while (st.length) drop(st[st.length - 1]);
    if (n) { ign++; history.go(-n); }
  }
  window.addEventListener('popstate', function () {
    if (ign > 0) {
      ign--;
      if (ign === 0 && queue.length) { var qq = queue; queue = []; qq.forEach(function (f) { f(); }); }
      return;
    }
    if (st.length) drop(st[st.length - 1]);
  });
  return { push: push, close: close, closeAll: closeAll, count: function () { return st.length; } };
})();

/* camada de tela cheia */
function openLayer(node, onClose) {
  var el = h('div', { class: 'layer' }, node);
  var L = Layers.push(el, onClose);
  return L;
}

/* folha inferior (bottom sheet). build pode ser um nó ou function(close) -> nó */
function openSheet(build, onClose) {
  var L, sheet = h('div', { class: 'sheet' });
  var bg = h('div', { class: 'sheet-bg', on: { click: function (e) { if (e.target === bg) Layers.close(L); } } }, sheet);
  var node = typeof build === 'function' ? build(function () { Layers.close(L); }) : build;
  sheet.appendChild(node);
  L = Layers.push(bg, onClose);
  return L;
}
function sheetTitle(title, close) {
  return h('div', { class: 'sh-head' },
    h('div', { class: 'sh-title', text: title }),
    h('button', { class: 'ib', 'aria-label': 'Fechar', on: { click: close } }, ico('x')));
}

/* diálogo de confirmação: Promise<boolean> */
function ask(o) {
  return new Promise(function (res) {
    var L, answered = false;
    function fin(v) { if (answered) return; answered = true; res(v); Layers.close(L); }
    var box = h('div', { class: 'dlg' },
      h('div', { class: 'dlg-t', text: o.title }),
      o.msg ? h('div', { class: 'dlg-m', text: o.msg }) : null,
      h('div', { class: 'dlg-b' },
        h('button', { class: 'btn', text: o.cancel || 'Cancelar', on: { click: function () { fin(false); } } }),
        h('button', { class: 'btn ' + (o.danger ? 'danger' : 'pri'), text: o.ok || 'OK', on: { click: function () { fin(true); } } })));
    L = openSheet(box, function () { if (!answered) { answered = true; res(false); } });
  });
}

/* diálogo com escolhas: Promise<id|null> */
function choose(title, msg, opts) {
  return new Promise(function (res) {
    var L, answered = false;
    function fin(v) { if (answered) return; answered = true; res(v); Layers.close(L); }
    var box = h('div', { class: 'dlg' },
      h('div', { class: 'dlg-t', text: title }),
      msg ? h('div', { class: 'dlg-m', text: msg }) : null,
      h('div', { class: 'dlg-col' }, opts.map(function (o) {
        return h('button', { class: 'btn ' + (o.cls || ''), on: { click: function () { fin(o.id); } } },
          h('span', { text: o.label }), o.sub ? h('small', { text: o.sub }) : null);
      })),
      h('button', { class: 'btn ghost', text: 'Cancelar', on: { click: function () { fin(null); } } }));
    L = openSheet(box, function () { if (!answered) { answered = true; res(null); } });
  });
}

/* diálogo com campo de texto/senha */
function promptBox(o) {
  return new Promise(function (res) {
    var L, answered = false, inputs = [];
    function fin(v) { if (answered) return; answered = true; res(v); Layers.close(L); }
    var err = h('div', { class: 'err' });
    var fields = (o.fields || []).map(function (f) {
      var inp = h('input', { class: 'input', type: f.type || 'text', placeholder: f.ph || '', autocomplete: 'off', autocapitalize: 'none', spellcheck: 'false', value: f.value || '' });
      inputs.push(inp);
      return h('label', { class: 'fld' }, h('span', { class: 'lbl', text: f.label }), inp);
    });
    function submit() {
      var vals = inputs.map(function (i) { return i.value; });
      var m = o.validate ? o.validate(vals) : '';
      if (m) { err.textContent = m; return; }
      fin(vals);
    }
    var showBtn = o.fields && o.fields.some(function (f) { return f.type === 'password'; }) ?
      h('button', { class: 'link', type: 'button', text: 'mostrar / ocultar', on: { click: function () { inputs.forEach(function (i) { i.type = i.type === 'password' ? 'text' : 'password'; }); } } }) : null;
    var box = h('div', { class: 'dlg' },
      h('div', { class: 'dlg-t', text: o.title }),
      o.msg ? h('div', { class: 'dlg-m', text: o.msg }) : null,
      fields, showBtn, err,
      h('div', { class: 'dlg-b' },
        h('button', { class: 'btn', text: 'Cancelar', on: { click: function () { fin(null); } } }),
        h('button', { class: 'btn ' + (o.danger ? 'danger' : 'pri'), text: o.ok || 'OK', on: { click: submit } })));
    inputs.forEach(function (i, ix) { i.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); if (ix < inputs.length - 1) inputs[ix + 1].focus(); else submit(); } }); });
    L = openSheet(box, function () { if (!answered) { answered = true; res(null); } });
    setTimeout(function () { if (inputs[0]) inputs[0].focus(); }, 250);
  });
}

/* aviso rápido */
var _toastT;
function toast(msg) {
  var t = $('#toast');
  t.textContent = msg; t.className = 'on';
  clearTimeout(_toastT);
  _toastT = setTimeout(function () { t.className = ''; }, 2400);
}

function vib(ms) { try { if (navigator.vibrate) navigator.vibrate(ms || 12); } catch (e) { } }

/* baixar arquivo (blob) */
function saveBlob(name, text, type) {
  var blob = new Blob([text], { type: type || 'application/json' });
  var a = h('a', { href: URL.createObjectURL(blob), download: name });
  document.body.appendChild(a);
  if (window.Lock) Lock.hold(60000);
  a.click();
  setTimeout(function () { URL.revokeObjectURL(a.href); document.body.removeChild(a); }, 4000);
  return blob;
}

/* cor de texto sobre o destaque */
function onColor(hex) {
  var r = parseInt(hex.substr(1, 2), 16), g = parseInt(hex.substr(3, 2), 16), b = parseInt(hex.substr(5, 2), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 150 ? '#111' : '#fff';
}
function hexRgb(hex) {
  return parseInt(hex.substr(1, 2), 16) + ',' + parseInt(hex.substr(3, 2), 16) + ',' + parseInt(hex.substr(5, 2), 16);
}
/* Penumbra — som ambiente opcional. Gerado na hora (WebAudio), sem arquivos: não pesa nada.
   Só toca depois de um toque seu. Também aceita um arquivo de áudio seu (só durante a sessão). */
var Ambient = (function () {
  var ctx = null, nodes = [], gain = null, el = null, kind = 'off', vol = 0.5;
  var KINDS = { rain: 'Chuva', wind: 'Vento', brown: 'Ruído marrom', file: 'Meu arquivo' };

  function getCtx() {
    if (!ctx) { var C = window.AudioContext || window.webkitAudioContext; if (!C) return null; ctx = new C(); }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }
  function noiseBuf(c, type) {
    var rate = c.sampleRate > 24000 ? 22050 : c.sampleRate, n = rate * 4;
    var b = c.createBuffer(1, n, rate), d = b.getChannelData(0), last = 0, i;
    for (i = 0; i < n; i++) {
      var w = Math.random() * 2 - 1;
      if (type === 'brown') { last = (last + 0.02 * w) / 1.02; d[i] = last * 3.5; } else d[i] = w * 0.6;
    }
    for (i = 0; i < 1200; i++) { var f = i / 1200; d[i] *= f; d[n - 1 - i] *= f; }
    return b;
  }
  function stopNodes() {
    nodes.forEach(function (n) { try { if (n.stop) n.stop(); n.disconnect(); } catch (e) { } });
    nodes = [];
    if (el) { try { el.pause(); URL.revokeObjectURL(el.src); } catch (e) { } el = null; }
  }
  function stop() { stopNodes(); kind = 'off'; }
  function start(k, v) {
    stopNodes();
    vol = v == null ? vol : v;
    if (k === 'off') { kind = 'off'; return true; }
    var c = getCtx();
    if (!c) return false;
    gain = c.createGain(); gain.gain.value = vol; gain.connect(c.destination);
    nodes.push(gain);
    var src = c.createBufferSource();
    src.loop = true;
    if (k === 'rain') {
      src.buffer = noiseBuf(c, 'white');
      var hp = c.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 900;
      var lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 6500;
      src.connect(hp); hp.connect(lp); lp.connect(gain); nodes.push(hp, lp);
      gain.gain.value = vol * 0.5;
    } else if (k === 'wind') {
      src.buffer = noiseBuf(c, 'brown');
      var lp2 = c.createBiquadFilter(); lp2.type = 'lowpass'; lp2.frequency.value = 600;
      var g2 = c.createGain(); g2.gain.value = 0.7;
      var lfo = c.createOscillator(), lg = c.createGain();
      lfo.frequency.value = 0.12; lg.gain.value = 0.3;
      lfo.connect(lg); lg.connect(g2.gain); lfo.start();
      src.connect(lp2); lp2.connect(g2); g2.connect(gain); nodes.push(lp2, g2, lfo, lg);
    } else {
      src.buffer = noiseBuf(c, 'brown');
      src.connect(gain);
    }
    src.start(); nodes.push(src);
    kind = k;
    return true;
  }
  function file(f) {
    stopNodes();
    el = new Audio(URL.createObjectURL(f));
    el.loop = true; el.volume = vol;
    el.play().catch(function () { });
    kind = 'file';
  }
  function setVol(v) {
    vol = v;
    if (el) el.volume = v;
    if (gain) gain.gain.value = kind === 'rain' ? v * 0.5 : v;
  }
  return { start: start, stop: stop, file: file, setVol: setVol, kind: function () { return kind; }, KINDS: KINDS, supported: function () { return !!(window.AudioContext || window.webkitAudioContext); } };
})();
/* Penumbra — núcleo do app: estado, tema, telas principais (início, diário, sentimentos, memórias). */
var A = {
  tab: 'home',
  mode: { diary: 'list', feel: 'rec' },
  F: { q: '', emo: '', from: '', to: '', fav: false, type: 'all' },
  limit: 30,
  cal: { y: new Date().getFullYear(), m: new Date().getMonth(), sel: null },
  stP: 30, cmp: 'month', clockT: null
};
function SET() { return Store.S.set; }
function ITEMS() { return Store.S.items; }

/* ---------- tema ---------- */
function applyUI(p) {
  var r = document.documentElement;
  r.setAttribute('data-theme', p.theme === 'light' ? 'light' : 'dark');
  r.style.setProperty('--ac', p.accent);
  r.style.setProperty('--ac-rgb', hexRgb(p.accent));
  r.style.setProperty('--on-ac', onColor(p.accent));
  r.style.setProperty('--fs', (p.fsize || 17) + 'px');
  r.style.setProperty('--rf', (D.FONTS[p.font] || D.FONTS.serif).v);
  var m = $('meta[name=theme-color]'); if (m) m.setAttribute('content', p.theme === 'light' ? '#f1efea' : '#0e0e10');
  document.title = p.name || 'Penumbra';
}
function uiPrefs() { var s = SET(); return { name: s.name, accent: s.accent, theme: s.theme, font: s.font, fsize: s.fsize }; }
function mirrorPrefs() { try { localStorage.setItem('pn_ui', JSON.stringify(uiPrefs())); } catch (e) { } }
function loadPrefs() {
  var p = {};
  try { p = JSON.parse(localStorage.getItem('pn_ui') || '{}'); } catch (e) { }
  return Object.assign({ name: 'Penumbra', accent: '#b9a7e8', theme: 'dark', font: 'serif', fsize: 17 }, p);
}
function persistSettings() { mirrorPrefs(); applyUI(uiPrefs()); return Store.saveSettings(); }

/* ---------- emoções ---------- */
function emotions() { return D.EMOTIONS.concat(SET().customEmo.filter(function (e) { return !e.gone; }).map(function (e) { return { id: e.id, n: e.n, t: 'neu', custom: true }; })); }
function emo(id) {
  var a = D.EMOTIONS.concat(SET().customEmo.map(function (e) { return { id: e.id, n: e.n, t: 'neu', custom: true }; }));
  for (var i = 0; i < a.length; i++) if (a[i].id === id) return a[i];
  return { id: id, n: 'Emoção', t: 'neu' };
}
function emoColor(id) {
  var i = -1;
  for (var k = 0; k < D.EMOTIONS.length; k++) if (D.EMOTIONS[k].id === id) i = k;
  var hue = i >= 0 ? i * 24 : U.hash(id) % 360;
  return 'hsl(' + hue + ',42%,64%)';
}
function dotEl(id) { var d = h('span', { class: 'dot' }); d.style.background = emoColor(id); return d; }

/* ---------- itens ---------- */
var TYPE_LABEL = { entry: 'Diário', feel: 'Sentimento', vent: 'Desabafo', letter: 'Carta', capsule: 'Cápsula', never: 'Nunca disse', good: 'Coisa boa', moment: 'Momento', dream: 'Sonho', thought: 'Pensamento', reflect: 'Reflexão' };
var JT = ['entry', 'vent', 'feel'];
function newItem(type) { return { id: Store.uid(), type: type, title: '', text: '', emo: [], int: null, tags: [], img: [], fav: false, c: Date.now(), draft: true }; }
function byDate(a, b) { return b.c - a.c; }
function done() { return ITEMS().filter(function (i) { return !i.draft; }); }
function journal() { return ITEMS().filter(function (i) { return JT.indexOf(i.type) >= 0; }).sort(byDate); }
function isSealed(it) { return (it.type === 'letter' || it.type === 'capsule') && !it.draft && it.openAt && it.openAt > Date.now(); }
function isArrived(it) { return (it.type === 'letter' || it.type === 'capsule') && !it.draft && it.openAt && it.openAt <= Date.now() && !it.opened; }
function allTags() {
  var m = {};
  ITEMS().forEach(function (i) { (i.tags || []).forEach(function (t) { m[t] = (m[t] || 0) + 1; }); });
  return Object.keys(m).sort(function (a, b) { return m[b] - m[a]; });
}
function snippet(it) {
  if (isSealed(it)) return 'Lacrada. Abre ' + U.until(it.openAt) + '.';
  if (isArrived(it)) return 'Chegou o dia. Toque para abrir.';
  var t = (it.text || '').trim();
  if (!t && it.ans) { for (var i = 0; i < it.ans.length; i++) if (it.ans[i].a) { t = it.ans[i].a; break; } }
  return t;
}
function itemTitle(it) {
  if (it.type === 'feel') return emo(it.emo[0] || '').n + (it.int ? '  ·  ' + it.int + '/10' : '');
  if (it.type === 'letter' || it.type === 'capsule') return it.title || (it.type === 'capsule' ? 'Cápsula do tempo' : 'Carta');
  return it.title || '';
}
function matches(it, f) {
  if (f.type !== 'all' && it.type !== f.type) return false;
  if (f.fav && !it.fav) return false;
  if (f.emo && (it.emo || []).indexOf(f.emo) < 0) return false;
  if (f.from && U.dk(it.c) < f.from) return false;
  if (f.to && U.dk(it.c) > f.to) return false;
  if (f.q) {
    if (isSealed(it)) return false;
    var q = f.q.toLowerCase();
    var hay = [it.title, it.text, (it.tags || []).join(' '), (it.emo || []).map(function (e) { return emo(e).n; }).join(' '), (it.ans || []).map(function (a) { return a.a; }).join(' ')].join(' ').toLowerCase();
    if (hay.indexOf(q) < 0) return false;
  }
  return true;
}
function entryCard(it, tapFn) {
  var meta = h('div', { class: 'meta' },
    h('span', { text: U.dateShort(it.c) + ' · ' + U.time(it.c) }),
    it.type !== 'entry' ? h('span', { class: 'badge', text: TYPE_LABEL[it.type] }) : null,
    it.draft ? h('span', { class: 'badge ac', text: 'rascunho' }) : null,
    h('span', { class: 'sp' }),
    it.fav ? h('span', { class: 'starred' }, ico('star', 16)) : null);
  var ttl = itemTitle(it), sn = snippet(it);
  var emos = (it.emo || []).length && it.type !== 'feel' ? h('div', { class: 'emo' }, it.emo.map(function (e) { return h('span', { style: 'margin-right:10px;white-space:nowrap' }, dotEl(e), ' ', emo(e).n); }), it.int ? h('span', { class: 'mono', text: ' ' + it.int + '/10' }) : null) : null;
  return h('button', { class: 'entry', on: { click: function () { (tapFn || openItem)(it); } } },
    meta, ttl ? h('div', { class: 'ttl', text: ttl }) : null,
    sn ? h('div', { class: 'snip', text: sn }) : null, emos,
    it.img && it.img.length ? h('div', { class: 'emo mono', text: '▣ ' + it.img.length + (it.img.length > 1 ? ' imagens' : ' imagem') }) : null);
}
function openItem(it) {
  switch (it.type) {
    case 'vent': return Vent.open(it);
    case 'feel': return FeelEd.open({ item: it });
    case 'letter': case 'capsule': return Letters.read(it);
    default: return Ed.open({ item: it });
  }
}
function refresh() { if (Store.S.unlocked) render(true); }

/* ---------- cabeçalho / navegação ---------- */
var TABS = [['home', 'Início', 'home'], ['diary', 'Diário', 'book'], ['feel', 'Sentimentos', 'pulse'], ['mem', 'Memórias', 'spark'], ['set', 'Configurações', 'sliders']];

function buildShell() {
  var app = $('#app'); clear(app);
  app.appendChild(h('div', { id: 'top' },
    h('div', { class: 'brand', id: 'brand' }),
    h('div', { class: 'row' },
      h('button', { class: 'ib', id: 'lockbtn', 'aria-label': 'Bloquear agora', on: { click: function () { Lock.lock(); } } }, ico('lock', 20)),
      h('button', { class: 'ib', 'aria-label': 'Preciso de calma', on: { click: function () { SOS.open(); } } }, ico('wind', 22)))));
  app.appendChild(h('div', { id: 'view' }));
  var nav = h('div', { id: 'nav' });
  TABS.forEach(function (t) {
    nav.appendChild(h('button', { 'data-t': t[0], 'aria-label': t[1], on: { click: function () { go(t[0]); } } }, ico(t[2], 22), h('span', { text: t[1] })));
  });
  app.appendChild(nav);
}
function go(t) { A.tab = t; A.limit = 30; render(); }

function render(keep) {
  clearInterval(A.clockT);
  var v = $('#view'), top = v.scrollTop;
  clear(v);
  var s = SET();
  $('#brand').innerHTML = '';
  $('#brand').appendChild(h('span', {}, h('b', { text: '✦ ' }), s.name));
  $('#lockbtn').classList.toggle('hide', !Store.isEncrypted());
  var btns = document.querySelectorAll('#nav button');
  for (var i = 0; i < btns.length; i++) btns[i].classList.toggle('on', btns[i].getAttribute('data-t') === A.tab);
  v.appendChild(VIEWS[A.tab]());
  if (keep) v.scrollTop = top; else v.scrollTop = 0;
}

/* ---------- calendário ---------- */
function dayMap(emoF) {
  var m = {};
  ITEMS().forEach(function (it) {
    if (it.draft) return;
    var k = U.dk(it.c), o = m[k] || (m[k] = { n: 0, any: 0, e: null, match: 0, list: [] });
    o.any++; o.list.push(it);
    if (it.type !== 'feel') o.n++;
    if (it.emo && it.emo.length) { o.e = it.emo[it.emo.length - 1]; if (emoF && it.emo.indexOf(emoF) >= 0) o.match++; }
  });
  return m;
}
function buildCal(o) {
  var map = dayMap(o.emo), first = new Date(o.y, o.m, 1), dim = new Date(o.y, o.m + 1, 0).getDate();
  var g = h('div', { class: 'cal' + (o.mini ? ' mini' : '') }), today = U.dk(Date.now());
  ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].forEach(function (d) { g.appendChild(h('div', { class: 'wd', text: d })); });
  for (var b = 0; b < first.getDay(); b++) g.appendChild(h('div'));
  var mk = function (day) {
    var k = o.y + '-' + U.pad(o.m + 1) + '-' + U.pad(day), d = map[k];
    var cls = 'd';
    if (d) { cls += ' has'; if (d.n) cls += d.n >= 3 ? ' l3' : d.n === 2 ? ' l2' : ' l1'; }
    if (o.emo) cls += d && d.match ? ' has' : ' dim';
    if (k === today) cls += ' today';
    if (o.sel === k) cls += ' sel';
    var btn = h('button', { class: cls, 'aria-label': day + ' de ' + U.MES[o.m] + (d ? ', ' + d.any + ' registro(s)' : ''), on: { click: function () { o.onPick(k); } } }, String(day));
    if (d && d.e) { var i = h('i'); i.style.background = emoColor(d.e); btn.appendChild(i); }
    return btn;
  };
  for (var day = 1; day <= dim; day++) g.appendChild(mk(day));
  return g;
}
function calHeader(c, onChange) {
  var t = new Date(c.y, c.m, 1);
  return h('div', { class: 'cal-h' },
    h('button', { class: 'ib', 'aria-label': 'Mês anterior', on: { click: function () { var d = new Date(c.y, c.m - 1, 1); c.y = d.getFullYear(); c.m = d.getMonth(); onChange(); } } }, ico('back')),
    h('div', { class: 't', text: U.MES[t.getMonth()] + ' ' + t.getFullYear() }),
    h('button', { class: 'ib', 'aria-label': 'Próximo mês', style: 'transform:scaleX(-1)', on: { click: function () { var d = new Date(c.y, c.m + 1, 1); c.y = d.getFullYear(); c.m = d.getMonth(); onChange(); } } }, ico('back')));
}

/* ---------- INÍCIO ---------- */
var VIEWS = {};
VIEWS.home = function () {
  var s = SET(), now = new Date(), hr = now.getHours(), root = h('div');
  var nm = s.nick ? ', ' + s.nick : '';
  var greet = hr < 5 ? 'Noite longa' + nm : hr < 12 ? 'Bom dia' + nm : hr < 18 ? 'Boa tarde' + nm : 'Boa noite' + nm;
  var clock = h('div', { class: 'clock' });
  function tick() { var d = new Date(); clock.textContent = U.full(d.getTime()).toUpperCase() + '  ·  ' + U.time(d.getTime()); }
  tick(); A.clockT = setInterval(tick, 15000);

  /* tom da mensagem: último registro de emoção nas últimas 36 h */
  var tone = 'none', recent = ITEMS().filter(function (i) { return !i.draft && i.emo && i.emo.length && Date.now() - i.c < 36 * 3600000; }).sort(byDate)[0];
  if (recent) tone = emo(recent.emo[recent.emo.length - 1]).t;
  var pool = D.WELCOME[tone];
  var sub = pool[U.dayNum(now.getTime()) % pool.length];

  var quotes = D.QUOTES.concat(s.quotes);
  var q = quotes[U.hash('q' + U.dayNum(now.getTime())) % quotes.length];

  root.appendChild(h('div', { class: 'card hero' }, clock, h('h1', { text: greet + '.' }), h('div', { class: 'sub', text: sub })));
  root.appendChild(h('div', { class: 'card', style: 'margin-top:10px' }, h('div', { class: 'quote-src', text: 'frase de hoje' }), h('div', { class: 'quote', text: q })));

  /* avisos discretos */
  var drafts = ITEMS().filter(function (i) { return i.draft && JT.indexOf(i.type) >= 0 && ((i.text || '').trim() || (i.title || '').trim()); }).sort(byDate);
  if (drafts.length) root.appendChild(h('button', { class: 'card tap warn', style: 'display:block;width:100%;text-align:left', on: { click: function () { openItem(drafts[0]); } } },
    h('div', { class: 'lbl', text: 'rascunho em aberto' }), h('div', { class: 'small', text: (drafts[0].title || snippet(drafts[0]) || '').slice(0, 80) + ' — toque para continuar' })));
  var arrived = ITEMS().filter(isArrived);
  if (arrived.length) root.appendChild(h('button', { class: 'card tap', style: 'display:block;width:100%;text-align:left;border-color:var(--ac)', on: { click: function () { Letters.read(arrived[0]); } } },
    h('div', { class: 'lbl', text: 'chegou uma carta' }), h('div', { text: arrived.length === 1 ? 'Uma carta sua está pronta para ser aberta.' : arrived.length + ' cartas suas estão prontas para serem abertas.' })));
  var due = !s.lastBackup || Date.now() - s.lastBackup > 14 * 86400000;
  if (due && done().length >= 3) root.appendChild(h('button', { class: 'card tap warn', style: 'display:block;width:100%;text-align:left', on: { click: function () { go('set'); } } },
    h('div', { class: 'lbl', text: 'backup' }), h('div', { class: 'small', text: s.lastBackup ? 'Seu último backup foi ' + U.ago(s.lastBackup) + '. Se o celular ou o navegador for limpo, só o backup salva seus textos.' : 'Você ainda não fez nenhum backup. Se os dados do navegador forem apagados, os textos se perdem.' })));
  if (s.remind.on) {
    var p = s.remind.time.split(':'), rt = new Date(); rt.setHours(+p[0], +p[1], 0, 0);
    var wroteToday = done().some(function (i) { return i.type !== 'feel' && U.dk(i.c) === U.dk(Date.now()); });
    if (Date.now() >= rt.getTime() && !wroteToday) root.appendChild(h('div', { class: 'card', style: 'margin-top:10px' }, h('div', { class: 'small mu', text: 'Você marcou um lembrete para ' + s.remind.time + '. Hoje ainda não tem nada escrito — sem cobrança.' })));
  }

  root.appendChild(h('div', { class: 'big-actions' },
    h('button', { class: 'btn pri write block', on: { click: function () { Ed.open({ type: 'entry' }); } } }, ico('edit'), 'Escrever no diário'),
    h('div', { class: 'two' },
      h('button', { class: 'btn', on: { click: function () { FeelEd.pick(); } } }, ico('pulse', 20), 'Como estou'),
      h('button', { class: 'btn', on: { click: function () { Vent.open(); } } }, ico('wind', 20), 'Preciso desabafar'))));

  var last = journal().filter(function (i) { return !i.draft && i.type !== 'feel'; })[0] || journal().filter(function (i) { return !i.draft; })[0];
  if (last) {
    root.appendChild(h('h2', { text: 'Última entrada' }));
    root.appendChild(entryCard(last));
  }

  var cal = { y: now.getFullYear(), m: now.getMonth(), sel: null };
  var calBox = h('div', { class: 'card', style: 'margin-top:18px' });
  function drawCal() {
    clear(calBox);
    calBox.appendChild(calHeader(cal, drawCal));
    calBox.appendChild(buildCal({ y: cal.y, m: cal.m, mini: true, onPick: function (k) { A.cal = { y: cal.y, m: cal.m, sel: k }; A.mode.diary = 'cal'; go('diary'); } }));
  }
  drawCal();
  root.appendChild(h('div', { class: 'lbl', style: 'margin-top:20px', text: 'dias em que escrevi' }));
  root.appendChild(calBox);

  var rec = journal().filter(function (i) { return !i.draft; }).slice(0, 5);
  if (rec.length) {
    root.appendChild(h('h2', { text: 'Últimos registros' }));
    rec.forEach(function (i) { root.appendChild(entryCard(i)); });
  } else {
    root.appendChild(h('div', { class: 'empty', text: 'Ainda não há nada aqui. Quando você escrever ou registrar um sentimento, vai aparecer neste espaço.' }));
  }
  return root;
};

/* ---------- DIÁRIO ---------- */
function filterActive() { var f = A.F; return !!(f.q || f.emo || f.from || f.to || f.fav || f.type !== 'all'); }
function emoSelect(onChange) {
  var sel = h('select', { class: 'input', 'aria-label': 'Filtrar por emoção', style: 'flex:1' },
    h('option', { value: '', text: 'Todas as emoções' }),
    emotions().map(function (e) { return h('option', { value: e.id, text: e.n }); }));
  sel.value = A.F.emo;
  sel.addEventListener('change', function () { A.F.emo = sel.value; onChange(); });
  return sel;
}
function openFilters() {
  openSheet(function (close) {
    var f = A.F;
    var from = h('input', { class: 'input', type: 'date', value: f.from }), to = h('input', { class: 'input', type: 'date', value: f.to });
    var types = h('div', { class: 'chips' });
    var favChip;
    function drawT() {
      clear(types);
      [['all', 'Tudo'], ['entry', 'Escritos'], ['vent', 'Desabafos'], ['feel', 'Sentimentos']].forEach(function (t) {
        types.appendChild(h('button', { class: 'chip' + (f.type === t[0] ? ' on' : ''), text: t[1], on: { click: function () { f.type = t[0]; drawT(); } } }));
      });
    }
    drawT();
    favChip = h('button', { class: 'chip' + (f.fav ? ' on' : ''), on: { click: function () { f.fav = !f.fav; favChip.classList.toggle('on', f.fav); } } }, ico('star', 16), ' Só favoritos');
    return h('div', {}, sheetTitle('Filtros', close),
      h('label', { class: 'fld' }, h('span', { class: 'lbl', text: 'De' }), from),
      h('label', { class: 'fld' }, h('span', { class: 'lbl', text: 'Até' }), to),
      h('span', { class: 'lbl', text: 'Tipo' }), types, h('div', { style: 'height:10px' }), favChip,
      h('div', { class: 'dlg-b' },
        h('button', { class: 'btn', text: 'Limpar', on: { click: function () { A.F = { q: '', emo: '', from: '', to: '', fav: false, type: 'all' }; close(); refresh(); } } }),
        h('button', { class: 'btn pri', text: 'Aplicar', on: { click: function () { f.from = from.value; f.to = to.value; close(); refresh(); } } })));
  });
}

VIEWS.diary = function () {
  var root = h('div'), mode = A.mode.diary;
  root.appendChild(h('h1', { text: 'Diário', style: 'margin:6px 0 12px' }));
  var seg = h('div', { class: 'seg' });
  [['list', 'Entradas'], ['cal', 'Calendário'], ['tl', 'Linha do tempo']].forEach(function (m) {
    seg.appendChild(h('button', { class: mode === m[0] ? 'on' : '', text: m[1], on: { click: function () { A.mode.diary = m[0]; A.limit = 30; refresh(); } } }));
  });
  root.appendChild(seg);
  var body = h('div');

  if (mode === 'cal') {
    root.appendChild(h('div', { class: 'row', style: 'margin-bottom:12px' }, emoSelect(function () { refresh(); })));
    var c = A.cal, dayBox = h('div');
    var draw = function () {
      clear(body);
      body.appendChild(calHeader(c, function () { c.sel = null; draw(); }));
      body.appendChild(buildCal({ y: c.y, m: c.m, sel: c.sel, emo: A.F.emo, onPick: function (k) { c.sel = k; draw(); } }));
      body.appendChild(h('div', { class: 'note', text: 'Quanto mais forte a cor do dia, mais registros escritos nele. O ponto colorido é a última emoção registrada.' }));
      var list = c.sel ? ITEMS().filter(function (i) { return !i.draft && U.dk(i.c) === c.sel && matches(i, { type: 'all', fav: false, emo: A.F.emo }); }).sort(byDate) : [];
      if (c.sel) {
        var p = c.sel.split('-');
        body.appendChild(h('h2', { text: (+p[2]) + ' de ' + U.MES[+p[1] - 1] }));
        if (!list.length) body.appendChild(h('div', { class: 'empty', text: 'Nada registrado neste dia.' }));
        list.forEach(function (i) { body.appendChild(entryCard(i)); });
      } else {
        var monthItems = ITEMS().filter(function (i) { var d = new Date(i.c); return !i.draft && d.getFullYear() === c.y && d.getMonth() === c.m; });
        body.appendChild(h('div', { class: 'sub', text: monthItems.length ? monthItems.length + ' registro(s) neste mês. Toque em um dia para ler.' : 'Nenhum registro neste mês.' }));
      }
    };
    draw();
    root.appendChild(body);
  } else {
    var inp = h('input', { class: 'input', type: 'search', placeholder: 'Pesquisar palavras…', value: A.F.q, 'aria-label': 'Pesquisar' });
    var t;
    inp.addEventListener('input', function () { clearTimeout(t); t = setTimeout(function () { A.F.q = inp.value.trim(); A.limit = 30; drawList(); }, 250); });
    root.appendChild(h('div', { class: 'row', style: 'margin-bottom:10px' }, h('div', { class: 'grow' }, inp),
      h('button', { class: 'ib' + (filterActive() && (A.F.from || A.F.to || A.F.fav || A.F.type !== 'all') ? ' on' : ''), 'aria-label': 'Filtros', on: { click: openFilters } }, ico('sliders'))));
    root.appendChild(h('div', { class: 'row', style: 'margin-bottom:6px' }, emoSelect(function () { A.limit = 30; drawList(); })));
    root.appendChild(body);
    var drawList = function () {
      clear(body);
      var all = journal().filter(function (i) { return matches(i, A.F); });
      if (!all.length) {
        body.appendChild(h('div', { class: 'empty', text: filterActive() ? 'Nada encontrado com esses filtros.' : 'Seu diário ainda está em branco. Escreva sobre qualquer coisa — não precisa de título nem de motivo.' }));
        return;
      }
      if (filterActive()) body.appendChild(h('div', { class: 'note', text: all.length + ' resultado(s)', style: 'margin:6px 0' }));
      var shown = all.slice(0, A.limit);
      if (mode === 'tl') {
        var tl = h('div', { class: 'tl' }), cur = '';
        shown.forEach(function (i) {
          var d = new Date(i.c), key = d.getFullYear() + '-' + d.getMonth();
          if (key !== cur) { cur = key; tl.appendChild(h('div', { class: 'mh', text: U.MES[d.getMonth()] + ' ' + d.getFullYear() })); }
          tl.appendChild(h('div', { class: 'it' }, entryCard(i)));
        });
        body.appendChild(tl);
      } else shown.forEach(function (i) { body.appendChild(entryCard(i)); });
      if (all.length > shown.length) body.appendChild(h('button', { class: 'btn block', style: 'margin-top:14px', text: 'Mostrar mais', on: { click: function () { A.limit += 30; drawList(); } } }));
    };
    drawList();
  }
  root.appendChild(h('button', { class: 'fab', 'aria-label': 'Nova entrada', on: { click: function () { Ed.open({ type: 'entry' }); } } }, ico('plus', 26)));
  return root;
};

/* ---------- SENTIMENTOS ---------- */
VIEWS.feel = function () {
  var root = h('div'), mode = A.mode.feel;
  root.appendChild(h('h1', { text: 'Sentimentos', style: 'margin:6px 0 12px' }));
  var seg = h('div', { class: 'seg' });
  [['rec', 'Registrar'], ['st', 'Estatísticas']].forEach(function (m) {
    seg.appendChild(h('button', { class: mode === m[0] ? 'on' : '', text: m[1], on: { click: function () { A.mode.feel = m[0]; refresh(); } } }));
  });
  root.appendChild(seg);
  if (mode === 'st') { root.appendChild(Stats.build()); return root; }

  root.appendChild(h('div', { class: 'sub', style: 'margin:0 0 12px', text: 'Como você está agora? Toque numa emoção — o resto é opcional.' }));
  var grid = h('div', { class: 'egrid' });
  emotions().forEach(function (e) {
    grid.appendChild(h('button', { class: 'chip', on: { click: function () { FeelEd.open({ emo: e.id }); } } }, dotEl(e.id), e.n));
  });
  grid.appendChild(h('button', { class: 'chip', style: 'border-style:dashed', on: { click: function () { createEmotion(function (id) { FeelEd.open({ emo: id }); }); } } }, ico('plus', 16), ' Criar'));
  root.appendChild(grid);
  root.appendChild(h('div', { class: 'two', style: 'margin-top:14px' },
    h('button', { class: 'btn', on: { click: function () { Vent.open(); } } }, 'Preciso desabafar'),
    h('button', { class: 'btn', on: { click: function () { SOS.open(); } } }, 'Preciso de calma')));
  var recent = ITEMS().filter(function (i) { return i.type === 'feel'; }).sort(byDate).slice(0, 12);
  root.appendChild(h('h2', { text: 'Registros recentes' }));
  if (!recent.length) root.appendChild(h('div', { class: 'empty', text: 'Nenhum sentimento registrado ainda.' }));
  recent.forEach(function (i) { root.appendChild(entryCard(i)); });
  return root;
};

function createEmotion(cb) {
  promptBox({ title: 'Nova emoção', msg: 'Dê o nome que fizer sentido para você.', ok: 'Criar', fields: [{ label: 'Nome', ph: 'ex.: Nostálgico' }],
    validate: function (v) {
      var n = v[0].trim();
      if (!n) return 'Escreva um nome.';
      if (emotions().some(function (e) { return e.n.toLowerCase() === n.toLowerCase(); })) return 'Essa emoção já existe.';
      return '';
    } }).then(function (v) {
    if (!v) return;
    var e = { id: 'c' + Store.uid(), n: v[0].trim() };
    SET().customEmo.push(e);
    Store.saveSettings();
    if (cb) cb(e.id);
    refresh();
  });
}

/* ---------- MEMÓRIAS ---------- */
VIEWS.mem = function () {
  var root = h('div');
  root.appendChild(h('h1', { text: 'Memórias', style: 'margin:6px 0 4px' }));
  root.appendChild(h('div', { class: 'sub', style: 'margin:0 0 14px', text: 'O que você quis guardar, e os espaços para tudo o que não cabe no diário comum.' }));
  var favs = ITEMS().filter(function (i) { return i.fav && !i.draft; }).sort(byDate);
  root.appendChild(h('div', { class: 'lbl', text: 'minhas memórias' }));
  if (!favs.length) root.appendChild(h('div', { class: 'card small mu', text: 'Marque uma entrada com a estrela ☆ e ela fica guardada aqui.' }));
  favs.slice(0, 8).forEach(function (i) { root.appendChild(entryCard(i)); });
  if (favs.length > 8) root.appendChild(h('button', { class: 'btn block', style: 'margin-top:10px', text: 'Ver todas (' + favs.length + ')', on: { click: function () { Spaces.favs(); } } }));

  root.appendChild(h('h2', { text: 'Espaços' }));
  D.SPACES.forEach(function (sp) {
    var n;
    if (sp.id === 'mural') n = ITEMS().reduce(function (a, i) { return a + (i.img ? i.img.length : 0); }, 0);
    else if (sp.id === 'letters') n = ITEMS().filter(function (i) { return i.type === 'letter' && !i.draft; }).length;
    else n = ITEMS().filter(function (i) { return i.type === sp.id && !i.draft; }).length;
    var extra = '';
    if (sp.id === 'letters' && ITEMS().some(isArrived)) extra = ' · uma carta chegou';
    root.appendChild(h('button', { class: 'entry', on: { click: function () { Spaces.open(sp.id); } } },
      h('div', { class: 'row' }, h('div', { class: 'grow' }, h('div', { class: 'ttl', style: 'margin:0', text: sp.n }), h('div', { class: 'snip', text: sp.d + (n ? ' · ' + n : '') + extra })), ico('chev', 20))));
  });
  return root;
};

/* ---------- ESTATÍSTICAS (só mostram o que você registrou) ---------- */
var Stats = (function () {
  var WRITE = ['entry', 'vent', 'dream', 'moment', 'never', 'thought', 'reflect', 'letter', 'capsule', 'good'];
  function inRange(it, a, b) { return !it.draft && it.c >= a && it.c < b; }
  function summary(a, b) {
    var items = ITEMS().filter(function (i) { return inRange(i, a, b); });
    var o = { reg: items.length, feel: 0, vent: 0, letters: 0, words: 0, days: {}, emo: {}, isum: 0, icnt: 0 };
    items.forEach(function (i) {
      if (i.type === 'feel') o.feel++;
      if (i.type === 'vent') o.vent++;
      if (i.type === 'letter' || i.type === 'capsule') o.letters++;
      o.words += U.words(i.text);
      o.days[U.dk(i.c)] = 1;
      (i.emo || []).forEach(function (e) { o.emo[e] = (o.emo[e] || 0) + 1; });
      if (i.int) { o.isum += i.int; o.icnt++; }
    });
    o.nd = Object.keys(o.days).length;
    var top = Object.keys(o.emo).sort(function (x, y) { return o.emo[y] - o.emo[x]; })[0];
    o.top = top ? emo(top).n + ' (' + o.emo[top] + ')' : '—';
    o.avg = o.icnt ? (o.isum / o.icnt).toFixed(1).replace('.', ',') : '—';
    return o;
  }
  function bars(rows, max) {
    var box = h('div');
    rows.forEach(function (r) {
      var i = h('i'); i.style.width = (max ? Math.round(r.v / max * 100) : 0) + '%'; if (r.color) i.style.background = r.color;
      box.appendChild(h('div', { class: 'bar' }, h('div', { class: 'n', text: r.n }), h('div', { class: 'tr' }, i), h('div', { class: 'v', text: String(r.v) })));
    });
    return box;
  }
  function cols(rows) {
    var max = Math.max.apply(null, rows.map(function (r) { return r.v; }).concat([1]));
    return h('div', { class: 'cols' }, rows.map(function (r) {
      var i = h('i'); i.style.height = Math.max(2, Math.round(r.v / max * 78)) + 'px';
      return h('div', { class: 'c' }, h('em', { text: r.v ? String(r.v) : '' }), i, h('span', { text: r.n }));
    }));
  }
  function monthStart(y, m) { return new Date(y, m, 1).getTime(); }

  function build() {
    var root = h('div'), now = new Date();
    if (!done().length) { root.appendChild(h('div', { class: 'empty', text: 'Os gráficos aparecem aqui conforme você registra. Eles só mostram o que você mesmo escreveu — sem interpretações.' })); return root; }

    var seg = h('div', { class: 'seg' });
    [[7, '7 dias'], [30, '30 dias'], [90, '90 dias'], [0, 'Tudo']].forEach(function (p) {
      seg.appendChild(h('button', { class: A.stP === p[0] ? 'on' : '', text: p[1], on: { click: function () { A.stP = p[0]; refresh(); } } }));
    });
    root.appendChild(seg);
    var from = A.stP ? Date.now() - A.stP * 86400000 : 0, cur = summary(from, Date.now() + 1);

    root.appendChild(h('div', { class: 'two' },
      numCard(cur.reg, 'registros'), numCard(cur.nd, 'dias com registro'),
      numCard(cur.vent, 'desabafos'), numCard(cur.letters, 'cartas e cápsulas'),
      numCard(cur.feel, 'sentimentos'), numCard(cur.words, 'palavras escritas')));

    root.appendChild(h('h2', { text: 'Emoções mais registradas' }));
    var ek = Object.keys(cur.emo).sort(function (a, b) { return cur.emo[b] - cur.emo[a]; }).slice(0, 8);
    if (!ek.length) root.appendChild(h('div', { class: 'small mu', text: 'Nenhuma emoção registrada neste período.' }));
    else root.appendChild(bars(ek.map(function (k) { return { n: emo(k).n, v: cur.emo[k], color: emoColor(k) }; }), cur.emo[ek[0]]));

    root.appendChild(h('h2', { text: 'Em que dias da semana você mais escreveu' }));
    var wd = [0, 0, 0, 0, 0, 0, 0];
    ITEMS().forEach(function (i) { if (!i.draft && i.c >= from && WRITE.indexOf(i.type) >= 0) wd[new Date(i.c).getDay()]++; });
    root.appendChild(cols(wd.map(function (v, i) { return { n: U.DIAC[i], v: v }; })));

    root.appendChild(h('h2', { text: 'Histórico semanal' }));
    var wk = [], endDay = U.dayStart(Date.now()) + 86400000;
    for (var w = 7; w >= 0; w--) {
      var b = endDay - w * 7 * 86400000, a = b - 7 * 86400000;
      wk.push({ n: w === 0 ? 'agora' : '-' + w + 's', v: ITEMS().filter(function (i) { return inRange(i, a, b); }).length });
    }
    root.appendChild(cols(wk));

    root.appendChild(h('h2', { text: 'Histórico mensal' }));
    var mo = [];
    for (var k = 11; k >= 0; k--) {
      var d0 = new Date(now.getFullYear(), now.getMonth() - k, 1), a2 = d0.getTime(), b2 = monthStart(d0.getFullYear(), d0.getMonth() + 1);
      mo.push({ n: U.MESC[d0.getMonth()].charAt(0).toUpperCase(), v: ITEMS().filter(function (i) { return inRange(i, a2, b2); }).length, a: a2, b: b2 });
    }
    root.appendChild(cols(mo));

    root.appendChild(h('h2', { text: 'Emoções ao longo dos meses' }));
    var all = {};
    ITEMS().forEach(function (i) { if (!i.draft) (i.emo || []).forEach(function (e) { all[e] = (all[e] || 0) + 1; }); });
    var tops = Object.keys(all).sort(function (x, y) { return all[y] - all[x]; }).slice(0, 6);
    if (!tops.length) root.appendChild(h('div', { class: 'small mu', text: 'Ainda não há emoções registradas.' }));
    else {
      var months = mo.slice(6), heat = h('div', { class: 'heat' });
      heat.style.gridTemplateColumns = '96px repeat(6, 1fr)';
      heat.appendChild(h('div'));
      months.forEach(function (m) { heat.appendChild(h('div', { text: m.n, style: 'text-align:center;color:var(--mu)' })); });
      var maxc = 1, cells = {};
      tops.forEach(function (e) {
        months.forEach(function (m, mi) {
          var c = ITEMS().filter(function (i) { return inRange(i, m.a, m.b) && (i.emo || []).indexOf(e) >= 0; }).length;
          cells[e + mi] = c; if (c > maxc) maxc = c;
        });
      });
      tops.forEach(function (e) {
        heat.appendChild(h('div', { text: emo(e).n, style: 'font-family:var(--ui);font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap' }));
        months.forEach(function (m, mi) {
          var c = cells[e + mi], cell = h('div', { class: 'hc', text: c ? String(c) : '' });
          if (c) cell.style.background = 'rgba(var(--ac-rgb),' + (0.15 + 0.6 * c / maxc).toFixed(2) + ')';
          heat.appendChild(cell);
        });
      });
      root.appendChild(heat);
      root.appendChild(h('div', { class: 'note', text: 'Últimos 6 meses (J = jan…). Cada número é quantas vezes você registrou aquela emoção.' }));
    }

    root.appendChild(h('h2', { text: 'Intensidade média por mês' }));
    var pts = mo.map(function (m) {
      var arr = ITEMS().filter(function (i) { return inRange(i, m.a, m.b) && i.int; });
      return arr.length ? arr.reduce(function (s, i) { return s + i.int; }, 0) / arr.length : null;
    });
    if (pts.every(function (p) { return p === null; })) root.appendChild(h('div', { class: 'small mu', text: 'Registre a intensidade (1 a 10) para ver a linha.' }));
    else {
      var W = 300, H = 90, step = W / 11, path = '', dots = '', started = false;
      pts.forEach(function (p, i) {
        if (p === null) { started = false; return; }
        var x = (i * step).toFixed(1), y = (H - 8 - (p - 1) / 9 * (H - 16)).toFixed(1);
        path += (started ? 'L' : 'M') + x + ' ' + y; started = true;
        dots += '<circle cx="' + x + '" cy="' + y + '" r="3.5" fill="var(--ac)"/>';
      });
      var svg = h('div'); svg.innerHTML = '<svg viewBox="-8 0 316 ' + H + '" width="100%" role="img" aria-label="Intensidade média por mês"><path d="' + path + '" fill="none" stroke="var(--ac)" stroke-width="1.6"/>' + dots + '</svg>';
      root.appendChild(svg);
      root.appendChild(h('div', { class: 'note', text: 'Escala de 1 a 10, só dos registros em que você marcou intensidade. Últimos 12 meses.' }));
    }

    root.appendChild(h('h2', { text: 'Comparar períodos' }));
    var seg2 = h('div', { class: 'seg' });
    [['month', 'Este mês × anterior'], ['30', '30 dias × 30 antes']].forEach(function (p) {
      seg2.appendChild(h('button', { class: A.cmp === p[0] ? 'on' : '', text: p[1], on: { click: function () { A.cmp = p[0]; refresh(); } } }));
    });
    root.appendChild(seg2);
    var a1, b1, a0, b0, l1, l0;
    if (A.cmp === 'month') {
      a1 = monthStart(now.getFullYear(), now.getMonth()); b1 = Date.now() + 1; a0 = monthStart(now.getFullYear(), now.getMonth() - 1); b0 = a1;
      l1 = U.MES[now.getMonth()]; l0 = U.MES[new Date(a0).getMonth()];
    } else { b1 = Date.now() + 1; a1 = Date.now() - 30 * 86400000; b0 = a1; a0 = a1 - 30 * 86400000; l1 = 'últimos 30'; l0 = '30 anteriores'; }
    var s1 = summary(a1, b1), s0 = summary(a0, b0);
    var tbl = h('table', { class: 'cmp' }, h('tr', {}, h('th'), h('th', { text: l0 }), h('th', { text: l1 })));
    [['Registros', 'reg'], ['Dias com registro', 'nd'], ['Sentimentos', 'feel'], ['Desabafos', 'vent'], ['Cartas', 'letters'], ['Palavras', 'words'], ['Emoção mais registrada', 'top'], ['Intensidade média', 'avg']].forEach(function (r) {
      tbl.appendChild(h('tr', {}, h('td', { text: r[0] }), h('td', { text: String(s0[r[1]]) }), h('td', { text: String(s1[r[1]]) })));
    });
    root.appendChild(tbl);
    root.appendChild(h('div', { class: 'note', text: 'Estes números apenas somam o que você registrou. Não dizem como você está nem quem você é.' }));
    return root;
  }
  function numCard(n, l) { return h('div', { class: 'card', style: 'margin:0' }, h('div', { style: 'font-family:var(--ff);font-size:30px;font-style:italic;color:var(--ac)', text: String(n) }), h('div', { class: 'small mu', text: l })); }
  return { build: build };
})();
/* Penumbra — editores e espaços: escrita, desabafo, sentimento, cartas, reflexões, SOS. */

/* camada padrão com barra superior */
function shell(title, right, cls) {
  var s = { L: null };
  s.wrap = h('div', { class: 'wrap' });
  s.bar = h('div', { class: 'bar-top' },
    h('button', { class: 'ib', 'aria-label': 'Voltar', on: { click: function () { s.close(); } } }, ico('back')),
    h('div', { class: 'grow', text: title }),
    right || h('span', { style: 'width:48px' }));
  s.body = h('div', { class: 'pad' });
  s.wrap.appendChild(s.bar); s.wrap.appendChild(s.body);
  s.open = function (onClose) { s.L = openLayer(s.wrap, onClose); if (cls && s.L) s.L.el.classList.add(cls); return s; };
  s.close = function () { Layers.close(s.L); };
  return s;
}

/* ---------- imagens ---------- */
function shrinkImage(file) {
  return new Promise(function (res, rej) {
    var url = URL.createObjectURL(file), im = new Image();
    im.onload = function () {
      var max = 1080, w = im.naturalWidth, hh = im.naturalHeight, k = Math.min(1, max / Math.max(w, hh));
      var c = document.createElement('canvas'); c.width = Math.round(w * k); c.height = Math.round(hh * k);
      c.getContext('2d').drawImage(im, 0, 0, c.width, c.height);
      URL.revokeObjectURL(url);
      res(c.toDataURL('image/jpeg', 0.72));
    };
    im.onerror = function () { URL.revokeObjectURL(url); rej(new Error('Não consegui abrir esta imagem.')); };
    im.src = url;
  });
}
var Viewer = {
  open: function (id, item) {
    var s = shell('Imagem');
    s.wrap.style.background = '#000';
    var im = h('img', { alt: '' });
    s.body.className = 'viewer'; s.body.style.cssText = 'flex:1;display:flex;align-items:center;padding:8px';
    s.body.appendChild(im);
    Store.getImg(id).then(function (d) { if (d) im.src = d; });
    if (item) s.body.parentNode.appendChild(h('div', { class: 'pad', style: 'text-align:center;background:#000' }, h('button', { class: 'btn', text: 'Abrir o registro', on: { click: function () { s.close(); setTimeout(function () { openItem(item); }, 50); } } })));
    s.open();
  }
};

/* ---------- som ambiente (folha) ---------- */
var Sound = {
  sheet: function () {
    openSheet(function (close) {
      var a = SET().ambient, box = h('div'), chips = h('div', { class: 'chips' });
      var vol = h('input', { type: 'range', min: 0, max: 100, value: Math.round(a.vol * 100), 'aria-label': 'Volume' });
      vol.addEventListener('input', function () { a.vol = vol.value / 100; Ambient.setVol(a.vol); });
      vol.addEventListener('change', function () { Store.saveSettings(); });
      var fin = h('input', { type: 'file', accept: 'audio/*', class: 'hide' });
      fin.addEventListener('change', function () { if (fin.files[0]) { Ambient.file(fin.files[0]); a.kind = 'file'; draw(); } });
      function draw() {
        clear(chips);
        [['off', 'Silêncio'], ['rain', 'Chuva'], ['wind', 'Vento'], ['brown', 'Ruído marrom']].forEach(function (k) {
          chips.appendChild(h('button', { class: 'chip' + (Ambient.kind() === k[0] ? ' on' : ''), text: k[1], on: { click: function () { Ambient.start(k[0], a.vol); a.kind = k[0]; Store.saveSettings(); draw(); } } }));
        });
        chips.appendChild(h('button', { class: 'chip' + (Ambient.kind() === 'file' ? ' on' : ''), text: 'Meu arquivo…', on: { click: function () { Lock.hold(90000); fin.click(); } } }));
      }
      draw();
      box.appendChild(sheetTitle('Som ambiente', close));
      box.appendChild(h('div', { class: 'dlg-m', text: Ambient.supported() ? 'Gerado no próprio aparelho, sem baixar nada. Toca só depois do seu toque e para quando você fecha o app. Um arquivo de áudio seu toca apenas nesta sessão.' : 'Este navegador não permite áudio gerado.' }));
      box.appendChild(chips); box.appendChild(h('div', { class: 'lbl', style: 'margin-top:14px', text: 'volume' })); box.appendChild(vol); box.appendChild(fin);
      return box;
    });
  }
};

/* ---------- EDITOR (diário, sonhos, momentos, cartas...) ---------- */
var EDCFG = {
  entry: { title: 1, emo: 1, int: 1, tags: 1, img: 1, fav: 1, ph: 'Escreva o que quiser…' },
  dream: { title: 1, emo: 1, tags: 1, img: 1, fav: 1, ph: 'O que você lembra do sonho?' },
  moment: { title: 1, emo: 1, tags: 1, img: 1, fav: 1, ph: 'Por que quero guardar este momento?' },
  never: { to: 1, fav: 1, ph: 'O que ficou sem ser dito…' },
  thought: { fav: 1, ph: 'Um pensamento solto…' },
  good: { ph: 'O que me fez bem?' },
  reflect: { fixedTitle: 1, fav: 1, ph: 'Escreva o que vier…' },
  letter: { title: 1, letter: 1, fav: 1, ph: 'Escreva a carta…' },
  capsule: { title: 1, letter: 1, needDate: 1, fav: 1, ph: 'O que você quer guardar para abrir depois?' }
};

var Ed = {
  open: function (spec) {
    var it = spec.item || newItem(spec.type);
    var cfg = Object.assign({}, EDCFG[it.type] || EDCFG.thought, spec.cfg || {});
    it.emo = it.emo || []; it.tags = it.tags || []; it.img = it.img || [];
    var saved = !!spec.item && !!Store.byId(it.id), deleted = false, keepDraft = false, timer = null, focus = false;
    var status = h('span', { class: 'status' });
    function has() { return (it.title || '').trim() || (it.text || '').trim() || it.img.length || it.emo.length || (it.to || '').trim(); }
    function persist() {
      clearTimeout(timer); timer = null;
      if (deleted || (!has() && !saved)) return Promise.resolve();
      saved = true;
      var p = Store.saveItem(it);
      status.textContent = 'salvo ' + U.time(Date.now());
      return p;
    }
    function sched() { status.textContent = 'escrevendo…'; clearTimeout(timer); timer = setTimeout(persist, 600); }

    var wrap = h('div', { class: 'wrap' }), L;
    var dateEl = h('span', { text: U.full(it.c).toUpperCase() + ' · ' + U.time(it.c) });
    var favBtn = h('button', { class: 'ib opt' + (it.fav ? ' on' : ''), 'aria-label': 'Favoritar', on: { click: function () { it.fav = !it.fav; favBtn.classList.toggle('on', it.fav); toast(it.fav ? 'Guardada em Memórias' : 'Removida das favoritas'); sched(); } } }, ico('star'));
    var doneBtn = h('button', { class: 'btn pri', style: 'min-height:42px;padding:6px 14px;margin-left:2px', on: { click: function () {
      if (cfg.needDate && !it.openAt) { toast('Escolha quando poderá ser aberta.'); return; }
      if (cfg.letter && it.openAt > Date.now()) toast('Lacrada. Abre ' + U.until(it.openAt) + '.');
      else if (has()) toast('Guardado');
      Layers.close(L);
    } } });
    function doneLabel() { doneBtn.textContent = cfg.letter && it.openAt > Date.now() ? 'Lacrar' : 'Concluir'; }
    doneLabel();

    var fileIn = h('input', { type: 'file', accept: 'image/*', multiple: true, class: 'hide' });
    fileIn.addEventListener('change', async function () {
      var fl = Array.prototype.slice.call(fileIn.files); fileIn.value = '';
      for (var i = 0; i < fl.length; i++) {
        try { var d = await shrinkImage(fl[i]); var id = await Store.putImg(d); it.img.push(id); drawThumbs(); sched(); }
        catch (e) { toast(e.message || 'Falha ao adicionar a imagem.'); }
      }
    });

    wrap.appendChild(h('div', { class: 'bar-top' },
      h('button', { class: 'ib', 'aria-label': 'Fechar e guardar', on: { click: function () { Layers.close(L); } } }, ico('back')),
      h('div', { class: 'grow' }),
      cfg.fav ? favBtn : null,
      cfg.img ? h('button', { class: 'ib opt', 'aria-label': 'Adicionar imagem', on: { click: function () { Lock.hold(90000); fileIn.click(); } } }, ico('image')) : null,
      h('button', { class: 'ib opt', 'aria-label': 'Mais opções', on: { click: menu } }, ico('more')),
      doneBtn));

    var pad = h('div', { class: 'pad', style: 'flex:1' });
    wrap.appendChild(pad);
    pad.appendChild(h('div', { class: 'ed-date row' }, h('span', { class: 'grow' }, dateEl), status));

    var titleIn = null, toIn = null;
    if (cfg.fixedTitle) pad.appendChild(h('div', { class: 'vq', text: it.title }));
    else if (cfg.title) {
      titleIn = h('input', { class: 'ed-title', placeholder: cfg.letter ? 'Título da carta (opcional)' : 'Sem título', value: it.title || '', maxlength: 120, 'aria-label': 'Título' });
      titleIn.addEventListener('input', function () { it.title = titleIn.value; sched(); });
      pad.appendChild(titleIn);
    }
    if (cfg.to) {
      toIn = h('input', { class: 'ed-title', style: 'font-size:18px', placeholder: 'Para quem? (opcional)', value: it.to || '', maxlength: 80, 'aria-label': 'Para quem' });
      toIn.addEventListener('input', function () { it.to = toIn.value; sched(); });
      pad.appendChild(toIn);
    }
    var kind = null;
    D.LETTER_KINDS.forEach(function (k) { if (k.id === it.kind) kind = k; });
    var ta = h('textarea', { class: 'ed-text', placeholder: (cfg.letter && kind && kind.hello) ? kind.hello : cfg.ph, 'aria-label': 'Texto', spellcheck: 'true' });
    ta.value = it.text || '';
    function fit() { ta.style.height = 'auto'; ta.style.height = Math.max(260, ta.scrollHeight + 4) + 'px'; }
    ta.addEventListener('input', function () { it.text = ta.value; fit(); sched(); });
    pad.appendChild(ta);

    var meta = h('div', { class: 'ed-meta' });
    pad.appendChild(meta);

    /* emoções */
    var emoBox = h('div'), thumbs = h('div', { class: 'thumbs' }), tagBox = h('div'), letBox = h('div');
    function drawEmo() {
      clear(emoBox);
      emoBox.appendChild(h('div', { class: 'lbl', text: 'emoções' }));
      var row = h('div', { class: 'chips' });
      it.emo.forEach(function (e) { row.appendChild(h('button', { class: 'chip on', 'aria-label': 'Remover ' + emo(e).n, on: { click: function () { it.emo.splice(it.emo.indexOf(e), 1); drawEmo(); sched(); } } }, dotEl(e), emo(e).n, ' ×')); });
      row.appendChild(h('button', { class: 'chip', style: 'border-style:dashed', on: { click: function () { emoPicker(it, function () { drawEmo(); sched(); }); } } }, ico('plus', 16), ' emoção'));
      emoBox.appendChild(row);
      if (cfg.int) {
        var val = h('b', { text: it.int ? String(it.int) : '—' });
        var rng = h('input', { type: 'range', min: 1, max: 10, value: it.int || 5, 'aria-label': 'Intensidade de 1 a 10' });
        rng.addEventListener('input', function () { it.int = +rng.value; val.textContent = String(it.int); sched(); });
        emoBox.appendChild(h('div', { class: 'lbl', style: 'margin-top:14px', text: 'intensidade (1–10)' }));
        emoBox.appendChild(h('div', { class: 'scale' }, val, h('div', { class: 'grow' }, rng),
          it.int ? h('button', { class: 'link', text: 'limpar', on: { click: function () { it.int = null; drawEmo(); sched(); } } }) : null));
      }
    }
    function drawTags() {
      clear(tagBox);
      tagBox.appendChild(h('div', { class: 'lbl', style: 'margin-top:14px', text: 'tags' }));
      var row = h('div');
      it.tags.forEach(function (t) { row.appendChild(h('button', { class: 'tag edit', 'aria-label': 'Remover tag ' + t, text: '#' + t + ' ×', on: { click: function () { it.tags.splice(it.tags.indexOf(t), 1); drawTags(); sched(); } } })); });
      tagBox.appendChild(row);
      var inp = h('input', { class: 'input', placeholder: 'nova tag e Enter', maxlength: 30, 'aria-label': 'Nova tag' });
      function add() { var t = inp.value.replace(/[#,]/g, '').trim().replace(/\s+/g, '-'); if (t && it.tags.indexOf(t) < 0) { it.tags.push(t); sched(); } inp.value = ''; drawTags(); }
      inp.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ',') { e.preventDefault(); add(); setTimeout(function () { var n = tagBox.querySelector('input'); if (n) n.focus(); }, 0); } });
      inp.addEventListener('blur', function () { if (inp.value.trim()) add(); });
      tagBox.appendChild(inp);
      var sug = allTags().filter(function (t) { return it.tags.indexOf(t) < 0; }).slice(0, 8);
      if (sug.length) tagBox.appendChild(h('div', { style: 'margin-top:8px' }, sug.map(function (t) { return h('button', { class: 'tag edit', text: '#' + t, on: { click: function () { it.tags.push(t); drawTags(); sched(); } } }); })));
    }
    function drawThumbs() {
      clear(thumbs);
      it.img.forEach(function (id) {
        var im = h('img', { alt: 'imagem do registro' });
        Store.getImg(id).then(function (d) { if (d) im.src = d; });
        thumbs.appendChild(h('div', { class: 'thumb' },
          h('button', { style: 'position:absolute;left:0;top:0;right:0;bottom:0;width:100%;height:100%;border-radius:0;background:none', 'aria-label': 'Ver imagem', on: { click: function () { Viewer.open(id); } } }, im),
          h('button', { 'aria-label': 'Remover imagem', on: { click: function () { ask({ title: 'Remover imagem?', msg: 'Ela será apagada deste registro.', ok: 'Remover', danger: true }).then(function (y) { if (y) { it.img.splice(it.img.indexOf(id), 1); Store.delImg(id); drawThumbs(); sched(); } }); } } }, ico('x', 16))));
      });
    }
    function drawLetter() {
      clear(letBox);
      letBox.appendChild(h('div', { class: 'lbl', style: 'margin-top:14px', text: cfg.needDate ? 'abrir em (obrigatório)' : 'abrir em (opcional)' }));
      var row = h('div', { class: 'chips' });
      function setIn(mo) { var d = new Date(); d.setMonth(d.getMonth() + mo); it.openAt = d.getTime(); after(); }
      [[1, '1 mês'], [3, '3 meses'], [6, '6 meses'], [12, '1 ano']].forEach(function (o) { row.appendChild(h('button', { class: 'chip', text: o[1], on: { click: function () { setIn(o[0]); } } })); });
      row.appendChild(h('button', { class: 'chip', text: 'Escolher data…', on: { click: function () {
        promptBox({ title: 'Quando abrir?', ok: 'Definir', fields: [{ label: 'Data', type: 'date' }], validate: function (v) { return !v[0] || v[0] <= U.dk(Date.now()) ? 'Escolha uma data futura.' : ''; } }).then(function (v) { if (v) { var p = v[0].split('-'); it.openAt = new Date(+p[0], +p[1] - 1, +p[2], 8, 0).getTime(); after(); } });
      } } }));
      if (!cfg.needDate) row.appendChild(h('button', { class: 'chip', text: 'Sem data', on: { click: function () { it.openAt = null; after(); } } }));
      letBox.appendChild(row);
      letBox.appendChild(h('div', { class: 'note', text: it.openAt ? (it.openAt > Date.now() ? 'Será lacrada até ' + U.date(it.openAt) + ' (' + U.until(it.openAt) + ').' : 'Data: ' + U.date(it.openAt) + '.') : 'Sem data: você poderá reler quando quiser.' }));
      function after() { drawLetter(); doneLabel(); sched(); }
    }
    if (cfg.emo) { meta.appendChild(emoBox); drawEmo(); }
    if (cfg.tags) { meta.appendChild(tagBox); drawTags(); }
    if (cfg.img) { meta.appendChild(h('div', { class: 'lbl', style: 'margin-top:14px', text: 'imagens' })); meta.appendChild(thumbs); meta.appendChild(fileIn); drawThumbs(); }
    if (cfg.letter) { meta.appendChild(letBox); drawLetter(); }
    meta.appendChild(h('div', { class: 'note', style: 'margin-top:22px', text: 'Tudo é salvo enquanto você escreve, só neste aparelho.' }));

    function menu() {
      openSheet(function (close) {
        var box = h('div', {}, sheetTitle('Opções', close), h('div', { class: 'stack' },
          h('button', { class: 'btn block', on: { click: function () { close(); focus = !focus; wrap.classList.toggle('focus', focus); if (focus) toast('Modo sem distrações. Toque na barra para sair.'); } } }, ico('eye', 20), 'Modo sem distrações'),
          Ambient.supported() ? h('button', { class: 'btn block', on: { click: function () { close(); setTimeout(Sound.sheet, 60); } } }, ico('music', 20), 'Som ambiente') : null,
          h('button', { class: 'btn block', on: { click: function () { close(); setTimeout(editDate, 60); } } }, ico('cal', 20), 'Alterar data e hora'),
          h('button', { class: 'btn block', on: { click: function () { keepDraft = !keepDraft; if (keepDraft) it.draft = true; toast(keepDraft ? 'Será mantido como rascunho' : 'Rascunho desativado'); close(); } } }, ico('edit', 20), (keepDraft ? 'Desmarcar rascunho' : 'Manter como rascunho')),
          saved ? h('button', { class: 'btn danger block', on: { click: function () { close(); setTimeout(del, 60); } } }, ico('trash', 20), 'Excluir') : null));
        return box;
      });
    }
    function editDate() {
      var inp = h('input', { class: 'input', type: 'datetime-local', value: U.toLocalInput(it.c) });
      promptBox({ title: 'Data e hora', ok: 'Salvar', fields: [{ label: 'Quando', type: 'datetime-local', value: U.toLocalInput(it.c) }], validate: function (v) { return v[0] ? '' : 'Informe a data.'; } }).then(function (v) {
        if (v) { var t = new Date(v[0]).getTime(); if (!isNaN(t)) { it.c = t; dateEl.textContent = U.full(it.c).toUpperCase() + ' · ' + U.time(it.c); sched(); } }
      });
    }
    function del() {
      ask({ title: 'Excluir este registro?', msg: 'Isso não pode ser desfeito.', ok: 'Excluir', danger: true }).then(function (y) {
        if (!y) return;
        deleted = true; clearTimeout(timer); Store.deleteItem(it.id); toast('Excluído'); Layers.close(L);
      });
    }

    function vis() { if (document.hidden) persist(); }
    document.addEventListener('visibilitychange', vis);
    L = openLayer(wrap, function () {
      document.removeEventListener('visibilitychange', vis);
      clearTimeout(timer);
      if (!deleted) {
        if (!has()) { if (saved) Store.deleteItem(it.id); }
        else {
          if (!keepDraft && !(cfg.needDate && !it.openAt)) it.draft = false;
          Store.saveItem(it);
        }
      }
      if (spec.after) spec.after(it);
      refresh();
    });
    setTimeout(fit, 30);
    if (!saved && L) setTimeout(function () { ta.focus(); }, 260);
    return it;
  }
};

function emoPicker(it, onChange) {
  openSheet(function (close) {
    var box = h('div'), grid = h('div', { class: 'egrid' });
    function draw() {
      clear(grid);
      emotions().forEach(function (e) {
        grid.appendChild(h('button', { class: 'chip' + (it.emo.indexOf(e.id) >= 0 ? ' on' : ''), on: { click: function () {
          var i = it.emo.indexOf(e.id); if (i >= 0) it.emo.splice(i, 1); else it.emo.push(e.id); draw(); onChange();
        } } }, dotEl(e.id), e.n));
      });
      grid.appendChild(h('button', { class: 'chip', style: 'border-style:dashed', on: { click: function () { createEmotion(function (id) { it.emo.push(id); draw(); onChange(); }); } } }, ico('plus', 16), ' Criar'));
    }
    draw();
    box.appendChild(sheetTitle('Emoções', close));
    box.appendChild(h('div', { class: 'dlg-m', text: 'Pode escolher mais de uma.' }));
    box.appendChild(grid);
    box.appendChild(h('button', { class: 'btn pri block', style: 'margin-top:14px', text: 'Pronto', on: { click: close } }));
    return box;
  });
}

/* ---------- PRECISO DESABAFAR ---------- */
var Vent = {
  open: function (item) {
    var it = item || newItem('vent'), saved = !!item, deleted = false, timer = null, L;
    var ta = h('textarea', { placeholder: 'Escreva tudo o que estiver pensando. Ninguém lê isto além de você.', 'aria-label': 'Desabafo', spellcheck: 'true' });
    ta.value = it.text || '';
    var status = h('span', { class: 'status' }), qBox = h('div'), qi = -1;
    function persist() {
      clearTimeout(timer); timer = null;
      if (deleted) return Promise.resolve();
      if (!ta.value.trim() && !saved) return Promise.resolve();
      it.text = ta.value; saved = true; status.textContent = 'salvo ' + U.time(Date.now());
      return Store.saveItem(it);
    }
    ta.addEventListener('input', function () { status.textContent = '…'; clearTimeout(timer); timer = setTimeout(persist, 600); });
    function drawQ() {
      clear(qBox);
      if (qi < 0) { qBox.appendChild(h('button', { class: 'link', text: 'Quero uma pergunta para começar (opcional)', on: { click: function () { qi = Math.floor(Math.random() * D.VENT_Q.length); drawQ(); } } })); return; }
      qBox.appendChild(h('div', { class: 'vq', text: D.VENT_Q[qi] }));
      qBox.appendChild(h('div', { class: 'row gap' },
        h('button', { class: 'link', text: 'outra pergunta', on: { click: function () { qi = (qi + 1 + Math.floor(Math.random() * (D.VENT_Q.length - 1))) % D.VENT_Q.length; drawQ(); } } }),
        h('button', { class: 'link', text: 'usar no texto', on: { click: function () { ta.value += (ta.value && !/\n$/.test(ta.value) ? '\n\n' : '') + D.VENT_Q[qi] + '\n'; ta.focus(); ta.setSelectionRange(ta.value.length, ta.value.length); it.text = ta.value; persist(); } } }),
        h('button', { class: 'link', text: 'esconder', on: { click: function () { qi = -1; drawQ(); } } })));
    }
    drawQ();
    var wrap = h('div', { class: 'wrap' },
      h('div', { class: 'bar-top', style: 'background:transparent' },
        h('button', { class: 'ib', 'aria-label': 'Sair (o texto fica como rascunho)', on: { click: function () { Layers.close(L); } } }, ico('back')),
        h('div', { class: 'grow', text: 'desabafo' }), status),
      h('div', { class: 'pad', style: 'flex:1;display:flex;flex-direction:column' }, qBox, ta),
      h('div', { class: 'pad', style: 'padding-top:0' },
        h('div', { class: 'two' },
          h('button', { class: 'btn', text: 'Deixar como rascunho', on: { click: function () { it.draft = true; persist().then(function () { toast('Mantido como rascunho'); Layers.close(L); }); } } }),
          h('button', { class: 'btn pri', text: 'Guardar no diário', on: { click: function () {
            if (!ta.value.trim()) { toast('Escreva algo antes de guardar.'); return; }
            it.draft = false; persist().then(function () { toast('Guardado no diário'); Layers.close(L); });
          } } })),
        h('button', { class: 'btn ghost block', style: 'margin-top:6px', text: 'Apagar e sair', on: { click: function () {
          ask({ title: 'Apagar este desabafo?', msg: 'O texto será descartado para sempre.', ok: 'Apagar', danger: true }).then(function (y) {
            if (y) { deleted = true; clearTimeout(timer); if (saved) Store.deleteItem(it.id); Layers.close(L); }
          });
        } } })));
    function vis() { if (document.hidden) persist(); }
    document.addEventListener('visibilitychange', vis);
    L = openLayer(wrap, function () {
      document.removeEventListener('visibilitychange', vis);
      clearTimeout(timer);
      if (!deleted) {
        it.text = ta.value;
        if (!it.text.trim()) { if (saved) Store.deleteItem(it.id); } else Store.saveItem(it);
      }
      refresh();
    });
    if (L) { L.el.classList.add('vent'); if (!saved) setTimeout(function () { ta.focus(); }, 260); }
  }
};

/* ---------- REGISTRO DE SENTIMENTO ---------- */
var FeelEd = {
  pick: function () { FeelEd.open({}); },
  open: function (spec) {
    var it = spec.item || newItem('feel'), isNew = !spec.item;
    if (isNew) { it.emo = spec.emo ? [spec.emo] : []; it.int = 5; it.ans = []; }
    var sel = it.emo[0] || '', ints = it.int || 5;
    openSheet(function (close) {
      var box = h('div'), grid = h('div', { class: 'egrid' });
      function drawGrid() {
        clear(grid);
        emotions().forEach(function (e) {
          grid.appendChild(h('button', { class: 'chip' + (sel === e.id ? ' on' : ''), on: { click: function () { sel = e.id; drawGrid(); } } }, dotEl(e.id), e.n));
        });
        grid.appendChild(h('button', { class: 'chip', style: 'border-style:dashed', on: { click: function () { createEmotion(function (id) { sel = id; drawGrid(); }); } } }, ico('plus', 16), ' Criar'));
      }
      drawGrid();
      var val = h('b', { text: String(ints) }), rng = h('input', { type: 'range', min: 1, max: 10, value: ints, 'aria-label': 'Intensidade de 1 a 10' });
      rng.addEventListener('input', function () { ints = +rng.value; val.textContent = String(ints); });
      var answers = {};
      (it.ans || []).forEach(function (a) { answers[a.q] = a.a; });
      var tas = D.FEEL_Q.map(function (q) {
        var t = h('textarea', { class: 'input', rows: 3, placeholder: 'Opcional' }); t.value = answers[q] || '';
        t.addEventListener('input', function () { t.style.height = 'auto'; t.style.height = Math.max(76, t.scrollHeight + 2) + 'px'; });
        return { q: q, t: t, d: h('details', { open: !!answers[q] }, h('summary', { style: 'min-height:44px;display:flex;align-items:center;font-family:var(--ff);font-style:italic', text: q }), t) };
      });
      var note = h('textarea', { class: 'input', rows: 3, placeholder: 'Algo mais que queira registrar (opcional)' }); note.value = it.text || '';
      box.appendChild(sheetTitle(isNew ? 'Como estou' : 'Sentimento · ' + U.dateShort(it.c), close));
      box.appendChild(grid);
      box.appendChild(h('div', { class: 'lbl', style: 'margin-top:16px', text: 'intensidade' }));
      box.appendChild(h('div', { class: 'scale' }, val, h('div', { class: 'grow' }, rng)));
      box.appendChild(h('div', { class: 'lbl', style: 'margin-top:12px', text: 'se quiser, responda (tudo opcional)' }));
      tas.forEach(function (x) { box.appendChild(x.d); });
      box.appendChild(h('div', { style: 'margin-top:12px' }, note));
      box.appendChild(h('div', { class: 'dlg-b' },
        !isNew ? h('button', { class: 'btn danger', 'aria-label': 'Excluir', on: { click: function () {
          ask({ title: 'Excluir este registro?', msg: 'Isso não pode ser desfeito.', ok: 'Excluir', danger: true }).then(function (y) { if (y) { Store.deleteItem(it.id); close(); refresh(); toast('Excluído'); } });
        } } }, ico('trash', 20)) : null,
        h('button', { class: 'btn pri', text: 'Salvar', on: { click: function () {
          if (!sel) { toast('Escolha uma emoção.'); return; }
          it.emo = [sel]; it.int = ints; it.draft = false; it.text = note.value.trim();
          it.ans = tas.filter(function (x) { return x.t.value.trim(); }).map(function (x) { return { q: x.q, a: x.t.value.trim() }; });
          Store.saveItem(it); vib(15); toast('Registrado'); close(); refresh();
        } } })));
      return box;
    });
  }
};

/* ---------- CARTAS e CÁPSULA ---------- */
var Letters = {
  lcfg: function (it) {
    var k = null; D.LETTER_KINDS.forEach(function (x) { if (x.id === it.kind) k = x; });
    return Object.assign({}, EDCFG[it.type], { needDate: it.type === 'capsule' || !!(k && k.needsDate) });
  },
  create: function (type, after) {
    if (type === 'capsule') { var it = newItem('capsule'); it.kind = 'capsule'; return Ed.open({ item: it, cfg: Letters.lcfg(it), after: after }); }
    choose('Que carta é esta?', null, D.LETTER_KINDS.map(function (k) { return { id: k.id, label: k.n, sub: k.d }; })).then(function (id) {
      if (!id) return;
      var it = newItem('letter'); it.kind = id;
      setTimeout(function () { Ed.open({ item: it, cfg: Letters.lcfg(it), after: after }); }, 30);
    });
  },
  space: function (type) {
    var s = shell(type === 'capsule' ? 'Cápsula do tempo' : 'Cartas para o meu futuro');
    function draw() {
      clear(s.body);
      s.body.appendChild(h('div', { class: 'sub', style: 'margin:0 0 14px', text: type === 'capsule' ? 'Guarde um pensamento de hoje e escolha quando ele poderá ser aberto. Até lá, ele fica lacrado.' : 'Escreva para o seu eu do futuro, do passado, ou para o que ainda dói. Cartas com data ficam lacradas até lá.' }));
      s.body.appendChild(h('button', { class: 'btn pri block', on: { click: function () { Letters.create(type, function () { setTimeout(draw, 80); }); } } }, ico('plus', 20), type === 'capsule' ? 'Nova cápsula' : 'Nova carta'));
      var list = ITEMS().filter(function (i) { return i.type === (type === 'capsule' ? 'capsule' : 'letter'); }).sort(byDate);
      var groups = [['chegaram', 'Chegaram', function (i) { return isArrived(i); }], ['lacradas', 'Lacradas', function (i) { return isSealed(i); }], ['outras', 'Abertas e guardadas', function (i) { return !isArrived(i) && !isSealed(i); }]];
      if (!list.length) s.body.appendChild(h('div', { class: 'empty', text: 'Nada aqui ainda.' }));
      groups.forEach(function (g) {
        var l = list.filter(g[2]);
        if (!l.length) return;
        s.body.appendChild(h('h2', { text: g[1] }));
        l.forEach(function (i) { s.body.appendChild(entryCard(i, function (x) { Letters.read(x, function () { draw(); }); })); });
      });
    }
    draw();
    s.open(function () { refresh(); });
    s.redraw = draw;
    return s;
  },
  read: function (it, after) {
    if (it.draft) return Ed.open({ item: it, cfg: Letters.lcfg(it), after: after });
    var s = shell(it.type === 'capsule' ? 'Cápsula' : 'Carta');
    function sealedView() {
      clear(s.body);
      var env = h('div', { class: 'env' }, h('div', { class: 'body' }), h('div', { class: 'sheetp' }), h('div', { class: 'flap' }), h('div', { class: 'seal', text: '✦' }));
      s.body.appendChild(env);
      s.body.appendChild(h('div', { style: 'text-align:center' },
        h('h1', { text: itemTitle(it) }),
        h('div', { class: 'sub', text: 'Lacrada em ' + U.date(it.c) + '. Abre em ' + U.date(it.openAt) + ' (' + U.until(it.openAt) + ').' })));
      s.body.appendChild(h('div', { class: 'stack', style: 'margin-top:26px' },
        h('button', { class: 'btn block', text: 'Abrir mesmo assim', on: { click: function () {
          ask({ title: 'Abrir antes da hora?', msg: 'Ela foi lacrada para ser lida em ' + U.date(it.openAt) + '. Você pode abrir agora, mas não dá para lacrar de novo sem escrever outra.', ok: 'Abrir agora' }).then(function (y) { if (y) ceremony(); });
        } } }),
        h('button', { class: 'btn ghost block', text: 'Excluir', on: { click: function () { del(); } } })));
    }
    function ceremony() {
      clear(s.body);
      var env = h('div', { class: 'env' }, h('div', { class: 'body' }), h('div', { class: 'sheetp' }), h('div', { class: 'flap' }), h('div', { class: 'seal', text: '✦' }));
      var hint = h('div', { class: 'sub', style: 'text-align:center', text: 'Chegou o dia. Toque no selo para abrir.' });
      s.body.appendChild(env); s.body.appendChild(hint);
      var go = false;
      env.addEventListener('click', function () {
        if (go) return; go = true; vib(20);
        env.classList.add('open'); hint.textContent = '';
        setTimeout(function () { it.opened = Date.now(); Store.saveItem(it); reading(true); }, 1900);
      });
    }
    function reading(anim) {
      clear(s.body);
      var box = h('div', { class: anim ? 'reveal' : '' });
      var i = 0;
      function add(n) { if (anim) n.style.animationDelay = (i++ * 0.45) + 's'; box.appendChild(n); }
      add(h('div', { class: 'quote-src', text: 'escrita em ' + U.date(it.c) + ' · ' + U.ago(it.c) }));
      if (it.title) add(h('h1', { text: it.title, style: 'margin-bottom:14px' }));
      var paras = (it.text || '').split(/\n{2,}/);
      paras.forEach(function (p) { add(h('p', { class: 'read letter-text', text: p, style: 'margin:0 0 14px' })); });
      if (it.img && it.img.length) {
        var th = h('div', { class: 'thumbs' });
        it.img.forEach(function (id) { var im = h('img', { alt: '' }); Store.getImg(id).then(function (d) { if (d) im.src = d; }); th.appendChild(h('div', { class: 'thumb' }, h('button', { style: 'width:100%;height:100%;background:none', on: { click: function () { Viewer.open(id); } } }, im))); });
        add(th);
      }
      s.body.appendChild(box);
      s.body.appendChild(h('div', { class: 'two', style: 'margin-top:26px' },
        h('button', { class: 'btn', text: 'Editar', on: { click: function () { s.close(); setTimeout(function () { Ed.open({ item: it, cfg: Letters.lcfg(it), after: after }); }, 60); } } }),
        h('button', { class: 'btn danger', text: 'Excluir', on: { click: del } })));
    }
    function del() {
      ask({ title: 'Excluir esta carta?', msg: 'Isso não pode ser desfeito.', ok: 'Excluir', danger: true }).then(function (y) { if (y) { Store.deleteItem(it.id); toast('Excluída'); s.close(); } });
    }
    if (isSealed(it)) sealedView(); else if (isArrived(it)) ceremony(); else reading(false);
    s.open(function () { refresh(); if (after) setTimeout(after, 80); });
  }
};

/* ---------- REFLEXÕES ---------- */
var Reflect = {
  pool: function () { return D.REFLECT.concat(SET().questions); },
  next: function () {
    var s = SET(), avail = Reflect.pool().filter(function (q) { return s.usedQ.indexOf(q) < 0; });
    if (!avail.length) { s.usedQ = []; avail = Reflect.pool().filter(function (q) { return q !== s.curQ; }); if (!avail.length) avail = Reflect.pool(); }
    var q = avail[Math.floor(Math.random() * avail.length)];
    s.curQ = q; s.usedQ.push(q); Store.saveSettings();
    return q;
  },
  open: function () {
    var s = shell('Reflexões'), draft = '';
    function draw() {
      clear(s.body);
      var q = SET().curQ || Reflect.next();
      s.body.appendChild(h('div', { class: 'lbl', text: 'pergunta' }));
      s.body.appendChild(h('div', { class: 'card hero' }, h('h1', { text: q, style: 'font-size:23px' })));
      var ta = h('textarea', { class: 'input', placeholder: 'Escreva sem pressa. Pode ser uma linha só.', style: 'margin-top:12px;min-height:150px', 'aria-label': 'Resposta' });
      ta.value = draft; ta.addEventListener('input', function () { draft = ta.value; });
      s.body.appendChild(ta);
      s.body.appendChild(h('div', { class: 'two', style: 'margin-top:10px' },
        h('button', { class: 'btn', text: 'Outra pergunta', on: { click: function () { draft = ''; Reflect.next(); draw(); } } }),
        h('button', { class: 'btn pri', text: 'Guardar resposta', on: { click: function () {
          if (!draft.trim()) { toast('Escreva a resposta ou escolha outra pergunta.'); return; }
          var it = newItem('reflect'); it.title = q; it.text = draft.trim(); it.draft = false;
          Store.saveItem(it); SET().curQ = ''; Store.saveSettings(); draft = ''; toast('Guardado'); draw();
        } } })));
      var past = ITEMS().filter(function (i) { return i.type === 'reflect' && !i.draft; }).sort(byDate);
      s.body.appendChild(h('div', { class: 'note', text: SET().usedQ.length + ' de ' + Reflect.pool().length + ' perguntas já apareceram; nenhuma se repete até todas passarem. Você pode adicionar as suas em Configurações.' }));
      if (past.length) {
        s.body.appendChild(h('h2', { text: 'Respondidas' }));
        past.forEach(function (i) { s.body.appendChild(entryCard(i, function (x) { Ed.open({ item: x, after: draw }); })); });
      }
    }
    draw();
    s.open(function () { refresh(); });
  }
};

/* ---------- ESPAÇOS ---------- */
var Spaces = {
  open: function (id) {
    if (id === 'reflect') return Reflect.open();
    if (id === 'letters' || id === 'capsule') return Letters.space(id);
    if (id === 'mural') return Spaces.mural();
    var cfgs = {
      never: { t: 'Coisas que nunca disse', d: 'Para quem ouviu menos do que merecia, ou nada. Fica só aqui.', btn: 'Escrever algo', quick: false },
      good: { t: 'Pequenas coisas que me fizeram bem', d: 'Uma linha basta. Nas fases ruins, relê-las ajuda a lembrar que elas existem.', quick: 'O que me fez bem hoje?' },
      moment: { t: 'Momentos que quero guardar', d: 'Para lembranças com foto, data e um porquê.', btn: 'Guardar um momento' },
      dream: { t: 'Sonhos', d: 'Abra e escreva ao acordar, antes que escape.', btn: 'Registrar um sonho' },
      thought: { t: 'Pensamentos soltos', d: 'Sem título, sem forma, sem motivo.', quick: 'Um pensamento…' }
    };
    var c = cfgs[id], s = shell(c.t), q = '';
    function draw() {
      clear(s.body);
      s.body.appendChild(h('div', { class: 'sub', style: 'margin:0 0 14px', text: c.d }));
      if (c.quick) {
        var ta = h('textarea', { class: 'input', rows: 2, placeholder: c.quick, 'aria-label': c.quick }); ta.value = q;
        ta.addEventListener('input', function () { q = ta.value; });
        s.body.appendChild(ta);
        s.body.appendChild(h('button', { class: 'btn pri block', style: 'margin-top:8px', text: 'Guardar', on: { click: function () {
          if (!q.trim()) return;
          var it = newItem(id); it.text = q.trim(); it.draft = false; Store.saveItem(it); q = ''; vib(10); draw();
        } } }));
      } else s.body.appendChild(h('button', { class: 'btn pri block', on: { click: function () { Ed.open({ type: id, after: draw }); } } }, ico('plus', 20), c.btn));
      var list = ITEMS().filter(function (i) { return i.type === id && !i.draft; }).sort(byDate);
      if (!list.length) s.body.appendChild(h('div', { class: 'empty', text: 'Nada aqui ainda.' }));
      list.forEach(function (i) { s.body.appendChild(entryCard(i, function (x) { Ed.open({ item: x, after: draw }); })); });
    }
    draw();
    s.open(function () { refresh(); });
  },
  favs: function () {
    var s = shell('Minhas memórias');
    ITEMS().filter(function (i) { return i.fav && !i.draft; }).sort(byDate).forEach(function (i) { s.body.appendChild(entryCard(i)); });
    s.open();
  },
  mural: function () {
    var s = shell('Mural de lembranças'), list = [];
    ITEMS().sort(byDate).forEach(function (i) { (i.img || []).forEach(function (id) { list.push({ id: id, it: i }); }); });
    s.body.appendChild(h('div', { class: 'sub', style: 'margin:0 0 14px', text: 'Todas as imagens que você adicionou a entradas, sonhos e momentos.' }));
    if (!list.length) s.body.appendChild(h('div', { class: 'empty', text: 'Ainda não há imagens. Adicione fotos em uma entrada ou em Momentos que quero guardar.' }));
    var g = h('div', { class: 'mural' });
    list.slice(0, 90).forEach(function (x) {
      var im = h('img', { alt: 'Lembrança de ' + U.date(x.it.c) });
      Store.getImg(x.id).then(function (d) { if (d) im.src = d; });
      g.appendChild(h('button', { style: 'height:' + Math.min(200, Math.floor((Math.min(window.innerWidth, 640) - 48) / 3)) + 'px', 'aria-label': 'Ver imagem', on: { click: function () { Viewer.open(x.id, x.it); } } }, im));
    });
    s.body.appendChild(g);
    s.open();
  }
};

/* ---------- EMERGÊNCIA EMOCIONAL ---------- */
var SOS = {
  open: function () {
    var s = shell('preciso de calma'), timer = null, running = false, step = 0;
    var br = h('div', { class: 'breath', text: 'respirar' }), brBtn = h('button', { class: 'btn pri block' });
    function breathLoop() {
      if (!running) return;
      br.className = 'breath in'; br.textContent = 'inspire…';
      timer = setTimeout(function () {
        if (!running) return; br.className = 'breath hold'; br.textContent = 'segure';
        timer = setTimeout(function () {
          if (!running) return; br.className = 'breath out'; br.textContent = 'solte devagar';
          timer = setTimeout(breathLoop, 6000);
        }, 4000);
      }, 4000);
    }
    function setRun(v) { running = v; clearTimeout(timer); brBtn.textContent = v ? 'Parar' : 'Começar a respirar'; if (v) breathLoop(); else { br.className = 'breath'; br.textContent = 'respirar'; } }
    brBtn.addEventListener('click', function () { setRun(!running); });
    setRun(false);
    s.body.appendChild(h('div', { class: 'sub', style: 'margin:0 0 6px', text: 'Sem pressa. Escolha o que ajudar agora.' }));
    s.body.appendChild(h('h2', { text: 'Respirar' }));
    s.body.appendChild(h('div', { class: 'small mu', text: 'Inspire por 4 segundos, segure por 4, solte por 6. Repita no seu ritmo.' }));
    s.body.appendChild(br); s.body.appendChild(brBtn);

    s.body.appendChild(h('h2', { text: 'Voltar ao presente (5-4-3-2-1)' }));
    var gBox = h('div', { class: 'card' });
    function drawG() {
      clear(gBox);
      gBox.appendChild(h('div', { class: 'lbl', text: 'passo ' + (step + 1) + ' de 5' }));
      gBox.appendChild(h('div', { style: 'font-family:var(--ff);font-size:19px;font-style:italic;margin-bottom:12px', text: D.GROUND[step] }));
      gBox.appendChild(h('button', { class: 'btn block', text: step < 4 ? 'Feito, próximo' : 'Recomeçar', on: { click: function () { step = (step + 1) % 5; drawG(); } } }));
    }
    drawG(); s.body.appendChild(gBox);

    s.body.appendChild(h('h2', { text: 'Pessoa de confiança' }));
    var tBox = h('div', { class: 'card' });
    function drawT() {
      clear(tBox);
      var t = SET().trusted;
      if (!t.name && !t.phone) {
        tBox.appendChild(h('div', { class: 'small mu', style: 'margin-bottom:10px', text: 'Cadastre alguém para quem você possa ligar ou mandar mensagem quando estiver difícil. Fica só neste aparelho.' }));
        tBox.appendChild(h('button', { class: 'btn block', text: 'Cadastrar pessoa', on: { click: function () { editTrusted(drawT); } } }));
        return;
      }
      tBox.appendChild(h('div', { style: 'font-family:var(--ff);font-size:19px;margin-bottom:10px', text: t.name || t.phone }));
      if (t.phone) {
        var tel = t.phone.replace(/[^\d+]/g, '');
        tBox.appendChild(h('div', { class: 'two' },
          h('a', { class: 'btn', href: 'tel:' + tel, on: { click: function () { Lock.hold(120000); } } }, ico('phone', 18), 'Ligar'),
          h('a', { class: 'btn', href: 'sms:' + tel + '?body=' + encodeURIComponent(t.msg || ''), on: { click: function () { Lock.hold(120000); } } }, ico('mail', 18), 'Mensagem')));
      }
      tBox.appendChild(h('button', { class: 'link', text: 'editar', on: { click: function () { editTrusted(drawT); } } }));
    }
    drawT(); s.body.appendChild(tBox);

    s.body.appendChild(h('div', { class: 'card warn', style: 'margin-top:18px' },
      h('div', { class: 'small', text: 'Se você estiver em risco agora ou pensando em se machucar, procure ajuda imediata: no Brasil, o CVV atende 24 h, de graça, pelo 188; em emergência, o SAMU é 192.' }),
      h('div', { class: 'two', style: 'margin-top:10px' },
        h('a', { class: 'btn', href: 'tel:188', on: { click: function () { Lock.hold(120000); } } }, 'Ligar 188'),
        h('a', { class: 'btn', href: 'tel:192', on: { click: function () { Lock.hold(120000); } } }, 'Ligar 192'))));
    s.open(function () { running = false; clearTimeout(timer); });
  }
};
function editTrusted(cb) {
  var t = SET().trusted;
  promptBox({ title: 'Pessoa de confiança', msg: 'Só fica neste aparelho. Deixe nome e telefone em branco para remover.', ok: 'Salvar',
    fields: [{ label: 'Nome', value: t.name }, { label: 'Telefone (com DDD)', value: t.phone, type: 'tel' }, { label: 'Mensagem pronta', value: t.msg }] }).then(function (v) {
    if (!v) return;
    SET().trusted = { name: v[0].trim(), phone: v[1].trim(), msg: v[2].trim() };
    Store.saveSettings(); if (cb) cb();
  });
}
/* Penumbra — bloqueio, senha, backup, configurações e primeira abertura. */

/* ---------- bloqueio automático ---------- */
var Lock = {
  last: Date.now(), holdUntil: 0, hiddenAt: 0, busy: false, started: false,
  hold: function (ms) { Lock.holdUntil = Date.now() + ms; },
  touch: function () { Lock.last = Date.now(); },
  limit: function () {
    var s = Store.S.set;
    if (!Store.isEncrypted() || !s) return Infinity;
    return s.lockMin < 0 ? Infinity : s.lockMin * 60000;
  },
  check: function () {
    if (!Store.S.unlocked || !Store.isEncrypted() || Lock.busy) return;
    var lim = Lock.limit();
    if (lim > 0 && lim !== Infinity && Date.now() - Lock.last > lim && Date.now() > Lock.holdUntil) Lock.lock();
  },
  onHide: function () {
    Lock.hiddenAt = Date.now();
    document.documentElement.classList.add('veil');
    if (Store.S.unlocked && Store.isEncrypted() && Lock.limit() === 0 && Date.now() > Lock.holdUntil) Lock.lock();
  },
  onShow: function () {
    document.documentElement.classList.remove('veil');
    if (Store.S.unlocked && Store.isEncrypted()) {
      var lim = Lock.limit();
      if (Date.now() <= Lock.holdUntil) { Lock.touch(); return; }
      if (lim === 0 && Lock.hiddenAt) Lock.lock();
      else if (lim > 0 && lim !== Infinity && Date.now() - Lock.last > lim) Lock.lock();
    }
  },
  start: function () {
    if (Lock.started) return; Lock.started = true;
    ['pointerdown', 'keydown', 'scroll', 'input'].forEach(function (ev) { document.addEventListener(ev, Lock.touch, { passive: true, capture: true }); });
    document.addEventListener('visibilitychange', function () { if (document.hidden) Lock.onHide(); else Lock.onShow(); });
    window.addEventListener('pagehide', function () { document.documentElement.classList.add('veil'); });
    window.addEventListener('pageshow', function () { if (!document.hidden) document.documentElement.classList.remove('veil'); });
    setInterval(Lock.check, 10000);
  },
  lock: async function () {
    if (!Store.isEncrypted() || Lock.busy || !Store.S.unlocked) return;
    Lock.busy = true;
    try {
      Layers.closeAll();
      await Store.flush();
      Ambient.stop();
      Store.lock();
      clearInterval(A.clockT);
      clear($('#app'));
      Lock.show();
    } finally { Lock.busy = false; }
  },
  fails: 0, waitUntil: 0,
  show: function () {
    applyUI(loadPrefs());
    var p = loadPrefs(), lockEl = $('#lock');
    if (lockEl) lockEl.parentNode.removeChild(lockEl);
    var pw = h('input', { class: 'input', type: 'password', placeholder: 'senha ou frase secreta', autocomplete: 'current-password', 'aria-label': 'Senha', style: 'text-align:center' });
    var err = h('div', { class: 'err', style: 'text-align:center' });
    var btn = h('button', { class: 'btn pri block', text: 'Abrir' });
    async function go() {
      if (!pw.value) return;
      var wait = Lock.waitUntil - Date.now();
      if (wait > 0) { err.textContent = 'Aguarde ' + Math.ceil(wait / 1000) + 's para tentar de novo.'; return; }
      btn.disabled = true; btn.textContent = 'Abrindo…'; err.textContent = '';
      var ok = await Store.unlock(pw.value);
      btn.disabled = false; btn.textContent = 'Abrir';
      if (ok) { Lock.fails = 0; pw.value = ''; var l = $('#lock'); if (l) l.parentNode.removeChild(l); startApp(); }
      else {
        Lock.fails++; pw.value = '';
        err.textContent = 'Senha incorreta.';
        if (Lock.fails >= 3) { var ms = Math.min(30000, 1000 * Math.pow(2, Lock.fails - 3)); Lock.waitUntil = Date.now() + ms; err.textContent = 'Senha incorreta. Aguarde ' + Math.ceil(ms / 1000) + 's.'; }
      }
    }
    btn.addEventListener('click', go);
    pw.addEventListener('keydown', function (e) { if (e.key === 'Enter') go(); });
    var moon = h('div'); moon.innerHTML = '<svg class="moon" viewBox="0 0 84 84" aria-hidden="true"><circle cx="42" cy="42" r="30" fill="none" stroke="var(--tx)" stroke-opacity=".8" stroke-width="1.4"/><circle cx="54" cy="38" r="26" fill="var(--bg)" stroke="var(--ac)" stroke-width="1.4"/><path d="M14 14l0 8M10 18l8 0" stroke="var(--ac)" stroke-width="1.2"/></svg>';
    var el = h('div', { id: 'lock' }, h('div', { class: 'box' }, moon,
      h('h1', { text: p.name }), h('div', { class: 'sub', style: 'margin:6px 0 22px', text: 'Este espaço está trancado.' }),
      pw, err, h('div', { style: 'margin-top:10px' }, btn),
      h('button', { class: 'link', style: 'margin-top:18px', text: 'Esqueci a senha', on: { click: Lock.forgot } })));
    document.body.appendChild(el);
    setTimeout(function () { pw.focus(); }, 200);
    hideSplash();
  },
  forgot: function () {
    openSheet(function (close) {
      return h('div', {}, sheetTitle('Esqueci a senha', close),
        h('div', { class: 'dlg-m', text: 'Não existe recuperação: a senha não fica guardada em lugar nenhum, e é isso que protege seus textos. Se você tem um backup, dá para restaurar nele. Caso contrário, só resta apagar tudo e recomeçar.' }),
        h('div', { class: 'stack' },
          h('button', { class: 'btn block', text: 'Restaurar de um backup', on: { click: function () { close(); setTimeout(function () { Backup.importFlow(true); }, 80); } } }),
          h('button', { class: 'btn danger block', text: 'Apagar tudo e recomeçar', on: { click: function () { close(); setTimeout(Lock.wipeAsk, 80); } } })));
    });
  },
  wipeAsk: function () {
    promptBox({ title: 'Apagar tudo?', msg: 'Isso apaga todos os textos e imagens deste aparelho, para sempre. Para confirmar, escreva APAGAR.', ok: 'Apagar tudo', danger: true,
      fields: [{ label: 'Confirmação', ph: 'APAGAR' }], validate: function (v) { return v[0].trim().toUpperCase() === 'APAGAR' ? '' : 'Escreva APAGAR para confirmar.'; } }).then(async function (v) {
      if (!v) return;
      await Store.wipeStores();
      try { localStorage.removeItem('pn_ui'); } catch (e) { }
      location.reload();
    });
  }
};

/* ---------- senha ---------- */
function busy(msg) {
  var el = h('div', { id: 'busy', style: 'position:fixed;left:0;right:0;top:0;bottom:0;z-index:95;background:rgba(0,0,0,.7);display:flex;align-items:center;justify-content:center;color:#fff;font-family:var(--ff);font-style:italic;font-size:20px;text-align:center;padding:30px' }, msg);
  document.body.appendChild(el);
  return function () { if (el.parentNode) el.parentNode.removeChild(el); };
}
function askNewPassword(title, msg) {
  return promptBox({ title: title, msg: msg, ok: 'Definir', fields: [
    { label: 'Senha ou frase secreta', type: 'password', ph: 'pelo menos 6 caracteres' },
    { label: 'Repita', type: 'password' }],
  validate: function (v) {
    if (v[0].length < 6) return 'Use pelo menos 6 caracteres. Uma frase longa é mais segura.';
    if (v[0] !== v[1]) return 'As duas senhas não são iguais.';
    return '';
  } });
}
async function enablePassword(cb) {
  if (!Store.hasCrypto) { toast('Criptografia indisponível aqui. Abra o app pelo endereço https.'); return; }
  var v = await askNewPassword('Proteger com senha', 'Seus textos e imagens passam a ser criptografados no aparelho. Não há como recuperar a senha se você esquecer — guarde um backup.');
  if (!v) return;
  var off = busy('Protegendo seus registros…');
  try { await Store.setPassword(v[0]); toast('Protegido com senha'); }
  catch (e) { console.error(e); toast('Não consegui ativar a senha.'); }
  off(); Lock.touch(); if (cb) cb();
}

/* ---------- backup ---------- */
var Backup = {
  stamp: function () { var d = new Date(); return d.getFullYear() + U.pad(d.getMonth() + 1) + U.pad(d.getDate()); },
  export: async function (encrypted) {
    var pass = null;
    if (encrypted) {
      if (!Store.hasCrypto) { toast('Criptografia indisponível aqui.'); return; }
      var v = await askNewPassword('Senha do backup', 'Esta senha protege o arquivo de backup. Você vai precisar dela para restaurar (pode ser a mesma do diário, ou outra).');
      if (!v) return; pass = v[0];
    } else {
      var y = await ask({ title: 'Exportar sem criptografia?', msg: 'O arquivo ficará legível por qualquer pessoa que o abrir, com todos os seus textos. Prefira o backup criptografado.', ok: 'Exportar mesmo assim', danger: true });
      if (!y) return;
    }
    var off = busy('Preparando o backup…'), text;
    try { text = await Store.exportData(pass); } catch (e) { console.error(e); off(); toast('Falha ao gerar o backup.'); return; }
    off();
    var name = 'penumbra-backup-' + Backup.stamp() + (pass ? '.cript' : '') + '.json';
    function mark() { SET().lastBackup = Date.now(); Store.saveSettings(); refresh(); }
    openSheet(function (close) {
      var box = h('div', {}, sheetTitle('Backup pronto', close),
        h('div', { class: 'dlg-m', text: (pass ? 'Arquivo criptografado. ' : 'Arquivo sem criptografia. ') + 'Guarde-o fora do aparelho (Drive, e-mail para você mesmo, computador) — se o app ou o navegador for limpo, é ele que salva tudo.' }),
        h('div', { class: 'stack' },
          h('button', { class: 'btn pri block', on: { click: function () { saveBlob(name, text); mark(); toast('Salvo em Downloads'); close(); } } }, ico('down', 20), 'Salvar no aparelho'),
          (function () {
            var file; try { file = new File([text], name, { type: 'application/json' }); } catch (e) { return null; }
            if (!(navigator.canShare && navigator.canShare({ files: [file] }))) return null;
            return h('button', { class: 'btn block', on: { click: function () { Lock.hold(120000); navigator.share({ files: [file], title: 'Backup do diário' }).then(function () { mark(); close(); }, function () { }); } } }, ico('share', 20), 'Compartilhar / enviar para outro lugar');
          })()));
      return box;
    });
  },
  importFlow: function (fromLock) {
    var fin = h('input', { type: 'file', accept: '.json,application/json,text/plain', class: 'hide' });
    document.body.appendChild(fin);
    fin.addEventListener('change', async function () {
      var f = fin.files[0]; document.body.removeChild(fin);
      if (!f) return;
      if (fromLock) document.body.classList.add('fromlock');
      try {
        var text = await new Promise(function (res, rej) { var r = new FileReader(); r.onload = function () { res(r.result); }; r.onerror = rej; r.readAsText(f); });
        var o = Store.parseBackup(text), payload;
        if (o.enc) {
          while (!payload) {
            var v = await promptBox({ title: 'Senha do backup', ok: 'Abrir', fields: [{ label: 'Senha usada ao exportar', type: 'password' }], validate: function (x) { return x[0] ? '' : 'Digite a senha.'; } });
            if (!v) return;
            var off = busy('Abrindo o backup…');
            try { payload = await Store.decryptBackup(o, v[0]); }
            catch (e2) { toast('Senha incorreta. Tente de novo.'); }
            finally { off(); }
          }
        } else payload = o;
        var count = payload.items.length;
        if (fromLock) {
          var y = await ask({ title: 'Restaurar este backup?', msg: count + ' registros. Tudo o que está neste aparelho será substituído. Depois você define uma nova senha.', ok: 'Restaurar', danger: true });
          if (!y) return;
          await Store.resetAndRestore(payload);
          var l = $('#lock'); if (l) l.parentNode.removeChild(l);
          startApp();
          toast(count + ' registros restaurados');
          setTimeout(function () { enablePassword(); }, 600);
          return;
        }
        var mode = await choose('Importar ' + count + ' registros', 'Como quer combinar com o que já existe aqui?', [
          { id: 'merge', label: 'Mesclar', sub: 'Mantém o que há aqui e acrescenta o que falta (vence o mais recente).', cls: 'pri' },
          { id: 'replace', label: 'Substituir tudo', sub: 'Apaga o que há aqui e usa só o backup.', cls: 'danger' }]);
        if (!mode) return;
        if (mode === 'replace') { var y2 = await ask({ title: 'Substituir tudo?', msg: 'Os registros atuais deste aparelho serão apagados.', ok: 'Substituir', danger: true }); if (!y2) return; }
        var off2 = busy('Importando…'), n;
        try { n = await Store.applyBackup(payload, mode); } finally { off2(); }
        persistSettings(); render();
        toast(n.items + ' registros importados');
      } catch (e) { console.error(e); toast(e && e.message ? e.message : 'Não consegui ler este arquivo.'); }
      finally { document.body.classList.remove('fromlock'); }
    });
    Lock.hold(120000);
    fin.click();
  }
};

/* ---------- lembrete (.ics) ---------- */
function reminderIcs(time) {
  var p = time.split(':'), d = new Date(); d.setHours(+p[0], +p[1], 0, 0);
  if (d.getTime() < Date.now()) d.setDate(d.getDate() + 1);
  var f = d.getFullYear() + U.pad(d.getMonth() + 1) + U.pad(d.getDate()) + 'T' + U.pad(d.getHours()) + U.pad(d.getMinutes()) + '00';
  return ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Penumbra//PT', 'BEGIN:VEVENT', 'UID:penumbra-lembrete@local', 'DTSTAMP:' + new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d+/, ''),
    'DTSTART:' + f, 'RRULE:FREQ=DAILY', 'SUMMARY:Abrir meu diário', 'BEGIN:VALARM', 'TRIGGER:PT0M', 'ACTION:DISPLAY', 'DESCRIPTION:Abrir meu diário', 'END:VALARM', 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
}

/* ---------- CONFIGURAÇÕES ---------- */
var deferredInstall = null;
window.addEventListener('beforeinstallprompt', function (e) { e.preventDefault(); deferredInstall = e; });

VIEWS.set = function () {
  var s = SET(), root = h('div');
  root.appendChild(h('h1', { text: 'Configurações', style: 'margin:6px 0 4px' }));
  function sect(t) { return h('h2', { text: t }); }
  function save() { persistSettings(); }

  /* aparência */
  root.appendChild(sect('Aparência'));
  var nameIn = h('input', { class: 'input', value: s.name, maxlength: 30, 'aria-label': 'Nome do diário' });
  nameIn.addEventListener('change', function () { s.name = nameIn.value.trim() || 'Penumbra'; save(); render(true); });
  var nickIn = h('input', { class: 'input', value: s.nick, maxlength: 30, placeholder: 'como quer ser chamado(a)', 'aria-label': 'Apelido' });
  nickIn.addEventListener('change', function () { s.nick = nickIn.value.trim(); save(); });
  root.appendChild(h('label', { class: 'fld' }, h('span', { class: 'lbl', text: 'nome do diário' }), nameIn));
  root.appendChild(h('label', { class: 'fld' }, h('span', { class: 'lbl', text: 'seu nome ou apelido' }), nickIn));

  root.appendChild(h('div', { class: 'lbl', text: 'cor de destaque' }));
  var sw = h('div', { class: 'sw' });
  function drawSw() {
    clear(sw);
    D.SWATCHES.forEach(function (c) { var b = h('button', { class: s.accent === c ? 'on' : '', 'aria-label': 'Cor ' + c, on: { click: function () { s.accent = c; save(); drawSw(); } } }); b.style.background = c; sw.appendChild(b); });
    var ci = h('input', { type: 'color', value: s.accent, 'aria-label': 'Escolher outra cor' });
    ci.addEventListener('change', function () { s.accent = ci.value; save(); drawSw(); });
    sw.appendChild(ci);
  }
  drawSw(); root.appendChild(sw);

  root.appendChild(h('div', { class: 'lbl', style: 'margin-top:12px', text: 'tema' }));
  var th = h('div', { class: 'seg' });
  [['dark', 'Escuro'], ['light', 'Claro']].forEach(function (t) { th.appendChild(h('button', { class: s.theme === t[0] ? 'on' : '', text: t[1], on: { click: function () { s.theme = t[0]; save(); render(true); } } })); });
  root.appendChild(th);

  root.appendChild(h('div', { class: 'lbl', text: 'fonte de leitura' }));
  var fonts = h('div', { class: 'chips' });
  Object.keys(D.FONTS).forEach(function (k) { var c = h('button', { class: 'chip' + (s.font === k ? ' on' : ''), text: D.FONTS[k].n, on: { click: function () { s.font = k; save(); render(true); } } }); c.style.fontFamily = D.FONTS[k].v; fonts.appendChild(c); });
  root.appendChild(fonts);
  root.appendChild(h('div', { class: 'row', style: 'margin-top:10px' }, h('span', { class: 'grow', text: 'Tamanho do texto: ' + s.fsize + ' px' }),
    h('button', { class: 'btn', style: 'min-width:56px', 'aria-label': 'Diminuir texto', text: 'A−', on: { click: function () { if (s.fsize > 14) { s.fsize--; save(); render(true); } } } }),
    h('button', { class: 'btn', style: 'min-width:56px;margin-left:8px', 'aria-label': 'Aumentar texto', text: 'A+', on: { click: function () { if (s.fsize < 26) { s.fsize++; save(); render(true); } } } })));

  /* privacidade */
  root.appendChild(sect('Privacidade'));
  var enc = Store.isEncrypted();
  root.appendChild(h('div', { class: 'card ' + (enc ? '' : 'warn') },
    h('div', { class: 'lbl', text: enc ? 'protegido com senha' : 'sem senha' }),
    h('div', { class: 'small', text: enc ? 'Textos e imagens são criptografados (AES-256-GCM) antes de serem salvos. A senha não fica guardada em lugar nenhum.' : 'Os registros estão salvos no aparelho sem criptografia. Qualquer pessoa que abra este app com o celular desbloqueado pode ler.' })));
  var pr = h('div', { class: 'stack', style: 'margin-top:10px' });
  if (!enc) pr.appendChild(h('button', { class: 'btn pri block', on: { click: function () { enablePassword(function () { render(true); }); } } }, ico('lock', 20), 'Definir senha'));
  else {
    pr.appendChild(h('button', { class: 'btn block', text: 'Bloquear agora', on: { click: function () { Lock.lock(); } } }));
    pr.appendChild(h('button', { class: 'btn block', text: 'Alterar senha', on: { click: async function () {
      var old = await promptBox({ title: 'Senha atual', ok: 'Continuar', fields: [{ label: 'Senha atual', type: 'password' }] });
      if (!old) return;
      if (!(await Store.checkPassword(old[0]))) { toast('Senha atual incorreta.'); return; }
      var v = await askNewPassword('Nova senha', 'Todos os registros serão criptografados de novo com a nova senha.');
      if (!v) return;
      var off = busy('Atualizando…'); try { await Store.setPassword(v[0]); toast('Senha alterada'); } catch (e) { toast('Falha ao alterar.'); } off();
    } } }));
    pr.appendChild(h('button', { class: 'btn danger block', text: 'Remover senha', on: { click: async function () {
      var old = await promptBox({ title: 'Remover a senha?', msg: 'Seus registros ficarão salvos sem criptografia. Confirme com a senha atual.', ok: 'Remover', danger: true, fields: [{ label: 'Senha atual', type: 'password' }] });
      if (!old) return;
      if (!(await Store.checkPassword(old[0]))) { toast('Senha incorreta.'); return; }
      var off = busy('Removendo…'); try { await Store.removePassword(); toast('Senha removida'); } catch (e) { toast('Falha ao remover.'); } off(); render(true);
    } } }));
    var sel = h('select', { class: 'input', 'aria-label': 'Bloqueio automático' },
      [[0, 'Ao sair do app'], [1, 'Após 1 minuto parado'], [2, 'Após 2 minutos'], [5, 'Após 5 minutos'], [10, 'Após 10 minutos'], [15, 'Após 15 minutos'], [30, 'Após 30 minutos'], [-1, 'Nunca (só manual)']].map(function (o) { return h('option', { value: String(o[0]), text: o[1] }); }));
    sel.value = String(s.lockMin);
    sel.addEventListener('change', function () { s.lockMin = +sel.value; Store.saveSettings(); Lock.touch(); });
    pr.appendChild(h('label', { class: 'fld' }, h('span', { class: 'lbl', text: 'bloquear automaticamente' }), sel));
  }
  root.appendChild(pr);

  /* backup */
  root.appendChild(sect('Backup e restauração'));
  root.appendChild(h('div', { class: 'card warn' },
    h('div', { class: 'lbl', text: 'importante' }),
    h('div', { class: 'small', text: 'Seus registros existem só neste aparelho. Limpar os dados do navegador, desinstalar o app ou trocar de celular apaga tudo se você não tiver um backup. Faça backups de vez em quando e guarde o arquivo fora do celular.' })));
  root.appendChild(h('div', { class: 'small mu', style: 'margin:10px 0', text: s.lastBackup ? 'Último backup: ' + U.date(s.lastBackup) + ' (' + U.ago(s.lastBackup) + ').' : 'Nenhum backup feito ainda.' }));
  root.appendChild(h('div', { class: 'stack' },
    h('button', { class: 'btn pri block', on: { click: function () { Backup.export(true); } } }, ico('down', 20), 'Exportar backup criptografado'),
    h('button', { class: 'btn block', on: { click: function () { Backup.export(false); } } }, 'Exportar sem criptografia'),
    h('button', { class: 'btn block', on: { click: function () { Backup.importFlow(false); } } }, ico('up', 20), 'Importar backup')));

  /* conteúdo */
  root.appendChild(sect('Frases e perguntas'));
  var qa = h('textarea', { class: 'input', rows: 4, placeholder: 'Uma frase por linha. Elas entram no sorteio diário da tela inicial.', 'aria-label': 'Minhas frases' }); qa.value = s.quotes.join('\n');
  qa.addEventListener('change', function () { s.quotes = qa.value.split('\n').map(function (x) { return x.trim(); }).filter(Boolean); Store.saveSettings(); toast('Frases salvas'); });
  var qb = h('textarea', { class: 'input', rows: 4, placeholder: 'Uma pergunta por linha. Entram nas Reflexões.', 'aria-label': 'Minhas perguntas' }); qb.value = s.questions.join('\n');
  qb.addEventListener('change', function () { s.questions = qb.value.split('\n').map(function (x) { return x.trim(); }).filter(Boolean); Store.saveSettings(); toast('Perguntas salvas'); });
  root.appendChild(h('label', { class: 'fld' }, h('span', { class: 'lbl', text: 'minhas frases reflexivas' }), qa));
  root.appendChild(h('label', { class: 'fld' }, h('span', { class: 'lbl', text: 'minhas perguntas de reflexão' }), qb));

  var ce = s.customEmo.filter(function (e) { return !e.gone; });
  root.appendChild(h('div', { class: 'lbl', style: 'margin-top:12px', text: 'minhas emoções' }));
  var cb = h('div', { class: 'chips' });
  ce.forEach(function (e) { cb.appendChild(h('button', { class: 'chip', 'aria-label': 'Remover ' + e.n, on: { click: function () {
    ask({ title: 'Remover "' + e.n + '"?', msg: 'Ela some das listas, mas os registros antigos continuam com o nome.', ok: 'Remover', danger: true }).then(function (y) { if (y) { e.gone = true; Store.saveSettings(); render(true); } });
  } } }, dotEl(e.id), e.n, ' ×')); });
  cb.appendChild(h('button', { class: 'chip', style: 'border-style:dashed', on: { click: function () { createEmotion(); } } }, ico('plus', 16), ' criar'));
  root.appendChild(cb);

  root.appendChild(h('div', { class: 'lbl', style: 'margin-top:16px', text: 'pessoa de confiança' }));
  root.appendChild(h('button', { class: 'btn block', text: s.trusted.name || s.trusted.phone ? 'Editar: ' + (s.trusted.name || s.trusted.phone) : 'Cadastrar pessoa de confiança', on: { click: function () { editTrusted(function () { render(true); }); } } }));

  /* lembretes e som */
  root.appendChild(sect('Lembrete e som'));
  var ron = h('button', { class: 'chip' + (s.remind.on ? ' on' : ''), text: s.remind.on ? 'Lembrete ligado' : 'Lembrete desligado', on: { click: function () { s.remind.on = !s.remind.on; Store.saveSettings(); render(true); } } });
  var rt = h('input', { class: 'input', type: 'time', value: s.remind.time, style: 'width:140px;margin-left:10px', 'aria-label': 'Horário do lembrete' });
  rt.addEventListener('change', function () { s.remind.time = rt.value || '21:00'; Store.saveSettings(); });
  root.appendChild(h('div', { class: 'row' }, ron, rt));
  root.appendChild(h('div', { class: 'note', text: 'Um app instalado a partir do navegador não consegue disparar notificações com ele fechado (isso exige um servidor). Alternativas que funcionam: o aviso aqui dentro quando você abre o app depois do horário, e um lembrete diário no calendário do celular:' }));
  root.appendChild(h('button', { class: 'btn block', style: 'margin-top:10px', text: 'Criar lembrete diário no calendário do celular', on: { click: function () { saveBlob('lembrete-diario.ics', reminderIcs(s.remind.time), 'text/calendar'); toast('Abra o arquivo para adicioná-lo ao calendário'); } } }));
  if (Ambient.supported()) root.appendChild(h('button', { class: 'btn block', style: 'margin-top:10px', on: { click: Sound.sheet } }, ico('music', 20), 'Som ambiente para escrever'));

  /* instalar */
  root.appendChild(sect('Instalar e dados'));
  if (deferredInstall) root.appendChild(h('button', { class: 'btn pri block', style: 'margin-bottom:10px', text: 'Instalar na tela inicial', on: { click: function () { deferredInstall.prompt(); deferredInstall = null; } } }));
  else root.appendChild(h('div', { class: 'small mu', style: 'margin-bottom:10px', text: 'Para instalar: no Chrome, menu ⋮ → "Instalar app" ou "Adicionar à tela inicial".' }));
  var st = h('div', { class: 'small mu' });
  root.appendChild(st);
  var counts = ITEMS().filter(function (i) { return !i.draft; }).length;
  var base = counts + ' registros salvos neste aparelho. ' + (Store.hasCrypto ? '' : 'Criptografia indisponível neste endereço (precisa de https). ');
  st.textContent = base;
  if (navigator.storage && navigator.storage.estimate) navigator.storage.estimate().then(function (e) { st.textContent = base + 'Espaço usado: ' + (e.usage / 1048576).toFixed(1).replace('.', ',') + ' MB. ' + (window.__persisted ? 'Armazenamento marcado como persistente.' : 'O navegador pode limpar o armazenamento se faltar espaço — por isso o backup.'); });
  root.appendChild(h('button', { class: 'btn danger block', style: 'margin-top:14px', text: 'Apagar todos os dados deste aparelho', on: { click: function () {
    promptBox({ title: 'Apagar tudo?', msg: 'Todos os registros, imagens e configurações deste aparelho serão apagados para sempre. Faça um backup antes. Para confirmar, escreva APAGAR.', ok: 'Apagar tudo', danger: true,
      fields: [{ label: 'Confirmação', ph: 'APAGAR' }], validate: function (v) { return v[0].trim().toUpperCase() === 'APAGAR' ? '' : 'Escreva APAGAR para confirmar.'; } }).then(async function (v) {
      if (!v) return;
      Layers.closeAll(); await Store.flush(); await Store.wipeStores();
      try { localStorage.removeItem('pn_ui'); } catch (e) { }
      location.reload();
    });
  } } }));
  root.appendChild(h('div', { class: 'note', style: 'text-align:center;margin-top:24px', text: 'Penumbra · versão 1.0 · tudo fica no seu aparelho' }));
  return root;
};

/* ---------- primeira abertura ---------- */
function onboarding() {
  var p = loadPrefs(); applyUI(p);
  var name = h('input', { class: 'input', value: 'Penumbra', maxlength: 30, 'aria-label': 'Nome do diário' });
  var nick = h('input', { class: 'input', placeholder: 'como quer ser chamado(a)', maxlength: 30, 'aria-label': 'Seu nome ou apelido' });
  var p1 = h('input', { class: 'input', type: 'password', placeholder: 'senha ou frase secreta', autocomplete: 'new-password', 'aria-label': 'Senha' });
  var p2 = h('input', { class: 'input', type: 'password', placeholder: 'repita a senha', autocomplete: 'new-password', 'aria-label': 'Repita a senha' });
  var err = h('div', { class: 'err' });
  var go = h('button', { class: 'btn pri block', text: 'Começar' });
  go.addEventListener('click', async function () {
    var pw = p1.value;
    if (pw || p2.value) {
      if (!Store.hasCrypto) { err.textContent = 'Este endereço não permite criptografia (precisa de https). Deixe a senha em branco ou abra pelo endereço seguro.'; return; }
      if (pw.length < 6) { err.textContent = 'Use pelo menos 6 caracteres.'; return; }
      if (pw !== p2.value) { err.textContent = 'As senhas não são iguais.'; return; }
    }
    go.disabled = true; go.textContent = 'Preparando…';
    try {
      await Store.createFresh({ name: name.value.trim() || 'Penumbra', nick: nick.value.trim() });
      if (pw) await Store.setPassword(pw);
      var l = $('#lock'); if (l) l.parentNode.removeChild(l);
      startApp();
    } catch (e) { console.error(e); err.textContent = 'Não consegui salvar neste navegador. Verifique se ele permite armazenamento.'; go.disabled = false; go.textContent = 'Começar'; }
  });
  var moon = h('div'); moon.innerHTML = '<svg class="moon" viewBox="0 0 84 84" aria-hidden="true"><circle cx="42" cy="42" r="30" fill="none" stroke="var(--tx)" stroke-opacity=".8" stroke-width="1.4"/><circle cx="54" cy="38" r="26" fill="var(--bg)" stroke="var(--ac)" stroke-width="1.4"/><path d="M14 14l0 8M10 18l8 0" stroke="var(--ac)" stroke-width="1.2"/></svg>';
  var el = h('div', { id: 'lock' }, h('div', { class: 'box', style: 'text-align:left' },
    h('div', { style: 'text-align:center' }, moon, h('h1', { text: 'Um espaço só seu' }),
      h('div', { class: 'sub', text: 'Nada aqui vai para a internet. Os textos ficam neste aparelho, e você escolhe se quer trancá-los.' })),
    h('label', { class: 'fld' }, h('span', { class: 'lbl', text: 'nome do diário' }), name),
    h('label', { class: 'fld' }, h('span', { class: 'lbl', text: 'seu nome ou apelido' }), nick),
    h('div', { class: 'lbl', style: 'margin-top:14px', text: 'senha (recomendado)' }),
    p1, h('div', { style: 'height:8px' }), p2,
    h('div', { class: 'note', text: 'A senha criptografa seus registros e não pode ser recuperada se for esquecida. Dá para definir depois em Configurações.' }),
    err, h('div', { style: 'margin-top:12px' }, go),
    h('div', { style: 'text-align:center' }, h('button', { class: 'link', text: 'Já tenho um backup — restaurar', on: { click: function () { Backup.importFlow(true); } } }))));
  document.body.appendChild(el);
  hideSplash();
}
/* Penumbra — inicialização. */
var splashT0 = Date.now();
function hideSplash() {
  var sp = $('#splash');
  if (!sp) return;
  var wait = Math.max(0, 700 - (Date.now() - splashT0));
  setTimeout(function () { sp.classList.add('gone'); setTimeout(function () { if (sp.parentNode) sp.parentNode.removeChild(sp); }, 600); }, wait);
}

function startApp() {
  mirrorPrefs();
  applyUI(uiPrefs());
  buildShell();
  render();
  Lock.touch();
  Lock.start();
  hideSplash();
}

async function boot() {
  var p = loadPrefs();
  applyUI(p);
  $('#splash .nm').textContent = p.name;
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(function (e) { console.warn('sw', e); });
  var info;
  try { info = await Store.init(); }
  catch (e) {
    console.error(e);
    document.body.appendChild(h('div', { id: 'lock' }, h('div', { class: 'box' }, h('h1', { text: 'Armazenamento indisponível' }),
      h('div', { class: 'sub', text: 'Este navegador não permitiu guardar dados (talvez a aba seja privativa ou o armazenamento esteja bloqueado). Abra o diário numa aba normal do Chrome.' }))));
    hideSplash();
    return;
  }
  try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist().then(function (v) { window.__persisted = v; }); } catch (e) { }
  if (info.fresh) onboarding();
  else if (info.enc) Lock.show();
  else startApp();
}
window.addEventListener('error', function (e) { console.error(e.message); });
document.addEventListener('DOMContentLoaded', boot);
