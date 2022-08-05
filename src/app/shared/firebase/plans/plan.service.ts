import { DefaultFirestoreService } from '../default-firestore.service';
import { firstValueFrom, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import Plan from './plan.model';
import { DocumentReference, where } from 'firebase/firestore';

@Injectable({
    providedIn: 'root'
})
export class PlanService {

    public readonly PATH_TO_COLLECTION: string = "plans";

    constructor(private defaultFirestore: DefaultFirestoreService) { }

    async create(data: Plan): Promise<DocumentReference<Plan>> {
        return this.defaultFirestore.create<Plan>(this.PATH_TO_COLLECTION, data);
    }

    async read(id: string): Promise<Plan | undefined> {
        return firstValueFrom(this.defaultFirestore.read(`${this.PATH_TO_COLLECTION}/${id}`));
    }

    readAll() {
        return this.defaultFirestore.readAll<Plan>(this.PATH_TO_COLLECTION);
    }

    readAllNotFinishedByStudentId(studentId: string): Observable<Plan[]> {
        return this.defaultFirestore.customQuery(
            this.PATH_TO_COLLECTION,
            [
                where("isFinished", "==", false),
                where("student.id", "==", studentId)
            ]
        );
    }

    update(data: Plan) {
        return this.defaultFirestore.update(this.PATH_TO_COLLECTION, data);
    }

}
