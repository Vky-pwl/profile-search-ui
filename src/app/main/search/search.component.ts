import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee/employee.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  employees;
  constructor(private employeeService: EmployeeService) { }

 
  skills = [];
  levels = [];
  selectedSkills = [];
  selectedLevels = [];
  skillDropdownSettings = {};
  levelDropdownSettings = {};
  clear(){
    this.selectedLevels = [];
    this.selectedSkills = [];
  }
  ngOnInit(){
      this.skills = [{'id':1,'skillName':'Angular','levelName':'B'},
      {'id':2,'skillName':'Java','levelName':'A'},
      {'id':3,'skillName':'JavaScript','levelName':'I'},
                     
                    ];
      this.selectedSkills = [];
      this.skillDropdownSettings = { 
                                singleSelection: false, 
                                text:"Select Skills",
                                selectAllText:'Select All',
                                unSelectAllText:'UnSelect All',
                                enableSearchFilter: true,
                                classes:"w-80"
                              }; 
     this.levelDropdownSettings = { 
      singleSelection: false, 
      text:"Select Level",
      selectAllText:'Select All',
      unSelectAllText:'UnSelect All',
      enableSearchFilter: true,
      classes:"w-25"
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
}

