import {useTranslation} from "react-i18next";

import styles from './styles.module.css'
import {type SubmitHandler, useForm} from "react-hook-form";
import {ConfigurationFormControls, type ConfigurationInputProps} from "./model.ts";
import {ErrorInputHandler} from "../Handlers/ErrorInputHandler";
import type {FormControls} from "../model.ts";

export const Configuration = () => {
    const {t} = useTranslation()
    const {
        handleSubmit, register, formState: {
            errors
        }
    } = useForm<ConfigurationInputProps>();

    return <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {
            Object.keys(ConfigurationFormControls).map((key: string) => {
                const options = ConfigurationFormControls[key] as FormControls;

                return <label htmlFor={key} className={styles.group} key={`controlField-${key}`}>
                    {t(`form.configuration.${key}`)}:
                    <input id={key} type="text" {...register((key as keyof ConfigurationInputProps), options)} />
                    <ErrorInputHandler
                        error={errors[key as keyof ConfigurationInputProps]}
                    />
                </label>
            })
        }
        <button> Configurar datos</button>
    </form>
}

function onSubmit(data: ConfigurationInputProps): SubmitHandler<ConfigurationInputProps> {
    fetch('/api/send-email', {})
}