import Header from "../src/components/Header"
import Footer from "../src/components/Footer"
import Link from "next/link"
export default function Home(){
    return (
        <>
        <Header/>
        <main className="flex flex-1 h-full w-full p-5 justify-center items-center ">
            <div className="flex flex-1 h-[550px] justify-center items-center">
                <Link href="/menu-pedidos" className="select-none w-full m-1 bg-black h-full text-xl lg:text-2xl font-bold text-white hover:bg-green-600 flex flex-1 justify-center items-center text-center duration-300 shadow-zinc-800 shadow-md">Cadastro<br/>De<br/>Pedidos</Link>
                <Link href="/gerenciamento" className="select-none w-full m-1 bg-black h-full text-xl lg:text-2xl font-bold text-white hover:bg-green-600 flex flex-1 justify-center items-center text-center duration-300 shadow-zinc-800 shadow-md">Gerenciamento<br/>Da<br/>Loja</Link>
            </div>
        </main>
        <Footer/>
        </>
    )
}