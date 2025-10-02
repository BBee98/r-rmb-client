import {emailPattern, type FormControls} from "../model.ts";

export interface ConfigurationInputProps {
    from: string;
    to: string;
    subject: string;
    text: string;
    html: string;
}

export const ConfigurationFormControls: FormControls = {
    from: {
        required: "form.validation.requiredField",
        pattern: {
            value: emailPattern,
            message: "form.configuration.validation.email"
        },
    },
    to: {
        required: "form.validation.requiredField",
        pattern: {
            value: emailPattern,
            message: "form.configuration.validation.email"
        },
    },
    subject: {}
}