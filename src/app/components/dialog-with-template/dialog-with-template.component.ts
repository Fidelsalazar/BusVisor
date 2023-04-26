import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogWithTemplate } from 'src/app/models/dialog-with-template';

@Component({
  selector: 'app-dialog-with-template',
  templateUrl: './dialog-with-template.component.html',
  styleUrls: ['./dialog-with-template.component.css']
})
export class DialogWithTemplateComponent {
 constructor(@Inject(MAT_DIALOG_DATA) public data: DialogWithTemplate){}
}
