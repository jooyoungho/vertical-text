function verticalText(horizontalText) {
    let html = '';
    for (i in horizontalText) {
        if(horizontalText[i] != " ") {
            html += "<span class='popup_text'>" + horizontalText[i] + "</span>"
        } else {
            html += "<span class='popup_text popup_text_br'''></span>";
        }
    }
    return html;
}