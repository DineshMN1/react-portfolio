import { RevealOnScroll } from "../RevealOnScroll";
import { FlipWords } from "../FlipWords";

export default function Home() {
  const words = ["Student", "Self taught dev", "Blockchain dev", "Tech Enthusiast"];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <RevealOnScroll>
      <div className="text-center z-10 px-4">
        {/* FlipWords Animation */}
        <h1 className="text-5xl md:text-5xl font-bold  bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Hi! I'm Dinesh 
        </h1>
        <div className="text-4xl font-bold mt-3 mb-3 text-gray-100">
          <FlipWords words={words} />
        </div>

        {/* Description */}
        <p className="text-gray-400 text-lg mb-8 max-w-lg max-auto">
          20-year-old student and self-taught programmer, learning Python , JavaScript and Rust to build impactful solutions. 
          Optimist and tech enthusiast.
        </p>

        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          <a 
            href="#projects"
            className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(59,130,246,0.4)]"
          >
            View Projects
          </a>
          <a 
            href="#contact"
            className="border border-blue-500/00 text-blue-500 py-3 px-6 rounded font-medium transition hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(59,130,246,0.4)] hover:bg-blue-500/10"
          >
            Contact Me
          </a>
        </div>
      </div></RevealOnScroll>
    </section>
  );
}