import { getDownloadURL, ref, Storage, StorageError, uploadBytesResumable, UploadTask, UploadTaskSnapshot } from '@angular/fire/storage';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DefaultStorageService {
    
    constructor(private storage: Storage) { }

    async uploadFile(
        file: File,
        storageAddress: string,
        progressTracker: undefined | ((progress: number) => void)
    ): Promise<string> {
        const storageRef = ref(this.storage, storageAddress);
        const uploadTask = uploadBytesResumable(storageRef, file);

        return this.returnWithProgressTracker(uploadTask, progressTracker)
    }

    async uploadBase64Image(
        base64Image: string,
        storageAddress: string,
        progressTracker: undefined | ((progress: number) => void)
    ): Promise<string> {
        
        var byteString = atob(base64Image.split(',')[1]);
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }

        const blob = new Blob([ab], { type: 'image/jpeg' });
        const storageRef = ref(this.storage, storageAddress);
        const uploadTask = uploadBytesResumable(storageRef, blob);

        return this.returnWithProgressTracker(uploadTask, progressTracker)
    }


    private returnWithProgressTracker(
        uploadTask: UploadTask,
        progressTracker: undefined | ((progress: number) => void)
    ) {
        return new Promise<string>((resolve, reject) => {
            uploadTask.on("state_changed",
                (snapshot: UploadTaskSnapshot) => {
                    if(progressTracker) { 
                        progressTracker(snapshot.bytesTransferred/snapshot.totalBytes)
                    }
                },
                (a: StorageError) => reject("Ocorreu um erro ao fazer upload da sua foto: " + a.message),
                () => getDownloadURL(uploadTask.snapshot.ref).then(url => resolve(url))
            )
        });
    }
}
