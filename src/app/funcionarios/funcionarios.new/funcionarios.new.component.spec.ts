import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionariosNewComponent } from './funcionarios.new.component';

describe('FuncionariosNewComponent', () => {
  let component: FuncionariosNewComponent;
  let fixture: ComponentFixture<FuncionariosNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncionariosNewComponent]
    });
    fixture = TestBed.createComponent(FuncionariosNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
