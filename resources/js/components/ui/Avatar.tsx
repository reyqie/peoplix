const palette = [
    'from-violet-500 to-fuchsia-500',
    'from-sky-500 to-indigo-500',
    'from-emerald-500 to-teal-500',
    'from-amber-500 to-orange-500',
    'from-rose-500 to-pink-500',
];

export function initials(name: string) {
    return name
        .trim()
        .split(/\s+/)
        .map((w) => w[0])
        .slice(0, 2)
        .join('')
        .toUpperCase();
}

export function avatarGradient(name: string) {
    const idx = name.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % palette.length;
    return `bg-gradient-to-br ${palette[idx]}`;
}

const sizes = {
    xs: 'size-7 text-[10px] rounded-lg',
    sm: 'size-9 text-[11px] rounded-full',
    md: 'size-11 text-xs rounded-xl',
};

export default function Avatar({
    name,
    size = 'sm',
    online = false,
}: {
    name: string;
    size?: keyof typeof sizes;
    online?: boolean;
}) {
    return (
        <div className="relative shrink-0">
            <div className={`grid place-items-center font-bold text-white ${avatarGradient(name)} ${sizes[size]}`}>
                {initials(name)}
            </div>
            {online && (
                <span className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-[#11152a]" />
            )}
        </div>
    );
}
