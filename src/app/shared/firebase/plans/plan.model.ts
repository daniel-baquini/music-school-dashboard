interface Plan {
    course: {
        id: string;
        name: string;
    };
    endDate: string;
    id: string;
    isFinished: boolean;
    startDate: string;
    student: {
        id: string;
        name: string;
        surname: string;
    };
    value: number;
}

export default Plan;