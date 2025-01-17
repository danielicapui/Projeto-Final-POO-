import Img from 'assets/img/Empregos.png'
const NavBar = () => {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
            <div className="container">
                <nav className="my-2 my-md-0 mr-md-3">
                    <img src={Img} alt="Projeto Final" width="100" />
                </nav>
            </div>
        </div>
    );
}

export default NavBar;
