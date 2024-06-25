import { LoginProps, RegisterProps } from "@/types"

const apiUrl = process.env.NEXT_PUBLIC_API_URL

if (!apiUrl) {
    throw new Error("NEXT_PUBLIC_API_URL is not defined")
}

export async function register(userData: RegisterProps) {
    try {
        const res = await fetch(`${apiUrl}/users/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })

        if (res.ok) {
            return await res.json()
        } else {
            const errorData = await res.json()
            throw new Error(errorData.message || "Failed to register")
        }

    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message)
        } else {
            throw new Error("An unknown error occurred during registration")
        }
    }
}

export async function login(userData: LoginProps) {
    try {
        const res = await fetch(`${apiUrl}/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })

        if (res.ok) {
            return await res.json()
        } else {
            const errorData = await res.json()
            throw new Error(errorData.message || "Failed to Login")
        }

    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message)
        } else {
            throw new Error("An unknown error occurred during login")
        }
    }
}

