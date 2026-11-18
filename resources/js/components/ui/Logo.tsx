export default function Logo({ collapsed = false }: { collapsed?: boolean }) {
    return (
        <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-indigo-500 shadow-lg shadow-violet-500/30">
                <svg viewBox="0 0 24 24" className="size-5 text-white" fill="currentColor">
                    <path d="M7 19V5h7.2a4.6 4.6 0 0 1 0 9.2H11V19H7Zm4-8.2h3a1.2 1.2 0 0 0 0-2.4h-3v2.4Z" />
                </svg>
            </div>
            {!collapsed && (
                <div className="leading-tight">
                    <p className="text-[15px] font-bold tracking-tight">Peoplix</p>
                    <p className="text-[11px] font-medium text-neutral-400 dark:text-neutral-500">HRIS Platform</p>
                </div>
            )}
        </div>
    );
}
