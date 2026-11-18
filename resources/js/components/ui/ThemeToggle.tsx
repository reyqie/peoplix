import { useEffect, useState } from 'react';
import { IconMoon, IconSun } from '../Icons';

export default function ThemeToggle({ className = '' }: { className?: string }) {
    const [dark, setDark] = useState(
        () => typeof document !== 'undefined' && document.documentElement.classList.contains('dark'),
    );

    useEffect(() => {
        document.documentElement.classList.toggle('dark', dark);
        localStorage.setItem('theme', dark ? 'dark' : 'light');
    }, [dark]);

    return (
        <button
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle theme"
            className={`relative flex size-10 items-center justify-center rounded-xl border border-black/5 bg-white text-neutral-500 transition hover:border-violet-300 hover:text-violet-600 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300 dark:hover:border-violet-500/50 dark:hover:text-violet-300 ${className}`}
        >
            <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-500/5 to-fuchsia-500/5" />
            {dark ? <IconSun className="relative size-[18px]" /> : <IconMoon className="relative size-[18px]" />}
        </button>
    );
}
