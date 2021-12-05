function Beranda() {
    document.title = "Toko Buku Damar";
    return (
        <div className="container mt-3 w-75">
            <h1 className="text-center">Selamat datang di toko buku Damar!</h1>
            <div id="katalog"></div>
        </div>
    );
}

export default Beranda;