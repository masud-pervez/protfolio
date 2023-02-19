import React from "react";
import Profile from "./Profile";
import Navbar from "./Navbar";
import Content from "./Content";

export default function Layout({ children }) {
  return (
    <div className="bg-slate-800 min-h-screen">
      <div className="md:container mx-auto ">
        <div className="bg-slate-700 py-4 px-2 text-emerald-50">Topbar</div>
        <div className="row">
          <div className="col-md-4">
            <Profile />
          </div>
          <div className="col-md-8">
            <div className="md:mt-36">
              <Navbar />
              <div className="w-full">
                <Content>{children}</Content>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
