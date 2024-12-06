'use client';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import AuthStore from "../store/authStore";


export default function UseQueryProvider({ children }: { children: React.ReactNode }) {
    const queryClient = new QueryClient();
    const verify = AuthStore((state) => state.initialCheck)
    verify()
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}