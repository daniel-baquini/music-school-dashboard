import { Component, OnDestroy } from '@angular/core';
import ContentManagementDetailValidator from './content-management-detail.validator';
import { ContentManagementService } from 'src/app/shared/firebase/contents-magement/content-management.service';
import { contentManagementTopLinks } from '../content-management.module';
import Course from 'src/app/shared/firebase/courses/course.model';
import { CourseService } from 'src/app/shared/firebase/courses/course.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import SelectData from 'src/app/shared/utils/select-data.type';
import { Subscription } from 'rxjs';
import TopMenuLink from 'src/app/shared/components/top-menu/top-menu-link.model';
import ContentTypeEnum from 'src/app/shared/firebase/contents-magement/content-type.enum';

@Component({
    selector: 'app-content-management-detail-page',
    templateUrl: './content-management-detail-page.component.html',
    styleUrls: ['./content-management-detail-page.component.css']
})
export class ContentManagementDetailPageComponent implements OnDestroy {
    
    form: FormGroup;
    links: TopMenuLink[] = contentManagementTopLinks;

    private _courses: Course[] = [];
    private _coursesLoaded: boolean = false;
    private _subscriptions: Subscription[] = [];

    constructor(
        public contentManagementService: ContentManagementService,
        courseService: CourseService,
        formBuilder: FormBuilder,
        validator: ContentManagementDetailValidator
    ) {
        this.form = formBuilder.group({
            "contentUrl": new FormControl("", [validator.contentUrl]),
            "courseName": new FormControl("", [validator.courseName]),
            "contentType": new FormControl("", [validator.contentType]),
            "description": new FormControl("", [validator.description]),
            "title": new FormControl("", [validator.title])
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

    get coursesSelectData(): SelectData[] {
        return this._courses.map(x => x.name).sort().map(x => {
            return {
                label: x,
                value: x
            }
        });
    }

    get contentTypeSelectData(): SelectData[] {
        const selectData: SelectData[] = [];

        for(let key in ContentTypeEnum) {
            selectData.push({
                label: ContentTypeEnum[key as keyof typeof ContentTypeEnum],
                value: key
            });
        }

        return selectData;
    }

    get isLoading(): boolean {
        return !(this._coursesLoaded);
    }

    get loadingMessage(): string {
        return "Carregando cursos";      
    }

    ngOnDestroy(): void {
        this._subscriptions.forEach(x => x.unsubscribe());
    }

}
