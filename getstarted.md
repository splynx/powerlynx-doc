---
outline: deep
---

# Getting Started Guide for Powerlynx Hotspot Software

Upon completing the registration process, initiate your Powerlynx instance by following these steps:

1. Account Security Setup: Safeguard your account by implementing Two-Factor Authentication (2FA). To enable 2FA, navigate to your account settings, found in the top right corner under 'Profile.' Configure 2FA in the designated 'Two-Factor Authentication' section.

![user_profile](images/profile.png)

2. Navigate to Config/System/Localization and ensure that all parameters are correct.

![config-system-localization](images/config-system-localization.png)

3. Go to Config/System/Splash Pages and set up a Splash Page. This is an important step, as each location needs its own configured splash page.

![config-system-splashpages](images/config-system-splashpages.png)

4. Configure SMS sending in Config/System/SMS if you intend to verify your customers' phone numbers with OTP codes. Set up your SMS gateway:

![config-system-sms](images/config-system-sms.png)

5. Create tariff plans within the Data Plans section.

![data-plans](images/dataplans.png)

6. Set up payment methods in Config/Finance/Payment Gateways.

![config-finance-paymentgateways](images/config-finance-paymentgateways.png)

7. Configure your location through the Locations menu:

    - Ensure the Details/SSIDs field is populated and contains the identifier of your hotspot.
    ![location](images/location.png)
    - In the Splash Pages section, choose the previously generated splash page
    ![location-splashpage](images/splashpage-enabled.png)
    - Navigate to the Plans tab and choose the applicable tariff plans for this location.
    ![location-plans](images/location-plans.png)
    - In the Payment Gateways tab, choose the available payment methods.
    ![location-pg](images/location-pg.png)
    - In the Hotspots tab, create a router.
    ![location-hotspot](images/location-hotspot.png)