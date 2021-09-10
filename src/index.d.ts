
/**
| Name  |   Value  | Description |
| --------- |--------- | -------- |
| DISABLED | 0 | Debug geography disabled.  |
| EEA | 1 | Geography appears as in EEA for debug devices.  |
| NOT_EEA | 2 | Geography appears as not in EEA for debug devices.  |
 */
type DebugGeography = {
    DISABLED: 0;
    EEA: 1;
    NOT_EEA: 2
}

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
type ConsentStatus = {
    UNKNOWN: 0,
    NOT_REQUIRED: 1
    REQUIRED: 2
    OBTAINED: 3
}

type ConsentInfoUpdate = {
    consentStatus: ConsentStatus,
    isConsentFormAvailable: boolean,
    isRequestLocationInEeaOrUnknown: boolean,
}

type ConsentFormResponse = {
    consentStatus: ConsentStatus,
}


type UMP = {
    CONSENT_STATUS: ConsentStatus,
    DEBUG_GEOGRAPHY: DebugGeography,
    /**
     * Returns the consent information.
     */
    requestConsentInfoUpdate(config?: ConsentInfoConfig): Promise<ConsentInfoUpdate>;

    /**
    * Resets the consent state.
    */
    reset(): void;

    /**
   * Shows the consent form and returns the updated consentStatus on close.
   */
    showConsentForm(): Promise<ConsentFormResponse>;
}

declare module "react-native-ad-consent" {
    export const DebugGeography: DebugGeography;

    export const ConsentInfoConfig: ConsentInfoConfig;

    export const ConsentStatus: ConsentStatus;

    export const ConsentInfoUpdate: ConsentInfoUpdate;

    export const ConsentFormResponse: ConsentFormResponse;

    export const UMP: UMP;
}
