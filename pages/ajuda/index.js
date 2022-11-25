import Footer from "../../src/components/Footer";
import Header from "../../src/components/Header";
import Link from "next/link";
export default function Ajuda(){
    return (
    <>
    <Header/>
    <main className="flex flex-1 h-full py-5 px-5 justify-center items-center flex-col">
        <h1 className="text-3xl font-bold">AJUDA</h1>
        <Link href="/">Clique Aqui Para Voltar A Pagina Inicial</Link>
      </main>
    <Footer />
    </>
    )
}