
  // 1) Sobre: desaparece y muestra la página
    const envelokidIntrope = document.getElementById('kidIntro');
    const btnOpen = document.getElementById('openInvite');

    function openInvitation(){
      kidIntro.classList.add('kidIntro--hide');
      // opcional: remover del DOM después de animación
      setTimeout(() => {
        kidIntro.style.display = 'none';
        document.body.classList.add('page-ready');
        window.location.hash = '#inicio';
      }, 520);
    }

    btnOpen.addEventListener('click', openInvitation);

    // Si el usuario scrollea, también abrimos (se siente natural)
    let openedByScroll = false;
    window.addEventListener('wheel', () => {
      if (!openedByScroll && kidIntro && kidIntro.style.display !== 'none') {
        openedByScroll = true;
        openInvitation();
      }
    }, { passive: true });

    // 2) Countdown
    // Cambia la fecha aquí (YYYY-MM-DDTHH:MM:SS)
    const targetDate = new Date('2026-09-13T17:00:00');

    const cdDays  = document.getElementById('cdDays');
    const cdHours = document.getElementById('cdHours');
    const cdMins  = document.getElementById('cdMins');
    const cdSecs  = document.getElementById('cdSecs');

    function pad2(n){ return String(n).padStart(2, '0'); }

    function tick(){
      const now = new Date();
      let diff = targetDate.getTime() - now.getTime();

      if (diff < 0) diff = 0;

      const days  = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins  = Math.floor((diff / (1000 * 60)) % 60);
      const secs  = Math.floor((diff / 1000) % 60);

      cdDays.textContent  = pad2(days);
      cdHours.textContent = pad2(hours);
      cdMins.textContent  = pad2(mins);
      cdSecs.textContent  = pad2(secs);
    }

    tick();
    setInterval(tick, 1000);

    // 3) Copiar CLABE (demo)
    const copyBtn = document.getElementById('copyClabe');
    const clabeText = document.getElementById('clabeText');
    const copyHint = document.getElementById('copyHint');

    copyBtn.addEventListener('click', async () => {
      try{
        await navigator.clipboard.writeText(clabeText.textContent.replace(/\s+/g,' ').trim());
        copyHint.style.display = 'block';
        setTimeout(() => copyHint.style.display = 'none', 1200);
      }catch(e){
        // fallback simple
        alert('No se pudo copiar automáticamente. Copia manual: ' + clabeText.textContent);
      }
    });
