var now = moment(); 
console.log(now);

var setDay = function() {
    $("#currentDay").text(now.format('dddd, MMMM Do'));
}

var auditTask = function(taskEl) {
    // get date from task element
    var date = $(taskEl)
      .find("hour")
      .text()
      .trim();
  
    // convert to moment object
    var time = moment(date, "hh");
  
    // remove any old classes from element
    $(taskEl).removeClass("past present future");
  
    // apply new class based on time
    if (moment().isAfter(time)) {
      $(taskEl).addClass("past");
    } else if (Math.abs(moment().diff(time, "hours")) <= 1) {
      $(taskEl).addClass("future");
    } else if (Math.abs(moment().diff(time, "hours")) = 0) {
        $(taskEl).addClass("present");
    }
};

setDay();

// audit date/time every minute
setInterval(function() {
    $("#currentDay").each(function() {
      auditTask($(this));
    });
  }, 60000);