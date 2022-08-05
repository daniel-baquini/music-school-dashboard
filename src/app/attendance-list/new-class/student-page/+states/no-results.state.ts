import Enrollment from "src/app/shared/firebase/enrollments/enrollment.model";
import State from "./+state.model";
import StateMachine from "./+state-machine.model";
import SearchingState from "./searching.state";
import IdleState from "./idle.state";

class NoResultsState implements State {

    name: string = "No results";

    constructor(private stateMachine: StateMachine) { }

    onFetched(enrollments: Enrollment[]): void { }

    onIdle(): void {
        this.stateMachine.setState(new IdleState(this.stateMachine));
    }

    onNextStep(): void { }

    onSearching(): void {
        this.stateMachine.setState(new SearchingState(this.stateMachine));
    }

    onSelected(enrollment: Enrollment): void { }

}

export default NoResultsState;