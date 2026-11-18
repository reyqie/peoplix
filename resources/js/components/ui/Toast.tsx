import { createContext, useCallback, useContext, useState, type ReactNode } from 'react';

type Variant = 'success' | 'error' | 'info' | 'warning';

interface ToastItem {
    id: number;
    title: string;
    message?: string;
    variant: Variant;
}

interface ToastApi {
    push: (t: { title: string; message?: string; variant?: Variant }) => void;
}

const ToastContext = createContext<ToastApi | null>(null);

export function useToast() {
    const ctx = useContext(ToastContext);
    if (!ctx) throw new Error('useToast must be used inside <ToastProvider>');
    return ctx;
}

let nextId = 0;

const styles: Record<Variant, { bar: string; icon: string; svg: ReactNode }> = {
    success: {
        bar: 'from-emerald-500 to-teal-500',
        icon: 'text-emerald-500',
        svg: <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />,
    },
    error: {
        bar: 'from-rose-500 to-red-500',
        icon: 'text-rose-500',
        svg: <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />,
    },
    info: {
        bar: 'from-sky-500 to-blue-500',
        icon: 'text-sky-500',
        svg: <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-4M12 8h.01M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />,
    },
    warning: {
        bar: 'from-amber-500 to-orange-500',
        icon: 'text-amber-500',
        svg: <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />,
    },
};

export function ToastProvider({ children }: { children: ReactNode }) {
    const [toasts, setToasts] = useState<ToastItem[]>([]);

    const dismiss = useCallback((id: number) => setToasts((ts) => ts.filter((t) => t.id !== id)), []);

    const push = useCallback(
        ({ title, message, variant = 'info' }: { title: string; message?: string; variant?: Variant }) => {
            const id = ++nextId;
            setToasts((ts) => [...ts.slice(-4), { id, title, message, variant }]);
            setTimeout(() => dismiss(id), 4500);
        },
        [dismiss],
    );

    return (
        <ToastContext.Provider value={{ push }}>
            {children}
            <div className="pointer-events-none fixed bottom-5 right-5 z-[60] flex w-80 max-w-[calc(100vw-2.5rem)] flex-col gap-2.5">
                {toasts.map((t) => {
                    const s = styles[t.variant];
                    return (
                        <div
                            key={t.id}
                            className="pointer-events-auto relative flex gap-3 overflow-hidden rounded-xl border border-black/5 bg-white/95 p-3.5 pl-4 shadow-xl shadow-black/10 backdrop-blur-xl animate-toast-in dark:border-white/10 dark:bg-[#181c38]/95 dark:shadow-black/50"
                        >
                            <div className={`absolute inset-y-0 left-0 w-1 bg-gradient-to-b ${s.bar}`} />
                            <svg viewBox="0 0 24 24" className={`mt-0.5 size-5 shrink-0 ${s.icon}`} fill="none" stroke="currentColor" strokeWidth="2">
                                {s.svg}
                            </svg>
                            <div className="min-w-0 flex-1">
                                <p className="text-[13px] font-semibold">{t.title}</p>
                                {t.message && <p className="mt-0.5 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">{t.message}</p>}
                            </div>
                            <button
                                onClick={() => dismiss(t.id)}
                                aria-label="Dismiss"
                                className="shrink-0 text-neutral-300 transition hover:text-neutral-600 dark:text-neutral-600 dark:hover:text-neutral-300"
                            >
                                <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                    <path d="M6 6l12 12M18 6 6 18" />
                                </svg>
                            </button>
                        </div>
                    );
                })}
            </div>
        </ToastContext.Provider>
    );
}
