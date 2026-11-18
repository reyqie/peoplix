import { useEffect, useRef, useState, type ReactNode } from 'react';

export default function Dropdown({
    trigger,
    children,
    align = 'right',
    width = 'w-56',
}: {
    trigger: (open: boolean) => ReactNode;
    children: ReactNode | ((close: () => void) => ReactNode);
    align?: 'left' | 'right';
    width?: string;
}) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!open) return;
        const onDown = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        };
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
        document.addEventListener('mousedown', onDown);
        document.addEventListener('keydown', onKey);
        return () => {
            document.removeEventListener('mousedown', onDown);
            document.removeEventListener('keydown', onKey);
        };
    }, [open]);

    const close = () => setOpen(false);

    return (
        <div className="relative" ref={ref}>
            <div onClick={() => setOpen((o) => !o)}>{trigger(open)}</div>
            {open && (
                <div
                    className={`absolute top-[calc(100%+8px)] z-50 ${width} ${
                        align === 'right' ? 'right-0' : 'left-0'
                    } animate-pop-in overflow-hidden rounded-xl border border-black/10 bg-white p-1.5 shadow-xl shadow-black/10 dark:border-white/10 dark:bg-[#181c38] dark:shadow-black/60`}
                >
                    {typeof children === 'function' ? children(close) : children}
                </div>
            )}
        </div>
    );
}

export function DropdownItem({
    onClick,
    icon: Icon,
    children,
    danger = false,
}: {
    onClick?: () => void;
    icon?: React.ComponentType<{ className?: string }>;
    children: ReactNode;
    danger?: boolean;
}) {
    return (
        <button
            onClick={onClick}
            className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] font-medium transition ${
                danger
                    ? 'text-rose-600 hover:bg-rose-50 dark:text-rose-400 dark:hover:bg-rose-500/10'
                    : 'text-neutral-600 hover:bg-black/5 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-white/5 dark:hover:text-white'
            }`}
        >
            {Icon && <Icon className="size-4" />}
            {children}
        </button>
    );
}
