---
title: OpenVPN
sidebar_label: OpenVPN
---

## Скачайте zip архив из [личного кабинета](https://aegisvpn.me/cabinet/)

Первым делом необходимо скачать и распаковать zip архив с .ovpn файлами. Его можно взять в [личном кабинете](https://aegisvpn.me/cabinet/).

<p>
    <img src="/img/openvpn/openvpn_cabinet.png#pccenter" alt="Первая картинка" width="1200"/>
</p>

___

## Вход в панель управления роутером

Любая настройка роутера начинается со входа в его панель управления. Для входа в роутер Asus в большинстве случаев необходимо перейти по адресу [http://router.asus.com/](http://router.asus.com/) или [http://www.asusrouter.com/](http://www.asusrouter.com/), и авторизоваться.

Информация о логине и пароле находится также в инструкции, либо на корпусе роутера с обратной стороны. Обычно это **admin/admin**, и мы советуем в дальнейшем поменять пароль на более сложный.

<p>
    <img src="/img/asus/asus_login.png#pccenter" alt="Первая картинка" width="1200"/>
</p>

___

## Настройка VPN клиента на роутере

1. Зайдите в раздел **«Дополнительно (Advanced)»** → **«VPN»**, выберите вкладку **«VPN-клиент (VPN Fusion)»** и нажмите на кнопку **«Добавить профиль (Add profile)»**.

<p>
    <img src="/img/asus/asus_1.png#pccenter" alt="Вторая картинка" width="1200"/>
</p>

2. В открывшемся окне заполните следующие настройки:
   - **Имя подключения (Connection name)** – это название подключения. Рекомендуем указать название страны, например, «Finland».
   - **Тип VPN (VPN type)** – выбрать **OpenVPN**.
   - **Имя пользователя (Username)** и **Пароль (Password)** оставьте пустыми.
   - **Конфигурационный файл (Configuration file)** – импортируйте любой из файлов .ovpn, которые находятся в скачанном архиве.

3. Сохраните сервер, нажав на кнопку **«Применить и включить (Apply and enable)»**.