import type {FieldErrors} from "react-hook-form";
import {useTranslation} from "react-i18next";

export const ErrorInputHandler = ({error}: FieldErrors) => {

    const { t } = useTranslation()

    if(!error) return null;

    return (<p style={{
        color: 'red'
    }}>{t(error?.message as string)}</p>)
};