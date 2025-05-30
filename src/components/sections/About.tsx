import { RevealOnScroll } from "../RevealOnScroll";
export const About = () => {
    const Fullstack = [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Express",
        "MongoDB",
        "PostgreSQL",
        "Git",
        "Firebase",
    ];

    const Blockchain = [
        "Solidity",
        "Ethereum",
        "Smart Contracts",
        "Web3.js",
        "Ethers.js",
        "Hardhat",
        "Truffle",
        "Ganache",
        "IPFS",
        "Solana",
        "Rust",
        "Anchor",
        
    ];

    const Devops = [
        "Docker",
        "Kubernetes",
        "CI/CD",
        "Git",
        "GitHub Actions",
        "Terraform",
        "OCI",
        "AWS",
        "GCP",
        
    ];
    return (
        <section 
            id="about"
            className="min-h-screen flex item-center justify-center py-20"
        >
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-l text-gray-300 mb-6">
                        A guy who loves innovations and technology and always eager to learn new things.
                        <br />  <br /> 
                        Curently Exploring Blockchain and Web3. 
                        
                    </p>

                    <div className="grid grid-cols-l md:grid-cols-2 gap-4">
                        <div className="rounded-xl p-3 hover:-translate-y-1 transition-all ">
                            <h3 className="text-xl font-bold mb-4">Fullstack</h3>
                            <div className="flex flex-wrap gap-2"> 
                                {Fullstack.map((tech)=> {
                                    return (
                                        <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0,2)] transistion ">{tech}</span>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="rounded-xl p-3 hover:-translate-y-1 transition-all ">
                            <h3 className="text-xl font-bold mb-4">Blockchain</h3>
                            <div className="flex flex-wrap gap-2"> 
                                {Blockchain.map((tech)=> {
                                    return (
                                        <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0,2)] transistion-all">{tech}</span>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="rounded-xl p-3 hover:-translate-y-1 transition-all ">
                            <h3 className="text-xl font-bold mb-4">Devops</h3>
                            <div className="flex flex-wrap gap-2"> 
                                {Devops.map((tech)=> {
                                    return (
                                        <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0,2)] transistion-all">{tech}</span>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* <div className="grid grid-cols-1 gap-2 md:grid-cols-2 mt-8">*/}
                <div className="grid grid-cols-1 gap-2 md:grid-cols-1 mt-8"> 
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-1 transition-all">
                        <h3 className=" text-xl font-bold mb-4"> Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2"> 
                            <li>
                                <strong>B.E in Computer Science and Engineering</strong> - Anand Institute Of Higher Technology (2022-2026)
                            </li>
                            {/* <li>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </li> */}
                        </ul>
                    </div>
                    {/* <div className="p-6 rounded-xl border-white/10 border hover:-translate-1 transition-all">
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
                    </div> */}
                </div>
            </div>
            </RevealOnScroll>
        </section>
    )
} 