import NavBar from "@/components/NavBar";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <NavBar />

      <main>
        <h1>404 - Página não encontrada</h1>
        <Link href="/">voltar para home</Link>
      </main>
    </>

  )
}