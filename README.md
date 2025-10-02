# r-rmb-client


# CSS

## Breakpoints usados

> 👉 https://getbootstrap.com/docs/5.0/layout/breakpoints/



# React hook forms

## Errores personalizados (_Custom errors_):

- En las validaciones de tipo ``required``, si añadimos un texto como ``This field is required``
en lugar de darle como valor ``true``, se nos creará un objeto con un mensaje de error que podremos
utilizar:

```
error: {
    type: 'required', 
        message: 'This field is required', 
        ref: input#subject
}
```