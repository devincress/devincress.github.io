// Insert current age into the webpage
document.addEventListener("DOMContentLoaded", function () {
    const myBirthdate = "1994-04-08";
    document.getElementById("age").textContent = calculateAge(myBirthdate);
});

function calculateAge(birthdate) {
    const birthDate = new Date(birthdate);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    // Adjust age if birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return age;
}


// Image swipe effect
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".image-container");
  
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3  // Trigger when 30% of image is visible
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Set a custom delay based on the image index for staggered effect
          entry.target.style.setProperty("--delay", `${index * 0.2}s`);
          entry.target.classList.add("swipe-up");
          observer.unobserve(entry.target);  // Stop observing once animated
        }
      });
    }, observerOptions);
  
    images.forEach(image => observer.observe(image));
  });