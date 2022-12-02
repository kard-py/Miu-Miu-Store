import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import Link from "next/link";
export default function Menu() {
  return (
    <>
      <Header />
      <main className="flex flex-1 h-full my-5 mx-5 justify-center items-center">
        <div className="flex flex-1 max-w-xl items-center justify-center">
          <div className="w-full h-full grid grid-rows-2 grid-cols-3 grid-flow-row gap-8 items-center justify-center">
            <Link
              href="pulseiras"
              className="w-full bg-black h-24 text-sm text-white flex flex-1 justify-center items-center text-center duration-300 hover:bg-green-600 shadow-zinc-800 shadow-md"
            >
              Pulseiras
            </Link>
            <Link
              href="tornozeleiras"
              className="w-full bg-black h-24 text-sm text-white flex flex-1 justify-center items-center text-center duration-300 hover:bg-green-600 shadow-zinc-800 shadow-md"
            >
              Tornozeleiras
            </Link>
            {/* <Link href="chaveiros" className="w-full bg-black h-24 text-sm text-white flex flex-1 justify-center items-center text-center duration-300 hover:bg-green-600 shadow-zinc-800 shadow-md">Chaveiros</Link> */}
            {/* <Link href="coleiras" className="w-full bg-black h-24 text-sm text-white flex flex-1 justify-center items-center text-center duration-300 hover:bg-green-600 shadow-zinc-800 shadow-md">Coleiras</Link> */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
