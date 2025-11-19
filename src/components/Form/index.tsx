import type {ReactNode} from "react";
import {MessageInformation} from "./MessageInformation";
import {FormProvider, useForm} from "react-hook-form";

type FormProps = {
    children: ReactNode,
    className?: {
        wrapper?: string,
        form?: string,
    }
}

export const FormParent = ({className, children}: FormProps) => {
    const {handleSubmit, ...methods} = useForm();

    return (<FormProvider {...methods} handleSubmit={handleSubmit}>
                <div className={className?.wrapper}>
                    {children}
                    <MessageInformation/>
                </div>
        </FormProvider>
    )
}