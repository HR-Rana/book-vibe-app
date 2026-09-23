import { IBooks } from "@/app/booksType/books.type";
import { getBooks } from "@/app/comopnents/HomePage/books";
import Link from "next/link";

interface IbooksDetailsPage {
    params: Promise<{
        id: string;
    }>;
}

export default async function BookdetailsPage({
    params,
}: IbooksDetailsPage) {
    const { id } = await params;

    const booksData: IBooks[] = await getBooks();

    const details = booksData.find(
        (book) => book.bookId === Number(id)
    );

    // Book not found
    if (!details) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
                <div className="text-6xl mb-4">📚</div>

                <h2 className="text-3xl font-bold text-gray-800">
                    Book Not Found
                </h2>

                <p className="text-gray-500 mt-3">
                    Sorry, we couldn&apos;t find the book you&apos;re looking for.
                </p>

                <Link
                    href="/all-books"
                    className="mt-6 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition"
                >
                    Explore All Books
                </Link>
            </div>
        );
    }

    return (
        <main className="books-details-page container mx-auto px-4 py-10 lg:py-16">

            {/* Breadcrumb */}
            <div className="text-sm text-gray-500 mb-8 flex flex-wrap items-center gap-2">
                <Link
                    href="/"
                    className="hover:text-emerald-600 transition"
                >
                    Home
                </Link>

                <span>/</span>

                <Link
                    href="/all-books"
                    className="hover:text-emerald-600 transition"
                >
                    All Books
                </Link>

                <span>/</span>

                <span className="text-emerald-700 font-medium">
                    Book Details
                </span>
            </div>

            {/* Main Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

                {/* Book Cover */}
                <div className="bg-emerald-50 rounded-3xl p-6 sm:p-10 flex justify-center items-center min-h-[400px] lg:min-h-[550px]">
                    <div className="w-full max-w-[300px]">
                        <img
                            src={details.image}
                            alt={details.bookName}
                            className="w-full h-[400px] sm:h-[460px] object-contain drop-shadow-2xl rounded-xl"
                        />
                    </div>
                </div>

                {/* Book Information */}
                <div className="py-2">

                    {/* Category */}
                    <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
                        {details.category}
                    </span>

                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-5 leading-tight">
                        {details.bookName}
                    </h1>

                    {/* Author */}
                    <p className="text-gray-500 text-lg mt-4">
                        By{" "}
                        <span className="text-emerald-700 font-semibold">
                            {details.author}
                        </span>
                    </p>

                    {/* Rating & Reviews */}
                    <div className="flex flex-wrap items-center gap-3 mt-5">
                        <span className="text-amber-500 text-lg">
                            ★★★★★
                        </span>

                        <span className="font-bold text-gray-800">
                            {details.rating}
                        </span>

                        <span className="text-gray-400">|</span>

                        <span className="text-gray-500 text-sm">
                            {details.review} Reviews
                        </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-8 mt-7 text-base">
                        Discover the world of {details.bookName}, written by{" "}
                        {details.author}. Explore captivating ideas, meaningful
                        stories, and an unforgettable reading experience with
                        this selection from Book Vibe.
                    </p>

                    {/* Divider */}
                    <div className="border-t border-gray-200 my-7" />

                    {/* Book Details */}
                    <h3 className="text-xl font-bold text-gray-800 mb-5">
                        Book Information
                    </h3>

                    <div className="grid grid-cols-2 gap-x-5 gap-y-6">

                        <div>
                            <p className="text-sm text-gray-400 mb-1">
                                Publisher
                            </p>
                            <p className="font-semibold text-gray-800">
                                {details.publisher}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-400 mb-1">
                                Published Year
                            </p>
                            <p className="font-semibold text-gray-800">
                                {details.yearOfPublishing}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-400 mb-1">
                                Total Pages
                            </p>
                            <p className="font-semibold text-gray-800">
                                {details.totalPages} Pages
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-400 mb-1">
                                Book Category
                            </p>
                            <p className="font-semibold text-gray-800">
                                {details.category}
                            </p>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="mt-7">
                        <p className="text-sm text-gray-400 mb-3">
                            Tags
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {details.tags?.map((tag, index) => (
                                <span
                                    key={index}
                                    className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-9">
                        <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-4 px-6 rounded-xl font-bold transition shadow-lg shadow-emerald-100">
                            Read Book
                        </button>

                        <Link
                            href="/allBooks"
                            className="flex-1 border border-emerald-600 text-emerald-700 hover:bg-emerald-50 py-4 px-6 rounded-xl font-bold transition text-center"
                        >
                            ← Explore More
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-16 bg-emerald-50 rounded-2xl p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-gray-800">
                    A New Chapter Awaits
                </h3>

                <p className="text-gray-600 mt-3 leading-7 max-w-2xl">
                    Every book opens a new door to knowledge, imagination,
                    and inspiration. Find your next favorite read with Book Vibe.
                </p>

                <Link
                    href="/allBooks"
                    className="inline-block mt-5 text-emerald-700 font-bold hover:underline"
                >
                    Browse More Books →
                </Link>
            </div>
        </main>
    );
}