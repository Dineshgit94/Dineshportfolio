
document.addEventListener('DOMContentLoaded', (event) => {
    // Select navigation links
    const navHome = document.getElementById('nav-home');
    const navSkills = document.getElementById('nav-skills');
    const navProjects = document.getElementById('nav-projects');
    const navResume = document.getElementById('nav-resume');
    const navContact = document.getElementById('nav-contact');

    // Add click event listeners to the navigation links
    navHome.addEventListener('click', (event) => {
        event.preventDefault();  // Prevent the default action
        console.log('Home link clicked!');
        // Add additional functionality here
    });

    navSkills.addEventListener('click', (event) => {
        event.preventDefault();  // Prevent the default action
        console.log('Skills link clicked!');
        // Add additional functionality here
    });

    navProjects.addEventListener('click', (event) => {
        event.preventDefault();  // Prevent the default action
        console.log('Projects link clicked!');
        // Add additional functionality here
    });

    navResume.addEventListener('click', (event) => {
        console.log('Resume link clicked!');
        // Add additional functionality here if needed
    });

    navContact.addEventListener('click', (event) => {
        console.log('Contact link clicked!');
        // Add additional functionality here if needed
    });
});
