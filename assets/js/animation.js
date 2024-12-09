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


emailjs.init({
    publicKey: "UrQa9iNIShnCF-Npq"
});

document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('start-offer');
    const getInTouchBtn = document.getElementById('get-in-touch-btn');
    const startNowBtn = document.getElementById('start-now-btn');
    const getStartedBtn = document.getElementById('get-started-btn');
    const bookBtn = document.getElementById('book-btn');
    const bosBtn = document.getElementById('bos-btn');
    const hsBtn = document.getElementById('hs-btn');
    const csrBtn = document.getElementById('csr-btn');
    const gstBtn = document.getElementById('gst-btn');
    const contactBarBtn = document.getElementById('contactbar-btn');
    const contactBtn = document.getElementById('contact-btn');
    const offerSection = document.getElementById('offer-section');
    const formSection = document.getElementById('multi-step-form');
    const steps = document.querySelectorAll('.form-step');
    let currentStep = 0;
    const collectedData = {}; // Store the collected data from each step


    function activateForm() {
        offerSection.classList.add('hidden'); // Hide offer section
        formSection.classList.add('show');   // Show and activate the form
        steps[currentStep].classList.add('active');
    }

    // "Start Here" button activates the form
    startButton.addEventListener('click', activateForm);

    // "Get in Touch" button scrolls and activates the form
    contactBarBtn.addEventListener('click', function (event) {
        event.preventDefault();
        offerSection.scrollIntoView({behavior: 'smooth'});

        // Delay for smooth scroll, then activate the form
        setTimeout(() => activateForm(), 800);
    });

    bosBtn.addEventListener('click', function (event) {
        event.preventDefault();
        offerSection.scrollIntoView({behavior: 'smooth'});

        // Delay for smooth scroll, then activate the form
        setTimeout(() => activateForm(), 800);
    });

    hsBtn.addEventListener('click', function (event) {
        event.preventDefault();
        offerSection.scrollIntoView({behavior: 'smooth'});

        // Delay for smooth scroll, then activate the form
        setTimeout(() => activateForm(), 800);
    });

    csrBtn.addEventListener('click', function (event) {
        event.preventDefault();
        offerSection.scrollIntoView({behavior: 'smooth'});

        // Delay for smooth scroll, then activate the form
        setTimeout(() => activateForm(), 800);
    });

    gstBtn.addEventListener('click', function (event) {
        event.preventDefault();
        offerSection.scrollIntoView({behavior: 'smooth'});

        // Delay for smooth scroll, then activate the form
        setTimeout(() => activateForm(), 800);
    });

    getInTouchBtn.addEventListener('click', function (event) {
        event.preventDefault();
        offerSection.scrollIntoView({behavior: 'smooth'});

        // Delay for smooth scroll, then activate the form
        setTimeout(() => activateForm(), 800);
    });

    startNowBtn.addEventListener('click', function (event) {
        event.preventDefault();
        offerSection.scrollIntoView({behavior: 'smooth'});

        // Delay for smooth scroll, then activate the form
        setTimeout(() => activateForm(), 800);
    });

    contactBtn.addEventListener('click', function (event) {
        event.preventDefault();
        offerSection.scrollIntoView({behavior: 'smooth'});

        // Delay for smooth scroll, then activate the form
        setTimeout(() => activateForm(), 800);
    });

    getStartedBtn.addEventListener('click', function (event) {
        event.preventDefault();
        offerSection.scrollIntoView({behavior: 'smooth'});

        // Delay for smooth scroll, then activate the form
        setTimeout(() => activateForm(), 800);
    });

    bookBtn.addEventListener('click', function (event) {
        event.preventDefault();
        offerSection.scrollIntoView({behavior: 'smooth'});

        // Delay for smooth scroll, then activate the form
        setTimeout(() => activateForm(), 800);
    });

    // Option button click behavior
    document.querySelectorAll('.option-button').forEach(button => {
        button.addEventListener('click', function () {
            const stepOptions = this.closest('.form-step').querySelectorAll('.option-button');
            stepOptions.forEach(option => option.classList.remove('selected'));
            this.classList.add('selected');
            const name = this.getAttribute('name');
            collectedData[name] = this.getAttribute('value');
        });
    });

    document.getElementById('tasks').addEventListener('input', function () {
        collectedData['tasks'] = this.value;
        console.log('Tasks Updated:', collectedData);
    });

    // Navigation (Next and Previous buttons)
    document.querySelectorAll('.next-step, .prev-step').forEach(button => {
        button.addEventListener('click', function () {
            const isNext = button.classList.contains('next-step');
            steps[currentStep].classList.remove('active');
            currentStep += isNext ? 1 : -1;
            steps[currentStep].classList.add('active');
            toggleNavigationButtons(currentStep, steps.length);
        });
    });

    // Submit button behavior
    document.querySelector('.submit').addEventListener('click', function () {
        event.preventDefault();
        const inputs = steps[currentStep].querySelectorAll('input');
        inputs.forEach(input => {
            collectedData[input.name] = input.value;
        });
        console.log(collectedData);

        emailjs
            .send('service_l2dqd0e', 'template_9zucxb8', collectedData)
            .then(response => {
                alert('Form submitted successfully!');
                formSection.classList.remove('show');
            })
            .catch(error => {
                console.error('EmailJS error:', error);
                alert('There was an issue submitting the form. Please try again.');
            });

        formSection.classList.remove('show');
        offerSection.classList.remove('hidden');
        currentStep = 0;
        steps.forEach(step => step.classList.remove('active'));
    });

    function toggleNavigationButtons(step, totalSteps) {
        document.querySelector('.prev-step').classList.toggle('hidden', step === 0);
        document.querySelector('.next-step').classList.toggle('hidden', step === totalSteps - 1);
        document.querySelector('.submit').classList.toggle('hidden', step !== totalSteps - 1);
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const getInTouchBtn = document.getElementById('get-in-touch-btn');
    const contactBarBtn = document.getElementById('contactbar-btn');
    const startNowBtn = document.getElementById('start-now-btn');
    const startOfferBtn = document.getElementById('start-offer');
    const getStartedBtn = document.getElementById('get-started-btn');
    const bookBtn = document.getElementById('book-btn');
    const bosBtn = document.getElementById('bos-btn');
    const hsBtn = document.getElementById('hs-btn');
    const csrBtn = document.getElementById('csr-btn');
    const gstBtn = document.getElementById('gst-btn');
    const contactBtn = document.getElementById('contact-btn');
    const offerSection = document.getElementById('offer-section');
    const formSection = document.getElementById('multi-step-form');

    // Scroll to the offer section and start the form
    contactBarBtn.addEventListener('click', function (event) {
        event.preventDefault();
        offerSection.scrollIntoView({behavior: 'smooth'});

        // Delay to ensure smooth scrolling is complete before showing the form
        setTimeout(() => {
            offerSection.style.display = 'none'; // Hide the static offer content
            formSection.classList.remove('hidden'); // Reveal the form
        }, 800); // Adjust timing if needed
    });

    bosBtn.addEventListener('click', function (event) {
        event.preventDefault();
        offerSection.scrollIntoView({behavior: 'smooth'});

        // Delay to ensure smooth scrolling is complete before showing the form
        setTimeout(() => {
            offerSection.style.display = 'none'; // Hide the static offer content
            formSection.classList.remove('hidden'); // Reveal the form
        }, 800); // Adjust timing if needed
    });

    hsBtn.addEventListener('click', function (event) {
        event.preventDefault();
        offerSection.scrollIntoView({behavior: 'smooth'});

        // Delay to ensure smooth scrolling is complete before showing the form
        setTimeout(() => {
            offerSection.style.display = 'none'; // Hide the static offer content
            formSection.classList.remove('hidden'); // Reveal the form
        }, 800); // Adjust timing if needed
    });

    csrBtn.addEventListener('click', function (event) {
        event.preventDefault();
        offerSection.scrollIntoView({behavior: 'smooth'});

        // Delay to ensure smooth scrolling is complete before showing the form
        setTimeout(() => {
            offerSection.style.display = 'none'; // Hide the static offer content
            formSection.classList.remove('hidden'); // Reveal the form
        }, 800); // Adjust timing if needed
    });

    gstBtn.addEventListener('click', function (event) {
        event.preventDefault();
        offerSection.scrollIntoView({behavior: 'smooth'});

        // Delay to ensure smooth scrolling is complete before showing the form
        setTimeout(() => {
            offerSection.style.display = 'none'; // Hide the static offer content
            formSection.classList.remove('hidden'); // Reveal the form
        }, 800); // Adjust timing if needed
    });

    getInTouchBtn.addEventListener('click', function (event) {
        event.preventDefault();
        offerSection.scrollIntoView({behavior: 'smooth'});

        // Delay to ensure smooth scrolling is complete before showing the form
        setTimeout(() => {
            offerSection.style.display = 'none'; // Hide the static offer content
            formSection.classList.remove('hidden'); // Reveal the form
        }, 800); // Adjust timing if needed
    });

    bookBtn.addEventListener('click', function (event) {
        event.preventDefault();
        offerSection.scrollIntoView({behavior: 'smooth'});

        // Delay to ensure smooth scrolling is complete before showing the form
        setTimeout(() => {
            offerSection.style.display = 'none'; // Hide the static offer content
            formSection.classList.remove('hidden'); // Reveal the form
        }, 800); // Adjust timing if needed
    });

    startNowBtn.addEventListener('click', function (event) {
        event.preventDefault();
        offerSection.scrollIntoView({behavior: 'smooth'});

        // Delay to ensure smooth scrolling is complete before showing the form
        setTimeout(() => {
            offerSection.style.display = 'none'; // Hide the static offer content
            formSection.classList.remove('hidden'); // Reveal the form
        }, 800); // Adjust timing if needed
    });

    contactBtn.addEventListener('click', function (event) {
        event.preventDefault();
        offerSection.scrollIntoView({behavior: 'smooth'});

        // Delay to ensure smooth scrolling is complete before showing the form
        setTimeout(() => {
            offerSection.style.display = 'none'; // Hide the static offer content
            formSection.classList.remove('hidden'); // Reveal the form
        }, 800); // Adjust timing if needed
    });

    getStartedBtn.addEventListener('click', function (event) {
        event.preventDefault();
        offerSection.scrollIntoView({behavior: 'smooth'});

        // Delay to ensure smooth scrolling is complete before showing the form
        setTimeout(() => {
            offerSection.style.display = 'none'; // Hide the static offer content
            formSection.classList.remove('hidden'); // Reveal the form
        }, 800); // Adjust timing if needed
    });

    // Start the form directly when "Start Here" is clicked
    startOfferBtn.addEventListener('click', function () {
        offerSection.style.display = 'none';
        formSection.classList.remove('hidden');
    });
});
