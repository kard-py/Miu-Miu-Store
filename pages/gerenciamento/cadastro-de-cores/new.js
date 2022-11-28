import Header from "../../../src/components/Header";
import Footer from "../../../src/components/Footer";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
export default function Gen() {
    const [cor, setCor] = useState("#00000")
    const [nome, setNome] = useState("")
    const router = useRouter()
    async function handleSubmit(){
        const r = await axios.put("/api/addCor", {
            nome:nome,
            codigo:cor
        })

        if(r.data.msg == "OK"){
            alert("COR ADICIONADA VOLTANDO PARA PAGINA DE GERENCIAMENTO")
            router.push("/gerenciamento/cadastro-de-cores/")
        }

    }
  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-center my-5">Cadastro De Cores</h1>
        <div className="flex flex-1 w-full flex-wrap max-w-sm">
        <form className="w-full flex flex-col justify-center items-center" onSubmit={(e)=>{e.preventDefault(); handleSubmit()}}>
            <div className="flex">
            <input 
            required
            type={"text"}
            placeholder="Nome Da Cor:"
            className="
            bg-[#D9D9D9]
            outline-none 
            w-72 
            h-14
            mr-5
            font-bold 
            text-sm 
            justify-center 
            items-center 
            shadow-md 
            border-none 
            shadow-neutral-800 
            rounded-xl
            p-2
            whitespace-nowrap 
            " 
            value={nome}
            onChange={(e)=>{setNome(e.currentTarget.value);}}
            />
            <div className="rounded-md border-black border w-fit h-fit p-px lg:p-1 flex justify-center items-center">
            <input 
            className="w-14 h-14 rounded-md outline-none border-black border"
            type={"color"}
            value={cor}
            onChange={(e)=>{setCor(e.currentTarget.value);}}
            />
            </div>
            </div>
            <button type="submit" className="bg-black w-72 text-white font-bold rounded-xl p-2 mt-3">ADICIONAR NOVA COR</button>
        </form>
        </div>
      </main>
      <Footer />
    </>
  )
}