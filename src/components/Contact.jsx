import React from "react";
import { InlineWidget } from "react-calendly";

function Contact() {
  return (
    <section
      className="relative min-h-screen bg-gradient-to-br from-indigo-950 via-blue-950 to-slate-950"
      id="contact"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 w-96 h-96 bg-cyan-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute left-20 bottom-20 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute left-40 top-40 w-96 h-96 bg-indigo-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>

      <div className="relative z-10 w-full px-4 pt-10">
        <div className="text-center mb-16">
          <p className="text-cyan-300 font-semibold mb-2">GET IN TOUCH</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-200 via-blue-200 to-cyan-200 bg-clip-text text-transparent">
              Schedule a Consultation
            </span>
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 md:px-8">
          {/* Calendly Column - 8 spaces */}
          <div className="lg:col-span-8 w-full">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/10 h-full w-full">
              {/* Meeting Info */}
              <div className="mb-8">
                <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
                  <div className="flex items-center gap-2 text-cyan-100/80">
                    <svg
                      className="w-5 h-5 text-cyan-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>30 Minutes</span>
                  </div>
                  <div className="flex items-center gap-2 text-cyan-100/80">
                    <svg
                      className="w-5 h-5 text-cyan-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Virtual Meeting</span>
                  </div>
                  <div className="flex items-center gap-2 text-cyan-100/80">
                    <svg
                      className="w-5 h-5 text-cyan-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Free Consultation</span>
                  </div>
                </div>
              </div>

              {/* Calendly Widget */}
              <div className="rounded-xl overflow-hidden bg-white">
                <InlineWidget
                  url="https://calendly.com/abesamisreign"
                  styles={{
                    height: "700px",
                    width: "100%",
                  }}
                  prefill={{
                    email: "",
                    firstName: "",
                    lastName: "",
                    name: "",
                  }}
                  pageSettings={{
                    backgroundColor: "ffffff",
                    hideEventTypeDetails: false,
                    hideLandingPageDetails: false,
                    primaryColor: "3b82f6",
                    textColor: "374151",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Direct Contact Column - 4 spaces */}
          <div className="lg:col-span-4 w-full">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/10 h-full w-full">
              <div className="flex flex-col justify-center h-full space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
                    Direct Contact
                  </h3>
                  <p className="text-cyan-100/80 mb-8">
                    Prefer to reach out directly? Connect with me through any of
                    these platforms.
                  </p>
                </div>

                <div className="flex flex-col space-y-4">
                  {/* Email Button */}
                  <a
                    href="mailto:abesamisreign@gmail.com?subject=Business Inquiry&body=Hi Cristel,%0D%0A%0D%0AI'm interested in discussing how you can help with my business operations.%0D%0A%0D%0ABest regards,"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-100 rounded-xl hover:from-cyan-500/20 hover:to-blue-500/20 transition-all duration-300 border border-white/10 hover:border-cyan-400/30 shadow-lg hover:shadow-cyan-500/25"
                  >
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 blur-xl transition-all duration-300"></div>
                    <svg
                      className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="font-medium group-hover:text-cyan-300 transition-colors duration-300">
                      abesamisreign@gmail.com
                    </span>
                    <svg
                      className="w-5 h-5 text-cyan-400/70 transform transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </a>

                  {/* LinkedIn Button */}
                  <a
                    href="https://www.linkedin.com/in/cristel-reign-abesamis/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-100 rounded-xl hover:from-cyan-500/20 hover:to-blue-500/20 transition-all duration-300 border border-white/10 hover:border-cyan-400/30 shadow-lg hover:shadow-cyan-500/25"
                  >
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 blur-xl transition-all duration-300"></div>
                    <svg
                      className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                    </svg>
                    <span className="font-medium group-hover:text-cyan-300 transition-colors duration-300">
                      LinkedIn
                    </span>
                    <svg
                      className="w-5 h-5 text-cyan-400/70 transform transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
