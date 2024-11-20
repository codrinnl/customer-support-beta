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
