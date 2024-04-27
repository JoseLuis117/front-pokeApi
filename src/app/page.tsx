import StyledButton from "@/components/Button";
import TextGradient from "@/components/textGradient";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen dark">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
        <TextGradient text="Poke API ++" typeText="h1" position="center" fontSize="4xl" />
        <form className="flex flex-col">
            <StyledButton text="Iniciar Sesión" type="submit" link={true} href="/login" />
            <StyledButton text="Registrarse" type="submit" link={true} href="/register" />
        </form>
      </div>
    </div>
  );
}
