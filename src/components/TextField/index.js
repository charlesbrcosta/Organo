import styles from './TextField.module.css';

export const TextField = (props) => {
    
    const placeholderChange = `${ props.placeholder } ...`;

    const whenTyping = (event) => {
        props.toChange(event.target.value);
    }

    return (
        <div className={ styles.text_field }>
            <label>{ props.label }</label>
            <input 
                value={ props.valueInput }
                required={ props.require }
                onChange={ whenTyping }
                placeholder={ placeholderChange }
            />
        </div>
    );
}