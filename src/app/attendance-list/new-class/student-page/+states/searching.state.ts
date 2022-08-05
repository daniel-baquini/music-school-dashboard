import Enrollment from "src/app/shared/firebase/enrollments/enrollment.model";
import State from "./+state.model";
import StateMachine from "./+state-machine.model";
import IdleState from "./idle.state";
import NoResultsState from "./no-results.state";
import ShowResultsState from "./show-results.state";

class SearchingState implements State {

    name: string = "Searching";

    constructor(private stateMachine: StateMachine) {
        stateMachine.form.reset();
    }

    onFetched(enrollments: Enrollment[]): void {
        this.stateMachine.setState(
            enrollments.length === 0 ?
            new NoResultsState(this.stateMachine) :
            new ShowResultsState(this.stateMachine, enrollments)
        );
    }

    onIdle(): void {
        this.stateMachine.setState(new IdleState(this.stateMachine));
    }

    onNextStep(): void { }

    onSearching(): void { }

    onSelected(enrollment: Enrollment): void { }

}

export default SearchingState;