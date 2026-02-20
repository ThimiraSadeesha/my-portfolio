import type { GetStaticProps, InferGetStaticPropsType } from "next";

import { NextSeo } from "next-seo";

import GithubProjectCard from "@/components/projects/github-project-card";
import { fetchCuratedProjects, type CuratedProject } from "@/lib/github";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import { GITHUB_USERNAME } from "@/data/github-projects-config";

type Props = {
  projects: CuratedProject[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects = await fetchCuratedProjects();

  return {
    props: { projects },
    // Re-generate page in the background at most once per hour
    revalidate: 3600,
  };
};

export default function Projects({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <NextSeo
        title={siteMetadata.title}
        description="Dive into a collection of my projects and discover the breadth of my experience as a Associate Software Engineer (Fullstack). From crafting user-friendly mobile apps to building responsive web interfaces, explore the innovative solutions I've developed. Get a taste of the depth and diversity I bring to the table"
        canonical={`${siteMetadata.siteUrl}/projects`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/projects`,
          title:
            "Discover Projects by Thimira Sadeesha - Fullstack Software Engineer",
          description:
            "Explore a showcase of projects crafted by Thimira Sadeesha," +
            "Witness the skills of a Associate Software Engineer (Fullstack) (Mobile and Web) in action, from crafting user-friendly mobile apps to building responsive web interfaces.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Thimira Sadeesha - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Projects, Portfolio, Fullstack Software Engineer, Flutter, Node, Nest, Angular, JavaScript, HTML, CSS, Web Applications, Mobile Apps",
          },
        ]}
      />
      <section className="mx-auto mb-40 mt-6 w-full px-6 sm:mt-12 sm:px-14 md:px-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-semibold text-foreground md:text-4xl">
            Projects
          </h1>
          <div className="my-2">
            <span className="text-sm text-muted-foreground">
              Here are some of the projects I&apos;d like to share
            </span>
          </div>

          {projects.length > 0 ? (
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <GithubProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <p className="mt-10 text-muted-foreground">
              Projects could not be loaded. Visit my{" "}
              <a
                href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
                target="_blank"
                className="text-accent underline underline-offset-2"
              >
                GitHub
              </a>{" "}
              directly.
            </p>
          )}

          <div className="mx-auto mt-16 max-w-5xl text-center text-foreground md:mt-28">
            <span className="text-xl font-bold md:text-2xl">
              I am currently building new projects and learning mobile and web
              development to expand my skill set beyond my current knowledge.
            </span>
            <p className="mt-10 text-base md:text-xl">
              Visit my github to see all projects{" "}
              <a
                href={`${siteMetadata.github}?tab=repositories`}
                target="_blank"
                className="font-semibold text-accent underline underline-offset-2 hover:text-accent/70"
              >
                Github
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
