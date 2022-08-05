import CommonTypeToAbstractControlBased from "src/app/shared/utils/common-type-to-abstract-control-based.type";
import Course from "src/app/shared/firebase/courses/course.model";
import { FormGroup } from "@angular/forms";
import Plan from "src/app/shared/firebase/plans/plan.model";
import State from "./+state.model";

abstract class StateMachine {

    public abstract courses: Course[]
    abstract form: FormGroup<CommonTypeToAbstractControlBased<Plan>>;
    protected abstract state: State;
    
    abstract navigateToStardAndEnd(): void;
    abstract navigateToStudent(): void;

    setState(state: State): void {
        this.state = state;
    }

}

export default StateMachine