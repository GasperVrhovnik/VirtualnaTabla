import { DebtTableComponent } from './components/debt-table/debt-table.component';
import { Debt } from './models/debt';
import { DebtTableService } from './services/debt-table.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private debtTableService: DebtTableService;
  debts$ : Observable<Debt[]>

  title = 'VirtualnaTabla';

  constructor(private readonly debtTableService1: DebtTableService) {
    this.debtTableService = debtTableService1;
  }
  
  ngOnInit(): void {
    console.log("i am here")

    this.debtTableService.persist_debt('Gasper Vrhovnik', 'Commited a crime').then(() => {
         console.log("Uspešen vnos!");
         this.debtTableService.get_all_debts().subscribe({
           next( k: Debt[] ) {
             console.log(k);
           }
         });
       });

       this.debts$ = this.debtTableService.get_all_debts();
  }





}
