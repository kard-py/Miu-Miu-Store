import Header from "../../../src/components/Header";
import Footer from "../../../src/components/Footer";
import Link from "next/link";

import { useEffect, useState } from "react";

import axios from "axios";

export default function Pedidos() {
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const r = axios.get("/api/listPedidos").then((res) => {
      setPedidos(res.data.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Header />
      <main className="flex flex-col justify-center mb-10 items-center">
        <h1 className="text-3xl font-bold text-center my-5">
          Lista de Pedidos:
        </h1>
        <div className="flex flex-wrap mb-10 max-w-2xl justify-center items-center">
          {loading ? (
            <div>Caregando...</div>
          ) : (
            <>
              {pedidos.map((pedido, i) => (
                <Link
                  key={i}
                  href={`/gerenciamento/pedidos/${pedido.uid}`}
                  className={`flex-col m-3 ${
                    pedido.data.status == "REGISTRADA" && "bg-black text-white"
                  } ${
                    pedido.data.status == "FEITA" && "bg-[#787878] text-black"
                  } shadow-md shadow-black font-bold text-sm flex justify-center rounded-md text-center hover:bg-green-600 items-center w-36 h-36`}
                >
                  {pedido.data.tipo}
                  <br />-<br />
                  <span className="italic">{pedido.data.cliente}</span>
                  <span className="italic">{pedido.data.status}</span>
                </Link>
              ))}
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
