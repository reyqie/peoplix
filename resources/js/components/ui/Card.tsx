import type { HTMLAttributes, ReactNode } from 'react';

export function Card({ className = '', children, ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={`rounded-2xl border border-black/5 bg-white shadow-sm dark:border-white/5 dark:bg-white/[0.03] ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}

export function CardHeader({ title, subtitle, action }: { title: string; subtitle?: string; action?: ReactNode }) {
    return (
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 pb-3 pt-5">
            <div>
                <h2 className="text-[15px] font-bold">{title}</h2>
                {subtitle && <p className="text-xs text-neutral-400">{subtitle}</p>}
            </div>
            {action}
        </div>
    );
}

export function CardBody({ className = '', children }: { className?: string; children: ReactNode }) {
    return <div className={`px-5 pb-5 ${className}`}>{children}</div>;
}

export function CardFooter({ className = '', children }: { className?: string; children: ReactNode }) {
    return <div className={`border-t border-black/5 px-5 py-4 dark:border-white/5 ${className}`}>{children}</div>;
}
