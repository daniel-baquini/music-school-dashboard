import Class from './class.model';
import { DefaultFirestoreService } from '../default-firestore.service';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ScheduleClassService {
    
    public readonly PATH_TO_COLLECTION: string = "classes";
    
    constructor(private defaultFirestore: DefaultFirestoreService) { }
    
    async create(data: Class) {
        this.defaultFirestore.create(this.PATH_TO_COLLECTION, data);
    }
    
    async read(id: string): Promise<Class | undefined> {
        return firstValueFrom(this.defaultFirestore.read(`${this.PATH_TO_COLLECTION}/${id}`));
    }
    
    readAll() {
        return this.defaultFirestore.readAll<Class>(this.PATH_TO_COLLECTION);
    }
    
    update(data: Class) {
        return this.defaultFirestore.update(this.PATH_TO_COLLECTION, data);
    }
    
}
