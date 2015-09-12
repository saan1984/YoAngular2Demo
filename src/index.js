import {ComponentMetadata as Component, ViewMetadata as View, bootstrap} from 'angular2/angular2';
import {YoAngular2Demo} from 'yo-angular-2-demo';

@Component({
  selector: 'main'
})

@View({
  directives: [YoAngular2Demo],
  template: `
    <yo-angular-2-demo></yo-angular-2-demo>
  `
})

class Main {

}

bootstrap(Main);
