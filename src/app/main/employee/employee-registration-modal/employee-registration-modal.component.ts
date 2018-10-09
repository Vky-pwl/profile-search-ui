import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Employee } from '../employee.model';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-employee-registration-modal',
  templateUrl: './employee-registration-modal.component.html',
  styleUrls: ['./employee-registration-modal.component.css']
})
export class EmployeeRegistrationModalComponent implements OnInit {
  @Output() submit$  =  new EventEmitter<Employee>();
  employeeRegistrationForm;
  
  constructor(private fb: FormBuilder, public bsModalRef: BsModalRef) { }


  ngOnInit() {
  this.employeeRegistrationForm  = this.fb.group({
      empId:['', Validators.required],
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: [''],
      gender:['male'],
      mobile:[''],
      workPhone:[''],
      workEmail:[''],
      skypeId:[''],
      isActive:[true],
      creatorUserId:['1111'],   //should be populated from session
      lastModifierUserId:['1111'] //should be populated from session
    });
  }
  onSubmit(){
    this.submit$.emit(this.employeeRegistrationForm.value);
  }

}
