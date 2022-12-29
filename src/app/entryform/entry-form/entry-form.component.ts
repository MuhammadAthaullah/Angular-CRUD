import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import Swal from 'sweetalert2';
import { ExpenseEntryService } from '../../expense-entry.service';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css'],
})
export class EntryFormComponent implements OnInit {
  formdata: FormGroup;
  Title: string;
  // id = 0;
  //expenseentry: any;
  //Id() {
  //return this.id + 1;
  //}
  id: any;
  countries = ['India', 'United States', 'Australia', 'New Zealand', 'Russia'];

  //requiredForm: FormGroup;
  constructor(
    private expenseentryservice: ExpenseEntryService,
    private router: Router // private fb: FormBuilder
  ) {
    //this.myForm();
  }
  /*myForm() {
    this.requiredForm = this.fb.group({
      name: ['', Validators.required],
    });
  }*/
  ngOnInit() {
    console.log('test');
    console.log(this.countries[4]);
    this.Title = 'Expense Entry';
    //this.expenseentry= this.getData();
    // this.id = this.Id();
    this.formdata = new FormGroup({
      id: new FormControl(null, Validators.required),
      item: new FormControl(null, Validators.required),
      amount: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required),
      location: new FormControl(null, Validators.required),
      spendOn: new FormControl(new Date()),
      createdOn: new FormControl(new Date()),
      country: new FormControl(this.countries[4], Validators.required),
    });
    this.id = this.expenseentryservice.getId;
    if (this.id >= 0)
      this.formdata.patchValue(this.expenseentryservice.getData[this.id]);
  }
  onClickSubmit(data) {
    debugger;
    this.formdata.markAllAsTouched();
    if (this.formdata.valid) {
      if (this.id >= 0) {
        this.expenseentryservice.getData[this.id] = data;
        this.expenseentryservice.setID(null);
        this.id = 0;
        this.router.navigate(['/appeee']);
        Swal.fire({
          title: 'Success!',
          text: 'Expense entry updated successfully',
          icon: 'success',
          timer: 3000,
          showConfirmButton: false,
        });
        return;
      }

      this.expenseentryservice.setData(data);
      //console.log(data)
      this.router.navigate(['/appeee']);
      Swal.fire({
        title: 'Success!',
        text: 'Expense entry saved successfully',
        icon: 'success',
        timer: 3000,
        showConfirmButton: false,
      });
      console.log(this.expenseentryservice.getData);
    }
  }
}
