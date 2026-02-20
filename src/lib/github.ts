import {
    ALLOWED_REPOS,
    GITHUB_USERNAME,
    type ProjectOverride,
} from "@/data/github-projects-config";

export type GitHubRepo = {
    id: number;
    name: string;
    full_name: string;
    html_url: string;
    description: string | null;
    homepage: string | null;
    language: string | null;
    stargazers_count: number;
    forks_count: number;
    topics: string[];
    updated_at: string;
    fork: boolean;
};

export type CuratedProject = GitHubRepo & {
    override: ProjectOverride;
};

export async function fetchCuratedProjects(): Promise<CuratedProject[]> {
    const headers: HeadersInit = {
        Accept: "application/vnd.github+json",
    };

    // Add auth token if available (avoids rate-limiting in CI / Vercel)
    if (process.env.GITHUB_TOKEN) {
        headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
        { headers },
    );

    if (!res.ok) {
        console.error(`GitHub API error: ${res.status} ${res.statusText}`);
        return [];
    }

    const repos: GitHubRepo[] = await res.json();

    // Filter to only allowed repos, merge overrides, sort featured first
    const curated = repos
        .filter((repo) => !repo.fork && ALLOWED_REPOS[repo.name] !== undefined)
        .map((repo) => ({
            ...repo,
            override: ALLOWED_REPOS[repo.name],
        }))
        .sort((a, b) => {
            // featured repos come first, then by updated_at desc
            if (a.override.featured && !b.override.featured) return -1;
            if (!a.override.featured && b.override.featured) return 1;
            return (
                new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
            );
        });

    return curated;
}
