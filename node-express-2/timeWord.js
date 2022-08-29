/** Turns a time into text format:
 * 
 *  "23:59" returns "eleven fifty-nine pm"
 */

function timeWord(time) {
    if (typeof time !== 'string') {
        return "Input must be a string!"
    }
    if (time.length !== 5 || time.indexOf(":") === -1) {
        return `Invalid input! Use format "00:00"`
    }
    if (time === "00:00") {
        return "midnight"
    }

    const hourWords = 
    ["twelve", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"]

    const minuteWords = ["o'clock", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eightteen", "nineteen", "twenty", "twenty-one", "twenty-two", "twenty-three", "twenty-four", "twenty-five", "twenty-six", "twenty-seven", "twenty-eight", "twenty-nine", "thirty", "thirty-one", "thirty-two", "thirty-three", "thirty-four", "thirty-five", "thirty-six", "thirty-seven", "thirty-eight", "thirty-nine", "fourty", "fourty-one", "fourty-two", "fourty-three", "fourty-four", "fourty-five", "fourty-six", "fourty-seven", "fourty-eight", "fourty-nine", "fifty", "fifty-one", "fifty-two", "fifty-three", "fifty-four", "fifty-five", "fifty-six", "fifty-seven", "fifty-eight", "fifty-nine"]

    let hour = time.slice(0,2)
    const minute = time.slice(3)
    let amPm;

    if (+hour > 23 || +minute > 59) {
        return "Invalid time"
    } 

    if (+hour > 12) {
        hour = hour - 12
        amPm = "pm"
    } else {
        amPm = "am"
    }
    return `${hourWords[+hour]} ${minuteWords[+minute]} ${amPm}`
}


module.exports = timeWord