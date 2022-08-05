import NoResultsState from "./no-results.state";
import Plan from "src/app/shared/firebase/plans/plan.model";
import ShowResultsState from "./show-results.state";
import State from "./+state.model";
import StateMachine from "./+state-machine.model";

class SearchingState implements State {

    name: string = "Searching";

    constructor(private stateMachine: StateMachine) { }

    onFetched(plans: Plan[]): void {
        this.stateMachine.setState(
            plans.length === 0 ?
            new NoResultsState(this.stateMachine) :
            new ShowResultsState(this.stateMachine, plans)
        );
    }

    onNextStep(): void { }

    onSearching(): void { }

    onSelected(plan: Plan): void { }

}

export default SearchingState;