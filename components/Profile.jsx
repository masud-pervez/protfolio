import {
  cibFacebookF,
  cibGithub,
  cibInstagram,
  cibLinkedinIn,
  cilCalendar,
  cilCloudDownload,
  cilCommentBubble,
  cilLocationPin,
  cilScreenSmartphone,
} from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import Link from "next/link";
import React from "react";

function Profile() {
  return (
    <div className="md:mt-36 bg-white w-full h-auto sticky top-32 md:rounded-xl md:shadow-md">
      <div className="p-4 relative">
        <div className="md:-mt-32">
          <img
            className="img-fluid w-52 rounded-3xl shadow-xl mx-auto"
            src="/masud.png"
          />
          <h2 className="text-center mt-3">Masud Pervez</h2>
          <p className="text-center">Junior Software Developer</p>
        </div>
        <div className="text-center">
          <ul className="d-flex justify-center p-0">
            <li className="">
              <Link
                target="_blank"
                href="https://www.facebook.com/masud.pervez.31337"
              >
                <div className="mx-2 p-2 bg-slate-100 hover:bg-gradient-to-t from-rose-400 to-rose-500 hover:shadow-sm rounded-md text-slate-50 cursor-pointer">
                  <CIcon icon={cibFacebookF} height={18} />
                </div>
              </Link>
            </li>
            <li className="">
              <Link
                target="_blank"
                href="https://www.instagram.com/masud_pervez_/"
              >
                <div className="mx-2 p-2 bg-slate-100 hover:bg-gradient-to-t from-rose-400 to-rose-500 hover:shadow-sm rounded-md text-slate-50 cursor-pointer">
                  <CIcon icon={cibInstagram} height={18} />
                </div>
              </Link>
            </li>
            <li className="">
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/masud-pervez-71792b223/"
              >
                <div className="mx-2 p-2 bg-slate-100 hover:bg-gradient-to-t from-rose-400 to-rose-500 hover:shadow-sm rounded-md text-slate-50 cursor-pointer">
                  <CIcon icon={cibLinkedinIn} height={18} />
                </div>
              </Link>
            </li>
            <li className="">
              <Link target="_blank" href="https://github.com/masud-pervez">
                <div className="mx-2 p-2 bg-slate-100 hover:bg-gradient-to-t from-rose-400 to-rose-500 hover:shadow-sm rounded-md text-slate-50 cursor-pointer">
                  <CIcon icon={cibGithub} height={18} />
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="bg-slate-100 my-3 p-4 rounded-md">
          <ul className="p-0">
            <li className="mb-2">
              <div className="d-flex items-start border-b border-spacing-2 pb-2 border-slate-300 overflow-clip">
                <div className="bg-white text-indigo-600 hover:text-rose-50 hover:bg-gradient-to-t from-rose-400 to-rose-500  p-2 me-3 rounded-md shadow-sm">
                  <CIcon icon={cilScreenSmartphone} height={25} />
                </div>
                <div>
                  <span>Phone</span>
                  <p className="m-0 text-slate-600">+8801783-307711</p>
                </div>
              </div>
            </li>
            <li className="mb-2">
              <div className="d-flex items-start border-b border-spacing-2 pb-2 border-slate-300 overflow-clip">
                <div className="bg-white text-sky-600 hover:text-rose-50 hover:bg-gradient-to-t from-rose-400 to-rose-500 p-2 me-3 rounded-md shadow-sm">
                  <CIcon icon={cilCommentBubble} height={25} />
                </div>
                <div>
                  <span>Email</span>
                  <p className="text-slate-600 m-0">masudpervez431@gma.com</p>
                </div>
              </div>
            </li>
            <li className="mb-2">
              <div className="d-flex items-start border-b border-spacing-2 pb-2 border-slate-300 overflow-clip">
                <div className="bg-white text-rose-600 hover:text-rose-50 hover:bg-gradient-to-t from-rose-400 to-rose-500 p-2 me-3 rounded-md shadow-sm">
                  <CIcon icon={cilLocationPin} height={25} />
                </div>
                <div>
                  <span>Location</span>
                  <p className="text-slate-600 m-0">Jessore,Bangladesh</p>
                </div>
              </div>
            </li>
            <li className="mb-0">
              <div className="d-flex items-start overflow-clip">
                <div className="bg-white text-purple-600 hover:text-rose-50 hover:bg-gradient-to-t from-rose-400 to-rose-500 p-2 me-3 rounded-md shadow-sm">
                  <CIcon icon={cilCalendar} height={25} />
                </div>
                <div>
                  <span>Birthday</span>
                  <p className="text-slate-600 m-0">Feb 06,2002</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <button className="md:px-5 px-3 py-3 bg-rose-400 hover:bg-gradient-to-r from-rose-400 to-rose-500 text-slate-50 rounded-2xl text-xl focus:outline-0 ">
            <div className="d-flex justify-around items-center">
              <CIcon className="d-inline" icon={cilCloudDownload} height={25} />{" "}
              <span className="md:block hidden mx-2">Download CV</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
