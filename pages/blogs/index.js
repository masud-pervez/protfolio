import Layout from "@/components/Layout";
import React from "react";

export default function Blogs() {
  return (
    <Layout>
      <div className="h-screen">
        <div className="d-flex items-center">
          <h2 className="font-serif text-4xl font-semibold text-slate-600">
            Bolg
          </h2>
          <div className="w-36 h-1 border-b-2 border-rose-400 mx-2"></div>
        </div>
      </div>
    </Layout>
  );
}
