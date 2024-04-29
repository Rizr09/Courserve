import Link from "next/link";
import React, { use } from "react";

interface Props {
    href: string;
    children: string; 
}

const NavbarLink = ({href, children} : Props) => {
    return (
        <Link href={href} className="font-bold text-[18px] text-[#BBBBBB]">
            {children}
        </Link>
    )
}

export default NavbarLink