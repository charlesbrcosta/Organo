import styles from './TextField.module.css';

export const TextField = ({ label, placeholder, valueInput, toChange, require = false }) => {

    const whenTyping = (event) => {
        toChange(event.target.value);
    }

    return (
        <div className={styles.text_field}>
            <label>{label}</label>
            <input
                value={valueInput}
                required={require}
                onChange={whenTyping}
                placeholder={placeholder}
            />
        </div>
    );
}