// Start JQuery Area

$(document).ready(function(){
    // console.log('hi');

    // Start Header
        // Start Nav Bar

        $('.navbuttons').click(function(){
            $(this).toggleClass('crossxs');
        })

        // End Nav Bar
    // End Header

});

// End JQuery Area


// Start JavaScript Area

    // Start Student Counter Section

    var getcountervalues = document.querySelectorAll('.countervalues');
    // console.log(getcountervalues);

    getcountervalues.forEach(function(getcountervalue){
        getcountervalue.textContent = 0;

        // console.log(getcountervalue);

        const updatecounter = function(){
            // console.log('i am working');

            const getcttarget = +getcountervalue.getAttribute('data-target');
            // console.log(getcttarget);
            // console.log(typeof getcttarget);

            const getctcontent = +getcountervalue.innerText;
            // console.log(getctcontent);

            const incnumber = getcttarget / 100;
            // console.log(incnumber);

            if(getctcontent < getcttarget){
                getcountervalue.textContent = getctcontent+ incnumber;
                setTimeout(updatecounter,60);
            }
        }

        updatecounter();
    });

    // Start Student Counter Section

    // Start Rating Section

    // start google code for chart

    google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Myanmar',     8],
          ['Thailand',      2],
          ['Signapore',  4],
          ['Indonesia', 2],
          ['Srinlanka',    8]
        ]);

        var options = {
          title: 'International Students',
        //   is3D: true,
           width:550,
           height:400
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }


    // start google code for chart

    // Start Rating Section

// End JavaScript Area