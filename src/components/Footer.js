import { useEffect, useState } from "react";
export default function Footer() {
  const [ano, setAno] = useState(null);
  useEffect(() => {
    var year = new Date().getFullYear();
    setAno(year);
  }, []);

  return (
    <footer className="bg-black fixed text-white bottom-0 w-full sm:h-7 h-16 justify-center items-center flex flex-1">
      <p>
        &copy; <span className="font-bold">{ano}</span> Copyright - Miu Miu
        Store
      </p>
    </footer>
  );
}
