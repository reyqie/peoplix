import type { AttendancePoint, DepartmentShare } from '../types';

export function Sparkline({ points, up = true }: { points: number[]; up?: boolean }) {
    const w = 96;
    const h = 36;
    const min = Math.min(...points);
    const max = Math.max(...points);
    const span = max - min || 1;
    const coords = points.map((v, i) => [(i / (points.length - 1)) * w, h - 4 - ((v - min) / span) * (h - 8)]);
    const path = coords.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x!.toFixed(1)},${y!.toFixed(1)}`).join(' ');
    const area = `${path} L${w},${h} L0,${h} Z`;
    const stroke = up ? 'rgb(139 92 246)' : 'rgb(244 63 94)';
    const id = `spark-${up ? 'up' : 'down'}-${points.length}-${Math.round(points[0])}`;

    return (
        <svg viewBox={`0 0 ${w} ${h}`} className="h-9 w-24">
            <defs>
                <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={stroke} stopOpacity="0.3" />
                    <stop offset="100%" stopColor={stroke} stopOpacity="0" />
                </linearGradient>
            </defs>
            <path d={area} fill={`url(#${id})`} />
            <path d={path} fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export function AttendanceChart({ data }: { data: AttendancePoint[] }) {
    const w = 640;
    const h = 260;
    const padX = 44;
    const padBottom = 32;
    const top = 16;
    const max = Math.max(...data.map((d) => d.present + d.late + d.absent)) * 1.05 || 1;
    const groupW = (w - padX - 16) / data.length;
    const barW = 12;

    const y = (v: number) => top + (1 - v / max) * (h - top - padBottom);

    const ticks = 4;
    const gridLines = Array.from({ length: ticks + 1 }, (_, i) => Math.round((max * i) / ticks));

    return (
        <svg viewBox={`0 0 ${w} ${h}`} className="w-full" role="img" aria-label="Weekly attendance chart">
            <defs>
                <linearGradient id="bar-present" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgb(167 139 250)" />
                    <stop offset="100%" stopColor="rgb(124 58 237)" />
                </linearGradient>
                <linearGradient id="bar-late" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgb(147 197 253)" />
                    <stop offset="100%" stopColor="rgb(59 130 246)" />
                </linearGradient>
            </defs>

            {gridLines.map((v) => (
                <g key={v}>
                    <line x1={padX} x2={w - 8} y1={y(v)} y2={y(v)} stroke="currentColor" strokeOpacity="0.08" strokeDasharray="4 4" />
                    <text x={padX - 8} y={y(v) + 4} textAnchor="end" className="fill-neutral-400 text-[10px]" fontSize="10">
                        {v}
                    </text>
                </g>
            ))}

            {data.map((d, i) => {
                const cx = padX + i * groupW + groupW / 2 - (barW * 3 + 8) / 2 + barW / 2;
                return (
                    <g key={d.day}>
                        <rect
                            x={cx}
                            y={y(d.present)}
                            width={barW}
                            height={h - padBottom - y(d.present)}
                            rx="4"
                            fill="url(#bar-present)"
                        />
                        <rect x={cx + barW + 4} y={y(d.late)} width={barW} height={h - padBottom - y(d.late)} rx="4" fill="url(#bar-late)" />
                        <rect
                            x={cx + (barW + 4) * 2}
                            y={y(d.absent)}
                            width={barW}
                            height={h - padBottom - y(d.absent)}
                            rx="4"
                            fill="currentColor"
                            fillOpacity="0.15"
                        />
                        <text x={padX + i * groupW + groupW / 2} y={h - 10} textAnchor="middle" className="fill-neutral-400" fontSize="11" fontWeight="500">
                            {d.day}
                        </text>
                    </g>
                );
            })}
        </svg>
    );
}

export function DonutChart({ data }: { data: DepartmentShare[] }) {
    const total = data.reduce((s, d) => s + d.value, 0) || 1;
    const r = 60;
    const c = 2 * Math.PI * r;
    let offset = 0;

    return (
        <div className="relative grid place-items-center">
            <svg viewBox="0 0 160 160" className="size-44 -rotate-90">
                <circle cx="80" cy="80" r={r} fill="none" stroke="currentColor" strokeOpacity="0.06" strokeWidth="20" />
                {data.map((d) => {
                    const len = (d.value / total) * c;
                    const seg = (
                        <circle
                            key={d.name}
                            cx="80"
                            cy="80"
                            r={r}
                            fill="none"
                            stroke={d.color}
                            strokeWidth="20"
                            strokeLinecap="round"
                            strokeDasharray={`${Math.max(len - 4, 1)} ${c - Math.max(len - 4, 1)}`}
                            strokeDashoffset={-offset}
                        />
                    );
                    offset += len;
                    return seg;
                })}
            </svg>
            <div className="absolute text-center">
                <p className="text-2xl font-bold">{total.toLocaleString('id-ID')}</p>
                <p className="text-[11px] font-medium text-neutral-400">Total</p>
            </div>
        </div>
    );
}
