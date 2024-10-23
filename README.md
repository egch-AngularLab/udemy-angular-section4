# Udemy Angular Section 4
## Course
### Live on Azure
[udemy-angular-section4 on Azure](https://delightful-flower-09e79e703.5.azurestaticapps.net/) 

### Creating Components
```shell
$ ng g c header --skip-tests
$ ng g c user-input --skip-tests
```
### Importing type
```typescript
import type { InvestmentInput } from './investment-input.model';
```

```typescript
  @Output() calculate = new EventEmitter<InvestmentInput>();
```

### Services
```typescript
@Injectable({providedIn: 'root'})
export class InvestmentService {}
```

```typescript
 constructor(private investmentService: InvestmentService){}
```


```typescript
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);
}
```



## Default Docs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.0-next.2.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
