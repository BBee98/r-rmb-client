import {CreateOptions} from "../../Form/Create/fields.ts";
import {Create} from "../../Form/Create";

import styles from './styles.module.css'

export const Options = () => {

    return (
        <nav className={styles.nav}>
            {CreateOptions.map((option) => <Create fieldName={option}/>)}
        </nav>
    )
}