import Enrollment from "src/app/shared/firebase/enrollments/enrollment.model";
import State from "./+state.model";
import StateMachine from "./+state-machine.model";
import NoResultsState from "./no-results.state";
import ShowResultsState from "./show-results.state";
import Employee from "src/app/shared/firebase/employees/employee.model";

class SearchingState implements State {

    name: string = "Searching";

    constructor(private stateMachine: StateMachine) { }

    onFetched(professors: Employee[]): void {
        this.stateMachine.setState(
            professors.length === 0 ?
            new NoResultsState(this.stateMachine) :
            new ShowResultsState(this.stateMachine, professors)
        );
    }

    onNextStep(): void { }

    onSearching(): void { }

    onSelected(professor: Employee): void { }

}

export default SearchingState;