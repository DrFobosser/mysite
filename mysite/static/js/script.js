document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function () {
            const button = this.querySelector('button[type="submit"]');
            if (button) {
                button.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Обработка...';
                button.disabled = true;
            }
        });
    }

    if (window.location.hash === '#results' || document.querySelector('.main_container')) {
        setTimeout(function () {
            const results = document.querySelector('.main_container');
            if (results) {
                results.scrollIntoView({ behavior: 'smooth', block: 'start' });
                results.style.animation = 'fadeIn 0.5s ease-out';
            }
        }, 300);
    }

    const highlightImportant = function () {
        document.querySelectorAll('.main_container > div:not(.report_conclusion):not(.report_balance)').forEach(item => {
            const text = item.textContent;
            if (text.includes('Важно:') || text.includes('Внимание:') || text.includes('Рекомендация:')) {
                item.style.backgroundColor = '#fff8e6';
                item.style.borderLeft = '4px solid #ffc107';
            }
        });
    };

    highlightImportant();
});

const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .spinner-border {
        display: inline-block;
        width: 1rem;
        height: 1rem;
        vertical-align: text-bottom;
        border: 0.2em solid currentColor;
        border-right-color: transparent;
        border-radius: 50%;
        animation: spinner-border .75s linear infinite;
    }
    @keyframes spinner-border {
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);