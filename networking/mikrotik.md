---
outline: deep
---

# How to connect your Mikrotik with Powerlynx (Advanced setup):

<br>

<iframe width="100%" height="315" src="https://www.youtube.com/embed/L3ggxtGOnbA?si=gyl6qpr6FgAF8pXP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br><br>

# Connect Mikrotik hotspot with Powerlynx (text version)

In this manual, we will guide you on how to add a Mikrotik router as a hotspot in Powerlynx.
In our example, we are using a MikroTik router with wireless interfaces. Customers will connect to the Wi-Fi provided by the router.

There are two types of setups: Simple and Advanced. We will go through both.

## Simple setup

Navigate to the desired location, open the "Hotspots" tab, and click on the "Add" button:

![hotspot-add-1](images/add_hotspot_step_1.png){data-zoomable}

* **Title** - title for your router;

* **NAS type** - select Mikrotik as a NAS type;

* **Physical address** - address of your router (optional).

![hotspot-add-2](images/add_hotspot_step_2.png){data-zoomable}

Here, you can choose the setup type:

* **Setup Type:** Simple or Advanced.
    1. **Simple** - Use this option if you're not confident with Mikrotik. It will generate a script that you simply copy and paste into your Mikrotik device.
    1. **Advanced** - Choose this if you're comfortable with Mikrotik and prefer more control over the setup process.

* **Setup Options:** Full Setup or VPN Setup.
    1. **Full Setup** - Generates a script to configure a hotspot server, RADIUS server, WireGuard connection, and other components on your router.
    1. **VPN Setup** - Generates a script to set up only a WireGuard connection between your router and Powerlynx.

![hotspot-add-3](images/add_mikrotik_hotspot_step_3.png){data-zoomable}

::: info
Pre-Script Configuration:
    1.    Clean Router Configuration: The router must have no default or existing configuration. It should be a clean router. To achieve this, reset the router to its default state, ensuring no prior settings are applied.
    2.    Remove any previously created:
    •    WireGuard interfaces for PowerLynx.
    •    IP addresses for the WireGuard connection.
    •    Hotspot servers.
    •    Hotspot HTML files.
    •    RADIUS servers.

Post-Script Configuration:
    1.    Add the distribution interfaces (interfaces customers will connect through) to the bridge.
    2.    If the distribution interface is wireless, configure the wireless interface to operate in access mode without authentication.

By following these steps, you will ensure the router is properly prepared and configured for the script to execute successfully.
:::

This is the result of the Simple setup with the Full Setup option. As you can see, the script has been generated. You just need to click the "Copy Script" button and open your Mikrotik router, open a "New terminal" and insert this script:

