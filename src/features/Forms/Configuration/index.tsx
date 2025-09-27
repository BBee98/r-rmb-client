import {useTranslation} from "react-i18next";

import styles from './styles.module.css'
import {type SubmitHandler, useForm} from "react-hook-form";
import {ConfigurationFormControls, type ConfigurationInputProps} from "./model.ts";

export const Configuration = () => {
    const {t} = useTranslation()
    const {handleSubmit, register} = useForm<ConfigurationInputProps>();

    return <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {
            Object.keys(ConfigurationFormControls).map((key: string) => {
                const options = ConfigurationFormControls[key];
                return <label htmlFor={key} className={styles.group} key={`controlField-${key}`}>
                    {t(`form.configuration.${key}`)}:
                    <input id={key} type="text" {...register((key as keyof ConfigurationInputProps), options)} />
                </label>
            })
        }
        <button> Configurar datos </button>
    </form>
}

function onSubmit(data: ConfigurationInputProps): SubmitHandler<ConfigurationInputProps> {
    console.log("Data,", data)
}