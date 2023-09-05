import chai, { assert, expect } from "chai";
import Account from "$root/page/account.api";
import * as data from "$root/data/account.data";
import jsonSchema from "chai-json-schema";
import * as schema from "$root/schema/account.schema";

chai.use(jsonSchema);
describe("Create User", () => {
  it("Should successfull create user", async () => {
    const response = await Account.store(data.VALID_DATA);
    assert.equal(response.status, 201);
    expect(response.data).to.be.jsonSchema(schema.VALID_SCHEMA_CREATE_USER);
  });
  it("Should failure create user with same data", async () => {
    const response = await Account.store(data.INVALID_DATA_SAME);
    assert.equal(response.status, 406);
    expect(response.data).to.be.jsonSchema(
      schema.INVALID_SCHEMA_CREATE_USER_SAME
    );
  });
  it("Should failure create user with password full string", async () => {
    const response = await Account.store(data.INVALID_DATA_PASSWORD_STRING);
    assert.equal(response.status, 400);
    expect(response.data).to.be.jsonSchema(
      schema.INVALID_SCHEMA_CREATE_USER_PASSWORD
    );
  });
  it("Should failure create user with password string with number", async () => {
    const response = await Account.store(
      data.INVALID_DATA_PASSWORD_STRING_NUMBER
    );
    assert.equal(response.status, 400);
    expect(response.data).to.be.jsonSchema(
      schema.INVALID_SCHEMA_CREATE_USER_PASSWORD
    );
  });
  it("Should failure create user with password full number", async () => {
    const response = await Account.store(data.INVALID_DATA_PASSWORD_NUMBER);
    assert.equal(response.status, 400);
    expect(response.data).to.be.jsonSchema(
      schema.INVALID_SCHEMA_CREATE_USER_PASSWORD
    );
  });
  it("Should failure create user with password string and character special", async () => {
    const response = await Account.store(data.INVALID_DATA_WITH_SPECIAL_CHAR);
    assert.equal(response.status, 400);
    expect(response.data).to.be.jsonSchema(
      schema.INVALID_SCHEMA_CREATE_USER_PASSWORD
    );
  });
  it("Should failure create user with password number and character special", async () => {
    const response = await Account.store(
      data.INVALID_DATA_WITH_NUMBER_SPECIAL_CHAR
    );
    assert.equal(response.status, 400);
    expect(response.data).to.be.jsonSchema(
      schema.INVALID_SCHEMA_CREATE_USER_PASSWORD
    );
  });
  it("Should failure create user with password under 8 character", async () => {
    const response = await Account.store(
      data.INVALID_DATA_WITH_PASSWORD_UNDER_8
    );
    assert.equal(response.status, 400);
    expect(response.data).to.be.jsonSchema(
      schema.INVALID_SCHEMA_CREATE_USER_PASSWORD
    );
  });
  it("Should failure create user with username null", async () => {
    const response = await Account.store(data.INVALID_DATA_WITH_USERNAME_NULL);
    assert.equal(response.status, 400);
    expect(response.data).to.be.jsonSchema(
      schema.INVALID_SCHEMA_CREATE_USER_REQUIRED
    );
  });
  it("Should failure create user with password null", async () => {
    const response = await Account.store(data.INVALID_DATA_WITH_PASSWORD_NULL);
    assert.equal(response.status, 400);
    expect(response.data).to.be.jsonSchema(
      schema.INVALID_SCHEMA_CREATE_USER_REQUIRED
    );
  });
});
