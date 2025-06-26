let recordNumber = null;

$(document).ready(function () {
  resetForm();

  $("#shipmentNo").on("blur", function () {
    let shipmentNo = $("#shipmentNo").val().trim();
    if (!shipmentNo) return;

    let response = getShipmentByNo(shipmentNo);

    if (response && response.responseJSON && response.responseJSON.data) {
      let data = response.responseJSON.data.record;
      recordNumber = response.responseJSON.data.rec_no;

      fillFormWithData(data);
      $("#shipmentNo").prop("disabled", true);
      enableOtherFields();
      $("#updateBtn").prop("disabled", false);
    } else {
      enableOtherFields();
      $("#saveBtn").prop("disabled", false);
    }
  });

  $("#saveBtn").on("click", function () {
    if (isAnyFieldEmpty()) {
      alert("Please fill all fields.");
      return;
    }

    saveShipmentData();
  });

  $("#updateBtn").on("click", function () {
    if (isAnyFieldEmpty()) {
      alert("Please fill all fields.");
      return;
    }

    updateShipmentData();
  });

  $("#resetBtn").on("click", resetForm);
});
function isAnyFieldEmpty() {
  return (
    !$("#shipmentNo").val().trim() ||
    !$("#description").val().trim() ||
    !$("#source").val().trim() ||
    !$("#destination").val().trim() ||
    !$("#shippingDate").val() ||
    !$("#expectedDeliveryDate").val()
  );
}
