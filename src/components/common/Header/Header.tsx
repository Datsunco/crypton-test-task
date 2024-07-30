//react, next
import React from "react";

//components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

//icons
import { LocateIcon } from "@/icons/LocateIcon";
import { MenuIcon } from "@/icons/MenuIcon";
import { SearchIcon } from "@/icons/SearchIcon";

//styles

import styles from "./Header.module.scss";
import { HeartIcon } from "@/icons/HeartIcon";
import { PackageIcon } from "@/icons/PackageIcon";
import { CartIcon } from "@/icons/CartIcon";
import { NavigationMenuDemo } from "../MenuBar/MenuBar";
import { LogInIcon } from "lucide-react";
import { LogoIcon } from "@/icons/Logoicon";
import { SmalLogoIcon } from "@/icons/SmalLogoIcon";

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
                <Avatar className="w-12 h-12 border-solid border-2">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
        {/* <nav className="flex items-center p-4">
          <div className="flex items-center space-x-4">
            <Link
              href="#"
              className="flex items-center space-x-1"
              prefetch={false}
            >
              <LocateIcon className="w-4 h-4" />
              <span>Москва</span>
            </Link>
            <Link href="#" className="text-gray-700" prefetch={false}>
              Популярное 🔥
            </Link>
            <Link href="#" className="text-gray-700" prefetch={false}>
              Резисторы
            </Link>
            <Link href="#" className="text-gray-700" prefetch={false}>
              Конденсаторы
            </Link>
            <Link href="#" className="text-gray-700" prefetch={false}>
              Индукторы
            </Link>
            <Link href="#" className="text-gray-700" prefetch={false}>
              Процессоры
            </Link>
            <Link href="#" className="text-gray-700" prefetch={false}>
              Преобразователи
            </Link>
          </div>
        </nav> */}
        <NavigationMenuDemo />
      </div>
    </header>
  );
}
