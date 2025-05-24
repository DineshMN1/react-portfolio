import { RevealOnScroll } from "../RevealOnScroll"
export const Project = () =>{
    return(
        <section 
            id="projects" 
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4 ">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2"> Project-1 </h3>
                        <p className="text-gray-400 mb-4"> 
                            Lorem ipsum dolor sit amet,ipsum dolor sit amet
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React","Node","Express","tailwind"].map((tech, key) => (
                                <span 
                                    key={key} 
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                        hover:shadow-[0_2px_8px_rgba(59,130,224,0,2)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center gap-6 ">
                            <a href="#proj1" className=" text-blue-400 hover:text-blue-300 transition-colors "> View Project</a>
                            <a href="#github/proj1"className="text-blue-400 hover:text-blue-300 transition-colors">github</a>
                        </div>
                        
                    </div>
                    <div
                        className="
                            glass p-6 rounded-xl border border-white/10 
                            hover:-translate-y-1 hover:border-blue-500/30 
                            hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] 
                            transition-all
                            "
                        >
                        <h3 className="text-xl font-bold mb-4"> Project-2 </h3>
                            <p className="text-gray-400 mb-4"> Lorem ipsum dolor sit amet,ipsum dolor sit amet </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Next","Express", "Docker", "Nginx"].map((tech, key) => (
                                    <span 
                                        key={key} 
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                            hover:shadow-[0_2px_8px_rgba(59,130,224,0,2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                        <div className="flex items-center gap-6 ">
                            <a href="#proj1" className=" text-blue-400 hover:text-blue-300 transition-colors "> View Project</a>
                            <a href="#github/proj1"className="text-blue-400 hover:text-blue-300 transition-colors">github</a>
                        </div>
                        
                    </div>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all">
                    <h3 className="text-xl font-bold mb-4"> Project-3 </h3>
                        <p className="text-gray-400 mb-4"> Lorem ipsum dolor sit amet,ipsum dolor sit amet </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["OCI", "Docker",].map((tech, key) => (
                                <span 
                                    key={key} 
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0,2)] transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center gap-6 ">
                            <a href="#proj1" className=" text-blue-400 hover:text-blue-300 transition-colors "> View Project</a>
                            <a href="#github/proj1"className="text-blue-400 hover:text-blue-300 transition-colors">github</a>
                        </div>
                        
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all">
                    <h3 className="text-xl font-bold mb-4"> Project-4 </h3>
                        <p className="text-gray-400 mb-4"> Lorem ipsum dolor sit amet,ipsum dolor sit amet </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Python","Assembly"].map((tech, key) => (
                                <span 
                                    key={key} 
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                        hover:shadow-[0_2px_8px_rgba(59,130,224,0,2)] transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center gap-6 ">
                            <a href="#proj1" className=" text-blue-400 hover:text-blue-300 transition-colors "> View Project</a>
                            <a href="#github/proj1"className="text-blue-400 hover:text-blue-300 transition-colors">github</a>
                        </div>
                        
                    </div>

                </div>
                

            </div>
            </RevealOnScroll>

        </section>
    )
}