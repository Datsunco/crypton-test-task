import React from "react";
import Link from "next/link";
import { LogoIcon } from "@/icons/Logoicon";
import { SmalLogoIcon } from "@/icons/SmalLogoIcon";

export default function Footer() {
  return (
    <footer className="bg-trueGray pt-8 md:pt-12 text-white">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 text-sm lg:w-[1200px]">
        <div className="col-span-1">
          <div className="flex items-center gap-2">
            {/* <MountainIcon className="w-6 h-6" />
            <span className="font-medium">Envelope</span> */}
            <SmalLogoIcon />
          </div>
          {/* <p className="text-muted-foreground">
            Discover the best products for your home and lifestyle.
          </p> */}
        </div>
        <div className="grid gap-[15px]">
          <h3 className="text-xl font-bold mb-6">Меню</h3>
          <Link
            href="#"
            className="text-base hover:underline underline-offset-4"
            prefetch={false}
          >
            Главная
          </Link>
          <Link
            href="#"
            className="text-base hover:underline underline-offset-4"
            prefetch={false}
          >
            Каталог
          </Link>
          <Link
            href="#"
            className="text-base hover:underline underline-offset-4"
            prefetch={false}
          >
            Xiaomi
          </Link>
          <Link
            href="#"
            className="text-base hover:underline underline-offset-4"
            prefetch={false}
          >
            Lenovo
          </Link>
        </div>
        <div className="grid gap-3">
          <h3 className="text-xl font-bold mb-6">Для клиентов</h3>
          <Link
            href="#"
            className="text-base flex items-center gap-2 hover:underline underline-offset-4"
            prefetch={false}
          >
            Политика конфиденциальности
          </Link>
          <Link
            href="#"
            className="text-base flex items-center gap-2 hover:underline underline-offset-4"
            prefetch={false}
          >
            Договор оферты
          </Link>
          <Link
            href="#"
            className="text-base flex items-center gap-2 hover:underline underline-offset-4"
            prefetch={false}
          >
            Доставка
          </Link>
          <Link
            href="#"
            className="text-base flex items-center gap-2 hover:underline underline-offset-4"
            prefetch={false}
          >
            Оплата
          </Link>
        </div>
        <div className="grid gap-3  col-span-2">
          <h3 className="text-xl font-bold">Реквизиты</h3>
          <Link
            href="#"
            className="text-base hover:underline underline-offset-4"
            prefetch={false}
          >
            ИП УМПА ЛУМПА БУМБА
          </Link>
          <Link
            href="#"
            className="text-base hover:underline underline-offset-4"
            prefetch={false}
          >
            ИНН: 2311304064551
          </Link>
          <Link
            href="#"
            className="text-base hover:underline underline-offset-4"
            prefetch={false}
          >
            ОГРН: 321237511115804
          </Link>
        </div>
        <div className="grid gap-3 ">
          <h3 className="text-xl font-bold">Контакты</h3>
          <Link
            href="#"
            className="text-base hover:underline underline-offset-4"
            prefetch={false}
          >
            ИП УМПА ЛУМПА БУМБА
          </Link>
          <Link
            href="#"
            className="text-base hover:underline underline-offset-4"
            prefetch={false}
          >
            ИНН: 2311304064551
          </Link>
          <Link
            href="#"
            className="hover:underline underline-offset-4"
            prefetch={false}
          >
            ОГРН: 321237511115804
          </Link>
        </div>
      </div>
      <div className="container py-4 mx-auto mt-12 flex flex-col items-center gap-4 md:flex-row md:justify-between lg:w-[1200px] border-t-2 border-indigo-500">
        <p className="text-md ">
          &copy; 2024 Envelope shop. Все права защищены.
        </p>
      </div>
    </footer>
  );
}
