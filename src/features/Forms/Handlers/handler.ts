import {type FieldValues, type Path, type UseFormSetError} from "react-hook-form";

type OnSubmitProps<T, K extends FieldValues> = {
    data: T
    setError: UseFormSetError<K>,
    url: string
}

export async function onSubmitHandler<T, K extends FieldValues>({data, setError, url}: OnSubmitProps<T, K>) {
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
            await HandleError({response, setError: setError as UseFormSetError<K>});
            return;
        }
            const r = await response.json()
            console.log(r)
    }).catch(error => {
        console.error("Bad Petition", error)
    })
}


async function HandleError<T extends FieldValues>({response, setError}: { response: Response, setError: UseFormSetError<T>}){
    const r = await response.json();
    const missingFields = r.missingFields;
    if(response.status === 400) {
        if(missingFields.includes("email")){
            setError("root.serverError", {
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