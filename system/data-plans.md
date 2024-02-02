# Data plans

Data plans are offering subscription templates describing how customers can access the network and what limitations they will have.
Limitations can be network speed, traffic amount limitations, online time, and plan availability depending on the day of the week or time.

You can view the list of all data plans and create a new one on the **Data plans** main menu section.

![Data plans](images/data-plans-section.png)

## Data plans configuraitons

![Data plan configs](images/data-plan-configs.png)

Data plans have a large amount of configuration options. Let's review them one by one.

Main data plan configuration options:

* **Title** - the name of the plan. It will be displayed to customers on the splash page.
* **Price** - the price of the plan. It will be displayed to customers on the splash page and this value will be used for buying plan using a payment gateway.

Speed limitations

* **Download speed (kbps)** - the maximum download speed for customers in kbps.
* **Upload speed (kbps)** - the maximum upload speed for customers in kbps.

Expirations limitations:

* **Validity (days)** – the number of days the plan will be valid after buying on the splash page.

Usage limitations:

* **Separate limits** – this checkbox allows you to separate download and upload traffic limits. If the checkbox is checked, limits from fields **Download limit** and **Upload limit** will be applied. If the checkbox is unchecked, the limit from the **Total limit** field will be applied.

* **Online time limit** – the maximum time the customer can be online after buying the plan on the splash page.

If one of these limits is reached, the customer will be disconnected, and voucher will be transferred to the status *Used*

Plan availability:

* **Usage limit** – it is a restriction how often the customer can buy the plan. It can be set to **Unlimited**, **On time**, **Once per day**, **Onse per 24 hours** **Once per week**, **Once per month**, **Once per year**. For example, if you set the limit to **Once 24 hours**, the customer will be able to buy the plan only once per 24 hours.

* **Available days** – it is the list of days when the plan is available. For example, if you set the list to **Monday**, **Tuesday**, **Wednesday**, the plan will be available only on these days.

* **Available hours** – it is the time range when the plan is available. For example, if you set the range from **08:00** to **18:00**, the plan will be available only from 08:00 to 18:00.

Other plan options:

* **Simultaneous devices** – the maximum number of devices that can be connected to the network using the same voucher at the same time.

* **Voucher prefix** – the prefix that will be used for generating vouchers series for this plan.

* **Active** – the checkbox to enable or disable the plan.

* **Mark plan as popular** – the checkbox to mark the plan as popular. It will be displayed on the top of the list of plans on the splash page.

## Enabled data plans available for location

Customers can select data plans or buy using [payment gateways](/todo) on the [splash pages](/system/splash-pages.md) while trying to connect to Wi-Fi. For this, you should enable plans for the location.
To enable a data plan for a location, go to the ```Locations``` section location from a list, where you want to enable/disable the plan, click on the ```Plans``` tab, and enable or disable data plans using checkboxes **Enabled** to select the plans you want to allow for this location.

![Select plans for locations](images/select-plans-for-locations.png)