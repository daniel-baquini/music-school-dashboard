import { Component, Input } from '@angular/core';
import EmployeeWorkingTime from './employee-working-time.model';

@Component({
    selector: 'app-employee-working-time',
    templateUrl: './employee-working-time.component.html',
    styleUrls: ['./employee-working-time.component.css']
})
export class EmployeeWorkingTimeComponent {
    @Input() hours: string = "";
    @Input() weekDay: string = "";

    get _hours(): string {
        return this.hours === "" ? "N/A" : this.hours;
    }

    onHoursBlur(event: Event): void {
        /*
         * Todo: Adicionar uma lista de erros ao final do componente, para
         * informar o usuário onde ele está errando ao passar as informações.
         * 
         * Todo: criar um model para receber as informações, assim podemos editar os dados dele por referência,
         * atualizando o objeto.
         * 
         * Todo: criar propriedade interna que guarda o valor do parsing, para exibir no template
        */
        console.log(new EmployeeWorkingTime((event.target as HTMLSpanElement).innerText).strIntervals);
        
    }
}
