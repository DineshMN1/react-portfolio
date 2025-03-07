export const About = () => {
    const frontendSkills = [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
    ];

    const backendSkills = [
        "Node.js",
        "python",
        "Express.js",
        "AWS",
        "MongoDB",
        "PostgreSQL",
    ];
    return (
        <section 
            id="about"
            className="min-h-screen flex item-center justify-center py-20"
        >
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        I am a 20-year-old student and self-taught programmer, 
                        learning JavaScript and Python to build impactful solutions. 
                        
                    </p>

                    <div className="grid grid-cols-l md:grid-cols-2 gap-4">
                        <div className="rounded-xl p-3 hover:-translate-y-1 transition-all ">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2"> 
                                {frontendSkills.map((tech)=> {
                                    return (
                                        <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0,2)] transistion ">{tech}</span>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="rounded-xl p-3 hover:-translate-y-1 transition-all ">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2"> 
                                {backendSkills.map((tech)=> {
                                    return (
                                        <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0,2)] transistion ">{tech}</span>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                
                
                <div className="grid grid-cols-1 md:grid-cols-2 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-1 transition-all">
                        <h3 className=" text-xl font-bold mb-4"> Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2"> 
                            <li>
                                <strong>B.E in Compputer Science</strong> - ANNA University (2022-2026)
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-1 transition-all">
                        <h3 className=" text-xl font-bold mb-4"> Work Experiencce</h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold"> Work at XYZ (MMM 2025 - Present)</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione repellendus .
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold"> Intern at XYZ (MMM 2025 - Present )</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione repellendus .
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 