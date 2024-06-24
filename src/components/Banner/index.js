import styles from './Banner.module.css';

export const Banner = () => {
    return (
        <header className={styles.banner}>
            <img src="./assets/banner.png" alt="banner principal da página do Organo" />
        </header>
    );
}