
export const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
        <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leadindg-right">Hello , This is Dinesh</h1>
            <p className=" text-gray-400 text-lg mb-8 max-w-lg max-auto">
                20-year-old student and self-taught programmer, 
                learning JavaScript and Python to build impactful 
                solutions. Optimist and tech enthusiast.
            </p>
            <div className="flex justify-center space-x-4">
                <a href="#projects " className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]" >
                    View Projects
                </a>
                <a href="#contact " className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:bg-blue-500/10" >
                    Contact Me
                </a>
            </div>
        </div>
    </section>
  );
}