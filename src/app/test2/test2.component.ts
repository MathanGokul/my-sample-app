import { Component } from '@angular/core';

@Component ({
  selector: 'app-test2',
  templateUrl: './test2.component.html'
})

export class Test2Component {
  empId = 151;
  empName = 'Mathan';
  submit = false;
  SubmitString = 'data not submit';
  DataInput = '';
  getEmpName() {
     return this.empName;
  }
  constructor() {
    setTimeout(() => {
      this.buttonEnableDisable(true);
    }, 2000);
  }
  private submitData(event: any) {
    console.log(event);
    this.SubmitString = 'data submitted';
    this.buttonEnableDisable(false);
  }
  private inputData(event) {
     this.DataInput = event.target.value;
  }
  private buttonEnableDisable(button): boolean {
     this.submit = button;
  }
}
