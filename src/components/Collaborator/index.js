import styles from './Collaborator.module.css';

export const Collaborator = ({ collaborator, secondColor }) => {
    return (
        <div className={styles.collaborator}>
            <div className={styles.header} style={{ backgroundColor: secondColor }}>
                <img src={collaborator.image} alt={collaborator.name} />
            </div>
            <div className={styles.footer}>
                <h4>{collaborator.name}</h4>
                <h5>{collaborator.jobTitle}</h5>
            </div>
        </div>
    );
}