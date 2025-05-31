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

Any router configuration begins with accessing its control panel. To log into a Keenetic router, in most cases, navigate to [http://my.keenetic.net/](http://my.keenetic.net/) and sign in.

Login and password information is typically found in the router’s manual or on the back of the device. The default is usually **admin/admin**, and we recommend changing the password to a more secure one later.

<p>
    <img src="/img/keenetic/keenetic_login.png#pccenter" alt="First image" width="1200"/>
</p>

___

## Configuring the VPN Client on the Router

1. Go to the **"Internet"** section and select the **"Other connections"** tab.

<p>
    <img src="/img/keenetic/keenetic_1.png#pccenter" alt="Second image" width="1200"/>
</p>

2. In the **"VPN connections"** section, click the **"Add connection"** button.

<p>
    <img src="/img/keenetic/keenetic_2.png#pccenter" alt="Second image" width="1200"/>
</p>

3. In the opened window, configure the following settings:
   - **Connection name** – this is the name of the connection. We recommend using the name of the country, for example, "Finland".
   - **VPN type** – select **OpenVPN**.
   - **Configuration file** – open any of the .ovpn files in a text editor, copy its contents, and paste the configuration into the field.

<p>
    <img src="/img/keenetic/keenetic_3.png#pccenter" alt="Second image" width="1200"/>
</p>

4. Click the **"Save"** button and enable this connection using the toggle switch.

5. Go to **"Connection priorities"**:

<p>
    <img src="/img/keenetic/keenetic_4.png#pccenter" alt="Second image" width="1200"/>
</p>

6. Drag the **"OpenVPN"** connection above the others.