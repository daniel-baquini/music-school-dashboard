import { Component } from '@angular/core';
import { CourseService } from 'src/app/shared/firebase/courses/course.service';
import { employeesTopLinks } from '../employees.module';
import TopMenuLink from 'src/app/shared/components/top-menu/top-menu-link.model';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/firebase/employees/employee.service';
import EmployeeDetailValidator from './employee-detail.validator';
import { Subscription } from 'rxjs';
import Course from 'src/app/shared/firebase/courses/course.model';

@Component({
    selector: 'app-employee-detail-page',
    templateUrl: './employee-detail-page.component.html',
    styleUrls: ['./employee-detail-page.component.css']
})
export class EmployeeDetailComponent  {
    
    form: FormGroup;
    links: TopMenuLink[] = employeesTopLinks;
    showImageCropper: boolean = false;
    showUploadingModal: boolean = false;
    
    private _courses: Course[] = []
    private _coursesLoaded: boolean = false;
    private _subscriptions: Subscription[] = [];
    
    constructor(
        courseService: CourseService,
        public employeeService: EmployeeService,
        formBuilder: FormBuilder,
        validator: EmployeeDetailValidator
        ) {
            this.form = formBuilder.group({
                "courses": new FormControl([]),
                "email": new FormControl("", [validator.email]),
                "name": new FormControl("", [validator.name]),
                "photoUrl": new FormControl(""),
                "surname": new FormControl("", [validator.surname]),
                "workingTime": formBuilder.array([])
            });

            this._subscriptions.push(
                courseService.readAll().subscribe(x => {
                    setTimeout(() => {
                        this._courses = x;
                    }, 0);
                    this._coursesLoaded = true;
                })
            );            
        }
        
        get courses(): Course[] {
            return this._courses.sort((a, b) =>  a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)
        }

        get formCourses(): FormControl {
            return this.form.controls["courses"] as FormControl;
        }
        
        get isLoading(): boolean {
            return !(this._coursesLoaded);
        }
        
        get loadingMessage(): string {
            return "Carregando cursos";      
        }

        get workingTimeForm(): FormArray {
            return this.form.controls["workingTime"] as FormArray;
        }
        
        callImageCropper(imageUrl: string): void {
            this.form.controls["photoUrl"].setValue(imageUrl);
            this.showImageCropper = true;
        }
        
        discardImage(): void {
            this.form.controls["photoUrl"].setValue("");
            this.showImageCropper = false;
        }

        isCourseSelected(courseName: string): boolean {
            return !!(this.formCourses.value as string[]).find(x => x === courseName);
        }
        
        ngOnDestroy(): void {
            this._subscriptions.forEach(x => x.unsubscribe());
        }
        
        toggleCourseSelection(courseName: string): void {
            const coursesOnForm = this.formCourses.value as string[];
            const courseIndex = coursesOnForm.findIndex(x => x === courseName);

            if(courseIndex === -1) {
                coursesOnForm.push(courseName);
            }
            else {
                coursesOnForm.splice(courseIndex, 1);
            }

            this.formCourses.setValue(coursesOnForm);
        }

        saveImage(imageUrl: string): void {
            this.form.controls["photoUrl"].setValue(imageUrl);
            this.showImageCropper = false;
        }
        
        async uploadUserPhoto(): Promise<boolean> {
            this.form.controls["photoUrl"].setValue(
                await this.employeeService.uploadUserPhoto(
                    this.form.value,
                    (progress: number) => {
                        this.showUploadingModal = true;
                    }
                    )
                    );
                    
                    this.showUploadingModal = false;
                    return Promise.resolve(true);
                }
            }
            