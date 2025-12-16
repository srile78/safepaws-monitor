import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email || !email.includes('@')) {
            return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
        }

        const filePath = path.join(process.cwd(), 'subscribers.csv');
        const timestamp = new Date().toISOString();
        // Simple CSV escaping: if email contains comma, wrap in quotes (unlikely for valid emails but good practice)
        const safeEmail = email.includes(',') ? `"${email}"` : email;
        const csvLine = `${safeEmail},${timestamp}\n`;

        // Ensure file exists with header
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, 'email,timestamp\n');
        }

        fs.appendFileSync(filePath, csvLine);

        return NextResponse.json({ message: 'Subscribed successfully' }, { status: 200 });
    } catch (error) {
        console.error('Subscription error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
