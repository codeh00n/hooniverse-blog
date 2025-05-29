import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";
import React from "react";

function Table({ data }) {
  let headers = data.headers.map((header, index) => (
    <th key={index} data-oid="i9v-t51">
      {header}
    </th>
  ));
  let rows = data.rows.map((row, index) => (
    <tr key={index} data-oid="r.u7554">
      {row.map((cell, cellIndex) => (
        <td key={cellIndex} data-oid="o5z8x2p">
          {cell}
        </td>
      ))}
    </tr>
  ));

  return (
    <table data-oid="t.ynd4o">
      <thead data-oid="nj1d0yn">
        <tr data-oid="tnjvzoa">{headers}</tr>
      </thead>
      <tbody data-oid="xy6395.">{rows}</tbody>
    </table>
  );
}

function CustomLink(props) {
  let href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props} data-oid="yplnoqj">
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} data-oid="1giydw." />;
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      data-oid="7km7kcm"
    />
  );
}

function RoundedImage(props) {
  return (
    <Image
      alt={props.alt}
      className="rounded-lg"
      {...props}
      data-oid="ivqroku"
    />
  );
}

function Code({ children, ...props }) {
  let codeHTML = highlight(children);
  return (
    <code
      dangerouslySetInnerHTML={{ __html: codeHTML }}
      {...props}
      data-oid="te6oyw_"
    />
  );
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level) {
  const Heading = ({ children }) => {
    let slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],

      children,
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
};

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
      data-oid="w37pu:g"
    />
  );
}
