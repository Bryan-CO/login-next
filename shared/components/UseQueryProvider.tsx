'use client';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Cookies from "js-cookie";


export default function UseQueryProvider({ children }: {children: React.ReactNode}) {
    const cookie = Cookies.get('accessToken')
    console.log(cookie)
    
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}