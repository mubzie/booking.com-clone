"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Bars3Icon,
  ChatBubbleLeftIcon,
  ChevronDownIcon,
  HomeIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  PlayCircleIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { icons } from "lucide-react";
import { it } from "node:test";

const products = [
  {
    name: "Book a stay",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: HomeIcon,
  },
  {
    name: "Book a flight",
    description: "Speak directly to your customers",
    href: "#",
    icon: PaperAirplaneIcon,
  },
  {
    name: "Contact our Support Team",
    description: "Your customers's data will be safe and secure",
    href: "#",
    icon: ChatBubbleLeftIcon,
  },
];

const callToActions = [
  { name: "See Demo Booking", href: "#", icon: PlayCircleIcon },
  { name: "Contact Support", href: "#", icon: PhoneIcon },
];

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

        <PopoverGroup className="hidden items-center lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="inline-flex items-center justify-center rounded-md p-2.5 text-white">
              stays
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-white"
                aria-hidden="true"
              />
            </PopoverButton>
            <Transition
              as={React.Fragment}
              enter="transition east-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel className="absolute z-10 mt-3 w-screen top-full -left-8 max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none justify-center items-center rounded-lg bg-gray-50 group-hover:bg-gray-200">
                        <item.icon
                          className="h-6 w-6 text-[#013b94] group-hover:text-blue-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-[#013b94]"
                        >
                          {item.name}
                          <span className="absolute inset-0"></span>
                        </a>
                        <p className="mt-1 text-[#013b94]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callToActions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-[#013b94] hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-[#013b94]"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </PopoverPanel>
            </Transition>
          </Popover>

          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Flights
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Car Rentals
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Attractions
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Flight + Hotel
          </a>
        </PopoverGroup>

        <div className="hidden lg:flex lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />

        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#013b94] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Booking.com</span>
              <span className="text-white text-[18px] font-medium">
                Booking.com
              </span>
            </a>

            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 p-6">
                <Disclosure as="div" className="-mb-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base leading-7 text-white hover:bg-blue-800">
                        <span className="font-semibold">Stays</span>
                        <ChevronDownIcon
                          className={`h-5 w-5 flex-none text-white ${
                            open ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...products, ...callToActions].map((item) => (
                          <DisclosureButton
                            as="a"
                            key={item.name}
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-blue-800"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                >
                  Flights
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                >
                  Car Rentals
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                >
                  Attractions
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                >
                  Flight + Hotel
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                >
                  Log in <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

export default Header;
