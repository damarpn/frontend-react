import { useState } from "react";

function ManajemenBuku( data ){

    document.title = "Manajemen Buku - Toko Buku Damar";

    const [inputBook, setInputBook] = useState({});

    function handleJudul(event){
        setInputBook({...inputBook, judul:event.target.value});
    }

    function handlePengarang(event){
        setInputBook({...inputBook, pengarang:event.target.value});
    }

    function handleHarga(event){
        setInputBook({...inputBook, harga:event.target.value});
    }

    function handleStok(event){
        setInputBook({...inputBook, stok:event.target.value});
    }

    function submitAdd(event){
        event.preventDefault();
        data.store(inputBook);
        setForm();
    }

    const [form, setForm] = useState();

    function showCreate() {
        setForm("create");
    }

    function showEdit(book){
        
        setInputBook(book);
        
        setForm("edit");
    }

    function submitChange(event){
        event.preventDefault();
        data.update(inputBook);
        setForm();
        setInputBook();
    }

    function deleteBook(id){
        if(window.confirm("Hapus Data?")){
            data.remove(id);
            setForm();
        }
    }
    //data
    //event handling
    //console.log(bookList);
  
    return(
        <div className="container mt-3">
            <h1 className="text-center">Manajemen Buku</h1>
            
            {form === "create" && (
                <div id="formTambah">
                    <h5>Tambah Buku</h5>
                    <hr />
                    <form className="form row" onSubmit={submitAdd}>
                        <div className="col-3">
                            <input type="text" name="judul" className="form-control mx-2" placeholder="Judul" onChange={handleJudul} required />
                        </div>
                        <div className="col-3">
                            <input type="text" name="pengarang" className="form-control mx-2" placeholder="Pengarang" onChange={handlePengarang} required />
                        </div>
                        <div className="col-2">
                            <input type="text" name="harga" className="form-control mx-2" placeholder="Harga" onChange={handleHarga} required />
                        </div>
                        <div className="col-2">
                            <input type="text" name="stok" className="form-control mx-2" placeholder="Stok" onChange={handleStok} required />
                        </div>
                        <div className="col-2">
                            <input type="submit" className="btn btn-primary ml-5" value="Simpan"/>
                        </div>
                    </form>
                </div>
            )}
            {form === "edit" && (
                <div id="formUbah">
                    <h5>Edit Buku {inputBook.judul}</h5>
                    <hr />
                    <form className="form row" onSubmit={submitChange}>
                        <div className="col-3">
                            <input type="text" name="judul" className="form-control mx-2" placeholder="Judul" onChange={handleJudul} value={inputBook.judul} required />
                        </div>
                        <div className="col-3">
                            <input type="text" name="pengarang" className="form-control mx-2" placeholder="Pengarang" onChange={handlePengarang} value={inputBook.pengarang} required />
                        </div>
                        <div className="col-2">
                            <input type="text" name="harga" className="form-control mx-2" placeholder="Harga" onChange={handleHarga} value={inputBook.harga} required />
                        </div>
                        <div className="col-2">
                            <input type="text" name="stok" className="form-control mx-2" placeholder="Stok" onChange={handleStok} value={inputBook.stok} required />
                        </div>
                        <div className="col-2">
                            <input type="submit" className="btn btn-primary ml-5" value="Simpan"/>
                        </div>
                    </form> 
                </div>
            )}
            <div id="daftarBuku">
                <h2 className="mt-3">Daftar Buku</h2>
                <hr />
                <button className="btn btn-primary m-2" onClick={showCreate}>Tambah Buku</button>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Judul</th>
                            <th>Pengarang</th>
                            <th>Harga</th>
                            <th>Stok</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.bookList.map((book, index) => ( 
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{book.judul}</td>
                                <td>{book.pengarang}</td>
                                <td>{book.harga}</td>
                                <td>{book.stok}</td>
                                <td>
                                    <button className="btn btn-info mr-3" onClick={()=>showEdit(book)}>Edit</button>
                                    <button className="btn btn-danger" onClick={()=>deleteBook(book._id)}>Hapus</button>
                                </td>
                            </tr>
                         ))}
                    </tbody>
                </table>
            </div>
        </div>       
    );
}

export default ManajemenBuku;