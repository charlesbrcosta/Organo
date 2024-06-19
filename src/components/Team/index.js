import styles from './Team.module.css';

export const  Team = (props) => {

    const backgroundColor = { backgroundColor: props.secondColor }
    const borderColor = { borderColor: props.primaryColor }

    return(
        <section className={ styles.team } style={ backgroundColor }>
            <h3 style={ borderColor }>{ props.name }</h3>
        </section>
    );
}
