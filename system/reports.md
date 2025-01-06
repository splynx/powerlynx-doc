---
outline: deep
---

# Reports

It is important to export data and generate reports to analyze different metrics of your business. In Powerlynx, we offer a data export feature that you can use to export sessions and vouchers, helping you better understand usage, popular plans, etc.

To use this feature, navigate to `Analytics -> Reports` and select the report you need:

![Reports](images/reports.png){data-zoomable}

To generate a report, simply click on the "Create a new report" button, select the type of report, and use filters to export more precise data:

![Generate a report](images/generate_report.gif#mediumsize){data-zoomable}

Wait on this page until the "Download" button appears:

![Report result](images/vouchers_export_result.png){data-zoomable}

Or safely navigate away and come back later to the list of reports. You will see the "Download" button under the generated report.

The output file is a CSV containing all the required and filtered data.

# Available reports

## Sessions export

Allows you to export customer sessions to see the usage. The exported data includes: MAC, IP, customer ID, phone number, start date and time, end date and time, traffic usage, data plan, NAS identifier, and more.

## Vouchers export

Export vouchers with different statuses, locations, and data plans. This data can be useful to see how many vouchers were generated from a specific data plan, and more.

The exported data includes: voucher ID, customer name, serie, full code, status, price, location, activation time, creation time, valid until, data limit, online time limit, data usage, online time usage and more.

## Customers export

Export customers filtered by different statuses and their join dates. Sometimes, you need to export your customer database with all the collected data, and this feature will help you do that.

The exported data includes all customer information and also the last time the customer was online, when the last purchase was made, and more.

## Customers by Location

A new report lets you see which customers were activated at a specific location during a chosen timeframe.

**Example:** You might export all customers (and their details) who purchased a voucher at Location #1, the Restaurant. This information can then be used to create personalized email campaigns targeting those customers.


## Payments export

This report provides an export of payments for a specified period. You can generate it by filtering based on location, payment gateway, and date range. The resulting file includes: customer, payment and voucher details; the location where each voucher was purchased; first session information (MAC address, IP address, port, and NAS identifier) for each voucher.

# Reports scheduler

Automate the report generation process with this feature. You can select the desired report, define the period for the data to be included, set the time for generation, and specify the email address for delivery.

Use Case: Session Export. I want to export all sessions from the previous day and receive the report in the morning. Here’s how to set it up:

![Sessions export](images/sessions_export_scheduler.gif#mediumsize){data-zoomable}



