Automated Send Email via Google Spreadsheet

function sendEmails(){
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
    var Sheet = ss.getSheetByName("Sheet7");
    var last_row = Sheet.getLastRow();
    var data = Sheet.getRange("A2:C" + last_row).getValues();
    //console.log(data);

    for(var i = 0;i< data.length;i++){
      //index 0 = Email To
      //index 1 = Body Email
      //index 2 = Attach Files
      
      var emailTo = data[i][0].split(",");
      var subject = "";
      var body = data[i][1];
      var id = '';
      var url = '';
      var pdf = DriveApp.getFileById(id)
        
        if(emailTo !== undefined){
          GmailApp.sendEmail(emailTo, subject, body, {attachments:[pdf]});
      
      }  
    }
}
