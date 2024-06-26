import styles from './Field.module.css';

export const Field = ({ type='text', label, placeholder, valueInput, toChange, require = false }) => {

    const whenTyping = (event) => {
        toChange(event.target.value);
    }

    return (
        <div className={`${styles.field} ${styles[`field{type}`]}`}>
            <label>{label}</label>
            <input
                type={type}
                value={valueInput}
                required={require}
                onChange={whenTyping}
                placeholder={placeholder}
            />
        </div>
    );
}