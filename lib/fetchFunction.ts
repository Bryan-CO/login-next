import { FetchResponse } from "@/types/types";

type TypeFetch = 'GET' | 'POST' | 'PUT' | 'DELETE';
export async function fetchData<T>(url: string, method: TypeFetch = 'GET', body?: unknown): Promise<T> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: body ? JSON.stringify(body) : undefined, 
    })
    const data: FetchResponse<T> = await response.json();
    if (!data.success) {
        throw new Error(data.message);
    }
    return data.data;
}
