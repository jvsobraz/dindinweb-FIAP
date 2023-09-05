import { BanknotesIcon } from '@heroicons/react/24/outline'
import DropMenu from "@/components/DropMenu";

export default function Conta({conta}) {
    return (
        <div id="data-row" className="group flex justify-between items-center p-2 my-1 rounded cursor-pointer hover:bg-slate-700">
            <div className="flex gap-2">
                <BanknotesIcon className="h-6 w-6" />
                <span>{conta.nome}</span>
            </div>
            <div className="flex items-center">
                <span>R$ 100.00</span>
                <div className='invisible group-hover:visible'>
                    <DropMenu />
                </div>
            </div>
        </div>
    )
}