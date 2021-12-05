import { useState,  useEffect  } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Beranda from './components/Beranda';
import ManajemenBuku from './components/ManajemenBuku';
import Navbar from './components/Navbar';

function App() {
  const [ books, setBooks ] = useState(initLocalStorage());

  useEffect(() => {
    saveToLocalStorage(books);
  });

  function initLocalStorage(){
    if(typeof(Storage) !== "undefined") {
      if(localStorage.books){
        return JSON.parse(localStorage.books);
      }else{
        let initData = [
          { _id: 1, judul: "Laskar Pelangi", pengarang: "Andrea Hirata", harga: 80000, stok: 7 },
          { _id: 2, judul: "Bumi", pengarang: "Tere Liye", harga: 85000, stok: 5 }
        ];
        localStorage.books = JSON.stringify(initData);
        return initData;
      }
    }
  }

  function saveToLocalStorage(data){
    localStorage.books = JSON.stringify(data);
  }

  function storeData(inputBook){
   inputBook._id = Date.now();
     console.log(inputBook);
    setBooks(books.concat(inputBook));
  //  alert("data berhasil ditambahkan");
  }

  function updateData(inputBook){
    
    books.forEach(function(book,index){
      if(book._id === inputBook._id){
        books[index].judul = inputBook.judul;
        books[index].pengarang = inputBook.pengarang;
        books[index].harga = inputBook.harga;
        books[index].stok = inputBook.stok;
      }
    });
    //document.title = `Y ${JSON.stringify(books)} times`;
    saveToLocalStorage(books);
    
  //  console.log(inputBook);
    /*
    books[inputBook.index].judul = "ditooo";
    setBooks(books);
    */
  }

  function deleteData(id){    
      setBooks(books.filter(item => item._id !== id));
    //console.log(id);
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
            <Route path="/" element={ <Beranda />} />
            <Route path="/manajemen-buku" element={ <ManajemenBuku bookList={books} store={storeData} update={updateData} remove={deleteData} />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
