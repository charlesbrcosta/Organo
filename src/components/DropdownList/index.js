import styles from './DropdownList.module.css';

export const DropdownList = ({ label, items, value, toChange, required = false }) => {

    return (<div className={styles.dropdown_list}>
        <label>{label}</label>
        <select required={required} value={value} onChange={event => toChange(event.target.value)}>
            <option />
            {items.map(item => <option key={item}>{item}</option>)}
        </select>
    </div>)
}