// react, next
import React from "react";

// components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

// icons
import { MenuIcon } from "@/icons/MenuIcon";
import { SearchIcon } from "@/icons/SearchIcon";

// styles
import styles from "./Header.module.scss";
import { HeartIcon } from "@/icons/HeartIcon";
import { PackageIcon } from "@/icons/PackageIcon";
import { CartIcon } from "@/icons/CartIcon";
import { NavigationMenuDemo } from "../MenuBar/MenuBar";
import { SmalLogoIcon } from "@/icons/SmalLogoIcon";
import AuthPopover from "./AuthPopover";

export default function Header() {
  return (
    <header className="bg-white border-b flex justify-center">
      <div className={styles.headerBlock}>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {/* <LogoIcon /> */}
            <SmalLogoIcon />
            <Button className="flex items-center space-x-2 bg-blue-500 text-white">
              <MenuIcon className="w-4 h-4" />
              <span>Каталог</span>
            </Button>
          </div>
          <div className={styles.searchField}>
            <Input
              type="search"
              placeholder="Искать товары"
              className="flex-1 pl-8 pr-4 py-2 borde rounded-r-none"
            />
            <Button className="bg-blue-500 text-white rounded-l-none">
              <SearchIcon className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <Link href="#" className={styles.iconBlock} prefetch={false}>
                <PackageIcon className="w-6 h-6" />
                <span className="absolute top-0 right-4 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
                  2
                </span>
                <span className="">Заказы</span>
              </Link>
              <Link href="#" className={styles.iconBlock} prefetch={false}>
                <HeartIcon className="w-6 h-6" />
                <span className="absolute top-0 right-4 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
                  2
                </span>
                <span className="">Избранное</span>
              </Link>
              <Link href="#" className={styles.iconBlock} prefetch={false}>
                <CartIcon className="w-6 h-6" />
                <span className="absolute top-0 right-4 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
                  2
                </span>
                <span className="">Корзина</span>
              </Link>
              <div className={styles.profileBlock}>
                <AuthPopover />
              </div>
            </div>
          </div>
        </div>
        <NavigationMenuDemo />
      </div>
    </header>
  );
}
