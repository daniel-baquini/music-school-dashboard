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
    
    @Input() beforeCreateCallback: undefined | ((model: any) => Promise<boolean>)
    @Input() beforeUpdateCallback: undefined | ((model: any) => boolean)
    @Input() createCallback: undefined | ((model: any) => Promise<void>);
    @Input() form: FormGroup | undefined;
    @Input() links: TopMenuLink[] = [];
    @Input() loadDataCallback: undefined | ((id: string) => Promise<any>)
    @Input() pageTitle: string = "";
    @Input() primaryButtonLabel: string | undefined = "";
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

    get _primaryButtonLabel(): string {
        if(this.primaryButtonLabel) {
            return this.primaryButtonLabel;
        }
        
        return this.isNew ? "Adicionar" : "Atualizar";
    }

    async createOrUpdate(): Promise<void> {
        this.form?.markAllAsTouched();
        if(!this.form!.valid) {
            return;
        }

        const model: any = this.form!.value;
        this.isNew ? await this.create(model) : await this.update(model);
        this.router.navigateByUrl(this.returnLink);
    }

    private async create(model: any): Promise<void> {
        if(this.beforeCreateCallback && !await this.beforeCreateCallback(model)) {
            return;
        }

        this.createCallback!(model)
    }
    
    private async update(model: any): Promise<void> {
        if(this.beforeUpdateCallback && !this.beforeUpdateCallback(model)) {
            return;
        }

        this.updateCallback!(model)
    }

}
