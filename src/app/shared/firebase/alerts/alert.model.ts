import { Timestamp } from "firebase/firestore";

interface Alert {
    content: string;
    date: Timestamp;
    id?: string;
    title: string
}

export default Alert