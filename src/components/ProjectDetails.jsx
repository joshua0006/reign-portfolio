import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { InlineWidget } from "react-calendly";

// Move projectsData outside of the component
export const projectsData = {
  "inbox-management": {
    title: "Inbox & Calendar Management System",
    hero: "https://clickup.com/blog/wp-content/uploads/2023/12/Email-Management-Strategies-to-Boost-Productivity.png",
    client: "Executive Leadership Team at Tech Startup",
    objective:
      "Streamline email and calendar management for a team of executives handling 200+ emails daily",
    tools: ["Gmail API", "Microsoft 365", "Zapier", "Calendar API"],
    overview:
      "Developed a comprehensive email and calendar management system that transformed chaotic inboxes into organized, efficient workflows.",
    role: [
      "Designed and implemented email categorization system",
      "Created automated calendar scheduling workflows",
      "Developed priority inbox management protocols",
      "Trained team members on new system adoption",
    ],
    process: [
      {
        title: "Email Organization",
        description:
          "Implemented a sophisticated labeling system with automated filters",
        details:
          "Created custom Gmail filters and labels to automatically categorize incoming emails based on sender, content, and urgency.",
      },
      {
        title: "Calendar Optimization",
        description: "Developed an intelligent scheduling system",
        details:
          "Integrated calendar blocking with automated buffer times and smart meeting scheduling based on preference and availability.",
      },
      {
        title: "Automation Setup",
        description: "Built automated workflows using Zapier",
        details:
          "Created automated responses for common requests and notification systems for high-priority emails.",
      },
    ],
    outcomes: [
      "Reduced email response time by 60%",
      "Decreased missed meetings by 90%",
      "Saved executives 8+ hours per week",
      "Improved team coordination by 40%",
    ],
    lessons: [
      "Advanced proficiency in email automation tools",
      "Improved understanding of executive time management",
      "Enhanced skills in creating scalable systems",
    ],
    screenshots: [
      {
        url: "https://example.com/screenshot1.jpg",
        caption: "Email categorization system",
      },
      {
        url: "https://example.com/screenshot2.jpg",
        caption: "Calendar optimization dashboard",
      },
    ],
  },
  "task-management": {
    title: "Task & Project Dashboard",
    hero: "https://corporate-assets.lucid.co/chart/7f77400d-9986-4e03-b582-2b39c6cdd8e1.png?v=1707837385111",
    client: "Remote Marketing Agency",
    objective:
      "Create a centralized task management system for tracking and prioritizing multiple client projects",
    tools: ["Asana", "Notion", "Zapier", "Google Workspace"],
    overview:
      "Developed a comprehensive project management system that streamlined workflow and improved team collaboration.",
    role: [
      "Designed custom Notion workspace architecture",
      "Implemented automated task tracking system",
      "Created project timeline visualization tools",
      "Developed team productivity metrics dashboard",
    ],
    process: [
      {
        title: "Workspace Setup",
        description: "Built custom Notion workspace with integrated databases",
        details:
          "Created interconnected databases for projects, tasks, and timelines with automated status updates.",
      },
      {
        title: "Automation Implementation",
        description: "Developed automated workflow systems",
        details:
          "Integrated Zapier workflows for task creation, updates, and team notifications.",
      },
      {
        title: "Reporting System",
        description: "Created automated reporting dashboards",
        details:
          "Built custom dashboards for tracking project progress, team productivity, and client deliverables.",
      },
    ],
    outcomes: [
      "Increased project completion rate by 45%",
      "Reduced task handoff time by 70%",
      "Improved team productivity by 35%",
      "Enhanced client satisfaction scores by 50%",
    ],
    lessons: [
      "Mastered advanced Notion database relationships",
      "Improved project timeline estimation skills",
      "Enhanced team collaboration techniques",
    ],
    screenshots: [
      {
        url: "https://example.com/screenshot1.jpg",
        caption: "Notion workspace overview",
      },
      {
        url: "https://example.com/screenshot2.jpg",
        caption: "Project timeline dashboard",
      },
    ],
  },
  "social-media": {
    title: "Social Media Command Center",
    hero: "https://synthesio.wpengine.com/wp-content/uploads/2019/08/social-media-command-center-display-600x374-min.png",
    client: "E-commerce Brand Portfolio",
    objective:
      "Develop a centralized system for managing multiple social media accounts across different platforms",
    tools: ["Buffer", "Hootsuite", "Canva", "Google Analytics"],
    overview:
      "Created a comprehensive social media management system that streamlined content creation, scheduling, and analytics tracking.",
    role: [
      "Designed content calendar system",
      "Implemented cross-platform posting strategy",
      "Created engagement tracking dashboard",
      "Developed automated reporting system",
    ],
    process: [
      {
        title: "Content Management",
        description: "Developed multi-platform content calendar",
        details:
          "Created an integrated system for planning, creating, and scheduling content across multiple social platforms.",
      },
      {
        title: "Analytics Integration",
        description: "Built comprehensive analytics dashboard",
        details:
          "Integrated multiple data sources to track engagement, reach, and conversion metrics.",
      },
      {
        title: "Automation Setup",
        description: "Implemented automated posting and reporting",
        details:
          "Created automated workflows for content scheduling and performance reporting.",
      },
    ],
    outcomes: [
      "Increased social media engagement by 85%",
      "Reduced posting time by 60%",
      "Improved content consistency by 75%",
      "Enhanced audience growth by 120%",
    ],
    lessons: [
      "Mastered multi-platform content strategy",
      "Improved analytics interpretation skills",
      "Enhanced automation workflow expertise",
    ],
    screenshots: [
      {
        url: "https://example.com/screenshot1.jpg",
        caption: "Content calendar system",
      },
      {
        url: "https://example.com/screenshot2.jpg",
        caption: "Analytics dashboard",
      },
    ],
  },
  "ai-chatbot": {
    title: "AI-Powered Chatbot System",
    hero: "https://www.techrepublic.com/wp-content/uploads/2023/07/ai-chatbot.jpeg",
    client: "E-commerce Platform",
    objective:
      "Develop an intelligent chatbot to handle customer inquiries and improve engagement",
    tools: ["Python", "TensorFlow", "NLP", "Dialogflow"],
    overview:
      "Built an AI-driven chatbot that reduced customer service response time by 80% while maintaining high customer satisfaction.",
    role: [
      "Designed conversation flows and intents",
      "Implemented natural language processing models",
      "Integrated with existing CRM system",
      "Developed analytics dashboard for performance tracking",
    ],
    process: [
      {
        title: "Requirement Analysis",
        description: "Identified key use cases and conversation flows",
        details:
          "Conducted workshops with stakeholders to map out common customer inquiries and business processes.",
      },
      {
        title: "Model Development",
        description: "Built and trained NLP models",
        details:
          "Developed custom machine learning models for intent classification and entity recognition.",
      },
      {
        title: "System Integration",
        description: "Integrated chatbot with existing systems",
        details:
          "Connected the chatbot to CRM, inventory management, and order tracking systems.",
      },
    ],
    outcomes: [
      "Reduced customer service response time by 80%",
      "Handled 90% of common inquiries without human intervention",
      "Increased customer satisfaction score by 25%",
      "Saved $200k annually in support costs",
    ],
    lessons: [
      "Advanced NLP model optimization techniques",
      "Improved understanding of conversational AI design",
      "Enhanced skills in AI system integration",
    ],
    screenshots: [
      {
        url: "https://example.com/screenshot1.jpg",
        caption: "Chatbot conversation flow",
      },
      {
        url: "https://example.com/screenshot2.jpg",
        caption: "Analytics dashboard",
      },
    ],
  },
  "data-platform": {
    title: "Cloud Data Platform",
    hero: "https://www.databricks.com/wp-content/uploads/2023/01/data-platform-diagram.png",
    client: "Financial Services Company",
    objective:
      "Create a scalable data platform for real-time analytics and reporting",
    tools: ["AWS", "Snowflake", "Apache Spark", "Kafka"],
    overview:
      "Designed and implemented a cloud-based data platform that enabled real-time analytics and improved decision-making capabilities.",
    role: [
      "Architected cloud infrastructure",
      "Implemented data pipelines",
      "Developed data governance framework",
      "Created real-time dashboards",
    ],
    process: [
      {
        title: "Infrastructure Design",
        description: "Designed scalable cloud architecture",
        details:
          "Created a multi-zone AWS architecture with auto-scaling capabilities.",
      },
      {
        title: "Data Pipeline Development",
        description: "Built ETL pipelines for data processing",
        details:
          "Implemented Apache Spark and Kafka for real-time data streaming and processing.",
      },
      {
        title: "Analytics Implementation",
        description: "Developed reporting and analytics tools",
        details: "Created interactive dashboards using Tableau and Power BI.",
      },
    ],
    outcomes: [
      "Reduced data processing time by 70%",
      "Enabled real-time decision making",
      "Improved data accessibility by 90%",
      "Reduced infrastructure costs by 30%",
    ],
    lessons: [
      "Advanced cloud architecture design",
      "Improved data pipeline optimization",
      "Enhanced skills in real-time analytics",
    ],
    screenshots: [
      {
        url: "https://example.com/screenshot1.jpg",
        caption: "Cloud architecture diagram",
      },
      {
        url: "https://example.com/screenshot2.jpg",
        caption: "Real-time dashboard",
      },
    ],
  },
};

