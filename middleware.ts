import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { UserPayload } from "./app/login/types/auth";

export function middleware(request: NextRequest) {
    const token = request.cookies.get('accessToken');
    console.log(token)
    const payload = jwt.decode(token?.value ?? '') as UserPayload
    const currentPath = request.nextUrl.pathname;
    // const payload = true

    if (!payload && currentPath !== '/login') {
        const response = NextResponse.redirect(new URL('/login', request.url))
        // response.cookies.delete('accessToken')
        return response
    }
    
    if (payload && currentPath === '/login') {
        return NextResponse.redirect(new URL('/box', request.url));

    }
    
    return NextResponse.next();
}

export const config = {
    matcher: ['/login', '/box', '/sale', '/']
}