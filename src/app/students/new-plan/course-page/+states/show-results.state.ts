import Course from "src/app/shared/firebase/courses/course.model";
import State from "./+state.model";
import StateMachine from "./+state-machine.model";
import SelectedState from "./selected.state";

class ShowResultsState implements State {

    name: string = "Show results";

    constructor(private stateMachine: StateMachine, courses: Course[]) {
        this.stateMachine.courses = courses;
    }

    onFetched(courses: Course[]): void { }

    onNextStep(): void { }

    onSearching(): void { }

    onSelected(course: Course): void {
        this.stateMachine.setState(new SelectedState(this.stateMachine, course))
    }

}

export default ShowResultsState;