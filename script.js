document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            
            // toggle the 'active' class on the clicked item
            item.classList.toggle('active');

            // close other items when one is opened
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== header) {
                    otherHeader.parentElement.classList.remove('active');
                }
            });
        });
    });
});