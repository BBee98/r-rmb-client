import {useTranslation} from "react-i18next";
import styles from './styles.module.css'
import {type FieldValues, type SubmitHandler, useFormContext} from "react-hook-form";
import {type ConfigurationEmailProps, ConfigurationFormControls, type ConfigurationInputProps} from "./model.ts";
import {ErrorInputHandler} from "@features-form/FormConfiguration/Handlers/ErrorInputHandler";
import type {FormControls} from "../model.ts";
import {onSubmitHandler} from "@features-form/FormConfiguration/Handlers/handler.ts";
import {useGetUrl} from "@hooks/useGetUrl.ts";

export const Configuration = () => {
    const {register, handleSubmit, setError, formState: {errors}} = useFormContext();
    const url = useGetUrl({version: "V1", endpoint: "email"})

    const {t} = useTranslation()

    const onSubmit = (data: ConfigurationInputProps) => {
        onSubmitHandler<ConfigurationEmailProps>({data: {
                email: data
            }, url, setError})
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>
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
            <button> {t("form.configuration.submit")}</button>

        </form>)
}