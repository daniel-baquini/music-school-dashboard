import Plan from "src/app/shared/firebase/plans/plan.model";
import State from "./+state.model";
import StateMachine from "./+state-machine.model";
import SelectedState from "./selected.state";

class ShowResultsState implements State {

    name: string = "Show results";

    constructor(private stateMachine: StateMachine, plans: Plan[]) {
        this.stateMachine.plans = plans;
    }

    onFetched(plans: Plan[]): void { }

    onNextStep(): void { }

    onSearching(): void { }

    onSelected(plans: Plan): void {
        this.stateMachine.setState(new SelectedState(this.stateMachine, plans))
    }

}

export default ShowResultsState;