import Enrollment from "src/app/shared/firebase/enrollments/enrollment.model";

interface State {

    readonly name: string;

    onFetched(enrollments: Enrollment[]): void;
    onIdle(): void;
    onNextStep(): void
    onSearching(): void;
    onSelected(enrollment: Enrollment): void;
}

export default State