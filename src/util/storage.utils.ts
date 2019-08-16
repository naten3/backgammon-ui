//@ts-ignore
import jwtDecode from 'jwt-decode';
const token = "TOKEN"

export const getToken = (): string | null => {
    return localStorage.getItem(token)
}

export const setToken = (t: string) => {
    localStorage.setItem(token, t);
}

export const getUserIdFromToken = (token: string): string => {
    return jwtDecode(token).id
}