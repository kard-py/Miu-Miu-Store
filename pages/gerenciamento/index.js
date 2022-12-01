import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import Link from "next/link";
export default function Gen() {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-center my-5">Gerenciamento de Pulseiras</h1>
        <div className="flex flex-1 w-full flex-wrap max-w-sm">
        <Link href="/gerenciamento/pedidos" className="m-5 duration-300 hover:bg-green-600 bg-black text-white font-bold text-sm flex flex-1 justify-center rounded-md text-center items-center w-64 h-64">Lista<br />De<br />Pedidos</Link>
        <Link href="/gerenciamento/cadastro-de-cores" className="m-5 duration-300 hover:bg-green-600 bg-black text-white font-bold text-sm flex flex-1 justify-center rounded-md text-center items-center w-64 h-64">Cadastro<br />De<br />Cores</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}