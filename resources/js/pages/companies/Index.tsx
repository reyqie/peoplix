import AppLayout from "../../layouts/AppLayout";
import Badge from "../../components/ui/Badge";
import { Card } from "../../components/ui/Card";
import { Company } from "../../types/Company";

type Props = {
    companies: Company[];
};

export default function Index({ companies }: Props) {
    return (
        <AppLayout
            title="Companies"
            subtitle="Monitor semua company yang terdaftar"
            active="Employees"
        >
            <Card className="overflow-hidden">
                <table className="w-full text-left text-sm">
                    <thead className="border-b border-black/5 text-[11px] uppercase tracking-wider text-neutral-400 dark:border-white/5">
                        <tr>
                            <th className="px-5 py-3 font-semibold">Name</th>
                            <th className="px-3 py-3 font-semibold">Code</th>
                            <th className="px-5 py-3 font-semibold">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {companies.map((company) => (
                            <tr
                                key={company.id}
                                className="border-b border-black/5 dark:border-white/5"
                            >
                                <td className="px-5 py-3.5 font-semibold">
                                    {company.name}
                                </td>
                                <td className="px-3 py-3.5 text-neutral-500 dark:text-neutral-400">
                                    {company.code}
                                </td>
                                <td className="px-5 py-3.5">
                                    <Badge
                                        variant={
                                            company.is_active
                                                ? "success"
                                                : "neutral"
                                        }
                                    >
                                        {company.is_active
                                            ? "Active"
                                            : "Inactive"}
                                    </Badge>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
        </AppLayout>
    );
}
