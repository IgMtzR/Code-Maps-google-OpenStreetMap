# Backlog

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

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

## Libraries for create and use of maps

To use the maps on the google, the installation of the following libraries is required:
* ng add @ng-bootstrap/ng-bootstrap
* npm install @agm/core@1.1.0
* npm install @angular/google-maps

To use the maps on the OpenStreetMap, the installation of the following libraries is required:
* npm install leaflet
* npm install esri-leaflet-geocoder
* npm install --save leaflet-geosearch

## Description of the application
The execution of the maps is located in the upper menu, in MAPS.
In the Maps section, you can call a map at a time by using Modals, each map can retrieve a specific location by means of coordinates or the generation of a url that allows you to search for the corresponding coordinates in google maps