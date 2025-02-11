import React from "react";

const testimonials = [
  {
    name: "Alaiza Dela Roza",
    role: "OLFU SHS Faculty",
    image: "image/testimonial-1.jpg",
    content:
      "Streamlined our scheduling and email management, making my daily tasks more efficient. Its automation features have significantly reduced my workload and saved valuable time.",
  },
  {
    name: "Joshua Magnase",
    role: "Software Developer",
    image: "image/testimonial-2.jpg",
    content:
      "Boosts productivity by managing my schedule, filtering emails, and sending reminders. Smart scheduling and automation save me 10+ hours weekly.",
  },
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-20 bg-gradient-to-br from-indigo-950 via-blue-950 to-slate-950"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 w-96 h-96 bg-cyan-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute left-20 bottom-20 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute left-40 top-40 w-96 h-96 bg-indigo-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-cyan-300 font-semibold mb-2">TESTIMONIALS</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-200 via-blue-200 to-cyan-200 bg-clip-text text-transparent">
              What Clients Say
            </span>
          </h2>
          <p className="text-cyan-100/80 max-w-2xl mx-auto">
            Hear from executives and teams who have transformed their operations
            with our virtual assistant services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/10 transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-cyan-400/20"
                />
                <div>
                  <h3 className="text-white font-semibold">
                    {testimonial.name}
                  </h3>
                  <p className="text-cyan-200/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="mb-6">
                <svg
                  className="w-8 h-8 text-cyan-500/20 mb-4"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-cyan-100/80 leading-relaxed">
                  {testimonial.content}
                </p>
              </div>
              <div className="flex justify-end">
                <svg
                  className="w-8 h-8 text-cyan-500/20"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M22.648 28c4.896-3.456 8.352-9.12 8.352-15.36 0-5.088-3.072-8.064-6.624-8.064-3.36 0-5.856 2.688-5.856 5.856 0 3.168 2.208 5.472 5.088 5.472.576 0 1.344-.096 1.536-.192-.48 3.264-3.552 7.104-6.624 9.024L22.648 28zm-16.512 0c4.8-3.456 8.256-9.12 8.256-15.36 0-5.088-3.072-8.064-6.624-8.064-3.264 0-5.856 2.688-5.856 5.856 0 3.168 2.304 5.472 5.184 5.472.576 0 1.248-.096 1.44-.192-.48 3.264-3.456 7.104-6.528 9.024L6.136 28z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
