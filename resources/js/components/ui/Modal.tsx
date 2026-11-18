import { useEffect, type ReactNode } from 'react';

export interface ModalProps {
    open: boolean;
    onClose: () => void;
    title: string;
    description?: string;
    size?: 'sm' | 'md' | 'lg';
    footer?: ReactNode;
    children?: ReactNode;
}

const sizes = { sm: 'max-w-sm', md: 'max-w-lg', lg: 'max-w-2xl' };

export default function Modal({ open, onClose, title, description, size = 'md', footer, children }: ModalProps) {
    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
        document.addEventListener('keydown', onKey);
        document.documentElement.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.documentElement.style.overflow = '';
        };
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center" role="dialog" aria-modal="true">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in" onClick={onClose} />
            <div
                className={`relative w-full ${sizes[size]} animate-pop-in rounded-2xl border border-black/10 bg-white shadow-2xl dark:border-white/10 dark:bg-[#141833]`}
            >
                <div className="flex items-start justify-between gap-4 px-6 pb-4 pt-6">
                    <div>
                        <h3 className="text-lg font-bold tracking-tight">{title}</h3>
                        {description && <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{description}</p>}
                    </div>
                    <button
                        onClick={onClose}
                        aria-label="Close modal"
                        className="flex size-8 shrink-0 items-center justify-center rounded-lg text-neutral-400 transition hover:bg-black/5 hover:text-neutral-700 dark:hover:bg-white/5 dark:hover:text-white"
                    >
                        <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <path d="M6 6l12 12M18 6 6 18" />
                        </svg>
                    </button>
                </div>
                <div className="max-h-[60vh] overflow-y-auto px-6">{children}</div>
                {footer && (
                    <div className="flex items-center justify-end gap-2.5 border-t border-black/5 px-6 py-4 dark:border-white/5">{footer}</div>
                )}
            </div>
        </div>
    );
}
