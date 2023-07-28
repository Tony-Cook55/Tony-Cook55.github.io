"use strict";

    const $ = selector => document.querySelector(selector);


    document.addEventListener("DOMContentLoaded", () => {

      setInterval(setClock, 1000);

    function setClock(){
      // this will call in the computers time
      let time = new Date();

      let hours = time.getHours();                 // gets the computers hours
      let minutes = time.getMinutes();             // gets the computers minutes
      let seconds = time.getSeconds();             // gets the computers seconds
      let milliseconds = time.getMilliseconds();   // gets the computers milliseconds

      let AM_or_PM = "AM";  // this will change from AM or PM based on the 12 hour


      // This is what sets the 12 hour format for PM and AM  12 o'clocks
      if(hours >= 12){
        if (hours > 12){
          hours -= 12;
          AM_or_PM = "PM";
        }
      }
      // Due to hour 24 being 0 if hours == 0 we set it back to 12 to show its 12 in the AM
      else if(hours == 0){
        hours = 12;
        AM_or_PM = "AM";
      }



      let zeroInMinutes = "";

      // if less than 10 minutes add a 0 in front of the minutes
      if(minutes < 10){
        zeroInMinutes = "0";
      }
      // if literally anything else other than less than 10 makes the output that has 0 be nothing
      else{
        zeroInMinutes = "";
      }



      // This puts a 0 in front of the seconds if there less than 10 so it will look like this :04
      let zeroInSeconds = "";

      // if less than 10 seconds add a 0 in front of the seconds
      if(seconds < 10){
        zeroInSeconds = "0";
      }
      // if literally anything else other than less than 10 makes the output that has 0 be nothing
      else{
        zeroInSeconds = "";
      }


      // this adds all the times gathered together and we will display them
      //let currentTime = hours + ":" + zeroInMinutes + minutes + ":" + zeroInSeconds + seconds + " " + AM_or_PM;

      // This is getting the clock_Output class and setting its text to the current time
      //$('.clock_Output').textContent = currentTime;



      // Here is a way to separate the number outputs to allow us to put them where ever
      $('.hours_Output').textContent = hours;
      $('.minutes_Output').textContent = zeroInMinutes + minutes;
      $('.seconds_Output').textContent = zeroInSeconds + seconds;
      $('.AM_or_PM_Output').textContent = AM_or_PM;



      // This gets the date that the computer has     EX: 7/26/2023
      let date = new Date().toLocaleDateString();

      // This is getting the date_Output class and setting its text to the current date
      $('.date_Output').textContent = date;



      /*    // changing what we have above to these will make this like a stop watch accounting for every millisecond
      setInterval(setClock, 1);
      let currentTime = hours + ":" + minutes + ":" + seconds + ":" + milliseconds + AM_or_PM;
      */
    }









  });





/*
  <!--  ACTUAL CLOCK RELATED THINGS  -->







<!--   THIS IS A COUNT DOWN TIMER THAT AFTER 10sec Will PRINT BLAST OFF!
<script>

const $ = selector => document.querySelector(selector);



  let countDown = null;

  let count = 10;



  const updateCounter = () => {

      $("#counter").firstChild.nodeValue = count;

      if (count <= 0) {

          clearInterval(countDown);

          $("#counter").firstChild.nodeValue = "Blastoff!";

      } 

      count--;

  };



  document.addEventListener("DOMContentLoaded", () => {

      updateCounter();

      countDown = setInterval(updateCounter, 1000);

  });

</script>


<h3>Countdown: <span id="counter">Starting...</span></h3>
-->
*/