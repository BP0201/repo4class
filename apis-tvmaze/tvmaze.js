/** Given a query string, return array of matching shows:
 *     { id, name, summary, episodesUrl }
 */


/** Search Shows
 *    - given a search term, search for tv shows that
 *      match that query.  The function is async show it
 *       will be returning a promise.
 *
 *   - Returns an array of objects. Each object should include
 *     following show information:
 *    {
        id: <show id>,
        name: <show name>,
        summary: <show summary>,
        image: <an image from the show data, or a default imege if no image exists, (image isn't needed until later)>
      }
 */
async function searchShows(query) {
  // TODO: Make an ajax request to the searchShows api.  Remove
  // hard coded data.
  const res = await axios.get(`http://api.tvmaze.com/singlesearch/shows?q=${query}`)
  const showID = res.data.id
  const showName = res.data.name
  const summary = res.data.summary
  const image = res.data.image.medium

  return [
    {
      id: showID,
      name: showName,
      summary,
      image
    }
  ]
}



/** Populate shows list:
 *     - given list of shows, add shows to DOM
 */

function populateShows(shows) {
  const $showsList = $("#shows-list");
  $showsList.empty();

  for (let show of shows) {
    if (show.image) {
    $item = $(
      `<div class="col-md-6 col-lg-3 Show" data-show-id="${show.id}">
         <div class="card" data-show-id="${show.id}">
           <div class="card-body">
             <h5 class="card-title">${show.name}</h5>
             <p class="card-text">${show.summary}</p>
             <img class="card-img-top" src="${show.image}">
             <button class="btn btn-primary get-episodes">Episodes</button>
           </div>
         </div>
       </div>
      `);
    } else {
      $item = $(
        `<div class="col-md-6 col-lg-3 Show" data-show-id="${show.id}">
           <div class="card" data-show-id="${show.id}">
             <div class="card-body">
               <h5 class="card-title">${show.name}</h5>
               <p class="card-text">${show.summary}</p>
               <img class="card-img-top" src="https://tinyurl.com/tv-missing">
               <button class="btn btn-primary get-episodes">Episodes</button>
             </div>
           </div>
         </div>
        `);
    }
    $showsList.append($item);
  }
}


/** Handle search form submission:
 *    - hide episodes area
 *    - get list of matching shows and show in shows list
 */

$("#search-form").on("submit", async function handleSearch (evt) {
  evt.preventDefault();

  let query = $("#search-query").val();
  if (!query) return;

  $("#episodes-area").hide();

  let shows = await searchShows(query);

  populateShows(shows);
  $('#search-query').val('')
});


/** Given a show ID, return list of episodes:
 *      { id, name, season, number }
 */

async function getEpisodes(id) {
  // TODO: get episodes from tvmaze
  //       you can get this by making GET request to
  //       http://api.tvmaze.com/shows/SHOW-ID-HERE/episodes

  const res = await axios.get(`http://api.tvmaze.com/shows/${id}/episodes`)
  const showLength = res.data.length
  const showArr = []
  for(let i=0; i<showLength; i++) {
    showArr.push({id: res.data[i].id, name: res.data[i].name, season: res.data[i].season, number: res.data[i].number})
  }
  return showArr

  // TODO: return array-of-episode-info, as described in docstring above
}


function populateEpisodes(arr) {
    const $episodeList = $('#episodes-list')
    $episodeList.empty()

    for (let episode of arr) {
      let $item = $(
        `<li>${episode.name} (season ${episode.season}, number ${episode.number})</li>`
      )
    $episodeList.append($item)
    }
    $('#episodes-area').show()
}

$("#shows-list").on("click", ".get-episodes", async function handleEpisodeClick(evt) {
  let showId = $(evt.target).closest(".Show").data("show-id");
  let episodes = await getEpisodes(showId);
  populateEpisodes(episodes);
});