import type {ConfigurationInputProps} from "./model.ts";
import {type UseFormSetError} from "react-hook-form";

type OnSubmitProps = {
    data: ConfigurationInputProps
    setError: UseFormSetError<ConfigurationInputProps> | UseFormSetError<ResponseError>
}

type ResponseError = {
    [key: string]: {
        message: string
    }
}

export async function onSubmitHandler({data, setError}: OnSubmitProps) {

    const url = `${import.meta.env.VITE_API_DEV_URL}/${import.meta.env.VITE_API_VERSION}/email`
    fetch(url, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: "POST",
        body: JSON.stringify({
            ...data,
            text: "Hola esto es un texto",
            html: "<h1>Hola esto es un texto</h1>",
            }),
    }).then(async (response) => {
        if(response.status !== 200) {
            await HandleError({response, setError: setError as UseFormSetError<ResponseError>});
            return;
        }
            const r = await response.json()
            console.log(r)
    }).catch(error => {
        console.error("Bad Petition", error)
    })
}


async function HandleError({response, setError}: { response: Response, setError: UseFormSetError<ResponseError>}){
    const responseJson = await response.json();
    if(response.status === 400) {
        setError("Bad Request",{ message: responseJson.message});
    }
}