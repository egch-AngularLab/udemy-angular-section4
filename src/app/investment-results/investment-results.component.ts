import { CurrencyPipe } from '@angular/common';
import { Component, input} from '@angular/core';
import { InvestmentResult } from '../investment-output.model';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  //results = input()

  //? means optional
  //@Input() results?: InvestmentResult[];  //it's an array of values

  results = input<InvestmentResult[] | undefined>();

}
