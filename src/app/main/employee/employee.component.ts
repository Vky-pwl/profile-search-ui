import { Component, OnInit } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap';

import { EmployeeRegistrationModalComponent } from './employee-registration-modal/employee-registration-modal.component';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  bsModalRef: BsModalRef;
  employees:Employee[];

  constructor(private modalService: BsModalService, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  triggerAddEmployee(){
    this.bsModalRef = this.modalService.show(EmployeeRegistrationModalComponent, {
      class:'modal-lg'
     });

     this.bsModalRef.content.submit$.subscribe((employee)=>{
       this.employeeService.createEmployee(employee).subscribe((response)=>{
        this.bsModalRef.hide();
        this.getEmployees();
       });
     
     });
  }

  getEmployees(){
    this.employeeService.getEmployeeSkillDetails().subscribe((response)=>{
               this.employees = response;
    });
  }

}
