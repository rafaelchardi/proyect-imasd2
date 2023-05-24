import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ClienComponent } from './clien.component';


fdescribe ('ClienComponent', () => {

  let component: ClienComponent;
  let fixture: ComponentFixture<ClienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ClienComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('SiacRegistryComponent -> Componente creado corectamente ', () => {
    expect(component).toBeTruthy();
  });

  
});
