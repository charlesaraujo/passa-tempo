import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PontuacaoJokenpoComponent } from './pontuacao-jokenpo.component';

describe('PontuacaoJokenpoComponent', () => {
  let component: PontuacaoJokenpoComponent;
  let fixture: ComponentFixture<PontuacaoJokenpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PontuacaoJokenpoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PontuacaoJokenpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
