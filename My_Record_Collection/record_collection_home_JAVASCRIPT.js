

window.onload = (event) => {



    // get search bar element
    const searchInput = document.getElementById("searchInput");



    // store name elements in array-like object
    const namesFromDOM = document.getElementsByClassName("records");  // LOOKS FOR CLASS NAME




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


        // This displays no message in the output errorOutput
        document.getElementById("errorOutput").innerHTML = "";
      }
      else if(!name.includes(searchQuery)){
        // no match, don't display name
        nameElement.style.display = "none";

        /*
        // This displays the message "No Results Found" and outputs it  on the errorOutput id
        document.getElementById("errorOutput").innerHTML = "No Records Found";
        */
      }




    // THIS DOWN GETS JUST THE RECORD NAMES CLASS    recordNames



    // store name elements in array-like object
    const recordNamesFromDOM = document.getElementsByClassName("recordNames");  // LOOKS FOR CLASS NAME




    for (const nameElement of recordNamesFromDOM) {

    // store name text and convert to lowercase
    let name = nameElement.textContent.toLowerCase();


    // compare current name to search input
    if (name.includes(searchQuery)) {
      // found name matching search, display it
      nameElement.style.display = "block";

      // This displays no message in the output errorOutput
      document.getElementById("errorOutput").innerHTML = "";
    }
    else if(!name.includes(searchQuery)){
      // no match, don't display name
      nameElement.style.display = "none";

      /*
      // This displays the message "No Results Found" and outputs it  on the errorOutput id
      document.getElementById("errorOutput").innerHTML = "No Records Found";
      */
    }


    }


    }
    });




};