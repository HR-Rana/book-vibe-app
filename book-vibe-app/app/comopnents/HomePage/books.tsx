import React from 'react'
import BookCard from '../BookCard/BookCard'
import { IBooks } from '@/app/booksType/books.type'



export const getBooks = async () => {
    const response = await fetch('http://localhost:3000//booksData.json')
    const data = await response.json()
    return data
}


const Books = async () => {

    const data = await getBooks();
    console.log(data)

    return (
        <div>
            <div className="title text-center py-10 px-4">
                <h3 className="text-4xl font-bold text-emerald-700">
                    Available Books
                </h3>

                <p className="mt-3 max-w-2xl mx-auto text-gray-600 text-base leading-7">
                    Your next favorite book is waiting. Explore our handpicked
                    collection, discover captivating stories, and find the
                    perfect read for every moment.
                </p>
            </div>
            <div className="books-items-list py-10">
                <div className="grid grid-cols-3 gap-3">
                    {
                        data.slice(0, 9).map((items: IBooks) => {
                            return (
                                <div className='' key={items.bookId}>
                                    <BookCard data={items} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Books
