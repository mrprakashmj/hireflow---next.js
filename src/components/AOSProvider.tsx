'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function AOSProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out',
            delay: 100,
        });
    }, []);

    return <>{children}</>;
}
