type UserResponse = {
    id: number
    username: string
}
export interface LoginResponse {
    accessToken: string
    user: UserResponse
}

export interface CredentialsDTO{
    username: string
    password: string
}

export interface TargetDTO{
    cardNumber: string
}

export interface UserPayload{
    id: number
    username: string
}