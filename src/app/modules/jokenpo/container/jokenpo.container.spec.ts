import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { JokenpoContainer } from './jokenpo.container';

describe('Tab1Page', () => {
  let component: JokenpoContainer;
  let fixture: ComponentFixture<JokenpoContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JokenpoContainer],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(JokenpoContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
