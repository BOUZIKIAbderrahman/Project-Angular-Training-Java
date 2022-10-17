import { TestBed } from '@angular/core/testing';

import { ShopLeftSidebarService } from './shop-left-sidebar.service';

describe('ShopLeftSidebarService', () => {
  let service: ShopLeftSidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopLeftSidebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
