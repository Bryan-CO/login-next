import { useMutation } from "@tanstack/react-query";
import {login as loginForm, loginWithTarget as loginTarget} from "@/app/login/services/authService";
import { CredentialsDTO, LoginResponse, TargetDTO } from "../types/auth";
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
    const loginWithTarget = useMutation<LoginResponse, Error | null, TargetDTO>({
        mutationFn: (data: TargetDTO) => loginTarget(data),
        onSuccess: (res) => {
            Cookies.set('accessToken', res.accessToken)
        },
        onError: (err) => {
            console.log(err)
        }
    })

    return {
        login,
        loginWithTarget
    }
}