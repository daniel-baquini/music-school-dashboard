import Enrollment from "src/app/shared/firebase/enrollments/enrollment.model";
import State from "./+state.model";
import StateMachine from "./+state-machine.model";
import SearchingState from "./searching.state";
import Employee from "src/app/shared/firebase/employees/employee.model";

class SelectedState implements State {

    name: string = "Selected";

    constructor(private stateMachine: StateMachine, professor: Employee) {
        this.stateMachine.form.controls.professor.patchValue(professor);
    }

    onFetched(professors: Employee[]): void { }

    onNextStep(): void {
        this.stateMachine.navigateToClassDate();
    }

    onSearching(): void {
        this.stateMachine.setState(new SearchingState(this.stateMachine));
    }

    onSelected(professor: Employee): void {
        this.stateMachine.form.controls.professor.patchValue(professor);
    }

}

export default SelectedState;