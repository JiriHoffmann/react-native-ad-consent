
/**
| Name  |   Value  | Description |
| --------- |--------- | -------- |
| DISABLED | 0 | Debug geography disabled.  |
| EEA | 1 | Geography appears as in EEA for debug devices.  |
| NOT_EEA | 2 | Geography appears as not in EEA for debug devices.  |
 */
type DebugGeography = 0|1|2

type ConsentInfoConfig = {
    debugGeography: DebugGeography,
    testDeviceIds: Array<String>,
}

/**
| Name  |   Value  | Description |
| --------- | --------- | -------- |
| UNKNOWN | 0 | Consent status is unknown.  |
| NOT_REQUIRED | 1 | User consent not required.  |
| REQUIRED | 2 | User consent required but not yet obtained.  |
| OBTAINED | 3 | User consent obtained. Personalized vs non-personalized undefined. |
 */
type ConsentStatus = 0|1|2|3

type ConsentInfoUpdate = {
    consentStatus: ConsentStatus,
    isConsentFormAvailable: boolean,
    isRequestLocationInEeaOrUnknown: boolean,
}

type ConsentFormResponse = {
    consentStatus: ConsentStatus,
  }

declare module "react-native-ad-consent" {
    export const DebugGeography:DebugGeography;
    
    export const ConsentInfoConfig: ConsentInfoConfig;

    export const ConsentStatus:ConsentStatus;

    export const ConsentInfoUpdate:ConsentInfoUpdate;
    
    export const ConsentFormResponse:ConsentFormResponse;
    
    /**
    * Returns the consent information.
    */
    export function requestConsentInfoUpdate(config?: ConsentInfoConfig): Promise<ConsentInfoUpdate>;

    /**
    * Shows the consent form and returns the updated consentStatus on close.
    */
    export function showConsentForm(): Promise<ConsentFormResponse>;

    /**
    * Resets the consent state.
    */
    export function reset(): void;
}
