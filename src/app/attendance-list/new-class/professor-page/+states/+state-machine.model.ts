import CommonTypeToAbstractControlBased from "src/app/shared/utils/common-type-to-abstract-control-based.type";
import { FormGroup } from "@angular/forms";
import MusicClass from "src/app/shared/firebase/schedule-class/music-class.model";
import State from "./+state.model";
import Employee from "src/app/shared/firebase/employees/employee.model";

abstract class StateMachine {

    public abstract professors: Employee[]
    abstract form: FormGroup<CommonTypeToAbstractControlBased<MusicClass>>;
    protected abstract state: State;
    
    abstract navigateToClassDate(): void;
    abstract navigateToPlan(): void;

    setState(state: State): void {
        this.state = state;
    }

}

export default StateMachine