async function addCupcake (evt) {
    evt.preventDefault();

    const flavor = $('#flavor').val();
    const size = $('#size').val();
    const rating = $('#rating').val();
    const image = $('#image').val();
    const newCupcake = await axios.post(`/api/cupcakes`, {
        flavor: flavor,
        size: size,
        rating: rating,
        image: image
    })
    $('#cupcakeList').append(newCupcake)
}



$('#addForm').click(addCupcake)

// ^^^ This is my solution, not sure what is wrong with it but the real solution below doesnt seem to work either


// const BASE_URL = "http://localhost:5000/api";

// $("#new-cupcake-form").on("submit", async function (evt) {
//     evt.preventDefault();
  
//     let flavor = $("#form-flavor").val();
//     let rating = $("#form-rating").val();
//     let size = $("#form-size").val();
//     let image = $("#form-image").val();
  
//     const newCupcakeResponse = await axios.post(`${BASE_URL}/cupcakes`, {
//       flavor,
//       rating,
//       size,
//       image
//     });
  
//     let newCupcake = $(generateCupcakeHTML(newCupcakeResponse.data.cupcake));
//     $("#cupcakes-list").append(newCupcake);
//     $("#new-cupcake-form").trigger("reset");
//   });