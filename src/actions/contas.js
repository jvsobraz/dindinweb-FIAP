"use server"

import { revalidatePath } from "next/cache"

export async function create(formData){
    const url = "http://localhost:8080/api/contas"

    const options = {
        method: "POST",
        body: JSON.stringify( Object.fromEntries(formData)),
        headers: {
            "Content-Type": "application/json"
        }
    }   

    const resp = await fetch(url, options)
    const json = await resp.json()

    if (resp.status !== 201 ){
        const errors = json.reduce((str, error) => str += error.message + ". ", "")
        return {
            message: `Erro ao cadastrar. ${resp.status} - ${errors} `
        }
    }

    revalidatePath("/contas")
    return { ok: 'ok' }

}