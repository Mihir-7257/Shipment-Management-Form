# 📦 Shipment Management System

A simple, interactive form to manage shipment records using JSONPowerDB as the backend. This project enables users to add, view, and update shipment details through a clean web interface.

---

## 🔧 Features

- Add new shipment entries to database
- Detect existing shipment and auto-fill details
- Update shipment information
- Form validation for required fields
- Uses JSONPowerDB (JPDB) for backend storage

---

## 📁 Folder Structure

```
shipment-form/
├── index.html
└── js/
    ├── config.js       # Configuration: DB name, token, URLs
    ├── utils.js        # Functions to enable/disable form fields
    ├── api.js          # DB communication (PUT, GET, UPDATE)
    └── main.js         # Handles events and form logic
```

---

## 📝 Shipment Table Schema

Database: `deliveryDB`  
Relation: `Shipment-table`

### Fields:
- `Shipment-Number` 
- `Description`
- `Source`
- `Destination`
- `Shipping-Date`
- `Expected-Delivery-Date`

---

## 🧪 Sample Use Case

- Enter a shipment number (e.g., SHP001,SH002,SH003...)
- If not found, fill out the other fields and click **Save**
- If found, the form loads the data and lets you **Update** it

---

