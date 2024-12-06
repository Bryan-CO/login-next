import { create } from "zustand";
import { use, useState } from 'react'
import { useMutation } from "@tanstack/react-query";
import { UserPayload } from "@/app/login/types/auth";
import Cookies from "js-cookie";

interface AuthStore {
    initialCheck: () => void
    logout: () => void;
    isLoggedIn: boolean;
    user: UserPayload | null;
    showAuthModal: boolean;
    setShowAuthModal: (showAuthModal: boolean) => void;
}

const AuthStore = create<AuthStore>((set) => ({
    initialCheck: () => {
        const token = Cookies.get('accessToken')
        if (token) {
            set({
                isLoggedIn: true,
                user: {
                    id: 1,
                    username: 'admin'
                }
            });
        }
    },
    logout: () => {
        set({
            isLoggedIn: false,
            user: null,
        });
        Cookies.remove('accessToken');
    },
    isLoggedIn: false,
    user: null,
    showAuthModal: false,
    setShowAuthModal: (showAuthModal) => set({ showAuthModal })
}));

export default AuthStore;
