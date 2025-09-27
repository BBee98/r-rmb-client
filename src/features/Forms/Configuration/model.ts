import type {RegisterOptions} from "react-hook-form";

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
    },
    to: {
        required: true,
    },
    subject: {
        required: true,
    }
}