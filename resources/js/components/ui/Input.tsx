import { forwardRef, useId, type InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    hint?: string;
    icon?: React.ComponentType<{ className?: string }>;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
    { label, error, hint, icon: Icon, className = '', id, ...props },
    ref,
) {
    const autoId = useId();
    const inputId = id ?? autoId;

    return (
        <div className="w-full">
            {label && (
                <label htmlFor={inputId} className="mb-1.5 block text-[13px] font-semibold text-neutral-700 dark:text-neutral-200">
                    {label}
                </label>
            )}
            <div className="relative">
                {Icon && <Icon className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-neutral-400" />}
                <input
                    ref={ref}
                    id={inputId}
                    className={`h-11 w-full rounded-xl border bg-white text-sm outline-none transition placeholder:text-neutral-400 dark:bg-white/5 dark:placeholder:text-neutral-500 ${
                        Icon ? 'pl-10 pr-3' : 'px-3.5'
                    } ${
                        error
                            ? 'border-rose-400 focus:ring-4 focus:ring-rose-500/10 dark:border-rose-500/60'
                            : 'border-black/10 focus:border-violet-400 focus:ring-4 focus:ring-violet-500/10 dark:border-white/10 dark:focus:border-violet-500/70'
                    } ${className}`}
                    {...props}
                />
            </div>
            {(error || hint) && <p className={`mt-1.5 text-xs ${error ? 'text-rose-500' : 'text-neutral-400'}`}>{error ?? hint}</p>}
        </div>
    );
});

export default Input;
