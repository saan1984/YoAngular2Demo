import {ComponentMetadata as Component, ViewMetadata as View} from 'angular2/angular2';

@Component({
  selector: 'yo-angular-2-demo'
})

@View({
  templateUrl: 'yo-angular-2-demo.html'
})

export class YoAngular2Demo {

  constructor() {
    console.info('YoAngular2Demo Component Mounted Successfully');
  }

}
