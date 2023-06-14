import React from "react";
import Logo from "../assets/Logo.png";
import Styles from "./NavBar.module.css";
function NavBar() {
    return (
        <header className={Styles.Background}>
            <div className={Styles.Container}>
                <a
                    href="#"
                    className={Styles.Link}
                >
                    <img
                        src={Logo}
                        alt="Logo Paracelso"
                        className={Styles.Logo}
                    />
                </a>
                <nav>
                    <div className={Styles.Navgation}>
                        <a
                            href="#"
                            className={Styles.Link}
                        >
                            Home
                        </a>
                        <a
                            href="#Services"
                            className={Styles.Link}
                        >
                            Serviços
                        </a>
                        <a
                            href="#Team"
                            className={Styles.Link}
                        >
                            Time
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
}
export default NavBar;