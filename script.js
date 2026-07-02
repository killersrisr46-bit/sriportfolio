 // Smooth anchor + active nav highlight
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");
    
    function updateActiveNav() {
      let current = "";
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });
      navLinks.forEach(link => {
        link.classList.remove("active");
        const href = link.getAttribute("href").substring(1);
        if (href === current) {
          link.classList.add("active");
        }
      });
    }

    window.addEventListener("scroll", updateActiveNav);
    window.addEventListener("load", updateActiveNav);

    // smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === "#" || targetId === "") return;
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          history.pushState(null, null, targetId);
        }
      });
    });

    // top button
    const topBtn = document.getElementById('topBtn');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        topBtn.style.opacity = '1';
        topBtn.style.visibility = 'visible';
      } else {
        topBtn.style.opacity = '0';
        topBtn.style.visibility = 'hidden';
      }
    });
    topBtn.style.transition = '0.25s';
    topBtn.style.opacity = '0';
    topBtn.style.visibility = 'hidden';

    // Download CV simulation
    const cvBtn = document.getElementById('cvDownload');
    cvBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      alert("📄 SriRam_VideoEditor_CV.pdf (demo) — In live version, your professional resume will be attached.");
      const link = document.createElement('a');
      link.href = "data:application/pdf;base64,JVBERi0xLjQKMSAwIG9iago8PAovVGl0bGUgKFNyaXJhbSBSZXN1bWUpCi9Qcm9kdWNlciAoU2ltcGxlIENWKQo+PgpzdHJlYW0KQ1YgU3JpUmFtIC0gVmlkZW8gRWRpdG9yIFdpdGggNSsgeWVhcnMgZXhwZXJpZW5jZQpDb250YWN0OiBzcmlyYW0uZWRpdG9yQGN1dGZsb3cuY29tCmVuZHN0cmVhbQolRU9G";
      link.download = "SriRam_Resume_Editor.pdf";
      link.click();
    });

    // form handling elegant
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      feedback.innerHTML = '<i class="fas fa-check-circle" style="color:#f97316;"></i> Thanks! I’ll get back to you within 24 hours.';
      feedback.style.color = "#b9fbc0";
      form.reset();
      setTimeout(() => { feedback.innerHTML = ''; }, 4000);
    });

    // subtle floating effect
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.borderColor = '#f97316';
      });
      card.addEventListener('mouseleave', () => {
        card.style.borderColor = '#232530';
      });
    });