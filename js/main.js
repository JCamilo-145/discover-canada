/* =============================================
   Discover Canada - JavaScript Fase 4
   Programación Web 213025 - UNAD
   Juan Camilo Trujillo Candela
   ============================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ── TRADUCCIONES COMPLETAS ── */
  var T = {
    es: {
      'nav-inicio':'Inicio','nav-destinos':'Destinos',
      'nav-planifica':'Planifica','nav-contacto':'Contacto',
      'sub-rocosas':'🏔️ Montañas Rocosas','sub-niagaras':'🌊 Cataratas del Niágara',
      'sub-vancouver':'🌲 Vancouver','sub-yukon':'🌌 Yukon',
      'slide1-title':'Montañas Rocosas','slide1-sub':'Alberta · Senderismo y nieve todo el año','slide1-btn':'Ver destino',
      'slide2-title':'Cataratas del Niágara','slide2-sub':'Ontario · La maravilla de las cascadas','slide2-btn':'Ver destino',
      'slide3-title':'Vancouver','slide3-sub':'British Columbia · Bosques y costa del Pacífico','slide3-btn':'Ver destino',
      'slide4-title':'Yukon','slide4-sub':'Yukon · Auroras boreales y vida salvaje','slide4-btn':'Ver destino',
      'destinos-title':'Destinos destacados',
      'card1-title':'Montañas Rocosas','card1-sub':'Alberta · Senderismo y nieve','card1-tag':'Todo el año',
      'card2-title':'Cataratas del Niágara','card2-sub':'Ontario · Cascadas icónicas','card2-tag':'Verano',
      'card3-title':'Vancouver','card3-sub':'British Columbia · Bosques y costa','card3-tag':'Primavera',
      'mapa-title':'Mapa de Canadá','mapa-texto':'Mapa interactivo de provincias — próximamente',
      'info-title':'Información útil',
      'info1-title':'Mejor época para visitar',
      'info1-texto':'Verano (junio–agosto) para senderismo y playas. Invierno (diciembre–marzo) para esquí y auroras boreales. Otoño para los colores del follaje.',
      'info2-title':'Datos rápidos del país',
      'info2-texto':'Capital: Ottawa. Idiomas oficiales: inglés y francés. Moneda: Dólar canadiense (CAD). Zona horaria: múltiples (UTC-3.5 a UTC-8).',
      'ph-badge-destinos':'Destinos','ph-title-destinos':'Explora los paisajes de Canadá','ph-sub-destinos':'Selecciona una provincia o región para conocer más',
      'ph-badge-planifica':'Planificador','ph-title-planifica':'Organiza tu aventura canadiense','ph-sub-planifica':'Completa el formulario y recibe sugerencias personalizadas',
      'ph-badge-contacto':'Contacto','ph-title-contacto':'¿Tienes preguntas?','ph-sub-contacto':'Escríbenos y te responderemos en menos de 24 horas',
      'filtros-title':'Filtrar por tipo de paisaje',
      'filtro-todos':'Todos','filtro-montana':'Montaña','filtro-costa':'Costa','filtro-bosque':'Bosque','filtro-artico':'Ártico',
      'tabla-title':'Destinos turísticos','col-destino':'Destino','col-provincia':'Provincia','col-paisaje':'Tipo de paisaje','col-temporada':'Temporada',
      'galeria-title':'Galería de paisajes',
      'form-title':'Formulario de planificación','label-destino':'Destino preferido','opt-select-dest':'Selecciona un destino',
      'opt-banff':'Banff, Alberta','opt-tofino':'Tofino, British Columbia','opt-quebec':'Quebec City, Quebec',
      'opt-yukon':'Yukon','opt-lago':'Lago Louise, Alberta','opt-vancouver-d':'Vancouver, British Columbia',
      'label-fecha':'Fecha de viaje','hint-fecha':'Selecciona la fecha de inicio del viaje',
      'label-viajeros':'Número de viajeros','label-actividad':'Tipo de actividad',
      'opt-select-act':'Selecciona una actividad','opt-senderismo':'Senderismo','opt-esqui':'Esquí y nieve',
      'opt-aurora':'Ver aurora boreal','opt-playa':'Playas y costas','opt-cultura':'Cultura y gastronomía',
      'btn-sugerencias':'Obtener sugerencias','consejos-title':'Consejos para viajeros',
      'consejo1-title':'Clima','consejo1-texto':'Canadá tiene temperaturas extremas. En invierno pueden llegar a -30°C. Lleva ropa térmica. En verano oscilan entre 20°C y 35°C.',
      'consejo2-title':'Visa y documentos','consejo2-texto':'Los ciudadanos colombianos necesitan visa de turista. Tramítala con al menos 8 semanas de anticipación.',
      'consejo3-title':'Transporte','consejo3-texto':'VIA Rail conecta las principales ciudades. Para los parques nacionales se recomienda alquilar un auto.',
      'contacto-title':'Envíanos un mensaje','label-nombre':'Nombre completo','ph-nombre':'Tu nombre',
      'label-email':'Correo electrónico','ph-email':'tu@correo.com',
      'label-mensaje':'Mensaje','ph-mensaje':'Escribe tu mensaje aquí...','btn-enviar':'Enviar mensaje',
      'footer-privacidad':'Privacidad','footer-terminos':'Términos','footer-contacto':'Contacto','footer-inicio':'Inicio',
      'msg-manana':'¡Buenos días! Comienza tu aventura canadiense hoy.',
      'msg-tarde':'¡Buenas tardes! Explora los mejores destinos de Canadá.',
      'msg-noche':'¡Buenas noches! Sueña con tu próxima aventura en Canadá.',
      'lang-btn':'EN / ES','lang-aria':'Cambiar idioma a inglés'
    },
    en: {
      'nav-inicio':'Home','nav-destinos':'Destinations',
      'nav-planifica':'Plan','nav-contacto':'Contact',
      'sub-rocosas':'🏔️ Rocky Mountains','sub-niagaras':'🌊 Niagara Falls',
      'sub-vancouver':'🌲 Vancouver','sub-yukon':'🌌 Yukon',
      'slide1-title':'Rocky Mountains','slide1-sub':'Alberta · Hiking and snow all year round','slide1-btn':'See destination',
      'slide2-title':'Niagara Falls','slide2-sub':'Ontario · The wonder of the waterfalls','slide2-btn':'See destination',
      'slide3-title':'Vancouver','slide3-sub':'British Columbia · Forests and Pacific coast','slide3-btn':'See destination',
      'slide4-title':'Yukon','slide4-sub':'Yukon · Northern lights and wildlife','slide4-btn':'See destination',
      'destinos-title':'Featured Destinations',
      'card1-title':'Rocky Mountains','card1-sub':'Alberta · Hiking and snow','card1-tag':'All year',
      'card2-title':'Niagara Falls','card2-sub':'Ontario · Iconic waterfalls','card2-tag':'Summer',
      'card3-title':'Vancouver','card3-sub':'British Columbia · Forests and coast','card3-tag':'Spring',
      'mapa-title':'Map of Canada','mapa-texto':'Interactive map of provinces — coming soon',
      'info-title':'Useful Information',
      'info1-title':'Best time to visit',
      'info1-texto':'Summer (June–August) for hiking and beaches. Winter (December–March) for skiing and northern lights. Fall for the foliage colors.',
      'info2-title':'Quick facts',
      'info2-texto':'Capital: Ottawa. Official languages: English and French. Currency: Canadian Dollar (CAD). Time zone: multiple (UTC-3.5 to UTC-8).',
      'ph-badge-destinos':'Destinations','ph-title-destinos':"Explore Canada's landscapes",'ph-sub-destinos':'Select a province or region to learn more',
      'ph-badge-planifica':'Planner','ph-title-planifica':'Organize your Canadian adventure','ph-sub-planifica':'Fill out the form and receive personalized suggestions',
      'ph-badge-contacto':'Contact','ph-title-contacto':'Do you have questions?','ph-sub-contacto':'Write to us and we will reply within 24 hours',
      'filtros-title':'Filter by landscape type',
      'filtro-todos':'All','filtro-montana':'Mountain','filtro-costa':'Coast','filtro-bosque':'Forest','filtro-artico':'Arctic',
      'tabla-title':'Tourist destinations','col-destino':'Destination','col-provincia':'Province','col-paisaje':'Landscape type','col-temporada':'Season',
      'galeria-title':'Landscape gallery',
      'form-title':'Planning form','label-destino':'Preferred destination','opt-select-dest':'Select a destination',
      'opt-banff':'Banff, Alberta','opt-tofino':'Tofino, British Columbia','opt-quebec':'Quebec City, Quebec',
      'opt-yukon':'Yukon','opt-lago':'Lake Louise, Alberta','opt-vancouver-d':'Vancouver, British Columbia',
      'label-fecha':'Travel date','hint-fecha':'Select the trip start date',
      'label-viajeros':'Number of travelers','label-actividad':'Activity type',
      'opt-select-act':'Select an activity','opt-senderismo':'Hiking','opt-esqui':'Skiing and snow',
      'opt-aurora':'See northern lights','opt-playa':'Beaches and coasts','opt-cultura':'Culture and gastronomy',
      'btn-sugerencias':'Get suggestions','consejos-title':'Tips for travelers',
      'consejo1-title':'Climate','consejo1-texto':'Canada has extreme temperatures. In winter they can reach -30°C. Bring thermal clothing. In summer they range between 20°C and 35°C.',
      'consejo2-title':'Visa and documents','consejo2-texto':'Colombian citizens need a tourist visa. Apply at least 8 weeks in advance.',
      'consejo3-title':'Transportation','consejo3-texto':'VIA Rail connects major cities. For national parks, renting a car is recommended.',
      'contacto-title':'Send us a message','label-nombre':'Full name','ph-nombre':'Your name',
      'label-email':'Email address','ph-email':'you@email.com',
      'label-mensaje':'Message','ph-mensaje':'Write your message here...','btn-enviar':'Send message',
      'footer-privacidad':'Privacy','footer-terminos':'Terms','footer-contacto':'Contact','footer-inicio':'Home',
      'msg-manana':'Good morning! Start your Canadian adventure today.',
      'msg-tarde':'Good afternoon! Explore the best destinations in Canada.',
      'msg-noche':'Good evening! Dream about your next adventure in Canada.',
      'lang-btn':'ES / EN','lang-aria':'Switch language to Spanish'
    }
  };

  /* ── APLICAR IDIOMA ── */
  function aplicarIdioma(idioma) {
    var t = T[idioma];
    document.documentElement.lang = idioma;

    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var k = el.getAttribute('data-i18n');
      if (!t[k]) return;
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[k];
      } else {
        el.textContent = t[k];
      }
    });

    var langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
      langBtn.textContent = t['lang-btn'];
      langBtn.setAttribute('aria-label', t['lang-aria']);
    }
    actualizarBienvenida(idioma);
  }

  /* ── MENSAJE BIENVENIDA ── */
  function actualizarBienvenida(idioma) {
    var el = document.getElementById('mensaje-bienvenida');
    if (!el) return;
    var h = new Date().getHours();
    var t = T[idioma];
    el.textContent = h >= 6 && h < 12 ? t['msg-manana']
                   : h >= 12 && h < 19 ? t['msg-tarde']
                   : t['msg-noche'];
  }

  var idioma = 'es';
  actualizarBienvenida(idioma);

  var langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.addEventListener('click', function() {
      idioma = idioma === 'es' ? 'en' : 'es';
      aplicarIdioma(idioma);
    });
  }

  /* ── MENÚ DESPLEGABLE (mouseover / mouseout) ── */
  document.querySelectorAll('.has-submenu').forEach(function(li) {
    var sub  = li.querySelector('.submenu');
    var link = li.querySelector('a');
    if (!sub) return;
    li.addEventListener('mouseover', function() {
      sub.style.display = 'block';
      sub.setAttribute('aria-hidden','false');
      if (link) link.setAttribute('aria-expanded','true');
    });
    li.addEventListener('mouseout', function(e) {
      if (!li.contains(e.relatedTarget)) {
        sub.style.display = 'none';
        sub.setAttribute('aria-hidden','true');
        if (link) link.setAttribute('aria-expanded','false');
      }
    });
    li.addEventListener('focusin',  function() { sub.style.display = 'block'; });
    li.addEventListener('focusout', function(e) {
      if (!li.contains(e.relatedTarget)) sub.style.display = 'none';
    });
  });

  /* ── SLIDER (setInterval + navegación manual) ── */
  var slides     = document.querySelectorAll('.slide');
  var indicators = document.querySelectorAll('.slider-indicator');
  var btnPrev    = document.getElementById('slider-prev');
  var btnNext    = document.getElementById('slider-next');

  if (slides.length > 0) {
    var idx = 0, timer;

    function ir(i) {
      slides.forEach(function(s,j){
        s.classList.toggle('active', j===i);
        s.setAttribute('aria-hidden', String(j!==i));
      });
      indicators.forEach(function(d,j){
        d.classList.toggle('active', j===i);
        d.setAttribute('aria-current', String(j===i));
      });
      idx = i;
    }

    function next(){ ir((idx+1) % slides.length); }
    function prev(){ ir((idx-1+slides.length) % slides.length); }
    function play(){ timer = setInterval(next, 4500); }
    function stop(){ clearInterval(timer); }

    if (btnNext) btnNext.addEventListener('click', function(){ stop(); next(); play(); });
    if (btnPrev) btnPrev.addEventListener('click', function(){ stop(); prev(); play(); });
    indicators.forEach(function(d,i){ d.addEventListener('click', function(){ stop(); ir(i); play(); }); });

    var wrap = document.querySelector('.slider');
    if (wrap){ wrap.addEventListener('mouseover', stop); wrap.addEventListener('mouseout', play); }

    ir(0); play();
  }

  /* ── HAMBURGUESA ── */
  var toggle   = document.querySelector('.navbar__toggle');
  var navLinks = document.getElementById('nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', function() {
      var open = navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('keydown', function(e) {
      if (e.key==='Escape' && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded','false');
        toggle.focus();
      }
    });
  }

  /* ── FILTROS DESTINOS ── */
  var filtros = document.querySelectorAll('.filtro-btn');
  var filas   = document.querySelectorAll('.tabla-destinos tbody tr');
  filtros.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var f = btn.dataset.filter;
      filtros.forEach(function(b){ b.classList.remove('active'); b.setAttribute('aria-pressed','false'); });
      btn.classList.add('active'); btn.setAttribute('aria-pressed','true');
      filas.forEach(function(row){
        f==='todos' ? row.removeAttribute('hidden')
          : (row.dataset.tipo||'').includes(f) ? row.removeAttribute('hidden') : row.setAttribute('hidden','');
      });
    });
  });

  /* ── FORMULARIOS ── */
  function setupForm(id) {
    var form = document.getElementById(id);
    var ok   = document.getElementById('form-success');
    if (!form) return;
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var valid = true;
      form.querySelectorAll('[required]').forEach(function(c) {
        if (!c.value.trim()) { valid=false; c.style.borderColor='#C0392B'; c.setAttribute('aria-invalid','true'); }
        else { c.style.borderColor='#1E8449'; c.setAttribute('aria-invalid','false'); }
      });
      if (valid && ok) { ok.removeAttribute('hidden'); form.reset(); ok.focus(); setTimeout(function(){ ok.setAttribute('hidden',''); },5000); }
    });
    form.querySelectorAll('[required]').forEach(function(c) {
      c.addEventListener('input', function(){ c.style.borderColor=''; c.removeAttribute('aria-invalid'); });
    });
  }
  setupForm('contacto-form');
  setupForm('planifica-form');

});
