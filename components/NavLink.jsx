"use client";
import Link from "next/link";
import {
  getNavLinkClasses,
  getNavLinkContainerClasses,
} from "@/lib/navbarStyles";

const NavLink = ({ href, label, isActive }) => {
  return (
    <li className={getNavLinkContainerClasses(isActive)}>
      <Link href={href} className={getNavLinkClasses(isActive)}>
        {label}
      </Link>
    </li>
  );
};

export default NavLink;
