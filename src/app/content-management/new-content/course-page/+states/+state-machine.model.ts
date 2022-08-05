import CommonTypeToAbstractControlBased from "src/app/shared/utils/common-type-to-abstract-control-based.type";
import ContentManagement from "src/app/shared/firebase/contents-magement/content-management.model";
import Course from "src/app/shared/firebase/courses/course.model";
import { FormGroup } from "@angular/forms";
import State from "./+state.model";

abstract class StateMachine {

    public abstract courses: Course[]
    abstract form: FormGroup<CommonTypeToAbstractControlBased<ContentManagement>>;;
    protected abstract state: State;
    
    abstract navigateToContentType(): void;
    abstract navigateToTitleAndDescription(): void;

    setState(state: State): void {
        this.state = state;
    }

}

export default StateMachine