---
outline: deep
---

# Connect Teltonika hotspot with Powerlynx

In this manual, we will guide you on how to add a Teltonika router as a hotspot in Powerlynx.
In our example, we are using a Teltonika router with wireless interfaces. Customers will connect to the Wi-Fi provided by the router.

Navigate to Locations, select the desired location, open the "Hotspots" tab and click on the "Add" button. Select NAS type = Teltonika and configure the rest of parameters according to your needs:

![Teltonika add](images/add_teltonika.png){data-zoomable}

## Configure your device

Then, open your Teltonika router configs and switch the mode to "Advanced":

![Teltonika advanced settings](images/teltonika_advanced_settings.png){data-zoomable}

After that, install the hotspot package `System/Package manager/Packages` menu:

![Teltonika install hotspot](images/teltonika_install_hotspot.png){data-zoomable}

Also make sure the device is on the latest firmware.

![Teltonika latest firmware](images/teltonika_latest_os.png){data-zoomable}

Then make sure wireless has no password and no encryption:

![Teltonika no encryption](images/teltonika_no_encryption.png){data-zoomable}

![Teltonika no encryption 2](images/teltonik_no_encryption_2.png){data-zoomable}

![Teltonika no password](images/teltonika_no_password.png){data-zoomable}

## Connect your device with Powerlynx using Wireguard. 

Create a new hotspot in Powerlynx with NAS type set to Teltonika and connection type set to WireGuard.

![Powerlynx add hotspot](images/add_hotspot_teltonika.png){data-zoomable}

and click on the "Generate Wireguard keys" and use them to create Wireguard interface on your device.

![Teltonika wireguard](images/teltonika_add_wireguard.png){data-zoomable}

set the public and private keys as well as IP from the Powerlynx instance

![Teltonika wireguard 2](images/teltonika_add_wireguard_2.png){data-zoomable}

![Teltonika wireguard 3](images/teltonika_add_wireguard_3.png){data-zoomable}

Add a Peer and configure it with the public key from Powerlynx (input here)

![Teltonika wireguard peer](images/teltonika_wireguard_peer.png){data-zoomable}

Use this public key: `lPYDyIwk5X4tyUMNT9ny/nyPSyHwk31mzm2ahOH7iV0=`

And all other values as per the screenshots above.

Confirm the VPN is up by using the Diagnostics tool to ping `172.16.0.1`:

![Teltonika wireguard ping](images/teltonika_ping.png){data-zoomable}

## Setup hotspot server

Next navigate to hotspot package (1):

![Teltonika setup hotspot server](images/teltonika_setup_hotspot.png){data-zoomable}

and set up a hotspot on the default wireless interface (SSID) (2 & 3) - this will create the hotspot you see in step 4.

Then edit the hotspot:

![Teltonika edit hotspot](images/teltonika_edit_hotspot.png){data-zoomable}

Under General:

1. Enable the hotspot
2. Set the hotspot network range & IP (different from any existing IP used on the LAN or WLAN)
3. Set Authentication mode to Radius
4. Set Landing page to External
5. Enable Password encoding
6. Set Landing page address to `https://powerlynx_domain/redirect-flow` where powerlynx_domain should be replaced by your Powerlynx domain
7. Set Success page to custom
8. Set Custom URL to `https://powerlynx_domain/redirect-flow/success` where powerlynx_domain should be replaced by your Powerlynx domain

![Teltonika hotspot general](images/teltonika_hotspot_general.png){data-zoomable}

![Teltonika hotspot genera 2](images/teltonika_general_2.png){data-zoomable}

After that, In the Radius tab:

1. set Radius server #1 to `172.16.0.1`
2. Set NAS identifier to `AP-HOSTNAME`
3. Set Radius secret key to the key used in Powerlynx under Locations - Hotspot

![Teltonika radius hotspot](images/teltonika_radius_2.png){data-zoomable}

![Powerlynx hotspot](images/powerlynx_hotspot.png){data-zoomable}

## Walled garden

In the walled garden section set: 

```
*.digitaloceanspaces.com 
*.powerlynx.app
```

Also set any other required walled garden entries that might be required by your payment gateway/provider (see the individual payment gateways [here](https://docs.powerlynx.app/finance/main.html)

![Teltonika walled garden](images/teltonika_walled_garden.png){data-zoomable}

## Set the hotspot identifier into the location and splash page

