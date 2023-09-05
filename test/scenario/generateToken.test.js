import chai, { assert, expect } from "chai";
import Account from "$root/page/account.api";
import * as data from "$root/data/generateToken.data";
import jsonSchema from "chai-json-schema";
import * as schema from "$root/schema/generateToken.schema";

chai.use(jsonSchema);
describe("Generate Token User", () => {
  it("Should successfull authorized user", async () => {
    const response = await Account.token(data.VALID_DATA);
    assert.equal(response.status, 200);
    expect(response.data).to.be.jsonSchema(schema.VALID_SCHEMA);
  });
  it("Should failure authorized user", async () => {
    const response = await Account.token(data.INVALID_DATA);
    assert.equal(response.status, 200);
    expect(response.data).to.be.jsonSchema(schema.INVALID_SCHEMA);
  });
  it("Should failure authorized user with wrong pasword", async () => {
    const response = await Account.token(data.INVALID_DATA_WRONG_PASSWORD);
    assert.equal(response.status, 200);
    expect(response.data).to.be.jsonSchema(schema.INVALID_SCHEMA);
  });
  it("Should failure authorized user with username null", async () => {
    const response = await Account.token(data.INVALID_DATA_WITH_USERNAME_NULL);
    assert.equal(response.status, 400);
    expect(response.data).to.be.jsonSchema(schema.INVALID_SCHEMA_REQUIRED);
  });
  it("Should failure authorized user with password null", async () => {
    const response = await Account.token(data.INVALID_DATA_WITH_PASSWORD_NULL);
    assert.equal(response.status, 400);
    expect(response.data).to.be.jsonSchema(schema.INVALID_SCHEMA_REQUIRED);
  });
  it("Should failure authorized user with username and password null", async () => {
    const response = await Account.token(data.INVALID_DATA_WITH_NULL_DATA);
    assert.equal(response.status, 400);
    expect(response.data).to.be.jsonSchema(schema.INVALID_SCHEMA_REQUIRED);
  });
});
