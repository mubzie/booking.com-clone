"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import {
  Dialog,
  Disclosure,
  Popover,
  PopoverButton,
  PopoverGroup,
  Transition,
} from "@headlessui/react";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#013b94]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div>
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Booking.com</span>
            <span className="text-white text-[18px] font-medium">
              Booking.com
            </span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="inline-flex items-center justify-center rounded-md p-2.5 text-white">
              stays
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-white"
                aria-hidden="true"
              />
            </PopoverButton>
          </Popover>
        </PopoverGroup>
      </nav>
    </header>
  );
}

export default Header;
