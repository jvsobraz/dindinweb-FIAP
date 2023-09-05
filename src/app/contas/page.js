import NavBar from "@/components/NavBar";
import Conta from "./Conta";
import Button from "@/components/Button";
import { PlusIcon  } from '@heroicons/react/24/outline'

async function getContas() {
  const url = "http://localhost:8080/api/contas"
  const resp = await fetch(url)
  return resp.json()
}

export default async function Contas() {

  const data = await getContas()

  return (
    <>
      <NavBar active={"contas"} />

      <main className="bg-slate-900 mt-10 m-auto max-w-lg p-8 rounded">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl">Contas</h1>
          <Button href="/contas/new" >
            <PlusIcon className="h6 w-6" />
            criar conta
          </Button>
        </div>

        <div id="data">
          {data.map(conta => <Conta key={conta.id} conta={conta} />)}
        </div>

      </main>
    </>

  )
}