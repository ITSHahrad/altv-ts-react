import * as alt from 'alt-client';

alt.onServer('cef:Load', loadCEF);

function loadCEF() {
    let webview = new alt.WebView("http://assets/webview/client/index.html");
    webview.focus();
    alt.showCursor(true);
    alt.toggleGameControls(false);
}
