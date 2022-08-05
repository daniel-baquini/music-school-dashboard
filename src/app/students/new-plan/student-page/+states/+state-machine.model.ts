import CommonTypeToAbstractControlBased from "src/app/shared/utils/common-type-to-abstract-control-based.type";
import Enrollment from "src/app/shared/firebase/enrollments/enrollment.model";
import { FormGroup } from "@angular/forms";
import Plan from "src/app/shared/firebase/plans/plan.model";
import State from "./+state.model";

abstract class StateMachine {

    public abstract enrollments: Enrollment[]
    abstract form: FormGroup<CommonTypeToAbstractControlBased<Plan>>;
    protected abstract state: State;
    
    abstract navigateToCourse(): void;
    abstract navigateToPlans(): void;

    setState(state: State): void {
        this.state = state;
    }

}

export default StateMachine