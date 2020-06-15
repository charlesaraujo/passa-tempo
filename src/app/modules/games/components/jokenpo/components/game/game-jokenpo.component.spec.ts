import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { GameJokenpoComponent } from './game-jokenpo.component';

describe('GameJokenpoComponent', () => {
  let component: GameJokenpoComponent;
  let fixture: ComponentFixture<GameJokenpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameJokenpoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GameJokenpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
