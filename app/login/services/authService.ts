import { fetchData } from "@/lib/fetchFunction";
import { CredentialsDTO, LoginResponse, TargetDTO } from "../types/auth";

export const login = async (dto: CredentialsDTO): Promise<LoginResponse> => {
    const response = await fetchData<LoginResponse>('/auth/login', 'POST', dto)
    return response;
};

export const loginWithTarget = async (dto: TargetDTO): Promise<LoginResponse> => {
    const response = await fetchData<LoginResponse>('/auth/login-card', 'POST', dto)
    return response;
};