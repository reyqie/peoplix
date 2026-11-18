import { IconBell, IconLogout, IconPlus, IconSearch, IconSettings, IconUsers } from '../components/Icons';
import Avatar from '../components/ui/Avatar';
import Button from '../components/ui/Button';
import Dropdown, { DropdownItem } from '../components/ui/Dropdown';
import ThemeToggle from '../components/ui/ThemeToggle';
import { useToast } from '../components/ui/Toast';

const notifications = [
    { name: 'Sarah Wijaya', text: 'finished onboarding checklist', time: '2m ago' },
    { name: 'Fajar Nugroho', text: 'requested annual leave · 5 days', time: '18m ago' },
    { name: 'Payroll', text: 'November payroll is ready for review', time: '1h ago' },
    { name: 'Bagas Pratama', text: 'clocked in late at 09:24', time: '3h ago' },
];

export default function Navbar({
    active,
    onOpenMenu,
    onOpenPalette,
    onOpenQuickCreate,
}: {
    active: string;
    onOpenMenu: () => void;
    onOpenPalette: () => void;
    onOpenQuickCreate: () => void;
}) {
    const toast = useToast();

    return (
        <div className="sticky top-0 z-20 px-3 pt-3 sm:px-5 lg:px-6 2xl:px-8">
            <header className="relative flex h-16 items-center gap-3 overflow-hidden rounded-2xl border border-black/[0.06] bg-white/75 px-3 shadow-lg shadow-black/[0.04] backdrop-blur-2xl sm:px-4 dark:border-white/[0.07] dark:bg-[#11152a]/75 dark:shadow-black/40">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />
                <div className="pointer-events-none absolute -top-16 left-1/3 h-32 w-64 rounded-full bg-violet-500/10 blur-3xl" />

                <button
                    onClick={onOpenMenu}
                    className="flex size-10 shrink-0 items-center justify-center rounded-xl text-neutral-500 transition hover:bg-black/5 hover:text-neutral-800 lg:hidden dark:text-neutral-400 dark:hover:bg-white/5 dark:hover:text-white"
                    aria-label="Open menu"
                >
                    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                <button
                    onClick={onOpenPalette}
                    className="hidden items-center gap-2 text-[13px] font-medium text-neutral-400 transition hover:text-violet-600 md:flex dark:text-neutral-500 dark:hover:text-violet-300"
                >
                    Workspace
                    <span className="text-neutral-300 dark:text-neutral-600">/</span>
                    <span className="font-semibold text-neutral-800 dark:text-white">{active}</span>
                </button>

                <button
                    onClick={onOpenPalette}
                    className="relative mx-auto hidden h-10 w-full max-w-xl items-center gap-3 rounded-full border border-black/5 bg-black/[0.03] px-4 text-sm text-neutral-400 transition hover:border-violet-300 lg:flex dark:border-white/10 dark:bg-white/[0.05] dark:hover:border-violet-500/50"
                >
                    <IconSearch className="size-4" />
                    <span className="flex-1 text-left">Search employees, payroll, docs...</span>
                    <kbd className="rounded-md border border-black/10 bg-white px-1.5 py-0.5 text-[10px] font-semibold dark:border-white/10 dark:bg-white/5">
                        ⌘K
                    </kbd>
                </button>

                <div className="ml-auto flex items-center gap-2 lg:gap-2.5">
                    <Button className="hidden md:inline-flex" onClick={onOpenQuickCreate}>
                        <IconPlus className="size-4" />
                        Quick create
                    </Button>
                    <span className="mx-1 hidden h-6 w-px bg-black/10 md:block dark:bg-white/10" />

                    <Dropdown
                        width="w-80"
                        trigger={(open) => (
                            <button
                                className={`relative flex size-10 items-center justify-center rounded-xl border transition ${
                                    open
                                        ? 'border-violet-400 text-violet-600 dark:border-violet-500/60 dark:text-violet-300'
                                        : 'border-black/5 bg-white text-neutral-500 hover:border-violet-300 hover:text-violet-600 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300 dark:hover:border-violet-500/50 dark:hover:text-violet-300'
                                }`}
                                aria-label="Notifications"
                            >
                                <IconBell className="size-[18px]" />
                                <span className="absolute right-2.5 top-2.5 size-2 rounded-full bg-rose-500 ring-2 ring-white dark:ring-[#11152a]" />
                            </button>
                        )}
                    >
                        {(close) => (
                            <div>
                                <div className="flex items-center justify-between px-2.5 py-1.5">
                                    <p className="text-[13px] font-bold">Notifications</p>
                                    <button
                                        onClick={() => {
                                            close();
                                            toast.push({ title: 'All caught up', message: '4 notifications marked as read.', variant: 'success' });
                                        }}
                                        className="text-[11px] font-semibold text-violet-600 hover:underline dark:text-violet-300"
                                    >
                                        Mark all read
                                    </button>
                                </div>
                                <div className="space-y-0.5">
                                    {notifications.map((n) => (
                                        <button
                                            key={n.text}
                                            onClick={() => {
                                                close();
                                                toast.push({ title: n.name, message: n.text, variant: 'info' });
                                            }}
                                            className="flex w-full gap-2.5 rounded-lg px-2 py-2 text-left transition hover:bg-black/5 dark:hover:bg-white/5"
                                        >
                                            <Avatar name={n.name} size="xs" />
                                            <div className="min-w-0 flex-1">
                                                <p className="truncate text-xs font-semibold">{n.name}</p>
                                                <p className="truncate text-[11px] text-neutral-400">{n.text}</p>
                                            </div>
                                            <span className="shrink-0 text-[10px] text-neutral-400">{n.time}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </Dropdown>

                    <ThemeToggle />

                    <Dropdown
                        width="w-52"
                        trigger={(open) => (
                            <button
                                className={`flex items-center gap-2.5 rounded-full border bg-white py-1.5 pl-1.5 pr-3 transition dark:bg-white/5 ${
                                    open
                                        ? 'border-violet-400 dark:border-violet-500/60'
                                        : 'border-black/5 hover:border-violet-300 dark:border-white/10 dark:hover:border-violet-500/50'
                                }`}
                            >
                                <Avatar name="Andi Rizky" size="xs" online />
                                <div className="hidden text-left leading-tight sm:block">
                                    <p className="text-xs font-semibold">Andi Rizky</p>
                                    <p className="text-[10px] text-neutral-400">HR Manager</p>
                                </div>
                            </button>
                        )}
                    >
                        {(close) => (
                            <>
                                <div className="border-b border-black/5 px-3 py-2.5 dark:border-white/5">
                                    <p className="text-[13px] font-bold">Andi Rizky</p>
                                    <p className="text-[11px] text-neutral-400">andi@peoplix.id</p>
                                </div>
                                <div className="py-1">
                                    <DropdownItem
                                        icon={IconUsers}
                                        onClick={() => {
                                            close();
                                            toast.push({ title: 'My profile', variant: 'info' });
                                        }}
                                    >
                                        My profile
                                    </DropdownItem>
                                    <DropdownItem
                                        icon={IconSettings}
                                        onClick={() => {
                                            close();
                                            toast.push({ title: 'Settings', variant: 'info' });
                                        }}
                                    >
                                        Settings
                                    </DropdownItem>
                                </div>
                                <div className="border-t border-black/5 pt-1 dark:border-white/5">
                                    <DropdownItem
                                        icon={IconLogout}
                                        danger
                                        onClick={() => toast.push({ title: 'Signed out', message: 'See you soon!', variant: 'success' })}
                                    >
                                        Sign out
                                    </DropdownItem>
                                </div>
                            </>
                        )}
                    </Dropdown>
                </div>
            </header>
        </div>
    );
}
