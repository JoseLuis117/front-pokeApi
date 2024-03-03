'use client'
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import StyledButton from "@/components/Button";
import TextGradient from "@/components/textGradient";
interface UserData {
    name: string;
    email: string;
    password: string;
    repeat: string;
}

export default function Register() {
    const router = useRouter();
    const params = useSearchParams();
    const error = params.get('error');
    const { register, handleSubmit, formState: { errors }, getValues } = useForm<UserData>();
    const onSubmit = async(data: UserData) => {
        const {repeat, ...userData} = data;
        const req = await fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        const res = await req.json();
        res.response.error? router.push(`/register?error=${res.response.error}`) : router.push('/login?success=true')
    }
    const [close, setClose] = useState(false);
    const messages = {
        name: "El nombre de usuario no es valido, no debe tener espacios ni empezar por un numero",
        email: "El correo no es valido",
        password: "El formato de la contraseña es incorrecto, por favor vuelva a ingresarla",
        repeat: "Las contraseñas no coinciden, por favor vuelva a ingresar las contraseñas"
    };
    return (
        <div className="flex flex-col items-center justify-center dark h-full p-8">
            <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-8 space-y-8">
                <TextGradient text="Registro" typeText="h2" fontSize="2xl" position="center" />
                {(error && close===false) && <div className="flex justify-center">
                    <div className="max-w-xs w-full bg-red-500 text-sm text-white rounded-md shadow-lg m-0" role="alert">
                        <div className="flex p-4">
                            {error}
                            <div className="ml-auto">
                                <button onClick={()=>setClose(true)} type="button" className="inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-md text-white/[.5] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-green-500 transition-all text-sm dark:focus:ring-offset-green-500 dark:focus:ring-green-700">
                                    <span className="sr-only">Close</span>
                                    <svg className="w-3.5 h-3.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z" fill="currentColor" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>}
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
                    <div className="space-y-4 flex flex-col">
                        <label htmlFor="name" className="text-sm bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text text-transparent font-bold">Usuario</label>
                        <input {...register("name", { required: 'El nombre es obligatorio', pattern: { value: /^[a-zA-Z_][a-zA-Z0-9_]*$/, message: messages.name } })} name="name" type="text" placeholder="Agrega tu nombre de usuario" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" />
                        {errors.name === undefined && <span className="font-bold bg-gradient-to-r from-blue-300 to-violet-300 bg-clip-text text-transparent text-sm">Ejemplo: Pikachu47.</span>}
                        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                    </div>
                    <div className="space-y-4 flex flex-col">
                        <label htmlFor="email" className="text-sm bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text text-transparent font-bold">Correo</label>
                        <input {...register("email", { required: 'El email es obligatorio', pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: messages.email } })} name="email" type="email" placeholder="Agrega tu correo electronico" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" />
                        {errors.email === undefined && <span className="font-bold bg-gradient-to-r from-blue-300 to-violet-300 bg-clip-text text-transparent text-sm">Ejemplo: correo@correo.com.</span>}
                        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                    </div>
                    <div className="space-y-4 flex flex-col">
                        <label htmlFor="password" className="text-sm bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text text-transparent font-bold">Contraseña</label>
                        <input {...register("password", { required: 'La contraseña es obligatoria, por favor ingresa una contraseña valida', pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, message: messages.repeat } })} name="password" type="password" placeholder="Agrega tu contraseña" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" />
                        {errors.password === undefined && <span className="font-bold bg-gradient-to-r from-blue-300 to-violet-300 bg-clip-text text-transparent text-sm">La contraseña debe tener al menos 8 caracteres, y al menos una letra minuscula, mayuscula y un numero</span>}
                        {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                    </div>
                    <div className="space-y-4 flex flex-col">
                        <label htmlFor="repeat" className="text-sm bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text text-transparent font-bold">Repetir contraseña</label>
                        <input {...register("repeat", {required:'Debes repetir la contraseña' ,validate: value => value === getValues('password') || 'La contraseña no coincide' })} name="repeat" type="password" placeholder="Repite tu contraseña" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" />
                        {errors.repeat === undefined && <span className="font-bold bg-gradient-to-r from-blue-300 to-violet-300 bg-clip-text text-transparent text-sm">Las contraseñas deben ser las mismas</span>}
                        {errors.repeat && <span className="text-red-500 text-sm">{errors.repeat.message}</span>}
                    </div>
                    <StyledButton text="Registrarse" type="submit" link={false}/>
                </form>

                <div className="flex justify-center mt-4 flex-col">
                    <Link href='/recover' className="text-sm font-bold bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text text-transparent hover:from-fuchsia-50 hover:to-cyan-50">¿Olvidaste tu contraseña?</Link>
                    <Link href='/login' className="text-sm font-bold bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text text-transparent hover:from-fuchsia-50 hover:to-cyan-50">¿Ya tienes una cuenta?</Link>
                </div>
            </div>
        </div>
    );
}