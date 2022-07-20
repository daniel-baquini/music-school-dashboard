import WorkingTime from "./working-time.model";

interface Employee {
    courses: string[];
    email: string;
    id?: string;
    name: string;
    photoUrl: string;
    surname: string;
    workingTimes: WorkingTime[];
}

export default Employee;