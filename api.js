function getShipmentByNo(shipmentNo) {
  let getReq = {
    token: TOKEN,
    cmd: "GET_BY_KEY",
    dbName: DB_NAME,
    rel: RELATION_NAME,
    key: shipmentNo
  };

  return $.ajax({
    type: "POST",
    url: BASE_URL + JPDB_IRL,
    data: JSON.stringify(getReq),
    contentType: "application/json",
    async: false
  });
}

function saveShipmentData() {
  let jsonStrObj = {
    "Shipment-No.": $("#shipmentNo").val(),
    "Description": $("#description").val(),
    "Source": $("#source").val(),
    "Destination": $("#destination").val(),
    "Shipping-Date": $("#shippingDate").val(),
    "Expected-Delivery-Date": $("#expectedDeliveryDate").val()
  };

  let putReq = {
    token: TOKEN,
    cmd: "PUT",
    dbName: DB_NAME,
    rel: RELATION_NAME,
    jsonStr: jsonStrObj
  };

  $.ajax({
    type: "POST",
    url: BASE_URL + JPDB_IML,
    data: JSON.stringify(putReq),
    contentType: "application/json",
    success: function () {
      alert("Record saved successfully!");
      resetForm();
    }
  });
}

function updateShipmentData() {
  let jsonStrObj = {
    "Shipment-No.": $("#shipmentNo").val(),
    "Description": $("#description").val(),
    "Source": $("#source").val(),
    "Destination": $("#destination").val(),
    "Shipping-Date": $("#shippingDate").val(),
    "Expected-Delivery-Date": $("#expectedDeliveryDate").val()
  };

  let updateReq = {
    token: TOKEN,
    cmd: "UPDATE",
    dbName: DB_NAME,
    rel: RELATION_NAME,
    jsonStr: jsonStrObj,
    record: recordNumber
  };

  $.ajax({
    type: "POST",
    url: BASE_URL + JPDB_IML,
    data: JSON.stringify(updateReq),
    contentType: "application/json",
    success: function () {
      alert("Record updated successfully!");
      resetForm();
    }
  });
}
