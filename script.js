document.addEventListener("DOMContentLoaded", () => {
    //Checks for when elements are in view
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                //add visible class
                entry.target.classList.add("visible");
            }
        });
    }, 
    { 
        //Triggers when 20% is visible
        threshold: 0.2 
    });

    //observe each element
    document.querySelectorAll(".fade-in").forEach(section => {
        observer.observe(section);
    });

    //Hamburger Menu toggle (mobile view)
    const menu = document.querySelector(".nav-links");
    const burger = document.querySelector(".hamburger");

    burger.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
});
