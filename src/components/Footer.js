import { useEffect, useState } from "react"
export default function Footer(){
    const [ano, setAno] = useState(null)
    useEffect(()=>{
        var year = new Date().getFullYear()
        setAno(year)
    },[])

    return (
        <footer className="bg-black fixed text-white bottom-0 w-full h-7 justify-center items-center flex flex-1">
            <p>&copy; <span className="font-bold">{ano}</span> Copyright - Miu Miu Store</p>
        </footer>
    )
}