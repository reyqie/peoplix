export type IconProps = React.SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    viewBox: '0 0 24 24',
    strokeWidth: 1.8,
    stroke: 'currentColor',
    ...props,
});

export const IconGrid = (p: IconProps) => (
    <svg {...base(p)}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h7v7H4zM13 4h7v5h-7zM13 12h7v8h-7zM4 14h7v6H4z" />
    </svg>
);

export const IconUsers = (p: IconProps) => (
    <svg {...base(p)}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm5 14v-1a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v1M18 8.5a3 3 0 0 0 0-4M19 15c1.8.6 3 2.1 3 4v1h-2" />
    </svg>
);

export const IconClock = (p: IconProps) => (
    <svg {...base(p)}>
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3.5 2" />
    </svg>
);

export const IconWallet = (p: IconProps) => (
    <svg {...base(p)}>
        <rect x="3" y="6" width="18" height="14" rx="3" />
        <path strokeLinecap="round" d="M3 10h18M16.5 15h1.5" />
        <path strokeLinecap="round" d="M7 6V5a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1" />
    </svg>
);

export const IconCalendar = (p: IconProps) => (
    <svg {...base(p)}>
        <rect x="3" y="5" width="18" height="16" rx="3" />
        <path strokeLinecap="round" d="M3 10h18M8 3v4M16 3v4" />
    </svg>
);

export const IconChart = (p: IconProps) => (
    <svg {...base(p)}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 20V10M10 20V4M16 20v-7M20 20H4" />
    </svg>
);

export const IconMegaphone = (p: IconProps) => (
    <svg {...base(p)}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 11v3a1 1 0 0 0 1 1h2l4 4V7l-4 4H4a1 1 0 0 0-1 1Zm14-3a5 5 0 0 1 0 9M19 5a9 9 0 0 1 0 15" />
    </svg>
);

export const IconSettings = (p: IconProps) => (
    <svg {...base(p)}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.04 1.55V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 9 19.35a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.55-1.04H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.64 9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.64 1.7 1.7 0 0 0 10.04 3.1V3a2 2 0 1 1 4 0v.09A1.7 1.7 0 0 0 15 4.64a1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.36 9c.23.55.76.92 1.35.99H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.51 1.01Z" />
    </svg>
);

export const IconSearch = (p: IconProps) => (
    <svg {...base(p)}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
    </svg>
);

export const IconBell = (p: IconProps) => (
    <svg {...base(p)}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0" />
    </svg>
);

export const IconSun = (p: IconProps) => (
    <svg {...base(p)}>
        <circle cx="12" cy="12" r="4" />
        <path strokeLinecap="round" d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
);

export const IconMoon = (p: IconProps) => (
    <svg {...base(p)}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </svg>
);

export const IconTrendUp = (p: IconProps) => (
    <svg {...base(p)}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8M15 7h6v6" />
    </svg>
);

export const IconTrendDown = (p: IconProps) => (
    <svg {...base(p)}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l6 6 4-4 8 8M15 17h6v-6" />
    </svg>
);

export const IconMenu = (p: IconProps) => (
    <svg {...base(p)}>
        <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

export const IconX = (p: IconProps) => (
    <svg {...base(p)}>
        <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
    </svg>
);

export const IconArrowRight = (p: IconProps) => (
    <svg {...base(p)}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
    </svg>
);

export const IconCheck = (p: IconProps) => (
    <svg {...base(p)}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
    </svg>
);

export const IconDots = (p: IconProps) => (
    <svg {...base(p)}>
        <circle cx="12" cy="5" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="12" cy="19" r="1" />
    </svg>
);

export const IconBriefcase = (p: IconProps) => (
    <svg {...base(p)}>
        <rect x="3" y="7" width="18" height="13" rx="3" />
        <path strokeLinecap="round" d="M9 7V5a3 3 0 0 1 3-3 3 3 0 0 1 3 3v2M3 12h18" />
    </svg>
);

export const IconLogout = (p: IconProps) => (
    <svg {...base(p)}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 21H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3M16 17l5-5-5-5M21 12H9" />
    </svg>
);

export const IconPlus = (p: IconProps) => (
    <svg {...base(p)}>
        <path strokeLinecap="round" d="M12 5v14M5 12h14" />
    </svg>
);

export const IconChevronDown = (p: IconProps) => (
    <svg {...base(p)}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
    </svg>
);

export const IconSlash = (p: IconProps) => (
    <svg {...base(p)}>
        <path strokeLinecap="round" d="M15 5 9 19" />
    </svg>
);
