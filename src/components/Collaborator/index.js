import styles from './Collaborator.module.css';

export const Collaborator = ({ name, image, jobTitle }) => {
    return(
        <div className={ styles.collaborator }>
            <div className={ styles.header }>
                <img src={ image } alt={ name }/>
            </div>
            <div className={ styles.footer }>
                <h4>{ name }</h4>
                <h5>{ jobTitle }</h5>
            </div>
        </div>
    );
}