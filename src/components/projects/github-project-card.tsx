import { motion } from "framer-motion";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";

import type { CuratedProject } from "@/lib/github";

// Language → accent colour mapping
const LANGUAGE_COLORS: Record<string, string> = {
    TypeScript: "bg-blue-500",
    JavaScript: "bg-yellow-400",
    Dart: "bg-sky-400",
    Python: "bg-green-500",
    Java: "bg-orange-500",
    Go: "bg-cyan-400",
    "C#": "bg-purple-500",
    PHP: "bg-indigo-400",
    Ruby: "bg-red-500",
    CSS: "bg-pink-400",
    Shell: "bg-gray-500",
};

function LanguageDot({ language }: { language: string | null }) {
    if (!language) return null;
    const color = LANGUAGE_COLORS[language] ?? "bg-zinc-400";
    return (
        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className={`h-2.5 w-2.5 rounded-full ${color}`} />
            {language}
        </span>
    );
}

export default function GithubProjectCard({
    project,
}: {
    project: CuratedProject;
}) {
    const description =
        project.override.description ?? project.description ?? "No description.";
    const liveUrl = project.override.liveUrl ?? project.homepage ?? null;

    return (
        <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", duration: 0.5 }}
            className="group flex h-full flex-col overflow-hidden rounded-xl border border-accent/20 bg-background shadow-sm transition-shadow duration-200 hover:shadow-accent/20 hover:shadow-md dark:bg-zinc-800/80"
        >
            {/* Card header */}
            <div className="flex items-start justify-between gap-3 border-b border-accent/10 p-4 sm:p-5">
                <div className="flex min-w-0 flex-col gap-1">
                    {project.override.featured && (
                        <span className="w-max rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                            Featured
                        </span>
                    )}
                    <h3 className="truncate font-semibold text-foreground sm:text-lg">
                        {project.name}
                    </h3>
                </div>
                <div className="flex shrink-0 items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                        <Star className="h-3.5 w-3.5" />
                        {project.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                        <GitFork className="h-3.5 w-3.5" />
                        {project.forks_count}
                    </span>
                </div>
            </div>

            {/* Description */}
            <p className="grow px-4 pb-3 pt-3 text-sm text-muted-foreground sm:px-5">
                {description}
            </p>

            {/* Topics */}
            {project.topics.length > 0 && (
                <div className="flex flex-wrap gap-1.5 px-4 pb-3 sm:px-5">
                    {project.topics.slice(0, 5).map((topic) => (
                        <span
                            key={topic}
                            className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-medium text-accent"
                        >
                            #{topic}
                        </span>
                    ))}
                </div>
            )}

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-accent/10 px-4 py-3 sm:px-5">
                <LanguageDot language={project.language} />

                <div className="flex items-center gap-3">
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs text-accent underline-offset-2 hover:underline"
                        >
                            <ExternalLink className="h-3.5 w-3.5" />
                            Live
                        </a>
                    )}
                    <a
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
                    >
                        <Github className="h-3.5 w-3.5" />
                        Source
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
