import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { connectAuthEmulator, getAuth, provideAuth } from '@angular/fire/auth';
import { connectFirestoreEmulator, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { connectStorageEmulator, getStorage, provideStorage } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => {
            const auth = getAuth();

            if(!environment.production) {
                connectAuthEmulator(auth, "http://localhost:9099");
            }

            return auth;
        }),
        provideFirestore(() => {
            const firestore = getFirestore();

            if(!environment.production) {
                connectFirestoreEmulator(firestore, "localhost", 8080);
            }

            return firestore;
        }),
        provideStorage(() => {
            const storage = getStorage();

            if(!environment.production) {
                connectStorageEmulator(storage, "localhost", 9199)
            }

            return storage;
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
