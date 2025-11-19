import {type FieldValues, type Path, type UseFormSetError} from "react-hook-form";

type OnSubmitProps<T extends FieldValues> = {
    data: T
    url: string,
    setError: UseFormSetError<T>
}

export async function onSubmitHandler<T extends FieldValues>({data, url, setError}: OnSubmitProps<T>) {
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
            await HandleError<T>({response, setError });
            return;
        }
            const r = await response.json()
            console.log(r)
    }).catch(() => {
        setError("root.serverError", {
            type: "server",
            message: "form.server.error",
        })
     })
}


async function HandleError<T extends FieldValues>({response, setError}: { response: Response, setError: UseFormSetError<T>}){
    const r = await response.json();
    const missingFields = r.missingFields;
    if(response.status === 400) {
        if(missingFields.includes("email")){
            setError("root.serverError", {
                type: "server",
                message: "form.validation.malformed",
            });
            return;
        }
        missingFields.forEach((field: Path<T>) => {
            setError(field, {
                message: "form.validation.requiredField",
            });
        })
    }
}