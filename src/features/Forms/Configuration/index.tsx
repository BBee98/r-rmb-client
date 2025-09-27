import {useTranslation} from "react-i18next";

import styles from './styles.module.css'
import {type SubmitHandler, useForm} from "react-hook-form";
import type {ConfigurationInputProps} from "./types.ts";

export const Configuration = () => {
    const {t} = useTranslation()
    const { handleSubmit } = useForm<ConfigurationInputProps>();

    return (<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="from" className={styles.group}>
            {t("form.configuration.from")}:
            <input id="from" type="text" name="from"/>
        </label>
        <label htmlFor="to" className={styles.group}>
            {t("form.configuration.to")}:
            <input id="to" type="text" name="to"/>
        </label>
        <label htmlFor="subject" className={styles.group}>
            {t("form.configuration.subject")}:
            <input id="subject" type="text" name="subject"/>
        </label>
    </form>)
}
 function onSubmit (data: ConfigurationInputProps): SubmitHandler<ConfigurationInputProps> {
    
}