document.addEventListener("DOMContentLoaded", () => {
    // BOTÃO WHATSAPP
    const whatsappBtn = document.getElementById("whatsappBtn");
    const whatsappMenu = document.getElementById("whatsappMenu");

    if (whatsappBtn && whatsappMenu) {
        whatsappBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            whatsappMenu.style.display =
                whatsappMenu.style.display === "flex" ? "none" : "flex";
        });

        document.addEventListener("click", (e) => {
            if (!e.target.closest(".whatsapp-container")) {
                whatsappMenu.style.display = "none";
            }
        });
    }

    const fabButton = document.getElementById("lang-fab");
    const modal = document.getElementById("lang-modal");

    // abrir
    fabButton.addEventListener("click", (e) => {
        e.stopPropagation();
        fabButton.classList.add("active");
        modal.classList.add("active");
    });

    // fechar clicando fora
    document.addEventListener("click", (e) => {
        if (!e.target.closest("#lang-fab") && !e.target.closest(".lang-box")) {
            fabButton.classList.remove("active");
            modal.classList.remove("active");
        }
    });




    // FAQ ACCORDION
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const button = item.querySelector(".faq-question");

        button.addEventListener("click", () => {
            const isActive = item.classList.contains("active");

            faqItems.forEach(i => i.classList.remove("active"));

            if (!isActive) {
                item.classList.add("active");
            }
        });
    });
});

// ANO AUTOMÁTICO
const yearEl = document.getElementById("Year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}


const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);



// Ajusta posição do botão WhatsApp se existir o tradutor flutuante
(function () {
    const waFab = document.getElementById('whatsappBtn');
    const translator = document.getElementById('lang-fab');
    if (!waFab || !translator) return;

    function adjust() {
        const gap = 12; // espaço entre os componentes
        const trRect = translator.getBoundingClientRect();
        const compRight = window.getComputedStyle(translator).right || '30px';
        const rightVal = parseInt(compRight, 10) || 30;
        const newRight = rightVal + Math.round(trRect.width) + gap;
        // em telas pequenas manter comportamento original
        if (window.innerWidth > 640) {
            waFab.style.right = newRight + 'px';
        } else {
            waFab.style.right = '';
        }
    }

    // executar no load e ao redimensionar
    window.addEventListener('load', adjust);
    window.addEventListener('resize', adjust);
    // também ajustar quando o menu do tradutor abrir (caso altere largura)
    const trig = translator.querySelector('.translator-toggle');
    if (trig) trig.addEventListener('click', function () { setTimeout(adjust, 160); });
    // chamada inicial
    adjust();
})();




