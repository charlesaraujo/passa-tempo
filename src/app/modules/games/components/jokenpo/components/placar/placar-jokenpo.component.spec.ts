import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlacarJokenpoComponent } from './placar-jokenpo.component';

describe('PlacarJokenpoComponent', () => {
  let component: PlacarJokenpoComponent;
  let fixture: ComponentFixture<PlacarJokenpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacarJokenpoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlacarJokenpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
