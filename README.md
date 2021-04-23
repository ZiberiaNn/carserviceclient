# CarServiceClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Explicación del código:

Se crearon los componentes owner-list y owner-add y los servicios para owner.
Owner-list contiene la tabla con los datos de la API de Owners. También tiene los botones para editar y eliminar cada registro. El componente hace uso de los métodos para eliminar y para listar todos los registros, los cuales hacen parte del servicio de Owner.
Owner-add contiene el formulario para agregar o editar un registro en la API de Owners. Hace uso de los métodos para guardar y editar provenientes del servicio de Owner. 
Todos los métodos mencionados anteriormente utilizan la clase de HttpClient para habilitar el CRUD de la API.
Adicional a esto, se editó el componente de car-edit y car-list (componentes que el profesor nos dio) para listar el carro con el DNI de su dueño. Además, al verificar o agregar un nuevo carro, se verifica que el ID entrado exista en la API de Owners. NOTA: Al momento de agregar o editar un carro, en el campo de "DNI", hay que poner el ID que aparece en la API (son diferentes).

