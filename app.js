let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";
let buttons = document.querySelectorAll(".btn");

buttons.forEach(function(btn) {
    btn.addEventListener("click", function () {
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            item = this.getAttribute("data-id");
            let brandName = this.innerText;
            tg.MainButton.setText("Вывести: " + brandName);
            tg.MainButton.show();
        }
    });
});

Telegram.WebApp.onEvent("mainButtonClicked", function () {
    tg.sendData(item);
});