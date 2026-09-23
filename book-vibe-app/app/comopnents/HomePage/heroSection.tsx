
import Image from "next/image";
import React from "react";
import banner from "@/assets/hero_img.jpg";

export default function HeroSection() {
    return (
        <section className="mx-auto my-8 sm:my-12 w-full px-4 ">
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-green-50 via-emerald-50 to-gray-100 px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">

                {/* Decorative Background */}
                <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-green-200/30 blur-3xl" />

                <div className="relative grid items-center gap-10 md:grid-cols-2 lg:gap-16">

                    {/* Left Content */}
                    <div className="order-2 text-center md:order-1 md:text-left">
                        <span className="mb-5 inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                            Discover Your Next Favorite
                        </span>

                        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                            Books to Freshen Up Your{" "}
                            <span className="text-green-600">
                                Bookshelf
                            </span>
                        </h1>

                        <p className="mt-5 max-w-lg text-base leading-7 text-gray-600 sm:text-lg md:mx-0 mx-auto">
                            Explore inspiring stories, timeless classics,
                            and exciting reads. Find the books that
                            belong on your shelf.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
                            <button className="btn h-14 rounded-xl border-0 bg-green-600 px-7 text-base font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700">
                                View The List
                                <span aria-hidden="true">→</span>
                            </button>

                            <span className="text-sm font-medium text-gray-500">
                                Your next great read awaits.
                            </span>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="order-1 flex justify-center md:order-2 md:justify-end">
                        <div className="relative w-full max-w-md">
                            <div className="absolute inset-4 rounded-full bg-green-200/40 blur-2xl" />

                            <Image
                                src={banner}
                                alt="Discover your next favorite book"
                                priority
                                className="relative h-auto max-h-105 w-full transition-all duration-300  hover:-translate-y-1 rounded-2xl object-contain drop-shadow-xl"
                                sizes="(max-width: 768px) 90vw, 45vw"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}