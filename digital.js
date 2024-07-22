function calculateCost() {
    const deluxRate = 3000;
    const suiteRate = 5000;
    const acRate = 1000;
    const lockerRate = 500;
    const extraPersonRate = 1000;

    let totalDays = parseInt(document.getElementById('totalDays').value);
    let totalPersons = parseInt(document.getElementById('totalPersons').value);
    let advanceAmount = parseFloat(document.getElementById('advanceAmount').value);
    let roomType = document.getElementById('roomType').value;
    let roomCost = roomType === 'delux' ? deluxRate : suiteRate;

    let amenitiesCost = 0;
    if (document.getElementById('ac').checked) amenitiesCost += acRate;
    if (document.getElementById('locker').checked) amenitiesCost += lockerRate;

    let extraPersons = totalPersons > 2 ? totalPersons - 2 : 0;
    let extraPersonCost = extraPersons * extraPersonRate * totalDays;

    let totalRoomCost = roomCost * totalDays;
    let totalAmenitiesCost = amenitiesCost * totalDays;
    let totalCost = totalRoomCost + totalAmenitiesCost + extraPersonCost;
    let balance = totalCost - advanceAmount;

    document.getElementById('totalCost').value = totalCost;
    document.getElementById('balance').value = balance;
}
