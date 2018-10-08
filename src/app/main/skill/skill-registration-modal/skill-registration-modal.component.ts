import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Skill } from '../skill.model';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-skill-registration-modal',
  templateUrl: './skill-registration-modal.component.html',
  styleUrls: ['./skill-registration-modal.component.css']
})
export class SkillRegistrationModalComponent implements OnInit {
  @Output() submit$  =  new EventEmitter<Skill>();
  skillRegistrationForm;
  constructor(private fb: FormBuilder,) { }


  ngOnInit() {
  this.skillRegistrationForm  = this.fb.group({
      skillId:[''],
      skillName: ['', Validators.required],
      isDeleted:[false]
  });
  }
  onSubmit(){
    this.submit$.emit(this.skillRegistrationForm.value);
  }

  close(){

  }

}