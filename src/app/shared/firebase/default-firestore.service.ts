import { collectionData, doc, docData, Firestore, query } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { addDoc, collection, DocumentReference, QueryConstraint, setDoc } from 'firebase/firestore';

@Injectable({
    providedIn: 'root'
})
export class DefaultFirestoreService {
    
    constructor(private firestore: Firestore) { }

    async create<T>(pathToCollection: string, data: any): Promise<DocumentReference<T>> {
        return addDoc(
            collection(this.firestore, pathToCollection),
            data
        ) as Promise<DocumentReference<T>>
    }

    customQuery<T>(pathToCollection: string, queryConstraint: QueryConstraint[]): Observable<T[]> {
        return collectionData(
            query(
                collection(this.firestore, pathToCollection),
                ...queryConstraint
            ), { idField: "id" }
        ) as  Observable<T[]>;
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
