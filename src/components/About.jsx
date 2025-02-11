import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const experiences = [
  {
    title: "Freelance General Virtual Assistant",
    company_name: "Remote",
    date: "August 2024 - Present",
    details: [
      "Reduced manual tasks by 40% through implementing automation systems using <strong>Zapier</strong>",
      "Optimized scheduling efficiency by managing executive calendars with <strong>Calendly</strong> and <strong>Google Calendar</strong>",
      "Enhanced client communication by utilizing <strong>HubSpot CRM</strong> for streamlined interactions",
      "Designed and created professional presentations utilizing <strong>Canva</strong> and <strong>PowerPoint</strong>",
      "Managed and automated social media content scheduling through <strong>Hootsuite</strong> and <strong>Buffer</strong>",
      "Handled financial tracking and reporting processes using <strong>QuickBooks Online</strong>",
    ],
  },
  {
    title: "Senior High School Secretary",
    company_name: "Our Lady of Fatima University - Nueva Ecija Campus",
    date: "December 2022 - July 2024",
    details: [
      "Enhanced document accessibility by implementing digital filing systems with <strong>Google Drive</strong> and <strong>Dropbox</strong>",
      "Streamlined reporting processes by automating report generation using <strong>Google Sheets</strong> and <strong>Excel</strong> macros",
      "Facilitated effective departmental communication through <strong>Microsoft Teams</strong>",
      "Successfully managed events and projects using <strong>Asana</strong> and <strong>Trello</strong>",
      "Developed and maintained ISO compliance documentation using <strong>Microsoft Word</strong> templates",
    ],
  },
];

const ExperienceCard = ({ experience, onClick, isActive, isMobile }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer sm:mb-5 p-5 w-[300px] relative sm:text-left text-center hover:bg-gray-50/50 rounded-lg transition-all duration-300 ${
        isMobile ? "text-blue-600" : ""
      }`}
    >
      {(isActive || isMobile) && (
        <div className="absolute left-0 top-0 bottom-0 w-3 md:w-5 bg-blue-600 my-6 sm:block hidden"></div>
      )}
      <h3
        className={`text-xl lg:text-2xl xl:text-3xl font-bold sm:pl-8 ${
          isActive || isMobile ? "text-blue-600" : "text-gray-900"
        }`}
      >
        {experience.title}
      </h3>
      <p
        className={`text-md lg:text-lg xl:text-2xl sm:font-medium pt-2 sm:pl-8 ${
          isActive || isMobile ? "text-gray-900" : "text-gray-600"
        }`}
      >
        {experience.company_name} | {experience.date}
      </p>
    </div>
  );
};

const ExperienceDetails = ({ experience }) => {
  return (
    <div className="relative w-[800px] min-h-[500px]">
      {/* Animated gradient backgrounds */}
      <div className="absolute inset-0 rounded-xl lg:rounded-3xl bg-gradient-to-r from-blue-100/20 to-teal-200/20 animate-pulse"></div>
      <div className="absolute inset-0 rounded-xl lg:rounded-3xl bg-gradient-to-r from-purple-200/20 to-pink-100/20 animate-pulse animation-delay-2000"></div>

      <ul className="relative h-full list-none space-y-4 border border-gray-200/60 rounded-xl lg:rounded-3xl p-6 bg-white/80 backdrop-blur-sm shadow-lg">
        {experience.details.map((detail, index) => (
          <li
            key={`experience-detail-${index}`}
            className="text-gray-600 text-[24px] [&>strong]:font-bold [&>strong]:text-blue-600"
            dangerouslySetInnerHTML={{ __html: detail }}
          />
        ))}
      </ul>
    </div>
  );
};

const About = () => {
  const [selectedJob, setSelectedJob] = useState(experiences[0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      className="py-20 bg-white relative overflow-hidden"
      id="experience"
    >
      {/* Background subtle gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-teal-50/30 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-50/30 to-pink-50/30 animate-pulse animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative">
        <motion.div initial="hidden" whileInView="visible" className="relative">
          <p className="text-lg text-blue-600 text-center ">
            Years of Proven Excellence
          </p>
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
            Professional Experience
          </h2>
        </motion.div>

        <div className="relative md:p-10 flex flex-col items-center sm:flex-row sm:items-start sm:justify-center gap-10">
          <div className="flex flex-col items-center justify-center z-10">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
                onClick={() => setSelectedJob(experience)}
                isActive={selectedJob === experience}
                isMobile={isMobile}
              />
            ))}
          </div>

          <div className="flex justify-end z-10 sm:block hidden">
            <ExperienceDetails experience={selectedJob} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
