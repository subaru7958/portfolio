import { Code2, Lightbulb, Rocket, Users, Brain, BarChart3 } from "lucide-react";

const highlights = [
    {
        icon: Brain,
        title: "Problem Solving",
        description: "Ability to analyze complex issues and develop effective solutions.",
    },
    {
        icon: BarChart3,
        title: "Analytical Thinking",
        description: "Skilled at interpreting data and making data-driven decisions.",
    },
    {
        icon: Code2,
        title: "Adaptability",
        description: "Flexibility to quickly adjust to technological changes.",
    },
    {
        icon: Rocket,
        title: "Teamwork",
        description: "Effective collaboration to achieve common goals.",
    },
];

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                                About Me
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            Building data-driven solutions,
                            <span className="font-serif italic font-normal text-white">
                                {" "}
                                that scale.
                            </span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                I hold a <strong>Bachelor's degree in Computer Science</strong> (2022–2025) from the Higher Institute of Multimedia Arts of Manouba (ISAMM), and I am currently pursuing a <strong>Research Master's degree in Data Science and Information Retrieval</strong> (2025–Present) at the same institute.
                            </p>
                            <p>
                                My technical background combines Data Science and Full-Stack development. I work mainly with <strong>Python</strong> for data processing and Information Retrieval systems, and with modern web technologies including <strong>React.js, Node.js, Spring Boot</strong>, and REST API development. I have experience working with relational and NoSQL databases such as <strong>MySQL, Oracle, and MongoDB</strong>.
                            </p>
                            <p>
                                Through academic and freelance projects, I focus on building data-driven applications, scalable backend systems, and modern web platforms that solve real-world problems.
                            </p>
                            <p>
                                I am fluent in <strong>Arabic (Native)</strong> and <strong>French (Bilingual)</strong>, with a working proficiency in English. Passionate about continuous learning and problem solving, I am always motivated to explore new technologies and take on challenging technical projects.
                            </p>
                        </div>

                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                "My mission is to create smart digital solutions powered by data and modern technologies, focusing on performance, scalability, and long-term maintainability."
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Hilights */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <div
                                key={idx}
                                className="glass p-6 rounded-2xl animate-fade-in"
                                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};