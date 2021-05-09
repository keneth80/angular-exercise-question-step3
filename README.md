# Angular Exercise

## Angular Base Folder (angular project 생성시 자동으로 생성되는 폴더 구조 입니다.)
- /app
  - /assets
  - /environments

## 참고사항
- /app
  - /assets
      - /config (최초 application 로딩 전에 설정 정보를 가져오기 위한 json파일 폴더)

## User Folder
- /common (공통 모듈을 정의하는 폴더)
  - /backend (백엔드와 관련된 모듈)
  - /components (공통 ui component)
  - /error (error 처리 관련 모듈)
  - /mappers (backend와 통신 후 frontend type으로 변환하는 mapper 함수)
  - /models (frontend 에서 사용되는 model)
  - /modules (공통으로 사용하는 모듈을 한번에 정의)
  - /services (비지니스 로직을 정의하는 service 모듈 및 ui component controller)
  - /utils (각종 구현에 필요한 util성 함수)
- /dialogs
- /pages (routing 되는 page module 폴더)

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## User Component create
Run `ng g component common/components/{componentName}`

## USer Page Module create
Run `ng g module pages/{pageName} --routing=true && ng g component pages/{pageName} -m={pageName}`