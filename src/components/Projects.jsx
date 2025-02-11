import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "inbox-management",
    title: "Inbox & Calendar Management System",
    description:
      "Streamlined email and calendar management system for busy executives handling 200+ emails daily.",
    image:
      "https://clickup.com/blog/wp-content/uploads/2023/12/Email-Management-Strategies-to-Boost-Productivity.png",
    tags: ["Gmail API", "Microsoft 365", "Automation"],
  },
  {
    id: "task-management",
    title: "Task Management & Productivity Tracker",
    description:
      "Comprehensive project management system with automated task tracking and team coordination.",
    image:
      "https://corporate-assets.lucid.co/chart/7f77400d-9986-4e03-b582-2b39c6cdd8e1.png?v=1707837385111",
    tags: ["Asana", "Notion", "Automation"],
  },
  {
    id: "social-media",
    title: "Social Media Management Hub",
    description:
      "Strategic social media management system with content scheduling and engagement tracking.",
    image:
      "https://synthesio.wpengine.com/wp-content/uploads/2019/08/social-media-command-center-display-600x374-min.png",
    tags: ["Buffer", "Hootsuite", "Analytics"],
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-section-light py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2">FEATURED PROJECTS</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-black">Recent Work</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore some of my recent projects showcasing workflow optimization
            and productivity enhancement solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 rounded-2xl border border-primary/10 flex flex-col"
            >
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-black">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-600 flex-grow">
                  {project.description}
                </p>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-blue-50 text-blue-500 rounded-full border border-blue-100/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center">
                    <span className="flex items-center gap-2 text-blue-500 group-hover:text-blue-600 font-medium">
                      View Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 group-hover:translate-x-1 transition-transform"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
