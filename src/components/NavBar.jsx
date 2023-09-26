"use client"

import { AuthContext } from "@/contexts/AuthContext";
import Link from "next/link";
import { useContext } from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

export default function NavBar({ active }) {
    const {user, logout} = useContext(AuthContext)
    const { push } = useRouter()

    function handleLogout(){
        logout()
        push("/login")
    }

    return (
        <nav className=" flex justify-between items-center py-2 px-4 bg-slate-900">
            <ul id="links" className="flex gap-14 items-end text-slate-500">
                <li>
                    <Link href="/">
                        <h1 className="text-slate-100 text-2xl">DinDinSemFim</h1>
                    </Link>
                </li>
                <li>
                    <Link className={active == "despesas" && "text-slate-300"} href="/despesas">
                        despesas
                    </Link>
                </li>

                <li>
                    <Link className={active == "contas" && "text-slate-300"} href="/contas">
                        contas
                    </Link>
                </li>

                <li>
                    <Link className={active == "categorias" && "text-slate-300"} href="/categorias">
                        categorias
                    </Link>
                </li>

            </ul>

            <div className="flex items-center gap-2">
                <span>{user?.email}</span>

                <div className="h-12 w-12 rounded-full overflow-hidden">
                    <img src="https://i.pravatar.cc/100" alt="avatar do usuário" />
                </div>

                <Button onClick={handleLogout} type="button">logout</Button>


            </div>

        </nav>
    )
}