"use client";

import { SearchIcon } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";
import { useSidebarContext } from "../sidebar/sidebar-context";
import { MenuIcon } from "./icons";
import { Notification } from "./notification";
import Quicklinks from "./quicklinks";
import { ThemeToggleSwitch } from "./theme-toggle";
import { UserInfo } from "./user-info";

export function Header() {
  const { toggleSidebar, isMobile } = useSidebarContext();

  return (
    <header className="sticky top-0 z-30 bg-white px-4 py-5 border-b border-stroke shadow-1 dark:border-stroke-dark dark:bg-gray-dark md:px-5 2xl:px-10">

      <div className="flex items-center justify-between">
        <button
          onClick={toggleSidebar}
          className="rounded-lg border px-1.5 py-1 dark:border-stroke-dark dark:bg-[#020D1A] hover:dark:bg-[#FFFFFF1A] lg:hidden"
        >
          <MenuIcon />
          <span className="sr-only">Toggle Sidebar</span>
        </button>

        {isMobile && (
          <Link href={"/"} className="ml-2 max-[430px]:hidden min-[375px]:ml-4">
            <Image
              src={"/images/logo/logo-icon.svg"}
              width={32}
              height={32}
              alt=""
              role="presentation"
            />
          </Link>
        )}

        <div className="max-xl:hidden">
          <h1 className="mb-0.5 text-lg font-bold text-black dark:text-white">
            Digital Marketing, Experience and Analytics Team
          </h1>
          <p className="font-medium">Rebuild of ECU web tools using Next.js</p>
        </div>

        <div className="flex flex-1 items-center justify-end gap-2 min-[375px]:gap-4">
          <div className="relative w-full max-w-[300px]">
            <input
              type="search"
              placeholder="Search"
              className="flex w-full items-center gap-3.5 rounded-full border bg-gray-2 py-3 pl-[53px] pr-5 outline-none transition-colors focus-visible:border-primary dark:border-black-300 dark:bg-black-800 dark:hover:border-black-400 dark:hover:bg-black-300 dark:hover:text-black-600 dark:focus-visible:border-primary"
            />

            <SearchIcon className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 max-[1015px]:size-5" />
          </div>

          <ThemeToggleSwitch />

          <Notification />

          <div className="shrink-0">
            <UserInfo />
          </div>
        </div>
      </div>
      <Quicklinks />
    </header>
  );
}
