import { BlogPosts } from "app/components/posts";
import ParticlesBackground from "app/components/ParticlesBackground";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <div className="relative">
      <ParticlesBackground />
      <section>
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
          My Blog
        </h1>
        <BlogPosts />
      </section>
    </div>
  );
}
