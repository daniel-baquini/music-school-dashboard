import Alert from './alert.model';
import { DefaultFirestoreService } from '../default-firestore.service';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Timestamp } from 'firebase/firestore';

@Injectable({
    providedIn: 'root'
})
export class AlertService {
    
    public readonly PATH_TO_COLLECTION: string = "alerts";

    constructor(private defaultFirestore: DefaultFirestoreService) { }

    async create(data: Alert) {
        data.date = Timestamp.fromDate(new Date());
        this.defaultFirestore.create(this.PATH_TO_COLLECTION, data);
    }

    async read(id: string): Promise<Alert | undefined> {
        return firstValueFrom(this.defaultFirestore.read(`${this.PATH_TO_COLLECTION}/${id}`));
    }

    readAll() {
        return this.defaultFirestore.readAll<Alert>(this.PATH_TO_COLLECTION);
    }

    update(data: Alert) {
        return this.defaultFirestore.update(this.PATH_TO_COLLECTION, data);
    }

}
