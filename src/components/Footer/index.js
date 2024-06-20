import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

import styles from './Footer.module.css';

export const Footer = () => {
    return(
        <footer className={ styles.footer }>
            <section>
                <ul>
                    <li>
                        <a href='facebook.com' target='_blank'>
                            <FaFacebook />
                        </a>
                    </li>
                    <li>
                        <a href='twitter.com' target='_blank'>
                            <FaTwitter />
                        </a>
                    </li>
                    <li>
                        <a href='instagram.com' target='_blank'>
                            <FaInstagram />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src='./assets/logo.png' alt='' />
            </section>
            <section className={styles.credit_text}>
                <p>
                    Desenvolvido por Alura.
                </p>
            </section>
        </footer>
    ); 
}