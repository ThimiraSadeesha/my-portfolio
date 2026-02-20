/**
 * GitHub Projects Curation Config
 *
 * ONLY repos listed here appear on the /projects page.
 * To add a repo: add an entry with the exact GitHub repo name as the key.
 * To remove a repo: delete or comment out the entry.
 *
 * Override fields:
 *   description – replaces the GitHub description
 *   liveUrl     – adds a "Live Demo" button
 *   featured    – pins the card to the top
 */

export type ProjectOverride = {
    description?: string;
    liveUrl?: string;
    featured?: boolean;
};

// Edit this list to control what shows on /projects ↓
export const ALLOWED_REPOS: Record<string, ProjectOverride> = {
    "zent-app": {
        liveUrl: "https://zent.lumiraq.com",
        featured: true,
    },
    "Accident-Detection-Mobile-App": {
        featured: true,
    },
    "Accident-Detection-System-API": {},
    "LaywerPlus_System": {},
    "Newspaper-Distribution-Mobile-App": {},
    "repliq-db-cli": {
        liveUrl: "https://www.npmjs.com/package/repliq-db",
    },
    "lumilogger": {
        liveUrl: "https://www.npmjs.com/package/lumilogger",
    },
    "nodejs-k8s": {},
    "postgres-replication-docker": {},
    "nest-api-ci-cd-pipeline": {},
};

export const GITHUB_USERNAME = "ThimiraSadeesha";
