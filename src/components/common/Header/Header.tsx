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

export default function Header() {
  return (
    <header className="bg-white border-b flex justify-center">
      <div className={styles.headerBlock}>
        <div className="flex items-center p-4">
          <div className="flex items-center space-x-4">
            <img src="/placeholder.svg" alt="Logo" className="h-10" />
            <Button className="flex items-center space-x-2 bg-blue-500 text-white">
              <MenuIcon className="w-4 h-4" />
              <span>Каталог</span>
            </Button>
          </div>
          <div className={styles.searchField}>
            <Input
              type="search"
              placeholder="Искать товары"
              className="flex-1 pl-8 pr-4 py-2 border rounded-l-md"
            />
            <Button className="bg-blue-500 text-white rounded-r-md">
              <SearchIcon className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-4">
              <Link href="#" className="relative" prefetch={false}>
                <PackageIcon className="w-6 h-6" />
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
                  2
                </span>
              </Link>
              <Link href="#" className="relative" prefetch={false}>
                <HeartIcon className="w-6 h-6" />
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
                  2
                </span>
              </Link>
              <Link href="#" className="relative" prefetch={false}>
                <ShoppingCartIcon className="w-6 h-6" />
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
                  2
                </span>
              </Link>
              <Link href="#" className="relative" prefetch={false}>
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
                  +2
                </span>
              </Link>
            </div>
          </div>
        </div>
        <nav className="flex items-center p-4">
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
        </nav>
      </div>
    </header>
  );
}

function HeartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

// function LocateIcon() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <line x1="2" x2="5" y1="12" y2="12" />
//       <line x1="19" x2="22" y1="12" y2="12" />
//       <line x1="12" x2="12" y1="2" y2="5" />
//       <line x1="12" x2="12" y1="19" y2="22" />
//       <circle cx="12" cy="12" r="7" />
//     </svg>
//   );
// }

// function MenuIcon() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <line x1="4" x2="20" y1="12" y2="12" />
//       <line x1="4" x2="20" y1="6" y2="6" />
//       <line x1="4" x2="20" y1="18" y2="18" />
//     </svg>
//   );
// }

function PackageIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

// function SearchIcon() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="11" cy="11" r="8" />
//       <path d="m21 21-4.3-4.3" />
//     </svg>
//   );
// }

function ShoppingCartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
