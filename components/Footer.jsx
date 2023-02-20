import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="p-2 text-slate-400 mx-3">
      <span> © 2023 All Rights Reserved by</span>
      <span className="float-end">
        <Link href="/">Masud Pervez</Link>
      </span>
    </div>
  );
}

export default Footer;
