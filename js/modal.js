document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalLink = document.getElementById("modal-link");
    const closeModal = document.querySelector(".close-btn");

    let projects = [];

    fetch('projects.json')
        .then(response => response.json())
        .then(data => {
            projects = data;

            document.querySelectorAll(".carousel-item h3").forEach((title, index) => {
                title.addEventListener("click", () => {
                    const project = projects[index];
                    modalTitle.textContent = project.title;
                    modalDescription.innerHTML = project.description;
                    modalLink.href = project.link;
                    modal.style.display = "flex";
                });
            });
        })
        .catch(error => {
            console.error("Erro ao carregar projetos:", error);
        });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
