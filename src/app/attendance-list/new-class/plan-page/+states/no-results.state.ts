import Plan from "src/app/shared/firebase/plans/plan.model";
import State from "./+state.model";
import StateMachine from "./+state-machine.model";

class NoResultsState implements State {

    name: string = "No results";

    constructor(private stateMachine: StateMachine) { }

    onFetched(plans: Plan[]): void { }

    onNextStep(): void { }

    onSearching(): void { }

    onSelected(plan: Plan): void { }

}

export default NoResultsState;