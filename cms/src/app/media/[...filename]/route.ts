import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ filename: string[] }> }
) {
    const { filename } = await params;
    console.log('Media request for:', filename);

    const filePath = path.join(process.cwd(), 'uploads', ...filename);
    console.log('Looking for file at:', filePath);

    try {
        // Check if file exists
        if (!fs.existsSync(filePath)) {
            console.log('File not found:', filePath);
            return NextResponse.json({ error: 'File not found', path: filePath }, { status: 404 });
        }

        // Read the file
        const fileBuffer = fs.readFileSync(filePath);
        console.log('File found, size:', fileBuffer.length);

        // Determine content type based on extension
        const ext = path.extname(filePath).toLowerCase();
        const contentTypes: Record<string, string> = {
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.gif': 'image/gif',
            '.webp': 'image/webp',
            '.svg': 'image/svg+xml',
        };

        const contentType = contentTypes[ext] || 'application/octet-stream';

        return new NextResponse(fileBuffer, {
            headers: {
                'Content-Type': contentType,
                'Cache-Control': 'public, max-age=31536000, immutable',
            },
        });
    } catch (error) {
        console.error('Error serving file:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
