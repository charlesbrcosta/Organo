import styles from './DropdownList.module.css';

export const DropdownList = (props) => {

    const whenTyping = (event) => {
        props.toChange(event.target.value);
    }

    return(
        <div className={ styles.dropdown_list }>

            <label>
                { props.label }
            </label>

            <select 
                required={ props.require } 
                value={ props.valueInput }
                onChange={ whenTyping }
            >
                <option value=''></option>
                { props.items.map(item => {
                    return <option key={ item }> { item }</option>
                })}
            </select>
        </div>
    );
}