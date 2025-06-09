import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section data-oid="n2bow2-">
      <h1
        className="font-semibold text-2xl mb-8 tracking-tighter"
        data-oid="wwa4tip"
      >
        My Blog
      </h1>
      <BlogPosts data-oid="e_0-wtc" />
    </section>
  );
}
