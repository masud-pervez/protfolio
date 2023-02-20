import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import React from "react";

export default function _error() {
  return (
    <div className="container">
      <TopBar />
      <div className="min-h-full d-flex justify-center items-center">
        <img src="/error.gif" />
      </div>
      <hr />
      <Footer />
    </div>
  );
}
