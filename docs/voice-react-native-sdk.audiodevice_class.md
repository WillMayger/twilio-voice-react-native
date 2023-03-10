<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@twilio/voice-react-native-sdk](./voice-react-native-sdk.md) &gt; [AudioDevice](./voice-react-native-sdk.audiodevice_class.md)

## AudioDevice class

Describes audio devices as reported by the native layer and allows the native selection of the described audio device.

<b>Signature:</b>

```typescript
export declare class AudioDevice 
```

## Remarks

To fetch a list of available audio devices and the currently selected audio device, see [Voice.getAudioDevices()](./voice-react-native-sdk.voice_class.getaudiodevices_method.md)<!-- -->.

- See also the [AudioDevice namespace](./voice-react-native-sdk.audiodevice_namespace.md) for types used by this class.

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `AudioDevice` class.

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [name](./voice-react-native-sdk.audiodevice_class.name_property.md) |  | string | The name of the audio device. |
|  [type](./voice-react-native-sdk.audiodevice_class.type_property.md) |  | [AudioDevice.Type](./voice-react-native-sdk.audiodevice_namespace.type_enum.md) | The type of the audio device. |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [select()](./voice-react-native-sdk.audiodevice_class.select_method.md) |  | Calling this method will select this audio device as the active audio device. |
