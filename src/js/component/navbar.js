import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";
import { Context } from "../store/appContext";
import { MdClear } from "react-icons/md";


export const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <nav className="navbar navbar-light mb-3 px-4 justify-content-between">
                <div className="d-flex align-items-center">
                    <a href="https://www.facebook.com/StarWars" className="text-white me-2 fs-4" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.twitter.com/starwars" className="text-white me-2 fs-4" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/starwars" className="text-white me-2 fs-4" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.youtube.com/user/starwars" className="text-white me-2 fs-4" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>

                <Link to="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" className="rounded mx-auto d-block" alt="Logo Star Wars " width={190} height={110} />
                </Link>

                <div className="ml-auto">
                    <div className="btn-group">
                        <button
                            type="button"
                            className="btn btn-secondary dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Favoritos {store.favorites.length}
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end">
                            {store.favorites?.map((fav, index) => (
                                <li key={index}>
                                    <div className="dropdown">
                                        <div className="d-flex justify-content-between mx-2">
                                            <span className="span-favt">{fav}<hr /></span>
                                            <span className="span-x" onClick={() => actions.borrarFavorito(index)}><MdClear />
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav >

            <ul className="nav mb-3 px-3 justify-content-center bg-dark">
                <li className="nav-item">
                    <Link className="nav-link active yellow-link" to="/character">Personajes </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link yellow-link" to="/vehicles">Vehiculos</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link yellow-link" to="/planets">Planetas</Link>
                </li>
            </ul>
        </>
    );
};
