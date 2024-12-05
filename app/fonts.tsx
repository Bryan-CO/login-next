import {
    Lato,
    Poppins,
    Inter
} from 'next/font/google'
export const lato = Lato({
    subsets: ['latin'],
    weight: ['400', '700'],
    display: 'swap',
})

export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '700']
})

export const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '700']
})