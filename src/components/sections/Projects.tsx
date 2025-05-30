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
                    <h3 className="text-xl font-bold mb-2"> Blog site </h3>
                        <p className="text-gray-400 mb-4"> 
                            Blog site build with next js and tailwind css for mdx components.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Next js","Typescript","tailwind css","pnpm", "Postgres"].map((tech, key) => (
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
                            <a href="https://dineshmn.fyi" target="_blank" className=" text-blue-400 hover:text-blue-300 transition-colors "> View Project</a>
                            <a href="https://github.com/DineshMN1/portfolio"className="text-blue-400 hover:text-blue-300 transition-colors">github</a>
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
                        <h3 className="text-xl font-bold mb-4"> Solana Faucet</h3>
                            <p className="text-gray-400 mb-4"> Sonala Faucet is build to get devnet SOL for testing</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Next js","Tailwind css", "TypeScript", "Solana", "Solana Wallet"].map((tech, key) => (
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
                            <a href="https://sol.dineshmn.fyi" target="_blank" className=" text-blue-400 hover:text-blue-300 transition-colors "> View Project</a>
                            <a href="https://github.com/DineshMN1/Solana-Faucet"className="text-blue-400 hover:text-blue-300 transition-colors">github</a>
                        </div>
                        
                    </div>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all">
                    <h3 className="text-xl font-bold mb-4"> Wall-E</h3>
                        <p className="text-gray-400 mb-4"> Autonomous Fleet based robot for Agriculture </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Next js", "Typescript","Tailwind css", "We bots", "Flask", ].map((tech, key) => (
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
                            {/* <a href="#Wall-E" className=" text-blue-400 hover:text-blue-300 transition-colors "> View Project</a> */}
                            <a href="https://github.com/DineshMN1/Wall-E"className="text-blue-400 hover:text-blue-300 transition-colors">github</a>
                        </div>
                        
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all">
                    <h3 className="text-xl font-bold mb-4"> OLLAMA Custom model </h3>
                        <p className="text-gray-400 mb-4"> Create custom AI models with LLaMA and Ollama. Easily define unique AI personas and behaviors using a model system file. </p>
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
                            {/* <a href="#proj1" className=" text-blue-400 hover:text-blue-300 transition-colors "> View Project</a> */}
                            <a href="https://github.com/DineshMN1/ollama-model-create"className="text-blue-400 hover:text-blue-300 transition-colors">github</a>
                        </div>
                        
                    </div>

                </div>
                

            </div>
            </RevealOnScroll>

        </section>
    )
}