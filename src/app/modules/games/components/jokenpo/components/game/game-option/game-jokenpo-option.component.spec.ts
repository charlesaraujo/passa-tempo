import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { GameJokenpoOptionComponent } from './game-jokenpo-option.component';

describe('GameJokenpoOptionComponent', () => {
  let component: GameJokenpoOptionComponent;
  let fixture: ComponentFixture<GameJokenpoOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameJokenpoOptionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GameJokenpoOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
