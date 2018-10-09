import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee/employee.service';
import { SkillService } from '../skill/skill.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  employees;
  constructor(private employeeService: EmployeeService, private skillService: SkillService) { }

 
  skills = [];
  levels = [];
  selectedSkills = [];
  selectedLevels = [];
  skillDropdownSettings = {};

  clear(){
    this.selectedSkills = [];
  }
  ngOnInit(){
      this.getSkills();
      this.selectedSkills = [];
      this.skillDropdownSettings = { 
                                singleSelection: false, 
                                text:"Select Skills",
                                selectAllText:'Select All',
                                unSelectAllText:'UnSelect All',
                                enableSearchFilter: true,
                                classes:"w-80"
                              }; 
           
  }
  onItemSelect(item:any){
      console.log(item);
     
  }
  OnItemDeSelect(item:any){
      console.log(item);
     
  }
  onSelectAll(items: any){
      console.log(items);
  }
  onDeSelectAll(items: any){
      console.log(items);
  }
  getSkillBasedProfiles(skill){
    this.employeeService.getSkillBasedProfiles(skill).subscribe((response)=>{
                this.employees = response;
    });

   }

   getSkills(){
    this.skillService.getSkills().subscribe((response)=>{
               this.skills = response;
    });
     }
}

