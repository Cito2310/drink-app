import { useState } from "react"

export const getFormNew = (formObject) => {
    const [form, setForm] = useState(formObject)

    const onChangeForm = ({ target }) => {
        const { name, value } = target;
        setForm({
            ...form,
            [ name ]: value
        });
    }

    const onResetForm = () => {setForm(formObject)}

    return {
        ...form,
        onChangeForm,
        onResetForm
    }
}