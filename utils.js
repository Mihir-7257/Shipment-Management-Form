function enableOtherFields() {
  $("#description, #source, #destination, #shippingDate, #expectedDeliveryDate").prop("disabled", false);
}

function resetForm() {
  $("#shipmentForm")[0].reset();
  $("#shipmentNo").prop("disabled", false).focus();
  $("#saveBtn, #updateBtn").prop("disabled", true);
  $("#description, #source, #destination, #shippingDate, #expectedDeliveryDate").prop("disabled", true);
  recordNumber = null;
}

function fillFormWithData(data) {
  $("#description").val(data.Description);
  $("#source").val(data.Source);
  $("#destination").val(data.Destination);
  $("#shippingDate").val(data["Shipping-Date"]);
  $("#expectedDeliveryDate").val(data["Expected-Delivery-Date"]);
}
