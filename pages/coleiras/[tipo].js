import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";


export const getServerSideProps = async (ctx) => {
  const tipo = ctx.query.tipo;
  if(tipo != "fina" && tipo !== "grossa"){
    return {
      redirect: {
        permanent: false,
        destination: "/coleiras",
      },
      props:{},
    };
  }
  return {
    props:{
      tipo: tipo,
    }
  }
}


export default function Coleiras(props) {
  const router = useRouter() 
  const [n, setN] = useState("")
  const [colors, setColors] = useState([])
  const [cor1, setCor1] = useState("#000000")
  const [cor2, setCor2] = useState("#000000")
  const [cor3, setCor3] = useState("#000000")
  const [cor4, setCor4] = useState("#000000")
  useEffect(()=>{
    let cores = [["Preto","#000000"],["Branco","#FFFFFF"],["Azul","#0000FF"],["Amarelo","#FFFF00"],["Vermelho","#FF0000"],["Salmão","#FA8072"],["Céu Azul Profundo","#00BFFF"],["Ouro","#FFD700"],["Azul aço","#4682B4"],["centáurea azul","#6495ED"],["Ciano","#00FFFF"],["água-marinha","#7FFFD4"],["Azul escuro","#00008B"],["Trapaceiro azul","#1E90FF"],["Turquesa","#40E0D0"],["Ciano escuro","#008B8B"],["Verde","#008000"],["Marrom Sela","#8B4513"],["Índigo","#4B0082"],["Roxo médio (lilás)","#9370DB"],["Vermelho Violeta Médio","#C71585"],["Rosa escuro","#FF1493"],["Luz rosa","#FFB6C1"],["Tijolo Refratário","#B22222"],["Laranja Vermelho","#FF4500"],["Bisque","#FFE4C4"],["Laranja","#FFA500"],["Laranja escuro","#FF8C00"],["Verde escuro","#006400"],]
    setColors(cores)
    if(props.tipo == "fina"){
      setN("3")
     }else if(props.tipo == "grossa"){
      setN("4")
     }else{
      router.push("/pulseiras")
     }
  },[])
  return (
    <>
      <Header />
      <main className="flex flex-1 h-full my-5 mx-5 justify-center items-center flex-col">
        <h1 className="text-4xl font-bold mb-2">Coleira - {props.tipo} </h1>
        <h2 className="italic text-center mb-14">Unisex <br/>Com<br/>{n} Fios e {n} Cores Sua Preferencia!</h2>
        <form className="flex flex-col w-full h-60 p-5 items-center justify-center mt-16">
        <div className="hidden md:flex flex-wrap m-5 justify-center">
            <select style={{"background-color":cor1}} className={`w-fit m-2 h-14 p-2 ${cor1 === "#000000"? "text-white":"text-black"} rounded-md outline-none border-black border`}onChange={(e)=>{setCor1(e.currentTarget.value);}}>
              {colors.map((cor)=>(<option key={cor[1]} value={cor[1]}>{cor[0]}</option>))}
            </select>
            <select style={{"background-color":cor2}} className={`w-fit m-2 h-14 p-2 ${cor2 === "#000000"? "text-white":"text-black"} rounded-md outline-none border-black border`}onChange={(e)=>{setCor2(e.currentTarget.value);}}>
              {colors.map((cor)=>(<option key={cor[1]} value={cor[1]}>{cor[0]}</option>))}
            </select>
            <select style={{"background-color":cor3}} className={`w-fit m-2 h-14 p-2 ${cor3 === "#000000"? "text-white":"text-black"} rounded-md outline-none border-black border`}onChange={(e)=>{setCor3(e.currentTarget.value);}}>
              {colors.map((cor)=>(<option key={cor[1]} value={cor[1]}>{cor[0]}</option>))}
            </select>
            {n === "4"?
                <select style={{"background-color":cor4}} className={`w-fit m-2 h-14 p-2 ${cor4 === "#000000"? "text-white":"text-black"} rounded-md outline-none border-black border`}onChange={(e)=>{setCor4(e.currentTarget.value);}}>
                  {colors.map((cor)=>(<option key={cor[1]} value={cor[1]}>{cor[0]}</option>))}
                </select>
                :
                <></>
            }
        </div>
        <div className="md:hidden grid grid-cols-2 grid-rows-2 gap-5 p-5 justify-center">
            <select style={{"background-color":cor1, "color":cor1}} className={`w-14 h-14 p-2 rounded-md outline-none border-black border`}onChange={(e)=>{setCor1(e.currentTarget.value);}}>
              {colors.map((cor)=>(<option key={cor[1]} value={cor[1]}>{cor[0]}</option>))}
            </select>
            <select style={{"background-color":cor2, "color":cor2}} className={`w-14 h-14 p-2 rounded-md outline-none border-black border`}onChange={(e)=>{setCor2(e.currentTarget.value);}}>
              {colors.map((cor)=>(<option key={cor[1]} value={cor[1]}>{cor[0]}</option>))}
            </select>
            <select style={{"background-color":cor3, "color":cor3}} className={`w-14 h-14 p-2 rounded-md outline-none border-black border`}onChange={(e)=>{setCor3(e.currentTarget.value);}}>
              {colors.map((cor)=>(<option key={cor[1]} value={cor[1]}>{cor[0]}</option>))}
            </select>
            {n === "4"?
                <select style={{"background-color":cor4, "color":cor4}} className={`w-14 h-14 p-2 rounded-md outline-none border-black border`}onChange={(e)=>{setCor4(e.currentTarget.value);}}>
                  {colors.map((cor)=>(<option key={cor[1]} value={cor[1]}>{cor[0]}</option>))}
                </select>
                :
                <></>
            }

        </div>
        
        <div>
          <div className="bg-[#B6B6B6] w-72 font-bold text-sm justify-center items-center shadow-lg shadow-[#B6B6B6] rounded-xl p-2 mb-5 whitespace-nowrap ">QUAL A MEDIDA DO SEU BRAÇO ?</div>
          <input type={"tel"} placeholder="EM CM:" className="bg-[#D9D9D9] outline-none w-72 mb-5 font-bold text-sm justify-center items-center shadow-md border-none shadow-neutral-800 rounded-xl p-2 whitespace-nowrap " />
          <Link href={"/ajuda"}><p className="text-[#686868] font-bold text-center w-full text-sm">Não SabeMedir<br/>Siga O PASSO A PASSO<br/>CLICANDO AQUI</p></Link>
        </div>
          <button type="submit" className="bg-black w-72 text-white font-bold rounded-xl p-2 mt-3 lg:mb-28 mb-16 ">FINALIZE SUA ENCOMENDA AGORA<br/>COM 1 CLIQUE</button>
        </form>
      
      </main>
      <Footer />
    </>
  )
}

