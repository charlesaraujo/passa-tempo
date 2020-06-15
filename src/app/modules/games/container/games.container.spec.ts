import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GamesContainer } from './games.container';

describe('GamesContainer', () => {
  let component: GamesContainer;
  let fixture: ComponentFixture<GamesContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GamesContainer],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GamesContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
