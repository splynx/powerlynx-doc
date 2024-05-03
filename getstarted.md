---
outline: deep
---

# Getting Started Guide for Powerlynx Hotspot Software

Upon completing the registration process, initiate your Powerlynx instance by following these steps:

   1. Enable Two-Factor Authentication (2FA).
   2. Configure Localization for system.
   3. Configure Splash Page.
   4. Configure SMS gateway.
   5. Create Data Plans.
   6. Set up payment methods.
   7. Configure Location.

## Enabling Two-Factor Authentication (2FA)

Account Security Setup: Safeguard your account by implementing Two-Factor Authentication (2FA). To enable 2FA, navigate to your account settings, found in the top right corner under 'Profile.' Configure 2FA in the designated 'Two-Factor Authentication' section.

![user_profile](images/profile.png){data-zoomable}

## Configuring Localization for system

Navigate to Config/System/Localization and ensure that all parameters are correct.

![config-system-localization](images/config-system-localization.png){data-zoomable}

## Configuring Splash Page

Go to Config/System/Splash Pages and set up a Splash Page. This is an important step, as each location needs its own configured splash page. More information about Splash Page in Powerlynx can be found [here](https://docs.powerlynx.app/system/splash-pages.html).

![config-system-splashpages](images/config-system-splashpages.png){data-zoomable}

## Configuring SMS gateway

Configure SMS sending in Config/System/SMS if you intend to verify your customers' phone numbers with OTP codes. Set up your SMS gateway:

![config-system-sms](images/config-system-sms.png){data-zoomable}

Find more information about SMS gateways [here](https://docs.powerlynx.app/system/sms.html).

## Creating Data Plans

Create tariff plans within the Data Plans section. You can find more information about Data plans in Powerlynx following this [link](https://docs.powerlynx.app/system/data-plans.html).

![data-plans](images/dataplans.png){data-zoomable}

## Configuring payment methods

Set up payment methods in Config/Finance/Payment Gateways. The full list of supported payment gateways can be found [here](https://docs.powerlynx.app/finance/main.html).

![config-finance-paymentgateways](images/config-finance-paymentgateways.png){data-zoomable}

## Configuring Location.

Configuring the location is a crucial step in all configurations to get started. Full information about `Locations` can be found [here](https://docs.powerlynx.app/system/locations.html). This guide demonstrates the required configurations you must set up to ensure your hotspot works properly.

   - Ensure the Details/SSIDs field is populated and contains the identifier of your hotspot.
    ![location](images/location.png){data-zoomable}
   - In the Splash Pages section, choose the previously generated splash page
    ![location-splashpage](images/splashpage-enabled.png){data-zoomable}
   - Navigate to the Plans tab and choose the applicable tariff plans for this location.
    ![location-plans](images/location-plans.png){data-zoomable}
   - In the Payment Gateways tab, choose the available payment methods.
    ![location-pg](images/location-pg.png){data-zoomable}
   - In the Hotspots tab, create a router. Follow these links to know more how to create and configure [MikroTik](https://docs.powerlynx.app/networking/mikrotik.html) and [Cambium](https://docs.powerlynx.app/networking/cambium.html) in Powerlynx.
    ![location-hotspot](images/location-hotspot.png){data-zoomable}