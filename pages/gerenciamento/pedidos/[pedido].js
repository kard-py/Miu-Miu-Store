import Header from "../../../src/components/Header";
import Footer from "../../../src/components/Footer";
import Link from "next/link";
import axios from "axios";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const getServerSideProps = async (ctx) => {
  let uid = ctx.query.pedido;
  let method = ctx.req.headers.referer.split(":");
  let url = `${method[0]}://${ctx.req.headers.host}`;
  const res = await axios.get(`${url}/api/pedido/${uid}`);
  console.log(res.data.data);
  return {
    props: {
      uid: uid,
      pedido: res.data.data,
    },
  };
};

export default function Pedidos(props) {
  const [data, setData] = useState(props.pedido);
  const [dateRegs, setDateRegs] = useState(null);
  const [dateEntr, setDateEntr] = useState(null);
  const router = useRouter();

  useEffect(() => {
    let dr = new Date(data.addIn);
    setDateRegs(
      `${dr.getUTCDate()}/${
        dr.getUTCMonth() + 1
      }/${dr.getFullYear()} as ${dr.getHours()}:${dr.getMinutes()}`
    );
    let de = data.data.entrega.split("-");
    setDateEntr(`${de[2]}/${de[1]}/${de[0]}`);
  }, []);

  const handleDelete = async (e) => {
    e.preventDefault();
    const r = await axios.delete(`/api/removePedido/${props.uid}`);
    if (r.data.msg === "OK") {
      alert("Pedido Removido Com Sucesso! Voltando Para A paginha de Pedidos");
      router.push("/gerenciamento/pedidos");
    }
  };
  const handleStatus = async (e) => {
    e.preventDefault();
    const r = await axios.put(`/api/upPedido/${props.uid}`, {
      status: "FEITA",
    });
    const res = await axios.get(`/api/pedido/${props.uid}`);
    setData(res.data.data);
    if (r.data.msg === "OK") {
      alert("Pedido Atualizado Com Sucesso!");
    }
  };

  return (
    <>
      <Header />
      <main className="flex flex-1 min-h-full flex-col justify-center items-center mb-5">
        <h1 className="text-3xl font-bold text-center my-5">
          Gerenciamento
          <br />
          De
          <br />
          Pedido
        </h1>
        <div className="flex flex-col justify-center items-start gap-2">
          <p className="text-2xl font-bold">{data.data.tipo}</p>
          <p className="text-xl">
            Tamanho: <span className="font-bold">{data.data.medida}cm</span>
          </p>
          <p className="flex items-center justify-center text-xl">
            Cores:{" "}
            {data.data.cores.map((cor, i) => (
              <div
                key={i}
                className={`m-1 border border-black w-7 h-7`}
                style={{ backgroundColor: cor }}
              />
            ))}
          </p>
          <p className="text-xl">
            Nome Do Cliente:{" "}
            <span className="font-bold">{data.data.cliente}</span>
          </p>
          <p className="text-xl">
            Data De Enrega: <span className="font-bold">{dateEntr}</span>
          </p>
          <p className="text-xl">
            Status Do Pedido:{" "}
            <span className="font-bold">{data.data.status}</span>
          </p>
        </div>

        <div>
          {data.data.status !== "FEITA" && (
            <button
              className="w-72 bg-black h-16 text-center text-white font-bold rounded-xl my-5 flex flex-row flex-nowrap items-center justify-center"
              onClick={async (e) => {
                handleStatus(e);
              }}
            >
              MARCAR COMO FEITO
            </button>
          )}

          <button
            className="w-72 bg-black h-16 text-center text-white font-bold rounded-xl my-5 flex flex-row flex-nowrap items-center justify-center"
            onClick={async (e) => {
              handleDelete(e);
            }}
          >
            MARCAR COMO ENTREGE E APAGAR
          </button>

          {/* <button className="w-72 bg-black h-16 text-center text-white font-bold rounded-xl mb-5 flex flex-row flex-nowrap items-center justify-center">
          <BsWhatsapp size={20} className="mr-5"/>
            WhatsApp Do Cliente
          </button>
          <button className="w-72 bg-black h-16 text-center text-white font-bold rounded-xl mb-5 flex flex-row flex-nowrap items-center justify-center">
            <BsInstagram size={20} className="mr-5"/>
            Instagram Do Cliente
          </button> */}
        </div>
      </main>
      <Footer />
    </>
  );
}
