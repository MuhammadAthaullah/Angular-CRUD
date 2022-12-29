import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';
import { BehaviorSubject } from 'rxjs';
import { EES } from './ees';

@Injectable({
  providedIn: 'root',
})
export class ExpenseEntryService {
  EES: EES[] = [];
  id:any;
  constructor() {}

  get getData():EES[] {
   return this.EES;
  }
  setData(formData: any) {
    this.EES.push(formData);
  }
  setID(id:any){
this.id=id;
  }
  get getId():any{
return this.id;
  }
  deleteID(id){
    console.log(this.EES.splice(id,1))
   //this.EES=this.EES.splice(id,1)
  }
}

