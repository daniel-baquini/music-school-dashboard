import { DefaultFirestoreService } from '../default-firestore.service';
import { firstValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import Plan from './plan.model';
import { Timestamp } from 'firebase/firestore';

@Injectable({
    providedIn: 'root'
})
export class PlanService {
    
    public readonly PATH_TO_COLLECTION: string = "plans";

    constructor(private defaultFirestore: DefaultFirestoreService) { }

    async create(data: Plan) {
        this.defaultFirestore.create(this.PATH_TO_COLLECTION, data);
    }

    async read(id: string): Promise<Plan | undefined> {
        return firstValueFrom(this.defaultFirestore.read(`${this.PATH_TO_COLLECTION}/${id}`));
    }

    readAll() {
        return this.defaultFirestore.readAll<Plan>(this.PATH_TO_COLLECTION);
    }

    update(data: Plan) {
        return this.defaultFirestore.update(this.PATH_TO_COLLECTION, data);
    }

}
