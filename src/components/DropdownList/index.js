import styles from './DropdownList.module.css';

export const DropdownList = (props) => {
    return(
        <div className={ styles.dropdown_list }>
            <label>{ props.label }</label>
            <select required={ props.require } >
                { props.items.map(item => {
                    return (
                        <option key={ item }>
                            { item }
                        </option>
                    );
                })}
            </select>
        </div>
    );
}