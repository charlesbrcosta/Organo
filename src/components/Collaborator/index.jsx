import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

import styles from './Collaborator.module.css';

export const Collaborator = ({ collaborator, backgroundColor, whenDeleting, whenFavorite }) => {
    function favorite() {
        whenFavorite(collaborator.id);
    }

    const propsFavorite = {
        size: 25,
        onClick: favorite
    }

    return (
        <div className={styles.collaborator}>
            <AiFillCloseCircle 
                size={25} 
                className={styles.delete} 
                onClick={() => whenDeleting(collaborator.id)}
            />
            <div className={styles.header} style={{ backgroundColor: backgroundColor }}>
                <img src={collaborator.image} alt={collaborator.name} />
            </div>
            <div className={styles.footer}>
                <h4>{collaborator.name}</h4>
                <h5>{collaborator.jobTitle}</h5>
                <div className={styles.favorite}>
                    {collaborator.favorite 
                        ? <AiFillHeart {...propsFavorite} color='#ff0000'/> 
                        : <AiOutlineHeart {...propsFavorite} />
                    }
                </div>
            </div>
        </div>
    );
}