import chai, { assert, expect } from "chai";
import Token from "$root/page/token.api";
import * as data from "$root/data/user.data";
import jsonSchema from "chai-json-schema";
import * as schema from "$root/schema/user.schema";

chai.use(jsonSchema);
describe("Delete User", () => {
  //   it("Should successfull delete user", async () => {
  //     const response = await Token.destroy(data.VALID_DATA.uuid);
  //     assert.equal(response.status, 200);
  //     expect(response.data).to.be.jsonSchema(schema.VALID_SCHEMA);
  //   });
  it("Should failure delete user with wrong uuid", async () => {
    const response = await Token.destroy(data.VALID_DATA.uuid + "asdasdasd");
    assert.equal(response.status, 200);
    expect(response.data).to.be.jsonSchema(schema.INVALID_SCHEMA);
  });
  it("Should failure delete user with invalid token", async () => {
    const response = await Token.destroyWrongToken(data.VALID_DATA.uuid);
    assert.equal(response.status, 401);
    expect(response.data).to.be.jsonSchema(schema.INVALID_SCHEMA_UNAUTORHIZED);
  });
  it("Should failure delete user with token null", async () => {
    const response = await Token.destroyWithoutToken(data.VALID_DATA.uuid);
    assert.equal(response.status, 401);
    expect(response.data).to.be.jsonSchema(schema.INVALID_SCHEMA_UNAUTORHIZED);
  });
});
