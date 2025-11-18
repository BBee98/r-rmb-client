import {useTranslation} from "react-i18next";
import styles from './styles.module.css'
import {useFormContext} from "react-hook-form";
import {ConfigurationFormControls, type ConfigurationInputProps} from "./model.ts";
import {ErrorInputHandler} from "@features-form/FormConfiguration/Handlers/ErrorInputHandler";
import type {FormControls} from "../model.ts";

export const Configuration = () => {
    const {register, formState: {errors}} = useFormContext();
    const {t} = useTranslation()

    return (
        <>
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
        </>)


}