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