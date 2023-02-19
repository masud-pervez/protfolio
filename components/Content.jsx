import React from "react";
import Footer from "./Footer";

function Content({ children }) {
  return (
    <div className="bg-slate-100 mt-4 mb-20 rounded-md">
      <div className="px-10 py-4">{children}</div>
      <Footer />
    </div>
  );
}

export default Content;
