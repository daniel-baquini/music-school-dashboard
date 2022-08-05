import Enrollment from "src/app/shared/firebase/enrollments/enrollment.model";
import State from "./+state.model";
import StateMachine from "./+state-machine.model";
import SearchingState from "./searching.state";
import IdleState from "./idle.state";
import SelectedState from "./selected.state";

class ShowResultsState implements State {

    name: string = "Show results";

    constructor(private stateMachine: StateMachine, enrollments: Enrollment[]) {
        this.stateMachine.enrollments = enrollments;
    }

    onFetched(enrollments: Enrollment[]): void { }

    onIdle(): void {
        this.stateMachine.setState(new IdleState(this.stateMachine));
    }

    onNextStep(): void { }

    onSearching(): void {
        this.stateMachine.setState(new SearchingState(this.stateMachine));
    }

    onSelected(enrollment: Enrollment): void {
        this.stateMachine.setState(new SelectedState(this.stateMachine, enrollment))
    }

}

export default ShowResultsState;