import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success';
type Size = 'sm' | 'md' | 'lg';

const variants: Record<Variant, string> = {
    primary:
        'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-600/30 hover:brightness-110 active:scale-[0.98]',
    secondary:
        'border border-black/5 bg-white text-neutral-700 shadow-sm hover:border-violet-300 hover:text-violet-600 dark:border-white/10 dark:bg-white/5 dark:text-neutral-200 dark:hover:border-violet-500/50 dark:hover:text-violet-300',
    outline:
        'border border-violet-300 text-violet-600 hover:bg-violet-50 dark:border-violet-500/40 dark:text-violet-300 dark:hover:bg-violet-500/10',
    ghost:
        'text-neutral-500 hover:bg-black/5 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-white/5 dark:hover:text-white',
    danger:
        'bg-gradient-to-r from-rose-600 to-red-600 text-white shadow-md shadow-rose-600/30 hover:brightness-110 active:scale-[0.98]',
    success:
        'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-600/30 hover:brightness-110 active:scale-[0.98]',
};

const sizes: Record<Size, string> = {
    sm: 'h-8 gap-1.5 px-3 text-xs',
    md: 'h-10 gap-2 px-4 text-sm',
    lg: 'h-12 gap-2 px-6 text-[15px]',
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    size?: Size;
    children?: ReactNode;
}

export default function Button({ variant = 'primary', size = 'md', className = '', children, type = 'button', ...props }: ButtonProps) {
    return (
        <button
            type={type}
            className={`inline-flex items-center justify-center rounded-xl font-semibold transition disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
