import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import Link from "next/link";
import Image from "next/image";

import timg1 from "../../public/TORNOZELEIRA 1.jpeg";
import timg2 from "../../public/TORNOZELEIRA 2.jpeg";
import timg3 from "../../public/TORNOZELEIRA 3.jpeg";
import timg4 from "../../public/TORNOZELEIRA 4.jpeg";

const timgs = [timg1, timg2, timg3, timg4];

export default function Tornozeleiras() {
  return (
    <>
      <Header />
      <main className="flex flex-1 h-full my-5 mx-5 justify-center items-center flex-col">
        <h1 className="text-4xl font-bold">Tornozeleiras</h1>
        <h2 className="italic text-center">
          Tornozeleiras Fio A Fio Trançadas a Mão <br />
          De
          <br />
          Sua Preferencia!
        </h2>
        <div className="overflow-hidden max-w-md">
          <div className="flex overflow-x-auto scroll-smooth gap-6 snap-x snap-mandatory before:shrink-0 before:w-[30vw] after:shrink-0 after:w-[30vw]">
            {timgs.map((i) => (
              <li className="shrink-0 snap-center list-none">
                <Image
                  key={i}
                  src={i}
                  alt="/"
                  className="w-60 h-72 rounded-lg"
                />
              </li>
            ))}
          </div>
        </div>
        <h3 className="text-xl font-bold w-full text-center">
          Escolha a sua Agora mesmo !
        </h3>

        <div className="flex">
          <Link href={"/tornozeleiras/fina"} className="flex w-1/2 m-2">
            <div className="bg-neutral-700 p-5 w-full items-center justify-center text-center rounded-lg">
              <span className="text-lg text-white font-bold">FINA</span>
              <p className="text-sm text-white italic">
                3 Fios
                <br />
                Até 3 Cores
              </p>
            </div>
          </Link>
          <Link href={"/tornozeleiras/grossa"} className="flex w-1/2 m-2">
            <div className="bg-neutral-700 p-5 w-full items-center justify-center text-center rounded-lg">
              <span className="text-lg text-white font-bold">GROSSA</span>
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
