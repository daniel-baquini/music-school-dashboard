import Course from "src/app/shared/firebase/courses/course.model";
import State from "./+state.model";
import StateMachine from "./+state-machine.model";

class NoResultsState implements State {

    name: string = "No results";

    constructor(private stateMachine: StateMachine) { }

    onFetched(courses: Course[]): void { }

    onNextStep(): void { }

    onSearching(): void { }

    onSelected(course: Course): void { }

}

export default NoResultsState;