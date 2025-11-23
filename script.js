document.addEventListener("DOMContentLoaded", function() {

    // === 1. ANUL DINAMIC ÎN FOOTER (NOU) ===
    const currentYear = new Date().getFullYear();
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = currentYear;
    }


    // === 2. PRELOADER LOGIC (CLASIC - Fără Snake) ===
    // Pur și simplu așteptăm să se încarce pagina și apoi îl ascundem
    window.addEventListener("load", function() {
        const preloader = document.getElementById("preloader");
        if(preloader) {
            // Mic delay ca să vezi animația
            setTimeout(() => {
                preloader.style.opacity = '0';
                preloader.style.visibility = 'hidden';
                setTimeout(() => {
                    if (document.body.contains(preloader)) {
                        document.body.removeChild(preloader);
                    }
                }, 500);
            }, 1500); // 1.5 secunde
        }
    });


    // === 3. TYPING EFFECT ===
    const targetElement = document.getElementById('typing-text');
    const textToType = 'Bobăreasa Robert.'; 
    let index = 0;
    
    function typeEffect() {
        if (index < textToType.length) {
            targetElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(typeEffect, 100); 
        } else {
            targetElement.style.borderRight = 'none';
        }
    }
    setTimeout(typeEffect, 2000); 


    // === 4. SCROLL ANIMATIONS ===
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const targetWidth = bar.getAttribute('data-width');
                if(targetWidth) {
                    bar.style.width = targetWidth;
                }
                observer.unobserve(bar); 
            }
        });
    }, { threshold: 0.1 });

    const skillLevels = document.querySelectorAll('.skill-level');
    skillLevels.forEach(bar => {
        bar.style.width = '0'; 
        observer.observe(bar);
    });


    // === 5. POPUP CONTACT ===
    const openPopupBtn = document.querySelector('.cta-button'); 
    const popupOverlay = document.getElementById('popup-overlay');
    const closePopupBtn = document.getElementById('close-popup-btn');

    if(openPopupBtn && popupOverlay) {
        openPopupBtn.addEventListener('click', function(e) {
            e.preventDefault(); 
            popupOverlay.classList.add('popup-visible'); 
        });

        closePopupBtn.addEventListener('click', function() {
            popupOverlay.classList.remove('popup-visible');
        });

        popupOverlay.addEventListener('click', function(e) {
            if (e.target === popupOverlay) {
                popupOverlay.classList.remove('popup-visible');
            }
        });
    }
    
    // === 6. BACK TO TOP ===
    const toTopBtn = document.getElementById('back-to-top');
    if(toTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) { 
                toTopBtn.classList.add('show-btn');
            } else {
                toTopBtn.classList.remove('show-btn');
            }
        });

        toTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    // === 8. SCROLL PROGRESS BAR ===
    window.addEventListener('scroll', () => {
        const progressBar = document.getElementById('scroll-progress');
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        progressBar.style.width = progress + '%';
    });
    
});