"use server"

import { cookies } from 'next/headers'

const url = process.env.NEXT_PUBLIC_BASE_URL + "/login";

export async function apiLogin(credenciais){
    const options = {
        method: "POST",
        body: JSON.stringify(credenciais),
        headers: {
            "Content-Type": "application/json"
        }
    }
    
    const resp = await fetch(url, options)

    if (resp.status !== 200) return {error : "credenciais inválidas"}

    const json = await resp.json()

    cookies().set('dindin_token', json.token, {
        maxAge: 60 * 60 * 24 * 7 // 7 dias
    })
}

export async function apiLogout(){
    cookies().delete('dindin_token')
}