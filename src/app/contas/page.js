import NavBar from "@/components/NavBar";
import Conta from "./Conta";

async function getContas(){
  const url = "http://localhost:8080/api/contas"
  const resp = await fetch(url, { next: { revalidate: 0 } })
  return resp.json()
}

export default async function Contas() {

  const data = await getContas()

  return (
    <>
      <NavBar active={"contas"} />

      <main className="bg-slate-900 mt-10 m-auto max-w-lg p-8 rounded">
        <h1 className="text-2xl">Contas</h1>

        <div id="data">
          {data.map(conta => <Conta key={conta.id} conta={conta} />)}
        </div>

      </main>
    </>

  )
}