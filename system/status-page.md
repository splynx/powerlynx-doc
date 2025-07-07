---
outline: deep
---

# Public status page

## Overview
The Public Status Page is a feature designed to enhance customer experience by providing them with easy access to their WiFi usage statistics, active vouchers, and historical voucher information. When customers connect to the WiFi network, they will receive an SMS with a link to the status page, where they can authorize themselves and gain access to relevant information about their account and usage.

![Status page](images/stat_page.gif#mediumsize){data-zoomable}

## Benefits
 - **Enhanced User Experience:** Customers can easily view their WiFi usage statistics, track their data consumption, and manage their vouchers in one convenient place.
- **Real-Time Information:** Users can access up-to-date information on their data usage and voucher status, ensuring transparency and better management of their WiFi plans.
- **Easy Access:** The link to the status page is sent via SMS, or users can be redirected to this page right after logging in. This provides users with a direct and secure method to access their account details from any device.

## How It Works
- WiFi Connection: The customer connects to the WiFi network and purchases a new voucher.

- SMS Notification: An SMS is sent to the customer’s registered mobile number containing a secure link to the public status page.

- Authorization: Upon clicking the link, the customer is directed to the status page, where they need to authorize access.

- Access to Information: Once authorized, the customer can view:
    - Usage Statistics: Current data usage, remaining data, and usage history.
    - Active Vouchers: Details of any active vouchers, including validity period.
    - Historical Vouchers: Information about past vouchers, usage, and expiry details.

## Configuration

By default, this page is publicly accessible. Each Powerlynx account has its own public status page in the following format: `https://one.powerlynx.app/portal`, where `one.powerlynx.app` is your Powerlynx URL. If your Powerlynx URL is `https://two.powerlynx.app/`, simply add `portal` at the end of the URL, making it `https://two.powerlynx.app/portal`. To access this page, the customer needs to provide their phone number registered with Powerlynx:

![Phone number](images/status_page_number.png){data-zoomable}

This URL can be sent to your customers via SMS, or in some cases, you can redirect your clients to this page right after they log in.

Navigate to `Config/Notifications` and find the **Status page notifications** section:

![Configs](images/status_page_configs.png){data-zoomable}

Enable this feature, select the sending frequency: one-time or every time a new voucher is activated, and edit the text. You can also use this text field to send personalized messages to your customers on your behalf.

You can monitor the SMS sent from `Logs/SMS Logs`.

### 2FA for status page

To enhance security, you can enable SMS-based two-factor authentication (2FA) for the status page. Navigate to `Config/Portal` section in order to enable it. This option is available only if at least one SMS gateway is configured in your system. After entering their phone number, the customer will receive a one-time password (OTP) to access the status page.

![2FA](images/status_page_2fa.png){data-zoomable}

## Frequently Asked Questions (FAQs)

### Can I access the status page from any device?
Yes, the status page can be accessed from any device with internet access, such as a smartphone, tablet, or computer.

### Which data can I find on the page?

You can find all vouchers registered to the customer on the status page, including their usage, limits, time frames, and more.

![Status voucher](images/st_page_voucher.png#mediumsize){data-zoomable}

Active and online vouchers are always at the top of the page, while used vouchers appear at the bottom.