![Insert Mikrotik script](images/mikrotik_script.gif#mediumsize){data-zoomable}{id=terminal_insert_script}

Go back to Powerlynx and click the "Check Status" button to ensure the connection has been established:

![mikrotik-check-status](images/mikrotik_check_status.png){data-zoomable}

::: warning
**IMPORTANT! During the simplified setup, the script will create a bridge interface and run the hotspot server on that interface, as we cannot identify the correct interface on your router.**

![mikrotik-check-status](images/mikrotik_created_bridge.png){data-zoomable}

Add your interface to this bridge, or change the interface on which the hotspot server will run. If you're unsure what to do, contact support at **support@powerlynx.app**.

:::

If you select the VPN Setup option, it will generate a script to create only the VPN connection. However, you'll need to manually set up the hotspot server, RADIUS, and hotspot files (steps 3-7 from the Advanced Setup guide below).

## Advanced setup

During the advanced setup, you will need to configure everything manually. Simply follow this part of the guide:

Create a hotspot, complete step 1, and proceed to step 2 by selecting the "Advanced" setup type:

![mikrotik-add-advanced](images/mikrotik_add_advanced.png){data-zoomable}

We will create a hotspot with the "Wireguard" connection type, as it's the recommended and secure option. After selecting of the "Wireguard" connection type you will see the "Generate Wireguard keys" button - you should click on it. After that, you will see this window:

![hotspot-add-wg](images/hotspot-add-wg.png){data-zoomable}

::: warning
Please copy and use these keys to configure the Wireguard connection immediately. The private key is shown only once.
We recommend to store all these values somewhere in a safe place.
:::

Click the 'Next' button to create a new hotspot in Powerlynx. Now, let's link this router with Powerlynx.

**1. Wireguard**

Create a Wireguard interface - log in to your router using Winbox, navigate to Wireguard section, and create a new Wireguard with the following settings:

![new-wg](images/new-wg.png){data-zoomable}

* **Name** - the name of your interface;

* **Listen port** - leave it empty. The system will detect this port automatically;

* **Private key** - set the "Client private key" value that you received during the hotspot creation in Powerlynx.

Save the configuration and proceed to the "Peers" tab in the "Wireguard" section to add a new peer:

* **Interface** - previously created Wireguard interface

* **Public key** - always use this value - ```lPYDyIwk5X4tyUMNT9ny/nyPSyHwk31mzm2ahOH7iV0=```

* **Endpoint** - vpn.powerlynx.app

* **Endpoint port** - 443

* **Allowed Address** - 172.16.0.0/12

* **Persistent Keepalive** - 00:00:05

![new-peer](images/new-peer.png){data-zoomable}

**2. IP/Addresses**

On Mikrotik, under IP -> Addresses create a new entry for Wireguard IP of your router (in our example we were given the 172.16.5.148 address during the hotspot creation in Powerlynx):

![ip-address](images/ip-address.png){data-zoomable}

Afterward, your Wireguard peer should display live values in the "Last Handshake" field. If it remains frozen or shows static data, there might be an issue, and there's likely no connection between Powerlynx and this router and you should double-check steps #1 and #2.

**3. Hotspot server setup**

Next step is to create [a Hotspot server under IP/Hotspot](https://wiki.mikrotik.com/wiki/Manual:IP/Hotspot). The simplest way to setup HotSpot server on a router is by `/ip hotspot setup` command. Router will ask to enter parameters required to successfully set up HotSpot. When finished, default configuration will be added for HotSpot server. Also, you can create it manually.

Once created, let's change some settings:

![hs-servername](images/hs-server-name.png){data-zoomable}

* **Name** - set name for your hotspot server. You will use it later in Powerlynx setup;

* **Interface** - select interface to run your hotspot server;

* **Address Pool** - select the IP/Pool to assign IPs from;

* **Profile** - select hotspot profile;

* **Idle timeout** - recommended value = 1m;

* **Keepalive timeout** - recommended value = 1m;

* **Addresses Per MAC** - recommended value = 1.

after that modify the hotspot profile that is use by the hotspot server:

* **"Login By"** - MAC, HTTP CHAP

* **MAC Auth. Mode** - MAC as username and password

![hs-profile-login](images/hs-profile-login.png){data-zoomable}

* **Use RADIUS** - enabled

* **Accounting** - enabled

* **NAS Port Type** - depends on what type of port do you use to run a hotspot server

![hs-profile-login](images/hs-profile-radius.png){data-zoomable}

**4. Hotspot files**

Next step is to replace the `login.html` file that can be found under the Files section with a special login.html file ([click to download](https://drive.google.com/file/d/1nkNdKN7Jfu8RKyqoMxcrmnknMY3DGIqo/view)). There are only 2 points to change:

![loginhtml-file](images/loginhtml.png){data-zoomable}

Replace the highlighted values, as shown in the screenshot above, with your Powerlynx URL.

**5. RADIUS server**

Next step is to create a RADIUS server on the router:

![radius-server](images/radius-server.png){data-zoomable}

Pay attention to:

* **Address** - if you use Wireguard connection type - use this value: *172.16.0.1*;

* **Secret** - RADIUS secret - must be the same in Powerlynx Hotspot and here;

* **Timeout** - recommended value 3000 or more;

* **Require Message Auth** - "no"

* **Src.Address** -  IP address of the router in Powerlynx. It must be the same IP address added in step #2 under IP/Addresses.

**6. Walled Garden**

Next important step is to configure Walled Garden hosts. It is crucial to add your Powerlynx URL as well as bunch of other hosts:

![walled-garden](images/walled-garden.png){data-zoomable}

One more host to add is `*.digitaloceanspaces.com` (this host is required to display the logos on the captive portal page).

You will also need to add additional Walled Garden hosts depending on what payment system you are going to use. The list of Walled Garden hosts to add to allow payment systems can be found in this [post on our forum](https://forum.powerlynx.app/t/mikrotik-walled-garden/19).


**7. Powerlynx SSIDs**

Add the hotspot server name into the SSID field under your location and under your splash page:

![hs-servername](images/hs-server-name.png){data-zoomable}

![location-ssid](images/mikrotik_location_ssid.png){data-zoomable}

![splashpage-ssid](images/mikrotik_splashpage_ssid.png){data-zoomable}

It is crucial to add the hotspot server name in both places mentioned. It's not enough to add the hotspot server name only under Location details or only under the splash page details.  