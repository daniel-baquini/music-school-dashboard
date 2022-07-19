import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import TopMenuLink from '../top-menu/top-menu-link.model';

@Component({
    selector: 'app-default-detail-page',
    templateUrl: './default-detail-page.component.html',
    styleUrls: ['./default-detail-page.component.css']
})
export class DefaultDetailPageComponent implements OnInit {
    
    @Input() beforeCreateCallback: undefined | (() => Promise<boolean>)
    @Input() beforeUpdateCallback: undefined | (() => boolean)
    @Input() createCallback: undefined | ((model: any) => Promise<void>);
    @Input() form: FormGroup | undefined;
    @Input() links: TopMenuLink[] = [];
    @Input() loadDataCallback: undefined | ((id: string) => Promise<any>)
    @Input() pageTitle: string = "";
    @Input() returnLink: string = "";
    @Input() updateCallback: undefined | ((model: any) => Promise<void>);

    public isLoadingData: boolean = false;

    private isNew: boolean = false;

    constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        const id = this.activatedRoute.snapshot.params["id"];
        this.isNew = id === "new";
        this.isLoadingData = !this.isNew;

        if(!this.isNew && this.loadDataCallback) {
            this.loadDataCallback(id).then(x => {
                this.form?.patchValue(x);
                this.isLoadingData = false;
            });
        }
    }

    get primaryButtonLabel(): string {
        return this.isNew ? "Adicionar" : "Atualizar";
    }

    async createOrUpdate(): Promise<void> {
        this.form?.markAllAsTouched();
        if(!this.form!.valid) {
            return;
        }

        this.isNew ? await this.create() : await this.update();
        this.router.navigateByUrl(this.returnLink);
    }

    private async create(): Promise<void> {
        if(this.beforeCreateCallback && !await this.beforeCreateCallback()) {
            return;
        }

        this.createCallback!(this.form!.value)
    }
    
    private async update(): Promise<void> {
        if(this.beforeUpdateCallback && !this.beforeUpdateCallback()) {
            return;
        }

        this.updateCallback!(this.form!.value)
    }

}
