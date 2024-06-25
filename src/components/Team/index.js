import { Collaborator } from '../Collaborator';
import hexToRgba from 'hex-to-rgba';

import styles from './Team.module.css';

export const Team = ({ team, collaborators, deleting, changeColor }) => {

    return (
        collaborators.length > 0 && <section className={styles.team} style={{ backgroundImage: 'url(./assets/fundo.png)', backgroundColor: hexToRgba(team.color, '0.4') }}>
            <input className={styles.input_color}
                onChange={event => changeColor(event.target.value, team.id)} 
                value={team.color} 
                type='color' 
            />
            <h3 style={{ borderColor: team.color }}>{team.name}</h3>
            <div className={styles.collaborators}>
                {collaborators.map((collaborator, index) => {                    
                    return <Collaborator
                        key={index}
                        collaborator={collaborator}
                        backgroundColor={team.color}
                        whenDeleting={deleting}
                    />
                }
                )}
            </div>
        </section>
    );
}
