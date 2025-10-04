import {useTranslation} from "react-i18next";
import styles from './styles.module.css'
import {type SubmitHandler, useForm} from "react-hook-form";
import {ConfigurationFormControls, type ConfigurationInputProps} from "./model.ts";
import {ErrorInputHandler} from "../Handlers/ErrorInputHandler";
import type {FormControls} from "../model.ts";
import {onSubmitHandler} from "./handler.ts";
import {useEffect} from "react";

export const Configuration = () => {
    const {t} = useTranslation()
    const {
        handleSubmit, setValue, register, setError, formState: {
            errors, isReady,
        }
    } = useForm<ConfigurationInputProps>();

    const onSubmit = (data: ConfigurationInputProps) => {
        onSubmitHandler({data, setError})
    }

    useEffect(() => {
        setValue("from", import.meta.env.VITE_TEST_EMAIL)
        setValue("to", import.meta.env.VITE_TEST_EMAIL)
    }, [isReady])

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
        <button> {t("form.configuration.submit")}</button>
    </form>
}