import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section data-oid="0le2qxr">
      <h1
        className="font-semibold text-2xl mb-8 tracking-tighter"
        data-oid="bv5nr2t"
      >
        My Blog
      </h1>
      <BlogPosts data-oid="fe5ogab" />
    </section>
  );
}
