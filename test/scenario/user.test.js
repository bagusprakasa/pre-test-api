import chai, { assert, expect } from "chai";
import Token from "$root/page/token.api";
import * as data from "$root/data/user.data";
import jsonSchema from "chai-json-schema";
import * as schema from "$root/schema/user.schema";

chai.use(jsonSchema);
describe("Get User", () => {
  it("Should successfull get user", async () => {
    const response = await Token.get(data.VALID_DATA.uuid);
    assert.equal(response.status, 200);
    expect(response.data).to.be.jsonSchema(schema.VALID_SCHEMA);
  });
  it("Should failure get user with wrong UUID", async () => {
    const response = await Token.get(data.VALID_DATA.uuid + "123123");
    assert.equal(response.status, 401);
    expect(response.data).to.be.jsonSchema(schema.INVALID_SCHEMA);
  });
  it("Should failure get user with wrong UUID", async () => {
    const response = await Token.getWithoutToken(data.VALID_DATA.uuid);
    assert.equal(response.status, 401);
    expect(response.data).to.be.jsonSchema(schema.INVALID_SCHEMA_UNAUTORHIZED);
  });
  it("Should failure get user with wrong UUID", async () => {
    const response = await Token.getWrongToken(data.VALID_DATA.uuid);
    assert.equal(response.status, 401);
    expect(response.data).to.be.jsonSchema(schema.INVALID_SCHEMA_UNAUTORHIZED);
  });
});
