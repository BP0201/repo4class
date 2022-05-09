// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


let categories = []
//     {title, clues: [{question, answer, showing: null}]}
// ];


/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

async function getCategoryIds() {
    const catIds = []
    const arr = []
    const res = await axios.get(`http://jservice.io/api/categories?count=100`)
    for(let k=0; k<100; k++){
    arr.push(res.data[k].id)
    }
    shuffle(arr)
    for(let i=0; i < 6; i++){
        catIds.push(arr[i])
    }
    for(let j=0;j<catIds.length;j++){
    categories.push(await getCategory(catIds[j]))
    }
    return categories;
}

/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

async function getCategory(catId) {
    const clueArray = []
    const res = await axios.get(`http://jservice.io/api/category?id=${catId}`)
    let title = res.data.title
    for(let i=0; i<5; i++){
    let question = res.data.clues[i].question
    let answer = res.data.clues[i].answer
    clueArray.push({question, answer, showing: null})
    }
    let catObj = {title, clues: clueArray}
    return catObj
}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */
const theadTR = document.querySelector('#theadTR')
const table = document.querySelector('#jeopardy')
const tbody = document.querySelector('tbody')



async function fillTable() {
    await getCategoryIds()
    for(let i=0; i<6; i++){
        const newTheadTH = document.createElement('th')
        newTheadTH.innerText = categories[i].title.toUpperCase()
        theadTR.append(newTheadTH)
    }
    for (let y = 0; y < 5; y++) {
        const row = document.createElement("tr");
        // creating each tr or "row" of the board, except the top
        for (let x = 0; x < 6; x++) {
          const cell = document.createElement("td");
          cell.setAttribute("id", `${x}-${y}`);
          cell.innerText = '?'
        // creating every cell in all rows besides the top
          row.append(cell);
        // adding the cells to each row
        }
        tbody.append(row);
        // adding the rows to create the board
      }
}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick(e) {
  let x = e.target.id[0]
  let y = e.target.id[2]
  if(e.target.innerText === '?') {
    e.target.innerText = categories[x].clues[y].question
    e.target.style.fontSize = '0.8rem'
  } else if (e.target.innerText === categories[x].clues[y].question) {
    e.target.innerText = categories[x].clues[y].answer
    e.target.style.fontSize = '1.25rem'
  } else if (e.target.innerText === categories[x].clues[y].answer) return;
}

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

// function showLoadingView() {

// }

/** Remove the loading spinner and update the button used to fetch data. */

// function hideLoadingView() {
// }

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

// async function setupAndStart() {
// }

/** On click of start / restart button, set up game. */

// TODO

/** On page load, add event handler for clicking clues */

// TODO
const $btn = $('button')
const $table = $('#jeopardy')

tbody.addEventListener('click', handleClick)

fillTable()
