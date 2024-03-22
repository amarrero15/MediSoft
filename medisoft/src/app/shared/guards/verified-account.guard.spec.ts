import { TestBed } from '@angular/core/testing';

import { VerifiedAccountGuard } from './verified-account.guard';

describe('VerifiedAccountGuard', () => {
  let guard: VerifiedAccountGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VerifiedAccountGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
