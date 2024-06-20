import styles from './Footer.module.css';

export const Footer = ({ backgroundImage, socialIcons, logo, alt, creditText }) => {
    
    return(
        <footer className={ styles.footer } style={{ backgroundImage: `url(${backgroundImage})` }}>
            <section>
                <ul>
                    { socialIcons.map(icon => (
                        <li key={ icon.name }>
                            <a href={ icon.link } target='_blank' rel='noopener noreferrer'>
                                { icon.component }
                            </a>
                        </li>
                    ))} 
                </ul>
            </section>
            <section>
                <img src={ logo } alt={ alt } />
            </section>
            <section className={styles.credit_text}>
                <p>
                    { creditText }
                </p>
            </section>
        </footer>
    ); 
}