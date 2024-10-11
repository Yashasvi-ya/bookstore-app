import React, { lazy, Suspense, useEffect, useState } from "react";
import axios from 'axios'
const Card = lazy(()=> import ("../components/Card"))


export default function Home() {
  const [books, setBooks] = useState([]);
  const [visibleCount, setVisibleCount] = useState(24);
  const [showMore, setShowMore] = useState(true);

  // useEffect(() => {
  //   const fetchBooks = async () => {
  //     try {
  //       const response = await axios.get(`https://openlibrary.org/subjects/action.json?details=false&limit=${visibleCount}`);
  //       setBooks(response.data.works);
  //        if(data.works.length < 8) setShowMore(false)
  //       console.log(response.data.works);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchBooks();
  // }, []);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("/api/user/getbooks");
        const data = await response.json();
        if (response.ok) {
          setBooks(data[0].api.works);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchBooks();
  }, []);

  const handleShowMore = async () => {
    // setVisibleCount((prevCount) => prevCount + 8);
    try {
      const res = await fetch(`https://openlibrary.org/subjects/action.json?details=false`)
      const data = await res.json()
      setBooks(data.works)
      setShowMore(false)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-3">
      <div className="flex flex-wrap gap-20 m-10 p-3">
        {books.slice(0, visibleCount).map((book, index) => (
          <Suspense fallback={<p>Loading</p>}>
            
          <Card
            key={index}
            bookkey={book.cover_edition_key}
            title={book.title}
            author={
              book.authors
              ? book.authors.map((author) => author.name).join(", ")
              : "Unknown"
            }
            cover={book.cover_id ? book.cover_id : ""}
            />
            </Suspense>
        ))}
      </div>
      {showMore && (
        <button onClick={handleShowMore} className="p-2 outline rounded">
          Show More
        </button>
      )}
    </div>
  );
}
