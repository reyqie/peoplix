import { useState } from 'react';
import { IconArrowRight, IconSearch } from '../components/Icons';
import Input from '../components/ui/Input';
import Modal from '../components/ui/Modal';
import { useToast } from '../components/ui/Toast';

const items = [
    { label: 'Go to Dashboard', href: '/', icon: IconArrowRight },
    { label: 'Go to Employees', href: '/employees', icon: IconArrowRight },
    { label: 'Go to Attendance', href: '/attendance', icon: IconArrowRight },
    { label: 'Go to Payroll', href: '/payroll', icon: IconArrowRight },
    { label: 'Go to Leave Requests', href: '/leave', icon: IconArrowRight },
    { label: 'Go to Settings', href: '/settings', icon: IconArrowRight },
];

export default function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
    const [query, setQuery] = useState('');
    const toast = useToast();

    const filtered = items.filter((i) => i.label.toLowerCase().includes(query.toLowerCase()));

    return (
        <Modal open={open} onClose={onClose} title="Command palette" description="Jump to a page or run an action." size="lg">
            <div className="pb-2">
                <Input
                    autoFocus
                    placeholder="Type a command or search…"
                    icon={IconSearch}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
            <div className="space-y-0.5 pb-3">
                {filtered.map((item) => (
                    <button
                        key={item.label}
                        onClick={() => {
                            onClose();
                            setQuery('');
                            toast.push({ title: item.label, variant: 'info' });
                        }}
                        className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-neutral-600 transition hover:bg-violet-50 hover:text-violet-700 dark:text-neutral-300 dark:hover:bg-violet-500/10 dark:hover:text-violet-200"
                    >
                        <item.icon className="size-4 text-neutral-400" />
                        {item.label}
                        <IconArrowRight className="ml-auto size-4 text-neutral-300 dark:text-neutral-600" />
                    </button>
                ))}
                {filtered.length === 0 && (
                    <p className="px-3 py-6 text-center text-sm text-neutral-400">No results for “{query}”.</p>
                )}
            </div>
        </Modal>
    );
}
