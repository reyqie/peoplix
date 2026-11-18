<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Dashboard', [
            'name' => 'Andi',
            'stats' => [
                ['key' => 'users', 'label' => 'Total Employees', 'value' => '1.248', 'delta' => 12.5, 'hint' => 'vs last month', 'spark' => [880, 940, 920, 1010, 1080, 1150, 1248]],
                ['key' => 'clock', 'label' => 'Attendance Today', 'value' => '96.2%', 'delta' => 2.1, 'hint' => 'vs yesterday', 'spark' => [91, 92, 90, 93, 94, 95, 96]],
                ['key' => 'wallet', 'label' => 'Monthly Payroll', 'value' => 'Rp 4,8 M', 'delta' => -3.2, 'hint' => 'vs last month', 'spark' => [52, 51, 50, 52, 49, 47, 48]],
                ['key' => 'calendar', 'label' => 'Pending Leaves', 'value' => '24', 'delta' => 8, 'hint' => 'this week', 'spark' => [12, 15, 13, 18, 20, 22, 24]],
            ],
            'attendance' => [
                ['day' => 'Mon', 'present' => 982, 'late' => 156, 'absent' => 42],
                ['day' => 'Tue', 'present' => 1010, 'late' => 130, 'absent' => 36],
                ['day' => 'Wed', 'present' => 1042, 'late' => 148, 'absent' => 28],
                ['day' => 'Thu', 'present' => 998, 'late' => 168, 'absent' => 44],
                ['day' => 'Fri', 'present' => 960, 'late' => 190, 'absent' => 52],
            ],
            'departments' => [
                ['name' => 'Engineering', 'value' => 412, 'color' => '#8b5cf6'],
                ['name' => 'Product', 'value' => 186, 'color' => '#6366f1'],
                ['name' => 'Sales', 'value' => 238, 'color' => '#06b6d4'],
                ['name' => 'Marketing', 'value' => 154, 'color' => '#f59e0b'],
                ['name' => 'Finance', 'value' => 98, 'color' => '#ec4899'],
                ['name' => 'Operations', 'value' => 160, 'color' => '#10b981'],
            ],
            'recentHires' => [
                ['name' => 'Sarah Wijaya', 'role' => 'Senior Backend Engineer', 'department' => 'Engineering', 'email' => 'sarah@peoplix.id', 'joined' => '12 Nov 2026', 'status' => 'Onboarding'],
                ['name' => 'Bagas Pratama', 'role' => 'Product Designer', 'department' => 'Product', 'email' => 'bagas@peoplix.id', 'joined' => '10 Nov 2026', 'status' => 'Onboarding'],
                ['name' => 'Maya Sari', 'role' => 'Account Executive', 'department' => 'Sales', 'email' => 'maya@peoplix.id', 'joined' => '08 Nov 2026', 'status' => 'Probation'],
                ['name' => 'Rizky Hakim', 'role' => 'Data Analyst', 'department' => 'Finance', 'email' => 'rizky@peoplix.id', 'joined' => '05 Nov 2026', 'status' => 'Probation'],
                ['name' => 'Dewi Lestari', 'role' => 'Growth Marketer', 'department' => 'Marketing', 'email' => 'dewi@peoplix.id', 'joined' => '03 Nov 2026', 'status' => 'Active'],
            ],
            'leaveRequests' => [
                ['name' => 'Fajar Nugroho', 'type' => 'Annual Leave', 'range' => 'Nov 20–24', 'days' => 5, 'status' => 'Pending'],
                ['name' => 'Intan Permata', 'type' => 'Sick Leave', 'range' => 'Nov 18–19', 'days' => 2, 'status' => 'Approved'],
                ['name' => 'Aditya Wardana', 'type' => 'Unpaid Leave', 'range' => 'Dec 1–5', 'days' => 5, 'status' => 'Pending'],
                ['name' => 'Rina Melati', 'type' => 'Remote Work', 'range' => 'Nov 17–28', 'days' => 10, 'status' => 'Pending'],
                ['name' => 'Tomi Santoso', 'type' => 'Annual Leave', 'range' => 'Nov 12–13', 'days' => 2, 'status' => 'Rejected'],
            ],
        ]);
    }
}
