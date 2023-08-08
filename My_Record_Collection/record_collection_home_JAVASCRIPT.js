

window.onload = (event) => {



    // get search bar element
    const searchInput = document.getElementById("searchInput");



    // store name elements in array-like object
    const namesFromDOM = document.getElementsByClassName("find-records");  // LOOKS FOR CLASS NAME




    // listen for user events
    searchInput.addEventListener("keyup", (event) => {
    const { value } = event.target;

    // get user search input converted to lowercase
    const searchQuery = value.toLowerCase();


    for (const nameElement of namesFromDOM) {

      // store name text and convert to lowercase
      let name = nameElement.textContent.toLowerCase();


      // compare current name to search input
      if (name.includes(searchQuery)) {
        // found name matching search, display it
        nameElement.style.display = "block";
        //window.open("#back_to_top");

        // THIS HIDES THE ERROR MESSAGE ON A CORRECT SEARCH
        document.getElementById("errorOutput").style.display = "none";


        // THIS HIDES THE Clear Searchbar BUTTON ON A CORRECT SEARCH
        document.getElementById("hide_clear_button").style.display = "none";


      }
      else if(!name.includes(searchQuery)){    // IF SEARCH IS BAD DO THIS
        // no match, don't display name
        nameElement.style.display = "none";

        // THIS SHOWS THE ERROR MESSAGE ON A BAD SEARCH
        document.getElementById("errorOutput").style.display = "block";

        // THIS IS THE ERROR MESSAGE
        document.getElementById("errorOutput").innerHTML = "No Records Found";

        // THIS HIDES THE FOOTER AND THE BACK TO TOP BUTTON
        document.getElementById("hide_footer").style.display = "none";


        // THIS SHOWS THE Clear Searchbar BUTTON ON A BAD  SEARCH
        document.getElementById("hide_clear_button").style.display = "flex";

        /*
        // This displays the message "No Results Found" and outputs it  on the errorOutput id
        document.getElementById("errorOutput").innerHTML = "No Records Found";
        */
      }








    // store name elements in array-like object
    const recordNamesFromDOM = document.getElementsByClassName("recordNames");  // LOOKS FOR CLASS NAME





    }
    });




};





  function changeFooterColor(){
    let colorChangeText = document.getElementById("copyright");
    let colorChangeFooter = document.getElementById("hide_footer");

    colorChangeText.style.color = "#f6dbac";
    colorChangeFooter.style.backgroundColor = "#f6dbac";
  }












