import Employee from "src/app/shared/firebase/employees/employee.model";
import State from "./+state.model";
import StateMachine from "./+state-machine.model";
import SearchingState from "./searching.state";

class NoResultsState implements State {

    name: string = "No results";

    constructor(private stateMachine: StateMachine) { }

    onFetched(professors: Employee[]): void { }

    onNextStep(): void { }

    onSearching(): void {
        this.stateMachine.setState(new SearchingState(this.stateMachine));
    }

    onSelected(professor: Employee): void { }

}

export default NoResultsState;