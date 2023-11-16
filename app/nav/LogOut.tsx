'use client';

import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function LogOut () {
    return (
      <li>
        <Link
          href='/api/auth/signout'
          className={buttonVariants({variant: 'default'})}
        >
          Sign Out
        </Link>
      </li>
    )
}