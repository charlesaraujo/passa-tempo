import { Component } from '@angular/core';
@Component({
  selector: 'app-jokenpo',
  templateUrl: 'jokenpo.container.html',
  styleUrls: ['jokenpo.container.scss']
})
// tslint:disable-next-line: component-class-suffix
export class JokenpoContainer {

  mock = {
    player: {
      label: 'Charles',
      value: 4
    },
    enemy: {
      label: 'Jovinaldo',
      value: 2
    }
  };

}
