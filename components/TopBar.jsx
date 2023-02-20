import React from "react";
import CIcon from "@coreui/icons-react";
import Link from "next/link";
import { cilJustifyCenter, cilMoon, cilSun } from "@coreui/icons";

function TopBar() {
  return (
    <div className="bg-slate-100 py-2 shadow-sm">
      <div className="md:container mx-auto d-flex justify-between items-center">
        <Link href="/">
          <img src="/logo.png" className="img-fluid w-24 bg-cover" alt="" />
        </Link>
        <div className="d-flex">
          <div className="p-2 m-0 rounded-full shadow-md cursor-pointer font-bold bg-slate-50 hover:bg-gradient-to-t from-rose-400 to-rose-500 text-slate-700 hover:text-slate-50 ">
            <CIcon className="" icon={cilSun} height={20} />
          </div>
          {false && (
            <div className="ms-2 p-2 m-0 rounded-md cursor-pointer font-bold text-slate-50  hover:bg-gradient-to-t from-rose-400 to-rose-500 bg-transparent ring-1 ring-slate-50 hover:ring-0 ">
              <CIcon className="" icon={cilJustifyCenter} height={20} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopBar;
