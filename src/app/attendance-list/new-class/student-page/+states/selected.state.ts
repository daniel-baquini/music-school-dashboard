import Enrollment from "src/app/shared/firebase/enrollments/enrollment.model";
import State from "./+state.model";
import StateMachine from "./+state-machine.model";
import IdleState from "./idle.state";
import SearchingState from "./searching.state";

class SelectedState implements State {

    name: string = "Selected";

    constructor(private stateMachine: StateMachine, enrollment: Enrollment) {
        this.stateMachine.form.controls.student.patchValue(enrollment);
    }

    onFetched(enrollments: Enrollment[]): void { }

    onIdle(): void {
        this.stateMachine.setState(new IdleState(this.stateMachine));
    }

    onNextStep(): void {
        this.stateMachine.navigateToPlan();
    }

    onSearching(): void {
        this.stateMachine.setState(new SearchingState(this.stateMachine));
    }

    onSelected(enrollment: Enrollment): void {
        this.stateMachine.form.controls.student.patchValue(enrollment);
    }

}

export default SelectedState;