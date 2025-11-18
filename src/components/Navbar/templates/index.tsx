import {CreateOptions} from "@features-form/FormConfiguration/Create/fields.ts";
import {Create} from "@features-form/FormConfiguration/Create";

import styles from './styles.module.css'

export const Options = () => {

    return (
        <nav className={styles.nav}>
            {CreateOptions.map((option) => <Create fieldName={option} key={`create-option-${option}`}/>)}
        </nav>
    )
}