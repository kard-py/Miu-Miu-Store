import Image from "next/image"
import Logo from "../../public/logo.jpg"
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import Link from "next/link";
export default function Header() {
  return (
    <>
      <div className="w-full h-20 bg-black flex flex-1 flex-row items-center justify-start">
        <div className="items-center justify-center">
          <Link href="/">
          <Image
          alt="Logo Miu Miu"
          src={Logo}
          width={75}
          height={75}
          />
          </Link>
        </div>
        <div className="flex flex-1">
          <Link href="/">
          <h1 className="text-white lg:text-5xl text-xl font-bold">Miu Miu Store</h1>
          </Link>
        </div>
        <div className="mr-5">
          <a 
          className="text-white flex flex-row flex-nowrap items-center justify-center pb-2" 
          href="https://www.instagram.com/_miu.miu_0/">
						<BsInstagram size={20} className="mr-2"/>
						Instagram
					</a>
          <a 
          className="text-white flex flex-row flex-nowrap items-center justify-center" 
          href="https://wa.me/+5565998114183">
						<BsWhatsapp size={20} className="mr-2"/>
						WhatsApp
					</a>
        </div>
      </div>
    </>
  )
}