import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen dark">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-200 mb-4 text-center">Poke API ++</h2>
        <form className="flex flex-col">
            <Link href={'/login'} className="text-center bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-green-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit">Iniciar Sesion</Link>
            <Link href={'/register'} className="text-center bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-green-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit">Registrarse</Link>
        </form>
      </div>
    </div>
  );
}
