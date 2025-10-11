import {useTranslation} from "react-i18next";
import styles from './styles.module.css'
import {useForm} from "react-hook-form";
import {type ConfigurationEmailProps, ConfigurationFormControls, type ConfigurationInputProps} from "./model.ts";
import {ErrorInputHandler} from "@forms/Handlers/ErrorInputHandler";
import type {FormControls} from "../model.ts";
import {useEffect} from "react";
import {onSubmitHandler} from "../Handlers/handler.ts";
import {useGetUrl} from "@shared/hooks/useGetUrl";

export const Configuration = () => {
    const {t} = useTranslation()
    const {
        handleSubmit, setValue, register, setError, formState: {
            errors, isReady,
        }
    } = useForm<ConfigurationInputProps>();
    const url = useGetUrl({version: "v1", endpoint: "email"})

    const onSubmit = (data: ConfigurationInputProps) => {
        onSubmitHandler<
            ConfigurationEmailProps,
            ConfigurationInputProps>({data: {
            email: data
            }, setError, url})
    }

    useEffect(() => {
        setValue("from", import.meta.env.VITE_TEST_EMAIL)
        setValue("to", import.meta.env.VITE_TEST_EMAIL)
        setValue("text", "Prueba desde el frontend")
        setValue("html", "<p>Prueba desde el frontend</p>")
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