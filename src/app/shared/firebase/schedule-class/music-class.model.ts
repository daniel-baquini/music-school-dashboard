interface MusicClass {
    classDate: Date;
    classEndTime: number;
    classStartTime: number;
    id: string;
    plan: {
        course: {
            id: string;
            name: string;
        };
        id: string;
    };
    professor: {
        id: string;
        name: string;
    };
    status: "Missed" | "Pending" | "Reschedule" | "Showed up";
    student: {
        id: string;
        name: string;
        surname: string;
    };
}

export default MusicClass

