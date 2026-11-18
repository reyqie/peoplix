export interface Stat {
    key: string;
    label: string;
    value: string;
    delta: number;
    hint: string;
    spark: number[];
}

export interface AttendancePoint {
    day: string;
    present: number;
    late: number;
    absent: number;
}

export interface DepartmentShare {
    name: string;
    value: number;
    color: string;
}

export interface Employee {
    name: string;
    role: string;
    department: string;
    email: string;
    joined: string;
    status: string;
}

export interface LeaveRequest {
    name: string;
    type: string;
    range: string;
    days: number;
    status: 'Approved' | 'Pending' | 'Rejected';
}
