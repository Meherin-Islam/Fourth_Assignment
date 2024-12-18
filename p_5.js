function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }
    if (serialNumber <= waitingTimes.length) {
        return "Invalid Input";
    }
    let sum = 0;
    for (let i = 0; i < waitingTimes.length; i++) {
        sum += waitingTimes[i];
    }
    const averageTime = Math.round(sum / waitingTimes.length);
    const remainingPeople = serialNumber - waitingTimes.length - 1;
    const isratWaitingTime = remainingPeople * averageTime;
 return isratWaitingTime;
}

