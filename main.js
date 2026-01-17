// small interaction helpers: nav toggle and fake contact submission
document.addEventListener('DOMContentLoaded', function(){
  // year placeholders
  const y = new Date().getFullYear();
  document.getElementById('year') && (document.getElementById('year').textContent = y);
  document.getElementById('year-2') && (document.getElementById('year-2').textContent = y);
  document.getElementById('year-3') && (document.getElementById('year-3').textContent = y);
  document.getElementById('year-4') && (document.getElementById('year-4').textContent = y);

  // nav toggle
  const navs = Array.from(document.querySelectorAll('.nav-toggle'));
  navs.forEach(btn => {
    const nav = document.querySelector('.main-nav');
    btn.addEventListener('click', ()=>{
      if(nav){
        const open = nav.style.display === 'flex';
        nav.style.display = open ? '' : 'flex';
        btn.setAttribute('aria-expanded', String(!open));
      }
    });
  });

  // contact form demo
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const status = document.getElementById('form-status');
      // simple validation UX
      const valid = form.checkValidity();
      if(!valid){
        status.classList.remove('sr-only');
        status.textContent = 'Please complete the form correctly.';
        status.style.color = '#ffb703';
        return;
      }
      // simulate sending
      status.classList.remove('sr-only');
      status.textContent = 'Sending...';
      setTimeout(()=>{
        status.textContent = 'Message sent! (demo)';
        status.style.color = '#9ff7b7';
        form.reset();
      }, 900);
    });
  }
});