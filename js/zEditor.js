const changeStyle = (style, type) => {
    if (style === 'h1' || style === 'h2' || style === 'h3' || style === 'h4' || style === 'p') {
        document.execCommand('formatBlock', false, '<' + style + '>');
    } else {
        if (type){
            document.execCommand(type, false, style);
        }else{
            document.execCommand(style, false, null);
        }
    }
}