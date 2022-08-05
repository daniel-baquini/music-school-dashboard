import Enrollment from "src/app/shared/firebase/enrollments/enrollment.model";
import State from "./+state.model";
import StateMachine from "./+state-machine.model";
import SearchingState from "./searching.state";

class IdleState implements State {

    name: string = "Idle";

    constructor(private stateMachine: StateMachine) { }

    onFetched(enrollments: Enrollment[]): void { }

    onIdle(): void { }

    onNextStep(): void { }

    onSearching(): void {
        this.stateMachine.setState(new SearchingState(this.stateMachine));
    }

    onSelected(enrollment: Enrollment): void { }

}

export default IdleState;