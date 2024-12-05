import { useMutation } from "@tanstack/react-query";
import {login as loginForm} from "@/app/login/services/authService";
import { CredentialsDTO, LoginResponse } from "../types/auth";
import Cookies from "js-cookie";

export function useLoginService() {
    const login = useMutation<LoginResponse, Error | null, CredentialsDTO>({
        mutationFn: (data: CredentialsDTO) => loginForm(data),
        onSuccess: (res) => {
            Cookies.set('accessToken', res.accessToken)
        },
        onError: (err) => {
            console.log(err)
        }
    })

    return {
        login
    }
}