'use client'

import Button from "@/components/Button"
import NavBar from "@/components/NavBar"

 
export default function Error({ error, reset }) {
 
  return (
    <>
      <NavBar active={"contas"} />

      <main className="bg-slate-900 mt-10 m-auto max-w-lg p-8 rounded">
        <div className="flex flex-col gap-3 justify-between items-center">
          <h1 className="text-2xl">Ops! Um erro aconteceu. {error.message}</h1>
          <Button onClick={() => reset()} type="button" >
            tentar novamente
          </Button>
        </div>

      </main>
    </>
  )
}