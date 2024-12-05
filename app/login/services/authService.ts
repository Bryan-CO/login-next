import { fetchData } from "@/lib/fetchFunction";
import { CredentialsDTO, LoginResponse } from "../types/auth";

export const login = async (dto: CredentialsDTO): Promise<LoginResponse> => {
    const response = await fetchData<LoginResponse>('/auth/login', 'POST', dto)
    return response;
};
