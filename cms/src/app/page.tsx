import Link from 'next/link';

export default function Home() {
    return (
        <html lang="en">
            <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h1>Hire Flow CMS</h1>
                    <p>Welcome to the Hire Flow Content Management System.</p>
                    <p>
                        <Link href="/admin" style={{ color: '#0070f3', textDecoration: 'underline' }}>
                            Go to Admin Panel →
                        </Link>
                    </p>
                </main>
            </body>
        </html>
    );
}
