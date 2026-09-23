import { IBooks } from "@/app/booksType/books.type";
import Link from "next/link";
import React from "react";

interface booksProps {
    data: IBooks;
}

export default function BookCard({ data }: booksProps) {
    return (
        <div className="group w-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl">

            {/* Book Image */}
            <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-xl bg-emerald-50 p-4">

                {/* Category Badge */}
                <span className="absolute left-3 top-3 rounded-full bg-emerald-700 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                    {data.category}
                </span>

                {/* Book Cover */}
                <img
                    src={data.image}
                    alt={data.bookName}
                    className="h-full max-w-full rounded-lg object-contain shadow-md transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Book Details */}
            <div className="pt-4">

                {/* Tags & Rating */}
                <div className="mb-3 flex items-center justify-between gap-2">

                    <div className="flex flex-wrap gap-2">
                        {data.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <span className="shrink-0 text-sm font-bold text-amber-500">
                        ★ {data.rating}
                    </span>
                </div>

                {/* Title */}
                <h3 className="line-clamp-1 text-xl font-bold text-gray-900 transition-colors group-hover:text-emerald-700">
                    {data.bookName}
                </h3>

                {/* Author */}
                <p className="mt-1 text-sm text-gray-500">
                    By {data.author}
                </p>

                {/* Review */}
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                    {data.review}
                </p>

                {/* Book Information */}
                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 text-xs text-gray-500">
                    <span>📖 {data.totalPages} Pages</span>
                    <span>{data.yearOfPublishing}</span>
                </div>

                {/* Publisher */}
                <p className="mt-2 truncate text-xs text-gray-500">
                    Publisher: {data.publisher}
                </p>

                {/* Button */}
                <Link href={`/allBooks/${data.bookId}`} >
                    <button
                        className="mt-4 cursor-pointer w-full rounded-xl bg-emerald-700 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-emerald-800 active:scale-[0.98]">
                        View Details
                    </button>

                </Link>
            </div>
        </div>
    );
}