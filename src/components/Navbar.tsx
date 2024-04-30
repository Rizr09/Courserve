import React from "react";
import Link from "next/link";
import Button from "./Button";
import NavbarLink from "./NavbarLink";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <>
      <div className="bg-white shadow-md flex justify-between px-[42px] py-5 items-center">
        <div className="flex gap-10 items-center">
          <Link
            className="text-[42px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#193E2D] to-[#F6E5AF]"
            href="/"
          >
            Courserve
          </Link>
          <ul className="flex gap-10">
            <li><NavbarLink href="/dashboard">Beranda</NavbarLink></li>
            <li><NavbarLink href="/dashboard">Kursus</NavbarLink></li>
            <li><NavbarLink href="/dashboard">Kontak</NavbarLink></li>
          </ul>
        </div>
        <SearchBar />
        <div className="flex gap-10 items-center">
          <div className="flex gap-1 items-center">
            <Button className="px-6 bg-[#E4E4E4] text-[#000E23] text-lg rounded-[10px]">
              Masuk
            </Button>
            <Button className="px-6 bg-[#536F3E] text-[#E4E4E4] text-lg rounded-[10px]">
              Daftar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
