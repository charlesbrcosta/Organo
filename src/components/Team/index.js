import { Collaborator } from '../Collaborator';

import styles from './Team.module.css';

export const  Team = (props) => {

    return(

        props.collaborators.length > 0 ? <section className={ styles.team } style={{ backgroundColor: props.secondColor }}>

            <h3 style={{ borderColor: props.primaryColor }}>{ props.name }</h3>

            <div className={ styles.collaborators }>
                { props.collaborators.map(collaborator => 
                    <Collaborator 
                        key={ collaborator.name }
                        name={ collaborator.name } 
                        jobTitle={ collaborator.jobTitle } 
                        image={ collaborator.image }
                        primaryColor={ props.primaryColor }
                    />
                )}
            </div>
        </section>
        : ''
    );  
}
