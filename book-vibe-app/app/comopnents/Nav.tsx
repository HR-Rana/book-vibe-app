
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/book.ico";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "All Books", href: "/allBooks" },
    { name: "Pages to Read", href: "/pages-to-read" },
];

export default function NavBar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-md">
            <nav className="navbar container mx-auto min-h-20 px-4 sm:px-6 lg:px-8">

                {/* Logo + Mobile Menu */}
                <div className="navbar-start gap-2">

                    {/* Mobile Dropdown */}
                    <div className="dropdown lg:hidden">
                        <button
                            tabIndex={0}
                            className="btn btn-ghost btn-circle"
                            aria-label="Open navigation menu"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>

                        <ul
                            tabIndex={0}
                            className="menu dropdown-content menu-sm z-50 mt-3 w-56 rounded-2xl border border-gray-100 bg-white p-3 shadow-xl"
                        >
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="rounded-lg py-3 font-medium"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Brand Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 sm:gap-3"
                    >
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50">
                            <Image
                                src={logo}
                                alt="Book Vibe Logo"
                                width={32}
                                height={32}
                                priority
                            />
                        </div>

                        <span className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
                            Book<span className="text-green-600">Vibe</span>
                        </span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal items-center gap-2 px-1">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-600 transition-colors hover:bg-green-50 hover:text-green-700"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Action Buttons */}
                <div className="navbar-end gap-2">
                    <Link
                        href="/sign-in"
                        className="btn btn-ghost hidden rounded-xl px-4 text-sm font-semibold text-gray-700 sm:inline-flex"
                    >
                        Sign In
                    </Link>

                    <Link
                        href="/sign-up"
                        className="btn h-11 min-h-11 rounded-xl border-0 bg-green-600 px-4 text-sm font-semibold text-white shadow-md shadow-green-600/20 transition-all hover:-translate-y-0.5 hover:bg-green-700 sm:px-6"
                    >
                        Sign Up
                    </Link>
                </div>

            </nav>
        </header>
    );
}