import { DefaultFirestoreService } from '../default-firestore.service';
import { DefaultStorageService } from '../default-storage.service';
import Enrollment from './enrollment.model';
import { firstValueFrom, Observable } from 'rxjs';
import generateIndexableArray from '../../utils/generate-indexable-array';
import { Injectable } from '@angular/core';
import { where } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})
export class EnrollmentService {
    
    public readonly PATH_TO_COLLECTION: string = "enrollments";

    constructor(
        private defaultFirestore: DefaultFirestoreService,
        private defaultStorage: DefaultStorageService
    ) { }

    async create(data: Enrollment) {
        data.searchIndex = generateIndexableArray(data.name + " " + data.surname);
        this.defaultFirestore.create(this.PATH_TO_COLLECTION, data);
    }

    filter(searchTerm: string): Observable<Enrollment[]> {
        return this.defaultFirestore.customQuery<Enrollment>(
            this.PATH_TO_COLLECTION,
            [where("searchIndex", "array-contains", searchTerm)]
        )
    }

    async read(id: string): Promise<Enrollment | undefined> {
        return firstValueFrom(this.defaultFirestore.read(`${this.PATH_TO_COLLECTION}/${id}`));
    }

    readAll() {
        return this.defaultFirestore.readAll<Enrollment>(this.PATH_TO_COLLECTION);
    }

    update(data: Enrollment) {
        data.searchIndex = generateIndexableArray(data.name + " " + data.surname);
        return this.defaultFirestore.update(this.PATH_TO_COLLECTION, data);
    }

    async uploadUserPhoto(model: Enrollment, progressTracker: (progress: number) => void): Promise<string> {
        if(model.photoUrl === "" || model.photoUrl.startsWith("http")) {
            return Promise.resolve(model.photoUrl);
        }

        return this.defaultStorage.uploadBase64Image(
            model.photoUrl,
            `students-photos/${model.telephone}`,
            progressTracker
        );
    }
    
}
