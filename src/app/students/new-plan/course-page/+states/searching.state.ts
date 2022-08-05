import Enrollment from "src/app/shared/firebase/enrollments/enrollment.model";
import State from "./+state.model";
import StateMachine from "./+state-machine.model";
import NoResultsState from "./no-results.state";
import ShowResultsState from "./show-results.state";
import Course from "src/app/shared/firebase/courses/course.model";

class SearchingState implements State {

    name: string = "Searching";

    constructor(private stateMachine: StateMachine) { }

    onFetched(courses: Course[]): void {
        this.stateMachine.setState(
            courses.length === 0 ?
            new NoResultsState(this.stateMachine) :
            new ShowResultsState(this.stateMachine, courses)
        );
    }

    onNextStep(): void { }

    onSearching(): void { }

    onSelected(course: Course): void { }

}

export default SearchingState;