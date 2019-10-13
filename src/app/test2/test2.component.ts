import { Component } from '@angular/core';


@Component ({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styles: [
    `.blue{
      background-color:blue;
    }
    .green{
      background-color:green;
    }`
  ]
})

export class Test2Component {
  empId = 151;
  empName = 'Mathan';
  submit = false;
  SubmitString = 'data not submit';
  DataInput = 'test';
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
    this.SubmitString = 'data submitted '+ this.DataInput;
    this.buttonEnableDisable(false);
  }
  private inputData(event) {
    this.DataInput = (event.target as HTMLInputElement).value;
  }
  private buttonEnableDisable(button: boolean) {
    this.submit = button;
  }
  private getStyle() {
    return this.submit === true ? 'green' : 'red';
  }
  getClass() {
     return this.submit;
  }
}
