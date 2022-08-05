import State from "./+state.model";
import StateMachine from "./+state-machine.model";
import SearchingState from "./searching.state";
import SelectedState from "./selected.state";
import Employee from "src/app/shared/firebase/employees/employee.model";

class ShowResultsState implements State {

    name: string = "Show results";

    constructor(private stateMachine: StateMachine, professor: Employee[]) {
        this.stateMachine.professors = professor;
    }

    onFetched(professors: Employee[]): void { }

    onNextStep(): void { }

    onSearching(): void {
        this.stateMachine.setState(new SearchingState(this.stateMachine));
    }

    onSelected(professor: Employee): void {
        this.stateMachine.setState(new SelectedState(this.stateMachine, professor))
    }

}

export default ShowResultsState;