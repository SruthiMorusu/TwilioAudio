# NewtonX

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

API Documentation
=======

---
### GET Calls
---

Return a JSON list of all calls that are currently being stored.

* **URL**

  `/Accounts/[AccountSid]/Calls`

* **Method:**
  
  `GET`
  
*  **URL Params**

   **Required:**
 
     `*None*`

   **Optional:**
 
     `*None*`

* **Success Response:**

  * **Code:** 200 <br />

* **Content:**
  
  ```bash
 {
    "first_page_uri": "/2010-04-01/Accounts/AC90af690f43f41d70e0026dd87xxxx/Calls.json?__referrer=runtime&Format=json&PageSize=50&Page=0",
    "end": 8,
    "calls": [
        {
            "sid": "CA04549f424b5f961797bd26a1991eca77",
            "date_created": "Sat, 04 Nov 2017 18:58:13 +0000",
            "date_updated": "Sat, 04 Nov 2017 18:58:27 +0000",
            "parent_call_sid": null,
            "account_sid": "AC90af690f43f41d70e0026dd87xxxxxx",
            "to": "+1551xxxxxxx",
            "to_formatted": "(551) xxx-xxxx",
            "from": "+1551xxxxxxx",
            "from_formatted": "(551) xxx-xxxx",
            "phone_number_sid": "PN1ed013d0518e0dee82dff265339dxxx",
            "status": "completed",
            "start_time": "Sat, 04 Nov 2017 18:58:13 +0000",
            "end_time": "Sat, 04 Nov 2017 18:58:27 +0000",
            "duration": "14",
            "price": "-0.00850",
            "price_unit": "USD",
            "direction": "inbound",
            "answered_by": null,
            "annotation": null,
            "api_version": "2010-04-01",
            "forwarded_from": "+15512xxxxx",
            "group_sid": null,
            "caller_name": null,
            "uri": "/2010-04-01/Accounts/AC90af690f43f41d70e0026dd87a6e3640/Calls/CA04549f424b5f961797bd26a1991eca77.json",
            "subresource_uris": {
                "notifications": "/2010-04-01/Accounts/AC90af690f43f41d70e0026dd87a6e3640/Calls/CA04549f424b5f961797bd26a1991eca77/Notifications.json",
                "recordings": "/2010-04-01/Accounts/AC90af690f43f41d70e0026dd87a6e3640/Calls/CA04549f424b5f961797bd26a1991eca77/Recordings.json"
            }
        },
  ``` 


--
### GET Conferences
---

Should accept a “message_text” parameter that creates a Message object and stores the value.

* **URL**

`/messages/`

* **Method:**

`POST`

*  **URL Params**

**Required:**

  `*None*`

**Optional:**

  `*None*`

* **Data Params**

**Required:**

* **JSON Object:**

```bash
{ “message_text”: “hello world” }
```

* **Success Response:**

* **Code:** 200 <br />

* **Content:**
  
  ```bash
  {“message”: {“message_text”: “hello world”, “id”: 1}]}}
  ``` 

---
### DELETE Message
---

Delete the message with the given id

* **URL**

`/messages/:id`

* **Method:**

`DELETE`

*  **URL Params**

**Required:**

 `*id*`
 
**Optional:**

  `*None*`

* **Data Params**

**Required:**

  `*None*`

**Optional:**

  `*None*`

* **Success Response:**

* **Code:** 200 <br />
