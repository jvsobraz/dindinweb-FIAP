
import NavBar from "@/components/NavBar";
import FormEdit from "./Form";
import { getConta } from "@/actions/contas";

export default async function FormContas({params}) {
    
    const conta = await getConta(params.id)
        
    return (
        <>
            <NavBar active="contas" />
            <FormEdit conta={conta} />
        </>
    )
}