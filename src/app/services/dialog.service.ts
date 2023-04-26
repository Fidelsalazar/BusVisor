import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogWithTemplateComponent } from '../components/dialog-with-template/dialog-with-template.component';
import { DialogWithTemplate } from '../models/dialog-with-template';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private matDialog: MatDialog) {
  }

  //openDialogCuston(data:DialogCustomData){
    //return this.matDialog.open(DialogCustomComponent, { data })
  //}

  openDialogWithTemplate(data : DialogWithTemplate){
    return this.matDialog.open(DialogWithTemplateComponent, { data })
  }
}
