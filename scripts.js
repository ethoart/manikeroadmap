document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.timeline-item');
    items.forEach(item => {
        item.addEventListener('click', () => {
            alert(`You clicked on ${item.querySelector('p').textContent} in ${item.getAttribute('data-quarter')}`);
        });
    });
});
