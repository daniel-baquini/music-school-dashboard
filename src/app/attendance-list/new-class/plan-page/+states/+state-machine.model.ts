import CommonTypeToAbstractControlBased from "src/app/shared/utils/common-type-to-abstract-control-based.type";
import { FormGroup } from "@angular/forms";
import MusicClass from "src/app/shared/firebase/schedule-class/music-class.model";
import Plan from "src/app/shared/firebase/plans/plan.model";
import State from "./+state.model";

abstract class StateMachine {

    public abstract plans: Plan[]
    abstract form: FormGroup<CommonTypeToAbstractControlBased<MusicClass>>;
    protected abstract state: State;
    
    abstract navigateToProfessor(): void;
    abstract navigateToStudent(): void;

    setState(state: State): void {
        this.state = state;
    }

}

export default StateMachine