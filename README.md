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
### GET Messages
---

Return a JSON list of Message objects that are currently being stored.

* **URL**

  `/messages/`

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
  {“messages”: [{“message_text”: “hello world”, “id”: 1}]}
  ``` 


--
### POST Message
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