function ProjectDetails() {
  const { projectId } = useParams();
  const project = projectsData[projectId];

  // Add this useEffect hook to handle hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#contact") {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Handle initial load
    handleHashChange();

    // Handle hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Update the handleContactClick function
  const handleContactClick = (e) => {
    e.preventDefault();
    // Navigate to home page first
    window.location.href = "/#contact";

    // Then scroll to contact section
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Project Not Found
          </h2>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-section-light">
      {/* Hero Section */}
      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${project.hero})`,
        }}
      >
        {/* Animated background - making it more subtle */}
        <div className="absolute inset-0">
          <div className="absolute right-0 top-0 w-96 h-96 bg-primary-light/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute left-20 bottom-20 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
          <div className="absolute left-40 top-40 w-96 h-96 bg-primary-dark/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="max-w-4xl">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white hover:text-primary-light mb-8"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Projects
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              {project.overview}
            </p>
            <div className="flex flex-wrap gap-3">
              {project.tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white border border-white/20"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Client & Objective */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white shadow-sm hover:shadow-md transition-shadow p-6 rounded-xl border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Client
              </h3>
              <p className="text-gray-600">{project.client}</p>
            </div>
            <div className="bg-white shadow-sm hover:shadow-md transition-shadow p-6 rounded-xl border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Objective
              </h3>
              <p className="text-gray-600">{project.objective}</p>
            </div>
          </div>

          {/* Process */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Process</h2>
            <div className="space-y-8">
              {project.process.map((step, index) => (
                <div
                  key={index}
                  className="bg-white shadow-sm hover:shadow-md transition-shadow p-8 rounded-xl border border-gray-100"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      <p className="text-sm text-gray-500">{step.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Outcomes */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Outcomes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.outcomes.map((outcome, index) => (
                <div
                  key={index}
                  className="bg-white shadow-sm hover:shadow-md transition-shadow p-6 rounded-xl border border-gray-100 flex items-start gap-4"
                >
                  <div className="text-blue-500">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-600">{outcome}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Learnings */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Key Learnings
            </h2>
            <div className="bg-white shadow-sm hover:shadow-md transition-shadow p-8 rounded-xl border border-gray-100">
              <ul className="space-y-4">
                {project.lessons.map((lesson, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="text-blue-500">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-600">{lesson}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-600 mb-8">
              Let's discuss how we can implement innovative solutions for your
              organization
            </p>
            <Link
              to="/#contact"
              onClick={handleContactClick}
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold shadow-lg shadow-blue-500/25 transform hover:scale-105 transition-all duration-200"
            >
              Get in Touch
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
