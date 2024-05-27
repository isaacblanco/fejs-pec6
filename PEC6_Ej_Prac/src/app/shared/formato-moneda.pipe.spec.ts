import { FormatoMonedaPipe } from "./shared/formato-moneda.pipe";

describe("FormatoMonedaPipe", () => {
  it("create an instance", () => {
    const pipe = new FormatoMonedaPipe();
    expect(pipe).toBeTruthy();
  });
});
