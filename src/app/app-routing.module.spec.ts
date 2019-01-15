import { AppRoutingModule } from './app-routing.module';
//@ts-ignore
describe('AppRoutingModule', () => {
  let appRoutingModule: AppRoutingModule;

  //@ts-ignore
  beforeEach(() => {
    appRoutingModule = new AppRoutingModule();
  });
//@ts-ignore
  it('should create an instance', () => {
    //@ts-ignore
    expect(appRoutingModule).toBeTruthy();
  });
});
