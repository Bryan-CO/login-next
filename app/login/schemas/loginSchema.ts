import { z } from "zod"

const loginSchema = z.object({
    username: z.string().min(3).max(20),
    password: z.string().min(3).max(20),
})

export default loginSchema