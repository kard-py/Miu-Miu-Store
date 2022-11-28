import Header from "../../../src/components/Header";
import Footer from "../../../src/components/Footer";
import axios from "axios";
import { useRouter } from "next/router";


export const getServerSideProps = async (ctx) => {
    const cores = await fetch("https://miu-miu-store.vercel.app/api/listCores", {method: "GET"}).then((Response)=>{
      return Response.json()
    })
    if(cores.msg != "OK"){
      return {
        redirect: {
          permanent: false,
          destination: "/pulseiras",
        },
        props:{},
      };
    }
    return {
      props:{
        cores: cores.data,
      }
    }
  }
  

export default function Lista({cores}) {

    const router = useRouter()

    const handleRemove = async (id)=>{

        console.log(id);
        const r = await axios.delete(`/api/removeCor/${id}`)
        if(r.data.msg == "OK"){
            alert("Cor Removida Com Sucesso Recarregando a Pagina")
            router.reload()
            
        }
    }

  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center mb-16">
        <h1 className="text-3xl font-bold text-center my-5">Lista De Cores</h1>
        <div className="flex flex-1 w-full justify-center flex-wrap max-w-2xl ">
            {cores.map((cor)=>(
                <div className="w-72 h-fit p-2 rounded-lg flex flex-col items-center justify-center text-center m-2 border border-black">
                  <span className="text-lg font-bold mb-2 whitespace-nowrap">{cor.nome}</span>
                  <div style={{background:cor.codigo, color: cor.codigo}} className="w-full h-10 before:content-['.'] border-black border p-2"></div>
                  <button onClick={(e)=>{e.preventDefault(); handleRemove(cor._id)}} className="bg-black text-white font-bold text-lg rounded-md mt-2 p-2">REMOVER COR</button>
                </div>
            ))}
            
            
            
            
        </div>
      </main>
      <Footer />
    </>
  )
}