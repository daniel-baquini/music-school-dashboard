import { FormControl, FormGroup } from "@angular/forms";

type CommonTypeToAbstractControlBased<T> = {
    [K in keyof T]: 
    T[K] extends boolean | Date | number | string | undefined ? FormControl<T[K]> :
    FormGroup<CommonTypeToAbstractControlBased<T[K]>>
}

export default CommonTypeToAbstractControlBased;