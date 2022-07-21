import Plan from "../plans/plan.model";

interface Class {
    classDate: Date;
    classEndTime: string;
    classStartTime: string;
    id?: string;
    studentName: string;
    plan: Plan;
    professorName: string;
    // front-end only property
    _type?: "break" | "busy" | "free" | "not-avaliable";
}

export default Class