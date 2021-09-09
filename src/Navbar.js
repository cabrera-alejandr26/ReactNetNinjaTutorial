const Navbar = () =>{
    return(
        <nav className="navbar">
            <h1>Dojo Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
                <a href="/about" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>About</a>
            </div>
        </nav>
    );
}

export default Navbar;