import type {ReactNode} from "react";
import {MessageInformation} from "./MessageInformation";

type FormProps = {
    children: ReactNode,
    className: {
        wrapper?: string,
        form?: string,
    }
}

export const FormParent = ({className, children}: FormProps) => {

    return(
        <div className={className?.wrapper}>
            {children}
            <MessageInformation/>
        </div>
    )
}