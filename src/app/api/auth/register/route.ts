import { redirect } from "next/navigation";

export async function POST(req: Request, res: Response) {
    const userData = await req.json();
    console.log(userData)
    const request = await fetch(`${process.env.API_URL}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
    const response = await request.json();
    return Response.json({ response, status: request.status});
}