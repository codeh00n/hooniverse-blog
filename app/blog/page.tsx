import { BlogPosts } from "app/components/posts";
import ParticlesBackground from "app/components/ParticlesBackground";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <div className="relative" data-oid="tb9m5sc">
      <ParticlesBackground data-oid=":oizbux" />
      <section data-oid="g-6.vro">
        <h1
          className="font-semibold text-2xl mb-8 tracking-tighter"
          data-oid="s71c.lj"
        >
          My Blog
        </h1>
        <BlogPosts data-oid="3fkqpbr" />
      </section>
    </div>
  );
}
