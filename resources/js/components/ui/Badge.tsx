type Variant = 'success' | 'warning' | 'danger' | 'info' | 'violet' | 'neutral';

const variants: Record<Variant, string> = {
    success: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300',
    warning: 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300',
    danger: 'bg-rose-100 text-rose-600 dark:bg-rose-500/15 dark:text-rose-300',
    info: 'bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300',
    violet: 'bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300',
    neutral: 'bg-neutral-100 text-neutral-600 dark:bg-white/10 dark:text-neutral-300',
};

export default function Badge({
    variant = 'neutral',
    className = '',
    children,
}: {
    variant?: Variant;
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold ${variants[variant]} ${className}`}>
            {children}
        </span>
    );
}
