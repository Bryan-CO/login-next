import { create } from "zustand";
import { use, useState } from 'react'
import { useMutation } from "@tanstack/react-query";

interface AuthStore {
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    isLoggedIn: boolean;
    user: any;
    showAuthModal: boolean;
    setShowAuthModal: (showAuthModal: boolean) => void;
}

const AuthStore = create<AuthStore>((set) => {
    const login = useMutation({

    })
    // Estado inicial
    return {
        isLoggedIn: false,
        user: null,

        // Función de login
        login: async (email, password) => {
            try {
                // Simula una llamada a una API
                // const response = await fakeLoginApi(email, password);

                // Actualiza el estado global con el usuario obtenido
                set({
                    isLoggedIn: true,
                    user: '',
                });

                console.log('Login exitoso');
            } catch (error) {
                console.error('Error en el login:', error);
                throw error; // Opcional: lanzar error para manejo en el componente
            }
        },

        // Función de logout
        logout: () => {
            set({
                isLoggedIn: false,
                user: null,
            });

            console.log('Logout exitoso');
        },
        showAuthModal: false,
        setShowAuthModal: (showAuthModal) => set({ showAuthModal }),
    }
});

// export default useAuthStore;
