import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Navbar() {
  const router = useRouter();
  console.log("router", router.asPath);

  const linkStyle = `mx-1 p-3 bg-slate-50 hover:bg-gradient-to-t from-rose-400 to-rose-500 focus:outline-2 shadow-sm rounded-md hover:text-white text-slate-600 no-underline`;
  const activeStyle = `bg-gradient-to-t from-rose-400 to-rose-500 text-white ring-offset-2 ring-2`;

  return (
    <div className="d-flex justify-end">
      <nav className="bg-white shadow-md py-8 px-4 rounded-md">
        <Link
          href="/"
          className={`${linkStyle} ${router.asPath === "/" && activeStyle}`}
        >
          <span>About</span>
        </Link>
        <Link
          href="/resume"
          className={`${linkStyle} ${
            router.asPath === "/resume" && activeStyle
          }`}
        >
          Resume
        </Link>
        <Link
          href="/works"
          className={`${linkStyle} ${
            router.asPath === "/works" && activeStyle
          }`}
        >
          Works
        </Link>
        <Link
          href="/blogs"
          className={`${linkStyle} ${
            router.asPath === "/blogs" && activeStyle
          }`}
        >
          Blogs
        </Link>
        <Link
          href="/contact"
          className={`${linkStyle} ${
            router.asPath === "/contact" && activeStyle
          }`}
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
