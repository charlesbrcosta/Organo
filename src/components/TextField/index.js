import styles from './TextField.module.css';

export const TextField = (props) => {
    
    const placeholderChange = `${ props.placeholder } ...`;

    return (
        <div className={ styles.text_field }>
            <label>{ props.label }</label>
            <input 
                required={ props.require }
                placeholder={ placeholderChange }
            />
        </div>
    );
}