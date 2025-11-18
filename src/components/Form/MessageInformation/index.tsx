import {useFormContext} from "react-hook-form";
import {useTranslation} from "react-i18next";

export const MessageInformation = () => {
    const { t } = useTranslation()
    const { formState: { errors, isSubmitted } } = useFormContext()
    return ( isSubmitted && errors.root?.type === "server" &&
        <div>
            { t(errors.root?.message as string)}
        </div>
    )

}