import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import Swal from 'sweetalert2';
import { EES } from '../ees';
import { ExpenseEntryService } from '../expense-entry.service';

@Component({
  selector: 'my-appeee',
  templateUrl: './appeee.component.html',
  styleUrls: ['./appeee.component.css'],
  providers: [DatePipe],
})
export class AppeeeComponent {
  Title: string = 'Expense Entry';
  expenseEntry: EES[];
  constructor(
    private expensenseentry1: ExpenseEntryService,
    private router1: Router
  ) {}
  ngOnInit() {
    this.expenseEntry = this.expensenseentry1.getData;
    console.log(this.expenseEntry);
    console.log(this.expensenseentry1.getData);
  }
  goBack() {
    this.router1.navigate(['/form']);
  }
  Edit(i) {
    this.expensenseentry1.setID(i);
    this.router1.navigate(['/form']);
  }
  Delete(i) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Once deleted, data cannot be retrieved',
      icon: 'question',
      showCancelButton: true,
      showConfirmButton: true,
      cancelButtonText: 'No',
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.value) {
        this.expensenseentry1.deleteID(i);
        this.expenseEntry = this.expensenseentry1.getData;
        //this.router.navigate(['/appeee']);
        Swal.fire({
          title: 'Success!',
          text: 'Expense entry deleted successfully',
          icon: 'success',
          timer: 3000,
          showConfirmButton: false,
        });
      } else {
        return;
      }
    });
  }
}
