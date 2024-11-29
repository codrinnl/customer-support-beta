document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const headingSection = document.querySelector('.vc_row.bg-center');
        if (headingSection) {
            headingSection.classList.add('bounce-animation');

            // Optional: Remove the animation class after it's done so it can be re-triggered
            setTimeout(() => {
                headingSection.classList.remove('bounce-animation');
            }, 1500); // Match the duration of the animation
        }
    }, 2000); // Delay before bounce animation starts
});

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".highlighted-item");
    let index = 0;

    function highlightNext() {
        items.forEach((item, idx) => {
            item.classList.toggle("active", idx === index);
        });
        index = (index + 1) % items.length;
    }

    // Highlight items one by one every 2 seconds
    setInterval(highlightNext, 2000);

    // Initialize the first item as active
    highlightNext();
});