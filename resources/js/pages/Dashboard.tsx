import AppLayout from "../layouts/AppLayout";
import { AttendanceChart, DonutChart, Sparkline } from "../components/Charts";
import {
    IconArrowRight,
    IconBriefcase,
    IconCalendar,
    IconCheck,
    IconClock,
    IconDots,
    IconTrendDown,
    IconTrendUp,
    IconUsers,
    IconWallet,
    IconX,
} from "../components/Icons";
import Avatar from "../components/ui/Avatar";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import { Card, CardBody, CardHeader } from "../components/ui/Card";
import { useToast } from "../components/ui/Toast";
import type {
    AttendancePoint,
    DepartmentShare,
    Employee,
    LeaveRequest,
    Stat,
} from "../types";

const statIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    users: IconUsers,
    clock: IconClock,
    wallet: IconWallet,
    calendar: IconCalendar,
};

const leaveBadge = {
    Approved: "success",
    Pending: "warning",
    Rejected: "danger",
} as const;

export default function Dashboard({
    stats,
    attendance,
    departments,
    recentHires,
    leaveRequests,
    name,
}: {
    stats: Stat[];
    attendance: AttendancePoint[];
    departments: DepartmentShare[];
    recentHires: Employee[];
    leaveRequests: LeaveRequest[];
    name: string;
}) {
    const toast = useToast();

    return (
        <AppLayout
            title={`Welcome back, ${name} 👋`}
            subtitle="Here's what's happening across your organisation today, Nov 17 2026."
        >
            {/* Stats */}
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((s) => {
                    const Icon = statIcons[s.key] ?? IconBriefcase;
                    const up = s.delta >= 0;
                    return (
                        <Card
                            key={s.key}
                            className="group relative overflow-hidden p-5 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-600/5 dark:hover:border-violet-500/20"
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-[13px] font-medium text-neutral-500 dark:text-neutral-400">
                                        {s.label}
                                    </p>
                                    <p className="mt-2 text-[26px] font-bold leading-none tracking-tight">
                                        {s.value}
                                    </p>
                                </div>
                                <div className="grid size-11 place-items-center rounded-xl bg-violet-50 text-violet-600 transition group-hover:scale-105 dark:bg-violet-500/10 dark:text-violet-300">
                                    <Icon className="size-5" />
                                </div>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <div className="flex items-center gap-1.5">
                                    <Badge variant={up ? "success" : "danger"}>
                                        {up ? (
                                            <IconTrendUp className="size-3" />
                                        ) : (
                                            <IconTrendDown className="size-3" />
                                        )}
                                        {up ? "+" : ""}
                                        {s.delta}%
                                    </Badge>
                                    <span className="text-[11px] text-neutral-400">
                                        {s.hint}
                                    </span>
                                </div>
                                <Sparkline points={s.spark} up={up} />
                            </div>
                        </Card>
                    );
                })}
            </div>

            {/* Charts row */}
            <div className="mt-5 grid gap-5 xl:grid-cols-3">
                <Card className="xl:col-span-2">
                    <CardHeader
                        title="Attendance Overview"
                        subtitle="Weekly workforce presence report"
                        action={
                            <div className="flex items-center gap-4 text-[11px] font-medium text-neutral-500 dark:text-neutral-400">
                                <span className="flex items-center gap-1.5">
                                    <i className="size-2.5 rounded-full bg-violet-500" />{" "}
                                    Present
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <i className="size-2.5 rounded-full bg-blue-400" />{" "}
                                    Late
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <i className="size-2.5 rounded-full bg-neutral-300 dark:bg-white/20" />{" "}
                                    Absent
                                </span>
                            </div>
                        }
                    />
                    <CardBody>
                        <AttendanceChart data={attendance} />
                    </CardBody>
                </Card>

                <Card>
                    <CardHeader
                        title="Workforce by Department"
                        subtitle="Distribution across teams"
                    />
                    <CardBody>
                        <div className="grid place-items-center">
                            <DonutChart data={departments} />
                        </div>
                        <ul className="mt-5 space-y-2.5">
                            {departments.map((d) => (
                                <li
                                    key={d.name}
                                    className="flex items-center gap-2.5 text-[13px]"
                                >
                                    <i
                                        className="size-2.5 rounded-full"
                                        style={{ backgroundColor: d.color }}
                                    />
                                    <span className="font-medium">
                                        {d.name}
                                    </span>
                                    <span className="ml-auto font-semibold text-neutral-500 dark:text-neutral-400">
                                        {d.value.toLocaleString("id-ID")}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </CardBody>
                </Card>
            </div>

            {/* Tables row */}
            <div className="mt-5 grid gap-5 xl:grid-cols-3">
                <Card className="xl:col-span-2">
                    <CardHeader
                        title="Recent Hires"
                        subtitle="Latest onboarding activity"
                        action={
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-violet-600 dark:text-violet-300"
                                onClick={() =>
                                    toast.push({
                                        title: "All hires",
                                        message: "Opening employee directory…",
                                        variant: "info",
                                    })
                                }
                            >
                                View all <IconArrowRight className="size-4" />
                            </Button>
                        }
                    />
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[560px] text-left text-sm">
                            <thead>
                                <tr className="border-y border-black/5 text-[11px] uppercase tracking-wider text-neutral-400 dark:border-white/5">
                                    <th className="px-5 py-3 font-semibold">
                                        Employee
                                    </th>
                                    <th className="px-3 py-3 font-semibold">
                                        Department
                                    </th>
                                    <th className="px-3 py-3 font-semibold">
                                        Joined
                                    </th>
                                    <th className="px-3 py-3 font-semibold">
                                        Status
                                    </th>
                                    <th className="px-5 py-3" />
                                </tr>
                            </thead>
                            <tbody>
                                {recentHires.map((e) => (
                                    <tr
                                        key={e.email}
                                        className="border-b border-black/5 transition hover:bg-violet-50/50 dark:border-white/5 dark:hover:bg-white/[0.02]"
                                    >
                                        <td className="px-5 py-3.5">
                                            <div className="flex items-center gap-3">
                                                <Avatar
                                                    name={e.name}
                                                    size="sm"
                                                />
                                                <div>
                                                    <p className="font-semibold">
                                                        {e.name}
                                                    </p>
                                                    <p className="text-[11px] text-neutral-400">
                                                        {e.role}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-3 py-3.5 text-neutral-500 dark:text-neutral-400">
                                            {e.department}
                                        </td>
                                        <td className="px-3 py-3.5 text-neutral-500 dark:text-neutral-400">
                                            {e.joined}
                                        </td>
                                        <td className="px-3 py-3.5">
                                            <Badge variant="violet">
                                                {e.status}
                                            </Badge>
                                        </td>
                                        <td className="px-5 py-3.5 text-right">
                                            <button
                                                className="text-neutral-300 transition hover:text-violet-500"
                                                aria-label="More"
                                                onClick={() =>
                                                    toast.push({
                                                        title: e.name,
                                                        message: `${e.role} · ${e.department}`,
                                                        variant: "info",
                                                    })
                                                }
                                            >
                                                <IconDots className="size-5" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>

                <Card>
                    <CardHeader
                        title="Leave Requests"
                        action={<Badge variant="warning">4 pending</Badge>}
                    />
                    <CardBody className="pt-0">
                        <div className="space-y-3">
                            {leaveRequests.map((l) => (
                                <div
                                    key={l.name + l.range}
                                    className="group flex items-center gap-3 rounded-xl border border-black/5 bg-neutral-50/50 p-3 transition hover:border-violet-300 dark:border-white/5 dark:bg-white/[0.02] dark:hover:border-violet-500/30"
                                >
                                    <Avatar name={l.name} size="sm" />
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-[13px] font-semibold">
                                            {l.name}
                                        </p>
                                        <p className="text-[11px] text-neutral-400">
                                            {l.type} · {l.days}d · {l.range}
                                        </p>
                                    </div>
                                    {l.status === "Pending" ? (
                                        <div className="hidden items-center gap-1 group-hover:flex">
                                            <button
                                                aria-label="Approve"
                                                onClick={() =>
                                                    toast.push({
                                                        title: "Leave approved",
                                                        message: `${l.name} · ${l.range}`,
                                                        variant: "success",
                                                    })
                                                }
                                                className="grid size-7 place-items-center rounded-lg bg-emerald-100 text-emerald-600 transition hover:bg-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-300"
                                            >
                                                <IconCheck className="size-3.5" />
                                            </button>
                                            <button
                                                aria-label="Reject"
                                                onClick={() =>
                                                    toast.push({
                                                        title: "Leave rejected",
                                                        message: `${l.name} · ${l.range}`,
                                                        variant: "error",
                                                    })
                                                }
                                                className="grid size-7 place-items-center rounded-lg bg-rose-100 text-rose-600 transition hover:bg-rose-200 dark:bg-rose-500/15 dark:text-rose-300"
                                            >
                                                <IconX className="size-3.5" />
                                            </button>
                                        </div>
                                    ) : (
                                        <Badge variant={leaveBadge[l.status]}>
                                            {l.status}
                                        </Badge>
                                    )}
                                </div>
                            ))}
                        </div>
                        <Button
                            variant="secondary"
                            className="mt-4 w-full"
                            onClick={() =>
                                toast.push({
                                    title: "Leave requests",
                                    message: "Opening request center…",
                                    variant: "info",
                                })
                            }
                        >
                            Manage all requests
                        </Button>
                    </CardBody>
                </Card>
            </div>
        </AppLayout>
    );
}
