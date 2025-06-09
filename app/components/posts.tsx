import Link from "next/link";
import { formatDate, getBlogPosts } from "app/blog/utils";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div data-oid="8u4fzpq">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
            data-oid="xjyp_dv"
          >
            <div
              className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2"
              data-oid="hwn3ixm"
            >
              <p
                className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums"
                data-oid="l8bb9kk"
              >
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p
                className="text-neutral-900 dark:text-neutral-100 tracking-tight"
                data-oid="80c5fx2"
              >
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
