function superbowlWin(array) {
    let yearWon = array.find((array) => array.result === "W");
    if(yearWon) {
        return yearWon.year;
    } 
} 

superbowlWin(record);


