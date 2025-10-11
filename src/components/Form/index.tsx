import type {ReactNode} from "react";
import {useForm, FormProvider, type FieldValues} from "react-hook-form";

type FormProps = {
    children: ReactNode,
    onSubmit: (data?: FieldValues) => void
}

export const Form = ({children, onSubmit}: FormProps) => {

    const formMethods = useForm();

    return <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
}