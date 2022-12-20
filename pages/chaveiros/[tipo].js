import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

export const getServerSideProps = async (ctx) => {
  const tipo = ctx.query.tipo;
  const cores = await fetch("https://miu-miu-store.vercel.app/api/listCores", {
    method: "GET",
  }).then((Response) => {
    return Response.json();
  });
  if (tipo != "fino" && tipo !== "grosso") {
    return {
      redirect: {
        permanent: false,
        destination: "/chaveiros",
      },
      props: {},
    };
  }
  return {
    props: {
      cores: cores.data,
      tipo: tipo,
    },
  };
};

export default function Chaveiros(props) {
  const router = useRouter();
  const [n, setN] = useState("");
  const [colors, setColors] = useState([]);
  const [cor1, setCor1] = useState("#000000");
  const [cor2, setCor2] = useState("#000000");
  const [cor3, setCor3] = useState("#000000");
  const [cor4, setCor4] = useState("#000000");
  const [nomeCliente, setNomeCliente] = useState("");
  const [dataEntrega, setDataEntrega] = useState("");
  const [medida, setMedida] = useState("");
  useEffect(() => {
    let cores = props.cores;
    console.log(cores);
    setColors(cores);
    if (props.tipo == "fino") {
      setN("3");
    } else if (props.tipo == "grosso") {
      setN("4");
    } else {
      router.push("/chaveiros");
    }
  }, []);

  const handleSubmit = async () => {
    if (n === "3") {
      let data = {
        tipo: "Chaveiro Fino",
        fios: n,
        cores: [cor1, cor2, cor3],
        medida: medida,
        cliente: nomeCliente,
        entrega: dataEntrega,
        status: "REGISTRADA",
      };
      const r = await axios.put(
        "https://miu-miu-store.vercel.app/api/addPedido",
        { data: data }
      );
      if (r.data.msg == "OK") {
        router.push("/");
      }
    } else if (n === "4") {
      let data = {
        tipo: "Chaveiro Grosso",
        fios: n,
        cores: [cor1, cor2, cor3, cor4],
        medida: medida,
        cliente: nomeCliente,
        entrega: dataEntrega,
        status: "REGISTRADA",
      };
      const r = await axios.put(
        "https://miu-miu-store.vercel.app/api/addPedido",
        { data: data }
      );
      if (r.data.msg == "OK") {
        alert("Pedido Registrado Com Sucesso Voltando Para Pagina Inicial");
        router.push("/");
      }
    }
  };

  return (
    <>
      <Header />
      <main className="flex flex-1 h-full my-5 pb-10 mx-5 justify-center items-center flex-col">
        <h1 className="text-4xl font-bold mb-2">Chaveiro - {props.tipo} </h1>
        <h2 className="italic text-center">
          Unisex <br />
          Com
          <br />
          {n} Fios e {n} Cores Sua Preferencia!
        </h2>
        <form
          className="flex flex-col w-full h-fit p-2 items-center mb-10"
          onSubmit={async (e) => {
            e.preventDefault();
            await handleSubmit();
          }}
        >
          <div className="hidden md:flex flex-wrap m-5 justify-center">
            <select
              style={{ "background-color": cor1 }}
              className={`w-fit m-2 h-14 p-2 ${
                cor1 === "#000000" ? "text-white" : "text-black"
              } rounded-md outline-none border-black border`}
              onChange={(e) => {
                setCor1(e.currentTarget.value);
              }}
            >
              <option value={"#00000"}></option>
              {colors.map((cor) => (
                <option key={cor["codigo"]} value={cor["codigo"]}>
                  {cor["nome"]}
                </option>
              ))}
            </select>
            <select
              style={{ "background-color": cor2 }}
              className={`w-fit m-2 h-14 p-2 ${
                cor2 === "#000000" ? "text-white" : "text-black"
              } rounded-md outline-none border-black border`}
              onChange={(e) => {
                setCor2(e.currentTarget.value);
              }}
            >
              <option value={"#00000"}></option>
              {colors.map((cor) => (
                <option key={cor["codigo"]} value={cor["codigo"]}>
                  {cor["nome"]}
                </option>
              ))}
            </select>
            <select
              style={{ "background-color": cor3 }}
              className={`w-fit m-2 h-14 p-2 ${
                cor3 === "#000000" ? "text-white" : "text-black"
              } rounded-md outline-none border-black border`}
              onChange={(e) => {
                setCor3(e.currentTarget.value);
              }}
            >
              <option value={"#00000"}></option>
              {colors.map((cor) => (
                <option key={cor["codigo"]} value={cor["codigo"]}>
                  {cor["nome"]}
                </option>
              ))}
            </select>
            {n === "4" ? (
              <select
                style={{ "background-color": cor4 }}
                className={`w-fit m-2 h-14 p-2 ${
                  cor4 === "#000000" ? "text-white" : "text-black"
                } rounded-md outline-none border-black border`}
                onChange={(e) => {
                  setCor4(e.currentTarget.value);
                }}
              >
                <option value={"#00000"}></option>
                {colors.map((cor) => (
                  <option key={cor["codigo"]} value={cor["codigo"]}>
                    {cor["nome"]}
                  </option>
                ))}
              </select>
            ) : (
              <></>
            )}
          </div>
          <div className="md:hidden grid grid-cols-2 grid-rows-2 gap-5 p-5 justify-center">
            <select
              style={{ "background-color": cor1, color: cor1 }}
              className={`w-14 h-14 p-2 rounded-md outline-none border-black border`}
              onChange={(e) => {
                setCor1(e.currentTarget.value);
              }}
            >
              <option value={"#00000"}></option>
              {colors.map((cor) => (
                <option key={cor["codigo"]} value={cor["codigo"]}>
                  {cor["nome"]}
                </option>
              ))}
            </select>
            <select
              style={{ "background-color": cor2, color: cor2 }}
              className={`w-14 h-14 p-2 rounded-md outline-none border-black border`}
              onChange={(e) => {
                setCor2(e.currentTarget.value);
              }}
            >
              <option value={"#00000"}></option>
              {colors.map((cor) => (
                <option key={cor["codigo"]} value={cor["codigo"]}>
                  {cor["nome"]}
                </option>
              ))}
            </select>
            <select
              style={{ "background-color": cor3, color: cor3 }}
              className={`w-14 h-14 p-2 rounded-md outline-none border-black border`}
              onChange={(e) => {
                setCor3(e.currentTarget.value);
              }}
            >
              <option value={"#00000"}></option>
              {colors.map((cor) => (
                <option key={cor["codigo"]} value={cor["codigo"]}>
                  {cor["nome"]}
                </option>
              ))}
            </select>
            {n === "4" ? (
              <select
                style={{ "background-color": cor4, color: cor4 }}
                className={`w-14 h-14 p-2 rounded-md outline-none border-black border`}
                onChange={(e) => {
                  setCor4(e.currentTarget.value);
                }}
              >
                <option value={"#00000"}></option>
                {colors.map((cor) => (
                  <option key={cor["codigo"]} value={cor["codigo"]}>
                    {cor["nome"]}
                  </option>
                ))}
              </select>
            ) : (
              <></>
            )}
          </div>

          <div>
            <div className="bg-[#B6B6B6] w-72 font-bold text-sm justify-center items-center shadow-lg shadow-[#B6B6B6] rounded-xl p-2 mb-5 whitespace-nowrap ">
              QUAL A MEDIDA DO SEU BRAÇO ?
            </div>
            <input
              required
              type={"tel"}
              placeholder="EM CM:"
              value={medida}
              onChange={(e) => {
                e.preventDefault();
                setMedida(e.currentTarget.value);
              }}
              className="bg-[#D9D9D9] outline-none w-72 mb-5 font-bold text-sm justify-center items-center shadow-md border-none shadow-neutral-800 rounded-xl p-2 whitespace-nowrap "
            />
            <Link href={"/ajuda"}>
              <p className="text-[#686868] font-bold text-center w-full text-sm">
                Não SabeMedir
                <br />
                Siga O PASSO A PASSO
                <br />
                CLICANDO AQUI
              </p>
            </Link>
          </div>

          <div className="w-full flex flex-col items-center">
            <div className="bg-[#B6B6B6] w-72 font-bold text-center text-sm justify-center items-center shadow-lg shadow-[#B6B6B6] rounded-xl p-2 my-5 whitespace-nowrap ">
              QUAL O NOME DO CLIENTE
              <br />E<br /> DATA DE ENTREGA
            </div>
            <input
              required
              type={"text"}
              placeholder="Nome Do Cliente:"
              value={nomeCliente}
              onChange={(e) => {
                e.preventDefault();
                setNomeCliente(e.currentTarget.value);
              }}
              className="bg-[#D9D9D9] outline-none w-72 mb-5 font-bold text-sm justify-center items-center shadow-md border-none shadow-neutral-800 rounded-xl p-2 whitespace-nowrap h-10"
            />
            <input
              required
              type={"date"}
              placeholder="Data De Entrega:"
              value={dataEntrega}
              onChange={(e) => {
                e.preventDefault();
                setDataEntrega(e.currentTarget.value);
              }}
              className="bg-[#D9D9D9] outline-none w-72 mb-5 font-bold text-sm justify-center items-center shadow-md border-none shadow-neutral-800 rounded-xl p-2 whitespace-nowrap h-10"
            />
          </div>
          <button
            type="submit"
            className="bg-black w-72 text-white font-bold rounded-xl p-2 mt-3"
          >
            FINALIZE SUA ENCOMENDA AGORA
            <br />
            COM 1 CLIQUE
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
