import { BlogPosts } from "app/components/posts";
import ParticlesBackground from "app/components/ParticlesBackground";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <div className="relative" data-oid="8uvx7nz">
      <ParticlesBackground data-oid="wudcebj" />
      <section data-oid="1qu5n7:">
        <h1
          className="font-semibold text-2xl mb-8 tracking-tighter"
          data-oid="wcvvc4v"
        >
          My Blog
        </h1>
        <BlogPosts data-oid="hjgn2y7" />
      </section>
    </div>
  );
}
