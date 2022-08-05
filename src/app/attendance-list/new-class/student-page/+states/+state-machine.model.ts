import CommonTypeToAbstractControlBased from "src/app/shared/utils/common-type-to-abstract-control-based.type";
import Enrollment from "src/app/shared/firebase/enrollments/enrollment.model";
import { FormGroup } from "@angular/forms";
import MusicClass from "src/app/shared/firebase/schedule-class/music-class.model";
import State from "./+state.model";

abstract class StateMachine {

    public abstract enrollments: Enrollment[]
    abstract form: FormGroup<CommonTypeToAbstractControlBased<MusicClass>>;
    protected abstract state: State;
    
    abstract navigateToScheduleClasses(): void;
    abstract navigateToPlan(): void;

    setState(state: State): void {
        this.state = state;
    }

}

export default StateMachine