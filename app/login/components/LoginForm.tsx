import InputForm from "@/shared/components/form/InputForm";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import loginSchema from "../schemas/loginSchema";
import logoLogin from '@/public/img/logo-login.png'
import Image from "next/image";
import { loginStore } from "../store/loginStore";
import PasswordForm from "@/shared/components/form/PasswordForm";
import Button from "@/shared/components/ui/Button";
import { z } from "zod";
import { useEffect, useState } from "react";
import { fetchData } from "@/lib/fetchFunction";
import { useLoginService } from "../hooks/useLoginService";
import { useRouter  } from "next/navigation";
import Cookies from "js-cookie";
import AuthStore from "@/shared/store/authStore";


export default function LoginForm() {
    const { isLoggedIn} = AuthStore()
    console.log(isLoggedIn)
    const { setTypeLogin } = loginStore()
    const { login } = useLoginService()
    const [loginError, setLoginError] = useState(false)
    const formLogin = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
    });

    // useEffect(() => {
    //     fetch('http://localhost:1230/cookie', {
    //         credentials: 'include'
    //     })
    // }, [])

    const onSubmit = async (data: z.infer<typeof loginSchema>) => {
        setLoginError(false)
        login.mutate(data, {
            onError: () => setLoginError(true),
            onSuccess: () => {
                // window.location.replace('/box')
            }
        })
    }

    return (
        <FormProvider {...formLogin}>
            <Image
                className="self-center"
                src={logoLogin}
                alt="logo"
            />
            <form onSubmit={formLogin.handleSubmit(onSubmit)} className="flex flex-col gap-9">
                <h1 className="text-highlight text-4xl font-semibold">
                    Te damos la bienvenida
                </h1>
                <InputForm
                    label="Usuario"
                    id="username"
                    placeholder="Ingresar usuario"
                    className="border-[rgba(209,197,254,1)]"
                    error={loginError}
                />
                <div className="flex flex-col gap-2">
                    <PasswordForm
                        label="Contraseña"
                        id="password"
                        placeholder="Ingresar contraseña"
                        className="border-[rgba(209,197,254,1)]"
                        error={loginError}
                    />
                    {loginError && <span className="text-red">No se encuentra el usuario registrado</span>}
                </div>

                <Button className="text-xl h-12" type="submit" disabled={login.isPending || login.isSuccess}>
                    Iniciar sesión
                </Button>
                <Button variant="outline" className="text-xl h-12" onClick={() => setTypeLogin('target')}>
                    Ingresar mediante tarjeta
                </Button>
            </form>
        </FormProvider>
    )
}