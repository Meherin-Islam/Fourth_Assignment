function calculateFinalScore(obj) {
    if (typeof obj !== 'object' ) {
        return "Invalid Input";
    }
  const name = obj.name;
    const testScore = obj.testScore;
    const schoolGrade = obj.schoolGrade;
    const isFFamily = obj.isFFamily;
 if (typeof name !== 'string' || 
        typeof testScore !== 'number' || 
        typeof schoolGrade !== 'number' || 
        typeof isFFamily !== 'boolean') {
        return "Invalid Input";
    }
 if ( testScore > 50 ||  schoolGrade > 30) {
        return "Invalid Input";
    }
 let finalScore = testScore + schoolGrade;
    if (isFFamily) {
        finalScore += 20;
    }
  return finalScore >= 80;
}
