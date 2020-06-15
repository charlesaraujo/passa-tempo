import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { GameOptionComponent } from './game-option.component';

describe('GameOptionComponent', () => {
  let component: GameOptionComponent;
  let fixture: ComponentFixture<GameOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameOptionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GameOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
