/* eslint-disable @next/next/no-img-element */
// pages/index.tsx
import { EntrySkeletonType, createClient } from "contentful";
import { InferGetStaticPropsType } from "next";
import { motion } from "framer-motion";
import { PostCard } from "@/components/PostCard";
import { HeroSection } from "@/components";
import { PostEntry } from "@/types";


const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

export const getStaticProps = async () => {
  const entries = await client.getEntries<PostEntry[] & EntrySkeletonType>({
    content_type: "codeBeers",
  });

  return {
    props: {
      posts: entries.items,
    },
    revalidate: 1,
  };
};

const HomePage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(posts)
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Blog Entries Section */}
      <section className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts.map((entry, index) => (
            <PostCard key={entry.sys.id} entry={entry as unknown as PostEntry} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
