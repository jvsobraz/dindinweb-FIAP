"use client"

import { create } from "@/actions/contas";
import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import TextField from "@/components/TextField";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

import { redirect } from 'next/navigation'

export default function FormContas() {
    const [ error, setError ] = useState("")
    
    async function handleSubmit(formData){
        const resp =  await create(formData)

        if (resp.message) {
            setError(resp.message)
            return
        }
       redirect("/contas")
    }

    return (
        <>
            <NavBar active="contas" />

            

            <main className="bg-slate-900 mt-10 m-auto max-w-md p-6 rounded flex gap-3 flex-col">
                <form action={handleSubmit}>
                    <h1 className="text-2xl">Cadastrar Contas</h1>
                    <TextField
                        label="nome"
                        id="nome"
                        name="nome"
                    />

                    <TextField
                        label="ícone"
                        id="icone"
                        name="icone"
                    />

                    <TextField
                        label="saldo inicial"
                        id="saldoInicial"
                        name="saldoInicial"
                    />

                    <div className="flex justify-around mt-4">
                        <Button href="/contas" variant="secondary">cancelar</Button>
                        <Button type="button">
                            <CheckCircleIcon className="h-6 w-6" />
                            salvar
                        </Button>

                    </div>

                    <span className="text-red-500">{error}</span>

                </form>
            </main>
        </>

    )
}