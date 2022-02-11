Automated_Create_Google_Calendar_via_Google_Spreadsheet_with_Google_Script

function create_Events(){

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Name_of_Sheet");
    var last_row = sheet.getLastRow();
    var data = sheet.getRange("Range_of_Sel" + last_row).getValues();
    var cal = CalendarApp.getCalendarById("Email_who_sent_GCal_Events");
    //console.log(data);
  
    for(var i = 0;i< data.length;i++){
      // index 0 = Name of the Event 
      // index 1 = Start Time of the Event
      // index 2 = End Time of the Event
      // index 3 = Location of the Event 
      // index 4 = Description of the Event 
      // index 5 = Attendess of the Event 
  
      var Events = cal.createEvent(data[i][0],
      new Date(data[i][1]),
      new Date(data[i][2]),
      {location: data[i][3], description :''});
      
      var email = data[i][4].split(",").map(function(e){
        Events.addGuest(`${e.trim()}`);
      })
      
      
     

   //Logger.log('Event ID: ' + event.getId());
       
  
    }  
    Logger.log("Events have been added to the calendar");
  
  }