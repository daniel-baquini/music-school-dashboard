import { DefaultFirestoreService } from '../default-firestore.service';
import Enrollment from './enrollment.model';
import { Injectable } from '@angular/core';
import { DefaultStorageService } from '../default-storage.service';
import { collection, collectionData } from '@angular/fire/firestore';
import { firstValueFrom } from 'rxjs';

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
        this.defaultFirestore.create(this.PATH_TO_COLLECTION, data);
    }

    async read(id: string): Promise<Enrollment | undefined> {
        return firstValueFrom(this.defaultFirestore.read(`${this.PATH_TO_COLLECTION}/${id}`));
    }

    readAll() {
        return this.defaultFirestore.readAll<Enrollment>(this.PATH_TO_COLLECTION);
    }

    update(data: Enrollment) {
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
