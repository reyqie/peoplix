import { Link } from '@inertiajs/react';
import type { ComponentType } from 'react';

export default function SidebarItem({
    href,
    label,
    icon: Icon,
    active = false,
    badge,
    onClick,
}: {
    href: string;
    label: string;
    icon: ComponentType<{ className?: string }>;
    active?: boolean;
    badge?: string | number;
    onClick?: () => void;
}) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={`group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                active
                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-600/25'
                    : 'text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-white/5 dark:hover:text-white'
            }`}
        >
            {active && <span className="absolute -left-5 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-violet-500" />}
            <Icon className={`size-[18px] transition group-hover:scale-110 ${active ? '' : 'group-hover:text-violet-500'}`} />
            {label}
            {badge !== undefined && (
                <span
                    className={`ml-auto rounded-full px-2 py-0.5 text-[10px] font-bold ${
                        active
                            ? 'bg-white/20 text-white'
                            : 'bg-rose-100 text-rose-600 dark:bg-rose-500/15 dark:text-rose-300'
                    }`}
                >
                    {badge}
                </span>
            )}
        </Link>
    );
}
