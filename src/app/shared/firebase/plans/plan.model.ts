interface Plan {
    courseName: string;
    endDate: Date;
    id?: number;
    isFinished: boolean;
    startDate: Date;
    studentName: string;
    value: number;
}

export default Plan;