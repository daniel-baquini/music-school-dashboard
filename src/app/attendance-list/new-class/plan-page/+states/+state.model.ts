import Plan from "src/app/shared/firebase/plans/plan.model";

interface State {

    readonly name: string;

    onFetched(plans: Plan[]): void;
    onNextStep(): void
    onSearching(): void;
    onSelected(plan: Plan): void;
}

export default State