import { Component } from '@angular/core';

import { skills } from '../skills';

@Component({
  selector: 'app-my-skills',
  template: `
  <div class="skills text-center">
        <img class="my-2 mx-1" *ngFor="let skill of skills" src="../../assets/images/skills/{{ skill }}.png" alt="{{skill}}" height=40>
</div>`
})
export class MySkillsComponent {
  skills=skills;
}
