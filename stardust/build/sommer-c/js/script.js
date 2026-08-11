(function(){
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var observer = null;

  var answers = { activity: null, region: null, a11y: null, date: null };
  var ACTIVITY_LABELS = { hike: 'Wandern', cycle: 'Velo', mountainbike: 'Mountainbike', skate: 'Skating', canoe: 'Kanu', winter: 'Winter', inspire: 'Überrasch mich' };
  var ACTIVITY_PHOTO = { hike: 'ph--wanderungen-wasser', cycle: 'ph--gravelbike', mountainbike: 'ph--genial-legal', skate: 'ph--hero', canoe: 'ph--badespass', winter: 'ph--hero', inspire: 'ph--hero' };
  var ACTIVITY_HEADLINE = {
    hike: 'Die schönsten Wanderungen — für dich',
    cycle: 'Deine nächste Velotour wartet',
    mountainbike: 'Mountainbike-Trails, für dich sortiert',
    skate: 'Skatingland, für dich',
    canoe: 'Kanuland — für dich ausgewählt',
    winter: 'Winter-Vorschläge (Sommerfotos in dieser Vorschau)',
    inspire: 'Entdecke die schönsten Wege der Schweiz'
  };

  function setup(){
    document.querySelectorAll('.sm-intake__activity').forEach(function(btn){
      btn.addEventListener('click', function(){ answers.activity = btn.getAttribute('data-activity'); goToStep(2); });
    });
    document.querySelectorAll('.sm-intake__pin').forEach(function(btn){
      btn.addEventListener('click', function(){ answers.region = btn.getAttribute('data-region'); goToStep(3); });
    });
    document.querySelectorAll('.sm-intake__yn button').forEach(function(btn){
      btn.addEventListener('click', function(){ answers.a11y = btn.getAttribute('data-a11y'); goToStep(4); });
    });
    document.getElementById('c-date-continue').addEventListener('click', function(){
      answers.date = document.getElementById('c-date-input').value || null;
      completeIntake();
    });
    document.getElementById('c-back').addEventListener('click', function(){
      if (currentStep > 1) goToStep(currentStep - 1);
    });
    document.getElementById('c-date-flexible').addEventListener('click', function(){
      answers.date = 'flexibel';
      completeIntake();
    });
    var wxNote = document.getElementById('c-wx-note');
    document.querySelectorAll('.sm-intake__wx-day').forEach(function(btn){
      btn.addEventListener('click', function(){
        document.querySelectorAll('.sm-intake__wx-day').forEach(function(d){ d.classList.remove('is-active'); });
        btn.classList.add('is-active');
        if (btn.getAttribute('data-day') === '0'){
          wxNote.textContent = 'Echte, aktuelle Messwerte von heute, aus öffentlichen Wetterdiensten zusammengetragen.';
        } else {
          wxNote.textContent = 'Diese Vorschau zeigt nur echte Werte für heute — eine Produktionsversion würde hier die echte Mehrtages-Prognose je Tag anzeigen.';
        }
      });
    });
    document.getElementById('c-skip').addEventListener('click', completeIntake);
    if (!reduceMotion){ window.addEventListener('scroll', onScrollParallax, { passive: true }); }
  }

  var currentStep = 1;
  function goToStep(n){
    currentStep = n;
    document.querySelectorAll('.sm-intake__step').forEach(function(s){ s.classList.toggle('is-active', s.getAttribute('data-step') === String(n)); });
    document.querySelectorAll('.sm-intake__dot').forEach(function(d){ d.classList.toggle('is-done', parseInt(d.getAttribute('data-dot'), 10) < n); });
    var back = document.getElementById('c-back');
    if (back) back.style.visibility = n > 1 ? 'visible' : 'hidden';
  }

  function completeIntake(){
    var intake = document.getElementById('c-intake');
    var content = document.getElementById('c-content');
    intake.classList.add('is-leaving');
    setTimeout(function(){
      intake.style.display = 'none';
      applyPersonalization();
      content.style.display = 'block';
      requestAnimationFrame(function(){
        requestAnimationFrame(function(){
          content.classList.add('is-revealed');
          observeReveals();
        });
      });
    }, 480);
  }

  function applyPersonalization(){
    var act = answers.activity;
    var hero = document.getElementById('c-parallax');
    var headline = document.getElementById('c-hero-headline');
    if (act && ACTIVITY_PHOTO[act]){
      hero.className = 'sm-hero__img ph js-parallax ' + ACTIVITY_PHOTO[act];
      headline.textContent = ACTIVITY_HEADLINE[act];
    }
    var bits = [];
    if (act) bits.push(ACTIVITY_LABELS[act] || act);
    if (answers.region) bits.push(answers.region);
    if (answers.a11y === 'yes') bits.push('hindernisfrei');
    if (answers.date) bits.push(answers.date);
    var summary = document.getElementById('c-personal-summary');
    summary.innerHTML = bits.length ? ('<b>Für dich: ' + bits.join(' · ') + '</b>') : '<b>Für dich zusammengestellt</b>';
    if (answers.a11y === 'yes'){
      document.getElementById('c-a11y-callout').style.display = 'flex';
    }
  }

  function observeReveals(){
    if (!observer){
      observer = new IntersectionObserver(function(entries){
        entries.forEach(function(e){ if (e.isIntersecting) e.target.classList.add('is-visible'); });
      }, { threshold: 0.15 });
    }
    document.querySelectorAll('.reveal').forEach(function(el){ observer.observe(el); });
  }

  var raf = null;
  function onScrollParallax(){
    if (raf) return;
    raf = requestAnimationFrame(function(){
      raf = null;
      document.querySelectorAll('.js-parallax').forEach(function(img){
        var container = img.closest('.sm-hero, .sm-row');
        if (!container) return;
        var rect = container.getBoundingClientRect();
        var progress = Math.min(1, Math.max(0, 1 - rect.bottom / (rect.height + window.innerHeight)));
        img.style.transform = 'translateY(' + (-35 * progress) + 'px)';
      });
    });
  }

  setup();
})();
