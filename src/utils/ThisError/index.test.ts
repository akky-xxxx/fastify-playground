// import
import { ThisError } from "."

// main
describe("ThisError", () => {
  it("number 型の status と string 型の message を持つインスタンスが作成される", () => {
    const thisError = new ThisError({ status: 400, message: "message" })
    expect(typeof thisError.status).toEqual("number")
    expect(typeof thisError.message).toEqual("string")
  })
})
