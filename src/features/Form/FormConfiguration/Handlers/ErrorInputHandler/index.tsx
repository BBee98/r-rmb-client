import type {FieldError} from "react-hook-form";
import {useTranslation} from "react-i18next";

type ErrorInputHandlerProps = {
    error: FieldError | undefined
}

export const ErrorInputHandler = ({error}: ErrorInputHandlerProps) => {

    const { t } = useTranslation()

    if(!error) return null;

    return (<p style={{
        color: 'red'
    }}>{t(error?.message as string)}</p>)
};