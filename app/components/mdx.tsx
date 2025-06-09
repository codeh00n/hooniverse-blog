import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";
import React from "react";

function Table({ data }) {
  let headers = data.headers.map((header, index) => (
    <th key={index} data-oid="9-nor.-">
      {header}
    </th>
  ));
  let rows = data.rows.map((row, index) => (
    <tr key={index} data-oid="4n52ou8">
      {row.map((cell, cellIndex) => (
        <td key={cellIndex} data-oid="eudh4s6">
          {cell}
        </td>
      ))}
    </tr>
  ));

  return (
    <table data-oid="14vzoq.">
      <thead data-oid="wn_zusg">
        <tr data-oid="la7wdn4">{headers}</tr>
      </thead>
      <tbody data-oid="0e.uohb">{rows}</tbody>
    </table>
  );
}

function CustomLink(props) {
  let href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props} data-oid="82g3_ws">
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} data-oid="8:j_cbt" />;
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      data-oid="tj09lhx"
    />
  );
}

function RoundedImage(props) {
  return (
    <Image
      alt={props.alt}
      className="rounded-lg"
      {...props}
      data-oid="9mzax60"
    />
  );
}

function Code({ children, ...props }) {
  let codeHTML = highlight(children);
  return (
    <code
      dangerouslySetInnerHTML={{ __html: codeHTML }}
      {...props}
      data-oid="njjxtzl"
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
      data-oid="88daqm9"
    />
  );
}
