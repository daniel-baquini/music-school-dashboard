import Course from "src/app/shared/firebase/courses/course.model";
import State from "./+state.model";
import StateMachine from "./+state-machine.model";
import SearchingState from "./searching.state";

class SelectedState implements State {

    name: string = "Selected";

    constructor(private stateMachine: StateMachine, course: Course) {
        this.stateMachine.form.controls.course.patchValue(course);
    }

    onFetched(courses: Course[]): void { }

    onNextStep(): void {
        this.stateMachine.navigateToContentType();
    }

    onSearching(): void {
        this.stateMachine.setState(new SearchingState(this.stateMachine));
    }

    onSelected(course: Course): void {
        this.stateMachine.form.controls.course.patchValue(course);
    }

}

export default SelectedState;