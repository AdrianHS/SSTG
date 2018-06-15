import { TestBed, inject } from '@angular/core/testing';

import { AsignacionService } from './asignacion.service';

describe('ProfesoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsignacionService]
    });
  });

  it('should be created', inject([AsignacionService], (service: AsignacionService) => {
    expect(service).toBeTruthy();
  }));
});
