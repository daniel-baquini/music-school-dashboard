import { collectionData, doc, docData, Firestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { addDoc, collection, setDoc } from 'firebase/firestore';

@Injectable({
    providedIn: 'root'
})
export class DefaultFirestoreService {
    
    constructor(private firestore: Firestore) { }

    async create(pathToCollection: string, data: any) {
        return addDoc(
            collection(this.firestore, pathToCollection),
            data
        )
    }

    read<T>(pathToDoc: string): Observable<T> {
        return docData(
            doc(this.firestore, pathToDoc), { idField: "id" }
        ) as Observable<T>
    }

    readAll<T>(pathToCollection: string): Observable<T[]> {
        return collectionData(
            collection(this.firestore, pathToCollection),
            { idField: "id"}
        ) as Observable<T[]>
    }

    async update(pathToCollection: string, data: any) {
        return setDoc(
            doc(this.firestore, `${pathToCollection}/${data.id}`),
            data
        );
    }
    
}
