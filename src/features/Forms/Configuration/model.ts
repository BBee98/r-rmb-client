import type {RegisterOptions} from "react-hook-form";

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

type FormControls = {
    [key: string]: RegisterOptions
}

export interface ConfigurationInputProps {
    from: string;
    to: string;
    subject: string;
    text: string;
    html: string;
}

export const ConfigurationFormControls: FormControls = {
    from: {
        required: true,
        pattern: {
            value: emailPattern,
            message: "form.configuration.validation.email"
        },
    },
    to: {
        required: true,
    },
    subject: {
        required: true,
    }
}