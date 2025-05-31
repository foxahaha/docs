---
title: OpenVPN
sidebar_label: OpenVPN
---

## Download the Zip Archive from [Personal Account](https://aegisvpn.me/cabinet/)

First, you need to download and unzip the zip archive containing .ovpn files. You can obtain it from your [personal account](https://aegisvpn.me/cabinet/).

<p>
    <img src="/img/en/openvpn/openvpn_cabinet.png#pccenter" alt="First image" width="1200"/>
</p>

___

## Supported Router Models

According to the TP-Link website, the following router models support VPN client configuration:

- Archer AX55(V1)
- Archer AX3000 Pro
- Archer AX20
- Archer AX75
- Archer AX4400
- Archer AX21
- Archer AX1800 (US ONLY)
- Archer AX73
- Archer AX72
- Archer GX90
- Archer AX3200
- Archer AX90

Ensure that you have one of these models and that the router's firmware is updated to the latest version.

:::warning Warning

If you are planning to purchase a router, carefully check the model to ensure it matches exactly, down to the specific version.

:::

___

## Accessing the Router's Control Panel

Any router configuration begins with accessing its control panel. To log into a TP-Link router, navigate to [http://192.168.1.1/](http://192.168.1.1/) or [http://192.168.0.1/](http://192.168.0.1/) and sign in.

Login and password information is typically found in the router’s manual or on the back of the device. The default is usually **admin/admin**, and we recommend changing the password to a more secure one later.

:::tip Tip

Update your router's firmware! VPN client support was recently added to TP-Link routers, and if your router is not updated to the latest version, the required section may be missing.

:::

___

## Configuring the VPN Client on the Router

1. Go to the **"Advanced"** section → **"VPN Client"**.
2. Check the box **"Enable VPN Client"** and click the **"Save"** button.
3. In the **Servers List**, click the **"Add"** button and fill in the settings in the opened window:
   - **Description** – this is the name of the connection. We recommend using the name of the country, for example, "Finland".
   - **VPN type** – select **OpenVPN**.
   - **Username** and **Password** – leave these fields empty.
   - **Configuration file** – import any of the .ovpn files from the downloaded archive.

4. Save the server by clicking the **"Save"** button and enable it by toggling the switch.

5. In the **"Device Manager"** section below, click the **"Add"** button and select the devices on which the VPN will be active.

6. Save the settings. Everything is set up, and the VPN connection will now be active on the selected devices.