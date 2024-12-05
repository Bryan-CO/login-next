"use client"

import wallpaperLogin from '@/public/img/wallpaper-login.png'
import LoginForm from "./components/LoginForm";
import LoginTarget from "./components/LoginTarget";
import { useState } from "react";
import Image from "next/image";
import { loginStore } from './store/loginStore'
import { poppins } from '../fonts';

export default function LoginPage() {
  const typeLoginComponent = {
    form: <LoginForm />,
    target: <LoginTarget />,
  }
  const { typeLogin } = loginStore()
  return (
    <div className="flex h-full gap-[10px] px-5">
      <div className="w-[650px] p-5">
        <div className="relative flex justify-center h-full text-white" >
          <Image
            className="h-full"
            src={wallpaperLogin}
            alt="wallpaper jadal"
          />
          <div
            className="absolute h-full w-full top-0 left-0 rounded-br-2xl"
            style={{ backgroundImage: 'linear-gradient(to bottom, transparent 40%, rgba(20, 20, 20, 0.95) 100%)' }}>
          </div>
          <div className={`absolute bottom-10 w-[80%] text-2xl leading-9 ${poppins.className}`}>
            ¡Bienvenido a Jadal! Nuestro sistema de ventas para grifos está diseñado para optimizar la gestión de combustible y servicios en tu estación 🚀
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col px-5 justify-center gap-9">
        {typeLoginComponent[typeLogin]}
      </div>
    </div>
  );
}