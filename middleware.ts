import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get('accessToken')
    console.log('TOKEN', token)
    const currentPath = request.nextUrl.pathname;

    if (!token && currentPath !== '/login') {
        console.log('ACAAAA')
        return NextResponse.redirect(new URL('/login', request.url))
    }
    if (token && currentPath === '/login') {
        console.log('Redirigiendo a /box desde login');
        // Comprobamos que no estemos ya en /box antes de redirigir
        return NextResponse.redirect(new URL('/box', request.url));

    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/login', '/box', '/']
}