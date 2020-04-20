var tableBodyContact = $(".tableBodyContact")

function tableCreationContact(){
    for (let i = 0; i < wbaArray.length; i++) {
        
        var newRowContact = $("<tr>");
        var newTd1Contact = $("<td>");
        var newTd2Contact = $("<td>");
        var newTd3Contact = $("<td>");
        var newLink = $("<a>");

        $(newTd1Contact).text(wbaArray[i].state);
        $(newTd2Contact).text(wbaArray[i].phoneNumber);
        $(newLink).attr("href", wbaArray[i].website);
        $(newLink).text(wbaArray[i].linkName);
        $(newTd3Contact).append(newLink);

        $(newRowContact).append(newTd1Contact);
        $(newRowContact).append(newTd2Contact);
        $(newRowContact).append(newTd3Contact);

        $(tableBodyContact).append(newRowContact);
    }
}

tableCreationContact();