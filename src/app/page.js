import React from "react";

import BlogSummaryCard from "@/components/BlogSummaryCard";

import styles from "./homepage.module.css";
import { getBlogPostList } from "@/helpers/file-helpers";
import { BLOG_TITLE } from "@/constants";

export const metadata = {
  title: {
    default: BLOG_TITLE,
  },
  description: "A wonderful blog about JavaScript"
};

async function Home() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>
      {(await getBlogPostList()).map((post, index) => {
        return (
          <BlogSummaryCard
            key={index}
            slug={post.slug}
            title={post.title}
            abstract={post.abstract}
            publishedOn={post.publishedOn}
          />
        );
      })}
    </div>
  );
}

export default Home;
