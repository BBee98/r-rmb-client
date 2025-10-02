import type {RegisterOptions} from "react-hook-form";

export const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

export type FormControls = {
    [key: string]: {
        message?: string,
    } & RegisterOptions
}