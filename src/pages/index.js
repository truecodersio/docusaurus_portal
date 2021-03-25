import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "Learn From Docs",
    imageUrl: "img/undraw_docusaurus_mountain.svg",
    description: (
      <>
        Assess lecture documentation, videos, exercises and quizzes to help
        learn and cement your coding skills.
      </>
    ),
    linkPrompt: "Learn",
    linkUrl: "docs/",
  },
  {
    title: "Schedule 1-on-1's",
    imageUrl: "img/undraw_docusaurus_tree.svg",
    description: (
      <>
        Schedule 1-on-1 time with an instructor to receive the help you need.
        <br />
        Schedule 1-on-1 time with Denise for career guidence and job assistance.
      </>
    ),
    linkPrompt: "Schedule",
    linkUrl: "/one-on-one",
  },
  {
    title: "Contribute Blogs",
    imageUrl: "img/undraw_docusaurus_react.svg",
    description: (
      <>
        Contribute your own content to the TrueCoders Blog for other students,
        instructors, and developers to learn.
      </>
    ),
    linkPrompt: "Write",
    linkUrl: "blog/",
  },
];

function Feature({ imageUrl, title, description, linkPrompt, linkUrl }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      <div className="card p-3">
        {imgUrl && (
          <div className="text--center">
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          </div>
        )}
        <h3>{title}</h3>
        <p>{description}</p>
        <Link
          className={clsx(
            "button button--outline button--secondary button--lg",
            styles.getStarted
          )}
          to={useBaseUrl(linkUrl)}
        >
          {linkPrompt}
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Home`}
      description="Description will go into a meta tag in <head />"
    >
      <main className="homeSection">
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
