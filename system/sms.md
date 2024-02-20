---
outline: deep
---

# OTP verification in Powerlynx via SMS

It is important to verify the phone number of the person who connects to your Wi-Fi. This is typically done by sending an SMS with an OTP code to ensure the number belongs to a real person. In Powerlynx, you can opt to skip this process, in which case the system will only verify the format of the phone number to ensure it is valid. However, if you decide to send OTP verification codes to your customers, you will need to set up SMS sending from Powerlynx. By default, Powerlynx does not support methods to send SMS directly from the product without integrating with third-party SMS gateways.

# Configuration of a custom SMS gateway

By "Custom SMS Gateway," we refer to any SMS gateway that is not supported by default in Powerlynx. Currently, we only support Twilio by default, but you can use any other SMS gateway in Powerlynx. However, be aware that configuring a non-default gateway might be less straightforward and could involve more complex setup processes.

To create a configure your SMS sending service navigate to `Config/System/SMS` and click on the "Add" button. You will see this form:

![SMS main settings](images/sms_main.png){data-zoomable}

* **Name** - The name of your SMS gateway.

* **Type** - This depends on the selected type, which will present a different set of fields. Two types are available: Custom and Twilio.

* **URL** - Specify the URL of the SMS gateway (as mentioned in the gateway's documentation).

* **Method** - Select the method to call the gateway (POST or GET).

* **Content Type** - How to handle the payload (JSON or x-www-form-urlencoded). JSON can only be used with the POST method.

* **Use Custom Lua Script** - To be used in special cases when it's impossible to configure your SMS gateway without the engineering of some script (requires development skills).

* **Payload** - The request payload for sending SMS. This depends on the content type (JSON or x-www-form-urlencoded) and the syntax provided by the SMS gateway.

* **Verify SSL Certificate** - If this toggle is enabled, the system will verify the SSL certificate of the SMS gateway host with a secure (HTTPS) connection.

* **Success Response** - If the SMS gateway returns a certain successful response, the text to check the response from the gateway must be configured here so that Splynx can identify which SMS was successfully sent. A successful response should contain the string given in this line.

* **Custom Header Name** - The name of the custom header. To be used in cases when you need to send additional headers to the SMS gateway.

* **Custom Header Value** - The value of the custom header.
