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

## Accessing the Router's Control Panel

Any router configuration begins with accessing its control panel. To log into an Asus router, in most cases, navigate to [http://router.asus.com/](http://router.asus.com/) or [http://www.asusrouter.com/](http://www.asusrouter.com/) and sign in.

Login and password information is typically found in the router’s manual or on the back of the device. The default is usually **admin/admin**, and we recommend changing the password to a more secure one later.

<p>
    <img src="/img/asus/asus_login.png#pccenter" alt="First image" width="1200"/>
</p>

___

## Configuring the VPN Client on the Router

1. Go to the **"Advanced"** section → **"VPN"**, select the **"VPN Client (VPN Fusion)"** tab, and click the **"Add profile"** button.

<p>
    <img src="/img/asus/asus_1.png#pccenter" alt="Second image" width="1200"/>
</p>

2. In the opened window, configure the following settings:
   - **Connection name** – this is the name of the connection. We recommend using the name of the country, for example, "Finland".
   - **VPN type** – select **OpenVPN**.
   - **Username** and **Password** – leave these fields empty.
   - **Configuration file** – import any of the .ovpn files from the downloaded archive.

3. Save the server by clicking the **"Apply and enable"** button.