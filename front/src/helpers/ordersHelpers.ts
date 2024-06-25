
const apiUrl = process.env.NEXT_PUBLIC_API_URL

export async function createOrder(products: number[], token: string) {
    try {
        const res = await fetch(`${apiUrl}/orders`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Authorization: token,
            },
            body: JSON.stringify({
                products
            })
        })
        

    } catch (error: any) {
        throw new Error(error)
    }
}

export async function getOrder(token: string) {
    try {
        const res = await fetch(`${apiUrl}/users/orders`, {
            method: "GET",
            headers: {
                Authorization: token,
            }
        })
        const orders = res.json()
        return orders

    } catch (error: any) {
        throw new Error(error)
    }
}
