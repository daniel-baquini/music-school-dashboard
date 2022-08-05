type TimeInterval = {
    courseName: string,
    end: number,
    start: number,
    studentName: string,
    type: "break" | "busy" | "free" | "not-avaliable"
}

export default TimeInterval