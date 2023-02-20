import React from "react";
import Profile from "./Profile";
import Navbar from "./Navbar";
import TopBar from "./TopBar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="bg-indigo-50 min-h-screen">
      <TopBar />
      <div className="md:container mx-auto">
        <div className="row justify-between">
          <div className="col-lg-4">
            <Profile />
          </div>
          <div className="col-lg-8">
            <div className="lg:mt-36">
              <Navbar />
              <div className="w-full">
                <div className="bg-white shadow-md md:mt-2 mb-20 md:rounded-md">
                  <div className="px-6 py-4">{children}</div>
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
