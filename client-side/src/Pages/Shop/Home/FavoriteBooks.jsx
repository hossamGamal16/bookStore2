import { useEffect,useState} from "react";
import BookCard from "./BookCard";

function FavoriteBooks() {
 const[books,setBooks]=useState([]);
  useEffect( ()=>{
    fetch("http://localhost:3000/books")
    .then(res =>res.json())
    .then(data=> console.log(data))
  },[]

  )
  return (
    <div>
      <BookCard books={books} headLine="beast saller books"/>
    </div>
  )
}

export default FavoriteBooks
