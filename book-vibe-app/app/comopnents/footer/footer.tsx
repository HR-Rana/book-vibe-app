import Link from "next/link";

export default function Footer() {
    const quickLinks = [
        { name: "Home", href: "/" },
        { name: "Listed Books", href: "/listed-books" },
        { name: "Pages to Read", href: "/pages-to-read" },
        { name: "About Us", href: "/about" },
    ];

    const categories = [
        "Fiction",
        "Romance",
        "Classic",
        "Adventure",
    ];

    return (
        <footer className="container mx-auto text-white">

            {/* Main Footer */}
            <div className="grid grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

                {/* Brand Section */}
                <div>
                    <Link
                        href="/"
                        className="mb-4 inline-block text-3xl font-extrabold tracking-tight"
                    >
                        <span className="text-emerald-500">Book</span>
                        <span className="text-white">Vibe</span>
                        <span className="text-emerald-500">.</span>
                    </Link>

                    <p className="max-w-xs text-sm leading-7 text-white/65">
                        Discover stories, explore new worlds, and find your
                        next favorite book. Your next great read starts here.
                    </p>

                    {/* Social Links */}
                    <div className="mt-5 flex gap-3">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Facebook"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 font-bold text-white transition duration-300 hover:border-emerald-500 hover:bg-emerald-600 hover:text-white"
                        >
                            f
                        </a>

                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 font-bold text-white transition duration-300 hover:border-emerald-500 hover:bg-emerald-600 hover:text-white"
                        >
                            ◎
                        </a>

                        <a
                            href="https://x.com"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="X"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 font-bold text-white transition duration-300 hover:border-emerald-500 hover:bg-emerald-600 hover:text-white"
                        >
                            𝕏
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="mb-5 text-lg font-bold text-white">
                        Quick Links
                    </h3>

                    <ul className="space-y-3 text-sm text-white/65">
                        {quickLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="transition-colors duration-200 hover:text-emerald-400"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Categories */}
                <div>
                    <h3 className="mb-5 text-lg font-bold text-white">
                        Explore Books
                    </h3>

                    <ul className="space-y-3 text-sm text-white/65">
                        {categories.map((category) => (
                            <li key={category}>
                                <Link
                                    href={`/listed-books?category=${category}`}
                                    className="transition-colors duration-200 hover:text-emerald-400"
                                >
                                    {category}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Section */}
                <div>
                    <h3 className="mb-5 text-lg font-bold text-white">
                        Get In Touch
                    </h3>

                    <p className="mb-4 text-sm leading-6 text-white/65">
                        Have a question or suggestion? We would love to hear
                        from you.
                    </p>

                    <a
                        href="mailto:support@bookvibe.com"
                        className="break-all text-sm font-medium text-emerald-400 transition hover:text-emerald-300 hover:underline"
                    >
                        support@bookvibe.com
                    </a>

                    <div className="mt-5">
                        <p className="mb-2 text-sm font-semibold text-white">
                            Made for book lovers
                        </p>

                        <p className="text-sm text-white/50">
                            Read more. Discover more.
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-white/10">
                <div className="flex w-full flex-col items-center justify-between gap-3 px-6 py-5 text-center text-xs text-white/50 sm:flex-row sm:text-left">

                    <p>
                        © {new Date().getFullYear()} BookVibe.
                        All rights reserved.
                    </p>

                    <p>
                        Made with{" "}
                        <span className="text-emerald-500">♥</span>
                        {" "}for readers
                    </p>
                </div>
            </div>

        </footer>
    );
}