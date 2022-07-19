import Course from './course.model';
import { DefaultFirestoreService } from '../default-firestore.service';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CourseService {
    
    public readonly PATH_TO_COLLECTION: string = "courses";

    constructor(private defaultFirestore: DefaultFirestoreService) { }

    async create(data: Course) {
        this.defaultFirestore.create(this.PATH_TO_COLLECTION, data);
    }

    async read(id: string): Promise<Course | undefined> {
        return firstValueFrom(this.defaultFirestore.read(`${this.PATH_TO_COLLECTION}/${id}`));
    }

    readAll() {
        return this.defaultFirestore.readAll<Course>(this.PATH_TO_COLLECTION);
    }

    update(data: Course) {
        return this.defaultFirestore.update(this.PATH_TO_COLLECTION, data);
    }

}
