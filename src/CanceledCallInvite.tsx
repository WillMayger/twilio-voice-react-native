import { TwilioVoiceReactNative } from './const';
import type { Uuid } from './type';

export declare namespace CanceledCallInvite {
  export interface AcceptOptions {}

  export interface Options {
    nativeModule: typeof TwilioVoiceReactNative;
  }
}

export class CanceledCallInvite {
  private _nativeModule: typeof TwilioVoiceReactNative;
  private _nativeScope: string;
  private _uuid: Uuid;

  constructor(uuid: Uuid, options: Partial<CanceledCallInvite.Options> = {}) {
    this._nativeModule = options.nativeModule || TwilioVoiceReactNative;

    this._uuid = uuid;

    this._nativeScope = `${CanceledCallInvite.name}-${this._uuid}`;
  }

  getFrom() {
    return this._nativeModule.canceledCallInvite_getFrom(this._nativeScope);
  }

  getTo() {
    return this._nativeModule.canceledCallInvite_getTo(this._nativeScope);
  }

  getCallSid() {
    return this._nativeModule.canceledCallInvite_getCallSid(this._nativeScope);
  }
}