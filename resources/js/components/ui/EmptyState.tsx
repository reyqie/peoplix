import { useToast } from './Toast';
import type { ReactNode } from 'react';

export default function EmptyState({
    title,
    description,
    action,
}: {
    title: string;
    description: string;
    action?: ReactNode;
}) {
    const toast = useToast();

    return (
        <div className="flex flex-col items-center py-10 text-center">
            <div className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 text-violet-500 dark:text-violet-300">
                <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="4" y="4" width="16" height="16" rx="3" />
                    <path strokeLinecap="round" d="M9 13h6M9 9h6M9 17h3" />
                </svg>
            </div>
            <p className="mt-3.5 text-sm font-semibold">{title}</p>
            <p className="mt-1 max-w-xs text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">{description}</p>
            {action && (
                <div className="mt-4" onClick={() => toast.push({ title: 'Heads up', message: `${title} — action clicked`, variant: 'info' })}>
                    {action}
                </div>
            )}
        </div>
    );
}
