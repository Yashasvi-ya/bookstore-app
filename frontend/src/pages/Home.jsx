
import React, { useEffect, useState } from "react";
import Card from "../components/Card";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);
  
  // useEffect(() => {
  //   const fetchBooks = async () => {
  //     try {
  //       const response = await axios.get('https://openlibrary.org/subjects/action.json?details=false&limit=20');
  //       setBooks(response.data.works);
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

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  return (
    <div className="flex flex-col justify-center items-center p-3">
      <div className="flex flex-wrap gap-20 m-10 p-3">
        {books.slice(0, visibleCount).map((book) => (
          <Card
            key={book.cover_edition_key}
            bookkey={book.cover_edition_key}
            title={book.title}
            author={
              book.authors
                ? book.authors.map((author) => author.name).join(", ")
                : "Unknown"
            }
            cover={book.cover_id ? book.cover_id : ""}
          />
        ))}
      </div>
      {visibleCount < books.length && (
        <button onClick={handleShowMore} className="p-2 outline rounded">
          Show More
        </button>
      )}
    </div>
  );
}
