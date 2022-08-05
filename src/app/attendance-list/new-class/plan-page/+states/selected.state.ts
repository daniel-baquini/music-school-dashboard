import Plan from "src/app/shared/firebase/plans/plan.model";
import State from "./+state.model";
import StateMachine from "./+state-machine.model";
import SearchingState from "./searching.state";

class SelectedState implements State {

    name: string = "Selected";

    constructor(private stateMachine: StateMachine, plan: Plan) {
        this.stateMachine.form.controls.plan.patchValue(plan);
    }

    onFetched(plans: Plan[]): void { }

    onNextStep(): void {
        this.stateMachine.navigateToProfessor();
    }

    onSearching(): void {
        this.stateMachine.setState(new SearchingState(this.stateMachine));
    }

    onSelected(plans: Plan): void {
        this.stateMachine.form.controls.plan.patchValue(plans);
    }

}

export default SelectedState;