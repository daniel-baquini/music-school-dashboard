import Employee from "src/app/shared/firebase/employees/employee.model";

interface State {

    readonly name: string;

    onFetched(professors: Employee[]): void;
    onNextStep(): void
    onSearching(): void;
    onSelected(professor: Employee): void;
}

export default State