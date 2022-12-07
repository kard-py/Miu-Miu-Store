import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Chaveiros() {
  return (
    <>
      <Header />
      <main className="flex flex-1 h-full my-5 mx-5 justify-center items-center flex-col">
        <h1 className="text-4xl font-bold">Chaveiros</h1>
        <h2 className="italic text-center">
          Chaveiros Fio A Fio Trançadas a Mão <br />
          De
          <br />
          Sua Preferencia!
        </h2>
        <h3 className="text-xl font-bold w-full text-center">
          Escolha a sua Agora mesmo !
        </h3>

        <div className="flex">
          <Link href={"/chaveiros/fino"} className="flex w-1/2 m-2">
            <div className="bg-neutral-700 p-5 w-full items-center justify-center text-center rounded-lg">
              <span className="text-lg text-white font-bold">FINO</span>
              <p className="text-sm text-white italic">
                3 Fios
                <br />
                Até 3 Cores
              </p>
            </div>
          </Link>
          <Link href={"/chaveiros/grosso"} className="flex w-1/2 m-2">
            <div className="bg-neutral-700 p-5 w-full items-center justify-center text-center rounded-lg">
              <span className="text-lg text-white font-bold">GROSSO</span>
              <p className="text-sm text-white italic">
                4 Fios
                <br />
                Até 4 Cores
              </p>
            </div>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
