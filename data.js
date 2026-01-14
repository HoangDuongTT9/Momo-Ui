function updateData(){
  document.getElementById("customerName").innerText =
      document.getElementById("nameInput").value;

  document.getElementById("contract").innerText =
      document.getElementById("contractInput").value;

  document.getElementById("totalDebt").innerText =
      document.getElementById("debtInput").value;
}
