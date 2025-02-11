import React, { useEffect } from "react";
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";
import Testimonials from "./Testimonials";
import Projects from "./Projects";
import profileImage from "../assets/profile-3.jpeg";

function Home() {
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

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center bg-gradient-to-br from-indigo-950 via-blue-900 to-slate-900 overflow-hidden"
        id="hero"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute right-0 top-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute left-20 bottom-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute left-40 top-40 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <div className="space-y-2 mb-8">
                <p className="inline-block px-3 py-1 text-sm font-medium text-blue-100 rounded-full bg-blue-100/30 backdrop-blur-sm border border-blue-200/50 mb-4">
                  Available for Work
                </p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-teal-200 to-blue-200">
                    Executive Virtual Assistant
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl">
                  Building intelligent solutions to streamline your workflow and
                  enhance productivity
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <a
                  href="#contact"
                  className="group px-8 py-4 bg-gradient-to-r from-blue-800 to-teal-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-800/50 transform hover:scale-105 transition-all duration-200"
                >
                  <span className="flex items-center gap-2">
                    Get in Touch
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 group-hover:translate-x-1 transition-transform"
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
                </a>
                <a
                  href="#projects"
                  className="group px-8 py-4 bg-white/10 text-white rounded-full font-semibold backdrop-blur-sm border border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all duration-200"
                >
                  View Projects
                </a>
              </div>

              {/* Stats */}
              <div className="mt-16 flex gap-8">
                <div>
                  <div className="text-3xl font-bold text-white">2+</div>
                  <div className="text-sm text-blue-200">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">20+</div>
                  <div className="text-sm text-blue-200">
                    Projects Completed
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-sm text-blue-200">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative hidden md:block">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Decorative Elements */}
                <div className="absolute inset-0 rounded-full bg-white "></div>
                <div className="absolute inset-0 rounded-full "></div>

                {/* Image Container */}
                <div className="relative rounded-full overflow-hidden border-4 border-white/10 backdrop-blur-sm">
                  <img
                    src={profileImage}
                    alt="Executive Virtual Assistant"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Badges */}
                <div className="absolute -right-4 top-1/4 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                  <svg
                    className="w-8 h-8 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="absolute -left-4 bottom-1/4 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                  <svg
                    className="w-8 h-8 text-teal-300"
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-grow" id="about">
        <About />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />
      </main>
    </div>
  );
}

export default Home;
