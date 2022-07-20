import { DefaultFirestoreService } from '../default-firestore.service';
import { DefaultStorageService } from '../default-storage.service';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import Employee from './employee.model';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    
    public readonly PATH_TO_COLLECTION: string = "employees";

    constructor(
        private defaultFirestore: DefaultFirestoreService,
        private defaultStorage: DefaultStorageService
    ) { }

    async create(data: Employee) {
        this.defaultFirestore.create(this.PATH_TO_COLLECTION, data);
    }

    async read(id: string): Promise<Employee | undefined> {
        return firstValueFrom(this.defaultFirestore.read(`${this.PATH_TO_COLLECTION}/${id}`));
    }

    readAll() {
        return this.defaultFirestore.readAll<Employee>(this.PATH_TO_COLLECTION);
    }

    update(data: Employee) {
        return this.defaultFirestore.update(this.PATH_TO_COLLECTION, data);
    }

    async uploadUserPhoto(model: Employee, progressTracker: (progress: number) => void): Promise<string> {
        if(model.photoUrl === "" || model.photoUrl.startsWith("http")) {
            return Promise.resolve(model.photoUrl);
        }

        return this.defaultStorage.uploadBase64Image(
            model.photoUrl,
            `employees-photos/${model.email}`,
            progressTracker
        );
    }

}
