document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-body');
    const closeModal = document.querySelector('.close');

    document.querySelectorAll('.project').forEach(project => {
        project.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            showProjectDetails(projectId);
            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    function showProjectDetails(projectId) {
        let projectDetails;
        if (projectId === '1') {
            projectDetails = `
                <h2>Smart City</h2>
                <p>The Smart City project is designed to assist new residents and visitors in navigating the city. It provides information on various points of interest such as malls, hospitals, parks, and other essential services. The project aims to enhance the user experience by offering a seamless and user-friendly interface to explore the city.</p>
            `;
        } else if (projectId === '2') {
            projectDetails = `
                <h2>Student Course Management System</h2>
                <p>The Student Course Management System is a web application that helps manage and organize student courses. It allows students to register for courses, view their schedules, and track their progress. The system is designed to streamline the course management process for both students and administrators, making it efficient and easy to use.</p>
            `;
        }
        modalContent.innerHTML = projectDetails;
    }

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        alert(`Thank you for your message, ${name}! I will get back to you at ${email} soon.`);
        
        contactForm.reset();
    });
});
