import React from 'react'
import { getBooks } from '../comopnents/HomePage/books'
import { IBooks } from '../booksType/books.type'
import BookCard from '../comopnents/BookCard/BookCard'

export default async function AllBooks() {
    const data = await getBooks()
    return (
        <div className='container mx-auto'>
            <div className="title text-center py-10 px-4">
                <h3 className="text-4xl font-bold text-black">
                    All Books List
                </h3>

                <p className="mt-3 max-w-2xl mx-auto text-gray-600 text-base leading-7">
                    From thrilling adventures to inspiring stories, discover books that speak to your heart and spark your imagination.
                </p>
            </div>

            <div className="grid grid-cols-4 py-10 gap-4">
                {
                    data.map((items: IBooks) => {
                        return (
                            <BookCard data={items} key={items.bookId} />
                        )
                    })
                }
            </div>
        </div>
    )
}
