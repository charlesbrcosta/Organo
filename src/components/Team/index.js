import { Collaborator } from '../Collaborator';

import styles from './Team.module.css';

export const Team = ({ team, collaborators, deleting, changeColor }) => {

    return (
        collaborators.length > 0 && <section className={styles.team} style={{ backgroundImage: 'url(./assets/fundo.png)', backgroundColor: team.primaryColor }}>
            <input className={styles.input_color}
                onChange={event => changeColor(event.target.value, team.name)} 
                value={team.secondColor} 
                type='color' 
            />
            <h3 style={{ borderColor: team.secondColor }}>{team.name}</h3>
            <div className={styles.collaborators}>
                {collaborators.map((collaborator, index) => {                    
                    return <Collaborator
                        key={index}
                        collaborator={collaborator}
                        backgroundColor={team.secondColor}
                        whenDeleting={deleting}
                    />
                }
                )}
            </div>
        </section>
    );
}
