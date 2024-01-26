---
outline: deep
---

# Troubleshooting of Mikrotik devices

Troubleshooting Mikrotik issues:
1. Check status of the Wireguard link - the "Last handshake" value should change dynamically and showing some live numbers but not 00:00:00 or static values that does not change.
2. Check hotspot server name. In Powerlynx, under Location/Details/SSIDs field and under enabled splash page you should use the name of your hotspot server on Mikrotik under IP/Hotspot/Servers. It's case sensetive.
3. Check settings of the RADIUS server on Mikrotik. Double check the Address, Secret, and Src.Address fields. 
4. Traceroute to Powerlynx
5. Walled Garden list
6. Fasttrack
7. Firewall - NAT masquarade