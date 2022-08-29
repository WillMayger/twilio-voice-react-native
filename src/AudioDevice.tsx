/**
 * Copyright (c) Twilio Inc. All rights reserved. Licensed under the Twilio
 * license.
 *
 * See LICENSE in the project root for license information.
 */

import { NativeModule } from './common';
import type { NativeAudioDeviceInfo } from './type/AudioDevice';
import type { Uuid } from './type/common';

/**
 * Describes audio devices as reported by the native layer and allows the
 * native selection of the described audio device.
 *
 * @remarks
 * To fetch a list of available audio devices and the currently selected audio
 * device, see {@link (Voice:class).getAudioDevices}.
 *
 *  - See also the {@link (AudioDevice:namespace) | AudioDevice namespace} for
 *    types used by this class.
 *
 * @public
 */
export class AudioDevice {
  /**
   * The native-UUID of this object. This is generated by the native layer and
   * is used to associate functionality between the JS and native layers.
   *
   * @internal
   */
  uuid: Uuid;

  /**
   * The type of the audio device.
   */
  type: AudioDevice.Type;

  /**
   * The name of the audio device.
   */
  name: string;

  /**
   * Audio device class constructor.
   * @param audioDeviceInformation - A record describing an audio device.
   *
   * @internal
   */
  constructor({ uuid, type, name }: NativeAudioDeviceInfo) {
    this.uuid = uuid;
    this.type = type;
    this.name = name;
  }

  /**
   * Calling this method will select this audio device as the active audio
   * device.
   * @returns
   *  A `Promise` that
   *    - Resolves with `void` when the audio device has been successfully
   *      selected as the active audio device.
   *    - Rejects if the audio device cannot be selected.
   */
  select(): Promise<void> {
    return NativeModule.voice_selectAudioDevice(this.uuid);
  }
}

/**
 * Contains interfaces and enumerations associated with audio devices.
 *
 * @remarks
 *  - See also the {@link (AudioDevice:class) | AudioDevice class}.
 *
 * @public
 */
export namespace AudioDevice {
  /**
   * Audio device type enumeration. Describes all possible audio device types as
   * reportable by the native layer.
   */
  export enum Type {
    Earpiece = 'earpiece',
    Speaker = 'speaker',
    Bluetooth = 'bluetooth',
  }
}
