runall = async() => {
  // Setup (creds to @fillduck)
  const country = "my";
  // NOTE: for every part, the arrays keep changing if different product ID.
  const productID1 = "20551543"; //103.735.89 - BLAHAJ 100cm
  const productID2 = "50551532"; //005.406.64 - BLAHAJ 50cm
  const productID3 = "40551537"; //505.116.83 - RUPTLING bag
  const productID4 = "20551557"; //505.116.83 - RUPTLING bag
  const baseURL = "https://api.ingka.ikea.com/cia/availabilities/ru/" + country + "?itemNos=" + productID1 + "," + productID2 + "," + productID3 + "," + productID4 + "&expand=StoresList,Restocks,SalesLocations";
  const headers = { "x-client-id": "b6c117e5-ae61-4ef5-b4cc-e0b1e37f0631" };
  const response = await fetch(`${baseURL}`, { headers });
  const { data } = await response.json();
  const availabilities = data;
  // Get all stock
  document.getElementById("detailsPhysical-" + productID1 + "-store1").innerHTML = availabilities[0].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID1 + "-store2").innerHTML = availabilities[4].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID1 + "-store3").innerHTML = availabilities[8].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID1 + "-store4").innerHTML = availabilities[12].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID2 + "-store1").innerHTML = availabilities[3].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID2 + "-store2").innerHTML = availabilities[7].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID2 + "-store3").innerHTML = availabilities[11].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID2 + "-store4").innerHTML = availabilities[15].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID3 + "-store1").innerHTML = availabilities[2].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID3 + "-store2").innerHTML = availabilities[6].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID3 + "-store3").innerHTML = availabilities[10].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID3 + "-store4").innerHTML = availabilities[14].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID4 + "-store1").innerHTML = availabilities[1].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID4 + "-store2").innerHTML = availabilities[5].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID4 + "-store3").innerHTML = availabilities[9].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID4 + "-store4").innerHTML = availabilities[13].availableStocks[0].quantity;
  // Get stock finish. Now onto getting restock data.
  // The below code is for product 1.
  if (!! availabilities[0].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID1 + "-store1").innerHTML = "Estimated restock date: " + availabilities[0].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[1].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[4].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID1 + "-store2").innerHTML = "Estimated restock date: " + availabilities[4].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[4].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[8].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID1 + "-store3").innerHTML = "Estimated restock date: " + availabilities[8].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[7].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[12].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID1 + "-store4").innerHTML = "Estimated restock date: " + availabilities[12].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[10].availableStocks[0].restocks[0].latestDate;
  }
  // The below code is for product 2.
  if (!! availabilities[3].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID2 + "-store1").innerHTML = "Estimated restock date: " + availabilities[3].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[0].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[7].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID2 + "-store2").innerHTML = "Estimated restock date: " + availabilities[7].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[3].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[11].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID2 + "-store3").innerHTML = "Estimated restock date: " + availabilities[11].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[6].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[15].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID2 + "-store4").innerHTML = "Estimated restock date: " + availabilities[15].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[9].availableStocks[0].restocks[0].latestDate;
  }
  // The below code is for product 3.
  if (!! availabilities[2].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID3 + "-store1").innerHTML = "Estimated restock date: " + availabilities[2].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[2].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[6].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID3 + "-store2").innerHTML = "Estimated restock date: " + availabilities[6].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[5].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[10].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID3 + "-store3").innerHTML = "Estimated restock date: " + availabilities[10].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[8].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[14].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID3 + "-store4").innerHTML = "Estimated restock date: " + availabilities[14].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[11].availableStocks[0].restocks[0].latestDate;
  }
  // The below code is for product 4.
  if (!! availabilities[1].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID4 + "-store1").innerHTML = "Estimated restock date: " + availabilities[1].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[2].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[5].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID4 + "-store2").innerHTML = "Estimated restock date: " + availabilities[5].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[5].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[9].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID4 + "-store3").innerHTML = "Estimated restock date: " + availabilities[9].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[8].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[13].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID4 + "-store4").innerHTML = "Estimated restock date: " + availabilities[13].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[11].availableStocks[0].restocks[0].latestDate;
  }
  // Restock code finish. Now onto getting delivery info for all stores.
  // The below code is for product 1.
  if (availabilities[0].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID1 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (availabilities[4].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID1 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (availabilities[8].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID1 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (availabilities[12].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID1 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (! availabilities[0].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID1 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[4].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID1 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[8].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID1 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[12].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID1 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else {
    document.getElementById("detailsPhysical-" + productID1 + "-HomeDelivery").innerHTML = "<center class=delunavail><i>No information from IKEA.</i></center>";
  }
  // The below code is for product 2.
  if (availabilities[3].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID2 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (availabilities[7].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID2 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (availabilities[11].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID2 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (availabilities[15].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID2 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (! availabilities[3].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID2 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[7].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID2 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[11].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID2 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[15].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID2 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else {
    document.getElementById("detailsPhysical-" + productID2 + "-HomeDelivery").innerHTML = "<center class=delunavail><i>No information from IKEA.</i></center>";
  }
  // The below code is for product 3.
  if (availabilities[2].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID3 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (availabilities[6].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID3 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (availabilities[10].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID3 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (availabilities[14].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID3 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (! availabilities[2].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID3 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[6].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID3 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[10].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID3 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[14].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID3 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else {
    document.getElementById("detailsPhysical-" + productID3 + "-HomeDelivery").innerHTML = "<center class=delunavail><i>No information from IKEA.</i></center>";
  }
  // The below code is for product 4.
  if (availabilities[1].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID4 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (availabilities[5].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID4 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (availabilities[9].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID4 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (availabilities[13].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID4 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (! availabilities[1].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID4 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[5].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID4 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[9].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID4 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[13].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID4 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else {
    document.getElementById("detailsPhysical-" + productID4 + "-HomeDelivery").innerHTML = "<center class=delunavail><i>No information from IKEA.</i></center>";
  }
  // Counted it for you. 51 conditions?
} 