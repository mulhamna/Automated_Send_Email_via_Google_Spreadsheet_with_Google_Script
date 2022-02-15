Automated_Send_Email_via_Google_Spreadsheet_with_Google_Script

function sendEmails(){
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
    var Sheet = ss.getSheetByName("Name_of_Sheet");
    var last_row = Sheet.getLastRow();
    var data = Sheet.getRange("Range_of_Sel" + last_row).getValues();
    //console.log(data);

    for(var i = 0;i< data.length;i++){
      //index 0 = Email To
      //index 1 = Body Email
      //index 2 = Attach Files
      
      var emailTo = data[i][0].split(",");
      var subject = "Name_of_Subject_Email";
      var body = data[i][1];
      var id = 'id_url';
      var url = 'url_file';
      var pdf = DriveApp.getFileById(id)
        
        if(emailTo !== undefined){
          GmailApp.sendEmail(emailTo, subject, body, {attachments:[pdf]});
      
      }  
    }
}
