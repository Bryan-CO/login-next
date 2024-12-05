import { create } from "zustand"

type typeLogin = 'form' | 'target'
interface LoginStore {
  typeLogin: typeLogin
  setTypeLogin: (typeLogin: typeLogin) => void
}
export const loginStore = create<LoginStore>((set) => ({
  typeLogin: 'form',
  setTypeLogin: (typeLogin: typeLogin) => set({ typeLogin }),
}))