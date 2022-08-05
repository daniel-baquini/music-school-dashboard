import ContentManagement from './content-management.model';
import { DefaultFirestoreService } from '../default-firestore.service';
import { DefaultStorageService } from '../default-storage.service';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import uniqueIdGenerator from '../../utils/unique-id-generator.function';

@Injectable({
    providedIn: 'root'
})
export class ContentManagementService {
    
    public readonly PATH_TO_COLLECTION: string = "contents-magement";

    constructor(
        private defaultFirestore: DefaultFirestoreService,
        private defaultStorage: DefaultStorageService
    ) { }

    async create(data: ContentManagement) {
        this.defaultFirestore.create(this.PATH_TO_COLLECTION, data);
    }

    async read(id: string): Promise<ContentManagement | undefined> {
        return firstValueFrom(this.defaultFirestore.read(`${this.PATH_TO_COLLECTION}/${id}`));
    }

    readAll() {
        return this.defaultFirestore.readAll<ContentManagement>(this.PATH_TO_COLLECTION);
    }

    update(data: ContentManagement) {
        return this.defaultFirestore.update(this.PATH_TO_COLLECTION, data);
    }

    async uploadFile(model: ContentManagement, file: File, progressTracker: (progress: number) => void): Promise<string> {
        return this.defaultStorage.uploadFile(
            file,
            `course-content/${model.course.name}/${uniqueIdGenerator()}}`,
            progressTracker
        );
    }
    
}
