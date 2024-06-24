import { Collaborator } from '../Collaborator';

import styles from './Team.module.css';

export const Team = ({ team, collaborators }) => {

    return (

        collaborators.length > 0 && <section className={styles.team} style={{ backgroundImage: 'url(./assets/fundo.png)', backgroundColor: team.secondColor }}>

            <h3 style={{ borderColor: team.primaryColor }}>{team.name}</h3>

            <div className={styles.collaborators}>
                {collaborators.map((collaborator, index) =>
                    <Collaborator
                        key={index}
                        collaborator={collaborator}
                        secondColor={team.primaryColor}
                    />
                )}
            </div>
        </section>
    );
}
