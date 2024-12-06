'use client';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";


export default function UseQueryProvider({ children }: {children: React.ReactNode}) {
    const cookie = Cookies.get('accessToken')
    const user = jwt.decode(cookie!)
    if(!user) Cookies.remove('accessToken')
    
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}