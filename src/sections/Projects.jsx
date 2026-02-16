import { ArrowUpRight, Github, Search, Wallet, ShoppingBag, Smartphone } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import React from "react";

const projectIcons = [Search, Wallet, ShoppingBag, Smartphone];

const projects = [
    {
        title: "Système de Recherche d'Information Biomédicale",
        description:
            "Développement d'un système de recherche d'information appliqué à un corpus biomédical (PubMed). Implémentation d'un index inversé et d'un modèle vectoriel TF-IDF pour le classement des documents. Implémentation du ranking par similarité cosinus. Évaluation du système via Precision@k, Recall@k, Average Precision et MAP. Implémentation du feedback de pertinence avec l'algorithme Rocchio. Étude d'ablation pour analyser l'impact du prétraitement (stopwords, stemming). Génération de visualisations analytiques et rapports d'expérimentation.",
        image: "",
        tags: ["Python", "NLP", "TF-IDF", "Information Retrieval"],
        link: "https://github.com/subaru7958/biomedical-ir-system",
        github: "https://github.com/subaru7958/biomedical-ir-system",
    },
    {
        title: "Solution FinTech BNPL 'Marchéattijari'",
        description:
            "Participation au développement d'une solution Buy Now Pay Later intégrée au produit Attijari Taksit. Développement d'une extension navigateur pour la détection automatique des partenaires e-commerce. Développement d'une plateforme web pour la gestion des demandes clients et l'agrégation de produits partenaires. Développement d'un tableau de bord administratif avec visualisations de données.",
        image: "",
        tags: ["React.js", "Vite", "Spring Boot", "Oracle Database", "FinTech"],
        link: "https://gitlab.com/mehrez1251",
        github: "https://gitlab.com/mehrez1251",
    },
    {
        title: "Mobile E-Commerce App",
        description:
            "Développement d'une application mobile e-commerce sous Android Studio. Implémentation des fonctionnalités de navigation catalogue et interaction utilisateur.",
        image: "",
        tags: ["Java", "Android Studio", "Mobile"],
        link: "#",
        github: "#",
    },
    {
        title: "Plateforme E-commerce Web",
        description:
            "Développement d'un site e-commerce responsive. Implémentation de la gestion des produits, clients et transactions. Conception et intégration d'une base de données relationnelle.",
        image: "",
        tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"],
        link: "#",
        github: "#",
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            {/* Bg glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Featured Work
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Projects that
                        <span className="font-serif italic font-normal text-white">
                            {" "}
                            make an impact.
                        </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A selection of my recent work, from complex web applications to
                        innovative tools that solve real-world problems.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                            style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                        >
                            {/* Image / Icon */}
                            <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-primary/20 to-highlight/20 flex items-center justify-center">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center">
                                        {React.createElement(projectIcons[idx] || Search, { className: "w-10 h-10 text-primary" })}
                                    </div>
                                )}
                                <div
                                    className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                                />
                                {/* Overlay Links */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a
                                        href={project.link}
                                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                    >
                                        <ArrowUpRight className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={project.github}
                                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <ArrowUpRight
                                        className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                                    />
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span
                                            key={tagIdx}
                                            className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All CTA */}
                <div className="text-center mt-12 animate-fade-in animation-delay-500">
                    <AnimatedBorderButton>
                        View All Projects
                        <ArrowUpRight className="w-5 h-5" />
                    </AnimatedBorderButton>
                </div>
            </div>
        </section>
    );
};