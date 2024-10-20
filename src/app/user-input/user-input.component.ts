import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredDuration = '10';
  enteredExpectedReturn ='5'


  onSubmit(){
    console.log("submitted");
    console.log(this.enteredInitialInvestment);
    console.log(this.enteredAnnualInvestment);
    console.log(this.enteredDuration);
    console.log(this.enteredExpectedReturn);

  }

}
