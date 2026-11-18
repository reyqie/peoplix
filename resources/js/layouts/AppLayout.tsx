import { useEffect, useState, type ReactNode } from 'react';
import { IconLogout } from '../components/Icons';
import Button from '../components/ui/Button';
import { useToast } from '../components/ui/Toast';
import CommandPalette from './CommandPalette';
import Navbar from './Navbar';
import QuickCreateModal from './QuickCreateModal';
import Sidebar from './Sidebar';

export default function AppLayout({
    children,
    active = 'Dashboard',
    title,
    subtitle,
}: {
    children: ReactNode;
    active?: string;
    title: string;
    subtitle?: string;
}) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [paletteOpen, setPaletteOpen] = useState(false);
    const [quickOpen, setQuickOpen] = useState(false);
    const toast = useToast();

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                setPaletteOpen(true);
            }
        };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, []);

    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-[#0b0e19]">
            <div className="pointer-events-none fixed inset-x-0 top-0 -z-0 h-72 bg-gradient-to-b from-violet-200/50 via-fuchsia-100/20 to-transparent dark:from-violet-950/40 dark:via-fuchsia-950/10" />

            {menuOpen && (
                <div className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm lg:hidden" onClick={() => setMenuOpen(false)} />
            )}

            <Sidebar active={active} open={menuOpen} onClose={() => setMenuOpen(false)} />

            <div className="relative lg:pl-64 2xl:pl-72">
                <Navbar
                    active={active}
                    onOpenMenu={() => setMenuOpen(true)}
                    onOpenPalette={() => setPaletteOpen(true)}
                    onOpenQuickCreate={() => setQuickOpen(true)}
                />

                <main className="relative px-3 pb-8 pt-4 sm:px-5 lg:px-6 2xl:px-8">
                    <div className="w-full">
                        <div className="mb-6 flex flex-wrap items-end justify-between gap-4 px-2">
                            <div>
                                <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
                                {subtitle && <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{subtitle}</p>}
                            </div>
                            <Button
                                variant="secondary"
                                onClick={() =>
                                    toast.push({
                                        title: 'Report queued',
                                        message: 'November report will be emailed shortly.',
                                        variant: 'success',
                                    })
                                }
                            >
                                <IconLogout className="size-4 -scale-x-100" />
                                Export report
                            </Button>
                        </div>
                        {children}
                    </div>
                </main>
            </div>

            <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
            <QuickCreateModal open={quickOpen} onClose={() => setQuickOpen(false)} />
        </div>
    );
}
