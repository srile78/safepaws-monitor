import { NextResponse } from 'next/server';
import { getRecalls } from '@/lib/data';

export async function GET() {
    try {
        const data = await getRecalls();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error reading recalls data:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
