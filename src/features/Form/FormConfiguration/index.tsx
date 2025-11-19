import {useTranslation} from "react-i18next";
import type {
    ConfigurationEmailProps,
    ConfigurationInputProps
} from "@features-form/FormConfiguration/Controllers/model.ts";
import {onSubmitHandler} from "@features-form/FormConfiguration/Handlers/handler.ts";
import {useGetUrl} from "@hooks/useGetUrl.ts";
import {Configuration} from "@features-form/FormConfiguration/Controllers";
import {FormParent} from "@components-form";

export const FormConfiguration = () => {
    const {t} = useTranslation()
    const url = useGetUrl({version: "V1", endpoint: "email"})


    const onSubmit = (data: ConfigurationInputProps) => {
        onSubmitHandler<ConfigurationEmailProps>({data: {
                email: data
            }, url})
    }

    return(
            <FormParent onSubmit={onSubmit}>
                    <Configuration />
                <button> {t("form.configuration.submit")}</button>
            </FormParent>
    )


}
