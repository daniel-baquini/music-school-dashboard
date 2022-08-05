import Course from "src/app/shared/firebase/courses/course.model";

interface State {

    readonly name: string;

    onFetched(courses: Course[]): void;
    onNextStep(): void
    onSearching(): void;
    onSelected(course: Course): void;
}

export default State