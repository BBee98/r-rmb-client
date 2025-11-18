import {useTranslation} from "react-i18next";
import {FormProvider, useForm} from "react-hook-form";

import styles from './styles.module.css'
import type {
    ConfigurationEmailProps,
    ConfigurationInputProps
} from "@features-form/FormConfiguration/Controllers/model.ts";
import {onSubmitHandler} from "@features-form/FormConfiguration/Handlers/handler.ts";
import {useGetUrl} from "@hooks/useGetUrl.ts";
import {Configuration} from "@features-form/FormConfiguration/Controllers";

export const FormConfiguration = () => {

    const {handleSubmit, ...methods} = useForm();
    const {setError} = methods;
    const {t} = useTranslation()
    const url = useGetUrl({version: "V1", endpoint: "email"})


    const onSubmit = (data: ConfigurationInputProps) => {
        onSubmitHandler<
            ConfigurationEmailProps,
            ConfigurationInputProps>({data: {
                email: data
            }, setError, url})
    }

    return(
        <FormProvider {...methods} handleSubmit={handleSubmit}>
            <form className={styles.form}
                  onSubmit={handleSubmit(async(data) => onSubmit(data))}>
                <Configuration />
            </form>
            <button> {t("form.configuration.submit")}</button>
        </FormProvider>
    )


}
