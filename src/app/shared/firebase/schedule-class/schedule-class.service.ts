import MusicClass from './music-class.model';
import { DefaultFirestoreService } from '../default-firestore.service';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import Employee from '../employees/employee.model';
import { where } from 'firebase/firestore';

@Injectable({
    providedIn: 'root'
})
export class ScheduleClassService {
    
    public readonly PATH_TO_COLLECTION: string = "classes";
    
    constructor(private defaultFirestore: DefaultFirestoreService) { }
    
    async create(data: MusicClass) {
        this.defaultFirestore.create(this.PATH_TO_COLLECTION, data);
    }
    
    filterByDateAndProfessorId(date: Date, professorId: string): Observable<MusicClass[]> {
        return this.defaultFirestore.customQuery<MusicClass>(
            this.PATH_TO_COLLECTION,
            [
                where("classDate", "==", date),
                where("professor.id", "==", professorId)
            ]
        );
    }

    async read(id: string): Promise<MusicClass | undefined> {
        return firstValueFrom(this.defaultFirestore.read(`${this.PATH_TO_COLLECTION}/${id}`));
    }
    
    readAll() {
        return this.defaultFirestore.readAll<MusicClass>(this.PATH_TO_COLLECTION);
    }
    
    update(data: MusicClass) {
        return this.defaultFirestore.update(this.PATH_TO_COLLECTION, data);
    }
    
}
