import Image from "next/image";
import logoLogin from '@/public/img/logo-login.png'
import loginCard from '@/public/img/login-card.png'
import { loginStore } from "../store/loginStore";
import { CircleArrowLeft, ScanLine } from "lucide-react";
import ScanIcon from "./ScanIcon";
import { useEffect, useRef, useState } from "react";
import { poppins } from "@/app/fonts";
import styles from './login-target.module.css'
import { useLoginService } from "../hooks/useLoginService";

export default function LoginTarget() {
    const { setTypeLogin } = loginStore()
    const { loginWithTarget } = useLoginService()
    const targetRef = useRef<HTMLDivElement | null>(null)
    const targedId = useRef('')
    const [shake, setShake] = useState(false)
    const [loginError, setLoginError] = useState(false)
    const handleClickBack = () => {
        setTypeLogin('form')
    }

    useEffect(() => {
        if (targetRef.current) {
            targetRef.current.focus({
                preventScroll: true
            })
        }
    }, [])

    const login = (target: string) => {
        loginWithTarget.mutate({
            cardNumber: target
        }, {
            onError: () => {
                shakeCard()
                setLoginError(true)
            }
        })
    }

    const shakeCard = () =>{
        setShake(true)
        setTimeout(() => {
            setShake(false)
        }, 300)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        const key = e.key

        if (key !== 'Enter') {
            targedId.current = targedId.current.concat(key)
        }
        else {
            login(targedId.current)
            targedId.current = ''
        }
    }
    return (
        <>
            <section
                ref={targetRef}
                className="self-end flex items-center gap-2 cursor-pointer text-2xl"
                onClick={handleClickBack}
                onKeyDown={handleKeyDown}
                tabIndex={0}
                onBlur={() => targetRef.current?.focus()}
            >
                <CircleArrowLeft /> Volver a inicio de sesión
            </section>
            <Image
                className="self-center"
                src={logoLogin}
                alt="logo"
            />
            <h1 className="text-highlight text-4xl font-semibold">
                Deslizar tarjeta de usuario
            </h1>
            <Image
                className={`self-center ${shake && styles.shake}`}
                src={loginCard}
                alt="login card"
            />
            <div className="flex gap-4 self-center items-center">
                <ScanIcon />
                <span className="text-[rgba(0,110,255,1)] font-medium text-sm" style={poppins.style}>
                    {loginError ? 'Vuelve a ingresar tu tarjeta' : 'Escaneando tarjeta'}
                </span>
            </div>
        </>
    )
}