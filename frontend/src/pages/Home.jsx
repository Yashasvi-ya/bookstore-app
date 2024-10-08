import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

export default function Home() {

  const [books, setBooks] = useState([])

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
  
  useEffect(()=>{
    const fetchBooks = async () => {
      try {
        const response = await fetch('/api/user/getbooks');
        const data = await response.json();
        if(response.ok){
          setBooks(data[0].api.works);
          // console.log(books )
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchBooks()
  },[])


  return (
    <div className='flex flex-wrap gap-20 m-10 p-3'>
      {/* Just Filler text to stop api limit */}
      {books.map((book) => (
        <Card
          key = {book.key}
          bookkey={book.key}
          title={book.title}
          author={book.authors ? book.authors.map(author => author.name).join(', ') : 'Unknown'}
          cover={book.cover_id ? book.cover_id : ''} 
        />
      ))}
    </div>
  )
}
