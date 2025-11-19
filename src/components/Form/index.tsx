import type {ReactNode} from "react";
import {MessageInformation} from "./MessageInformation";
import styles from "@features-form/FormConfiguration/styles.module.css";
import {type FieldValues, FormProvider, type SubmitHandler, useForm} from "react-hook-form";

type FormProps<T extends FieldValues> = {
    children: ReactNode,
    onSubmit: (data: T) => void
    className?: {
        wrapper?: string,
        form?: string,
    }
}

export const FormParent = <T extends FieldValues,>({className, onSubmit, children}: FormProps<T>) => {
    const {handleSubmit, ...methods} = useForm();

    return (
        <FormProvider {...methods} handleSubmit={handleSubmit}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>
                <div className={className?.wrapper}>
                    {children}
                    <MessageInformation/>
                </div>
            </form>
        </FormProvider>

    )
}