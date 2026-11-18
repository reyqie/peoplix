import {
    IconBriefcase,
    IconCalendar,
    IconChart,
    IconClock,
    IconGrid,
    IconMegaphone,
    IconSettings,
    IconUsers,
    IconWallet,
} from "../components/Icons";
import Logo from "../components/ui/Logo";
import SidebarItem from "../components/ui/SidebarItem";
import { useToast } from "../components/ui/Toast";

const nav = [
    { label: "Dashboard", href: "/", icon: IconGrid },
    { label: "Employees", href: "/employees", icon: IconUsers },
    { label: "Attendance", href: "/attendance", icon: IconClock },
    { label: "Payroll", href: "/payroll", icon: IconWallet },
    { label: "Leave", href: "/leave", icon: IconCalendar, badge: 4 },
    { label: "Recruitment", href: "/recruitment", icon: IconMegaphone },
    { label: "Performance", href: "/performance", icon: IconChart },
];

export default function Sidebar({
    active = "Dashboard",
    open,
    onClose,
}: {
    active?: string;
    open: boolean;
    onClose: () => void;
}) {
    const toast = useToast();

    return (
        <aside
            className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-black/5 bg-white/80 p-5 backdrop-blur-xl transition-transform duration-300 2xl:w-72 dark:border-white/5 dark:bg-[#0d1020]/90 lg:translate-x-0 ${
                open ? "translate-x-0" : "-translate-x-full"
            }`}
        >
            <div className="flex items-center justify-between">
                <Logo />
                <button
                    onClick={onClose}
                    className="text-neutral-400 hover:text-neutral-600 lg:hidden dark:hover:text-neutral-200"
                    aria-label="Close menu"
                >
                    <svg
                        viewBox="0 0 24 24"
                        className="size-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    >
                        <path d="M6 6l12 12M18 6 6 18" />
                    </svg>
                </button>
            </div>

            <nav className="mt-8 flex-1 space-y-1">
                <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-400 dark:text-neutral-500">
                    Workspace
                </p>
                {nav.map((item) => (
                    <SidebarItem
                        key={item.label}
                        href={item.href}
                        label={item.label}
                        icon={item.icon}
                        active={item.label === active}
                        badge={item.badge}
                        onClick={onClose}
                    />
                ))}
            </nav>

            <div className="space-y-1 border-t border-black/5 pt-4 dark:border-white/5">
                <SidebarItem
                    href="/settings"
                    label="Settings"
                    icon={IconSettings}
                />
            </div>
        </aside>
    );
}
