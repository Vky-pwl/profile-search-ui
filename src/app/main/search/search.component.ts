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
  selectedSkills = [];
  skillDropdownSettings = {};
  showFilters = true;

  clear(){
    this.selectedSkills = [];
    this.showFilters = true;
  }
  ngOnInit(){
      this.skills = [{
          id:1,
          skillName:'Angular'
      },
      {
        id:2,
        skillName:'Java'
    }
,{
    id:3,
    skillName:'React'
}]
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
    this.showFilters = true;
    this.showFilters = true;

     
  }
  OnItemDeSelect(item:any){
      console.log(item);
      this.showFilters = true;

     
  }
  onSelectAll(items: any){
      console.log(items);
    this.showFilters = true;

  }
  onDeSelectAll(items: any){
      console.log(items);
    this.showFilters = true;

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

