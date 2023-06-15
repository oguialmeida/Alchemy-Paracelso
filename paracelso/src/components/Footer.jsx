import Logo from '../assets/Logo.png';
import Styles from './styles/Footer.module.css';

function Footer() {
    return (
        <footer className={Styles.Footer}>
            <div className={Styles.Row}>
                <div className={Styles.Column}>
                    <img
                        className={Styles.Logo}
                        src={Logo}
                    />
                </div>
                <div className={Styles.Column}>
                    <text className={Styles.Title}>Navegue</text>
                    <a
                        className={Styles.Link}
                        href="#"
                    >
                        Home
                    </a>
                    <a
                        className={Styles.Link}
                        href="#Services"
                    >
                        Serviços
                    </a>
                    <a
                        className={Styles.Link}
                        href="#Team"
                    >
                        Nosso Time
                    </a>
                </div>
            </div>
            <div className={Styles.Center}>
                <text className={Styles.Direitos}>
                    © 2023 Paracelso. Todos os direitos reservados.
                </text>
            </div>
        </footer>
    );
}
export default Footer;