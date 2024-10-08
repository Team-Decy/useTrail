// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class UserAuthorized extends ethereum.Event {
  get params(): UserAuthorized__Params {
    return new UserAuthorized__Params(this);
  }
}

export class UserAuthorized__Params {
  _event: UserAuthorized;

  constructor(event: UserAuthorized) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Auth extends ethereum.SmartContract {
  static bind(address: Address): Auth {
    return new Auth("Auth", address);
  }

  authorizedUsers(param0: Address): boolean {
    let result = super.call(
      "authorizedUsers",
      "authorizedUsers(address):(bool)",
      [ethereum.Value.fromAddress(param0)],
    );

    return result[0].toBoolean();
  }

  try_authorizedUsers(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "authorizedUsers",
      "authorizedUsers(address):(bool)",
      [ethereum.Value.fromAddress(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isUserAuthorized(_user: Address): boolean {
    let result = super.call(
      "isUserAuthorized",
      "isUserAuthorized(address):(bool)",
      [ethereum.Value.fromAddress(_user)],
    );

    return result[0].toBoolean();
  }

  try_isUserAuthorized(_user: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isUserAuthorized",
      "isUserAuthorized(address):(bool)",
      [ethereum.Value.fromAddress(_user)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class AuthorizeUserCall extends ethereum.Call {
  get inputs(): AuthorizeUserCall__Inputs {
    return new AuthorizeUserCall__Inputs(this);
  }

  get outputs(): AuthorizeUserCall__Outputs {
    return new AuthorizeUserCall__Outputs(this);
  }
}

export class AuthorizeUserCall__Inputs {
  _call: AuthorizeUserCall;

  constructor(call: AuthorizeUserCall) {
    this._call = call;
  }

  get _user(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AuthorizeUserCall__Outputs {
  _call: AuthorizeUserCall;

  constructor(call: AuthorizeUserCall) {
    this._call = call;
  }
}
