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

document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('start-offer');
    const offerSection = document.getElementById('offer-section');
    const formSection = document.getElementById('multi-step-form');
    const steps = document.querySelectorAll('.form-step');
    const nextButtons = document.querySelectorAll('.next-step');
    const prevButtons = document.querySelectorAll('.prev-step');
    const submitButton = document.querySelector('.submit');
    let currentStep = 0;

    // Start the form
    startButton.addEventListener('click', function () {
        offerSection.classList.add('hidden');
        formSection.classList.remove('hidden');
        steps[currentStep].classList.add('active');
    });

    // Option button click behavior (toggling "selected" state)
    document.querySelectorAll('.option-button').forEach(button => {
        button.addEventListener('click', function() {
            // Remove 'selected' class from all buttons in the current step
            const stepOptions = this.closest('.form-step').querySelectorAll('.option-button');
            stepOptions.forEach(option => option.classList.remove('selected'));

            // Add 'selected' class to the clicked button
            this.classList.add('selected');
        });
    });

    // Navigate to next step
    nextButtons.forEach((btn) => {
        btn.addEventListener('click', function () {
            steps[currentStep].classList.remove('active');
            currentStep++;
            steps[currentStep].classList.add('active');

            // Show/Hide buttons
            if (currentStep === steps.length - 1) {
                btn.classList.add('hidden');
                submitButton.classList.remove('hidden');
            }
            prevButtons.forEach((btn) => btn.classList.remove('hidden'));
        });
    });

    // Navigate to previous step
    prevButtons.forEach((btn) => {
        btn.addEventListener('click', function () {
            steps[currentStep].classList.remove('active');
            currentStep--;
            steps[currentStep].classList.add('active');

            // Show/Hide buttons
            if (currentStep === 0) {
                btn.classList.add('hidden');
            }
            submitButton.classList.add('hidden');
            nextButtons.forEach((btn) => btn.classList.remove('hidden'));
        });
    });

    // Submit the form
    submitButton.addEventListener('click', function () {
        alert('Form submitted! Thank you for your response.');
        formSection.classList.add('hidden');
        offerSection.classList.remove('hidden'); // Reset to offer section
        currentStep = 0; // Reset step
        steps.forEach((step) => step.classList.remove('active'));
    });
});
