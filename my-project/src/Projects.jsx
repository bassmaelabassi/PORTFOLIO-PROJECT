import { useEffect } from "react";
import gsap from "gsap";

const projects = [
  {
    id: 1,
    title: "Gestionnaire de Stock",
    description: "Application de gestion de stock pour petites entreprises.",
    image: "https://via.placeholder.com/400",
    link: "https://github.com/bassmaelabassi/-Gestionnaire-de-Stock-pour-une-Petite-Entreprise",
  },
  {
    id: 2,
    title: "Météo App",
    description: "Application météo affichant les prévisions en temps réel.",
    image: "https://via.placeholder.com/400",
    link: "https://github.com/bassmaelabassi/METEO",
  },
  {
    id: 3,
    title: "Gestion des Tâches",
    description: "Application de gestion de tâches avec suivi des progrès.",
    image: "https://via.placeholder.com/400",
    link: "https://github.com/bassmaelabassi/gestion-des-taches",
  },
];

const Projects = () => {
  useEffect(() => {
    // Animation de rotation et mise à l'échelle
    gsap.to("#projects", { rotation: 360, scale: 1.2, duration: 2, ease: "power2.inOut" });
  }, []);

  return (
    <section id="projects" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Mes Projets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                >
                  Voir le projet
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
