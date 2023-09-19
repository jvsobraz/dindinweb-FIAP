"use client"

import { create, update } from "@/actions/contas";
import Button from "@/components/Button";
import TextField from "@/components/TextField";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

import { redirect } from 'next/navigation'
export default function FormEdit({conta}){
    const [ error, setError ] = useState("")
    const [contaEdit, setContaEdit] = useState(conta)
    
    async function handleSubmit(){
        const resp =  await update(contaEdit)

        if (resp?.error) {
            setError(resp.error)
            return
        }
        
       redirect("/contas")
    }

    function handleFieldChange(field, value){
        setContaEdit({
            ...contaEdit,
            [field]: value
        })
    }

    return (
        <main className="bg-slate-900 mt-10 m-auto max-w-md p-6 rounded flex gap-3 flex-col">
                <form action={handleSubmit}>
                    <h1 className="text-2xl">Editar Contas</h1>
                    <TextField
                        label="nome"
                        id="nome"
                        name="nome"
                        value={contaEdit.nome}
                        onChange={(e) => handleFieldChange("nome", e.target.value )}
                    />

                    <TextField
                        label="ícone"
                        id="icone"
                        name="icone"
                        value={contaEdit.icone}
                        onChange={(e) => handleFieldChange("icone", e.target.value )}
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

    )
}