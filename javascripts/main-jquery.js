$(document).ready(function() {

            //vars
            var navClear = $("#navClear");
            var msgBoard = $("#messageBoard");
            var inputArea = $("#inputArea");
            var newLine = $("#newLine");
            var dark = $("#dark");
            var large = $("#large");
            var mainContent = $("#main-content");
            var timeStamp = new Date(); //per Stack Overflow, plugin needed to convert to this JQuery. It SHOULD run as is in, but as boring old JavaScript.
            var fireBtn = $("#fire");
            var natureBtn = $("#nature");
            var saveBtn = $("#save-button");
            var header = $("#header");

            //functions
            $(window).on("load", (e) => {
                    Chatty.loadJSON(e);
                };

                $(inputArea).click(e) => {
                    msgBoard.innerHTML = " ";
                    Chatty.remove(e.target)
                };

                $(msgBoard).click(e) => {
                    msgBoard.innerHTML = " ";
                    Chatty.remove(e.target);
                };

                $(dark).click(e) => {
                    let darkTheme = dark.value;
                    if (darkTheme == "dark") {
                        mainContent.toggleClass("dark");
                    }
                };

                $(large).click(e) => {
                    let lgTheme = large.value;
                    if (lgTheme == "large") {
                        msgBoard.toggleClass("large")
                    }
                };

                $(saveBtn).click(e) => {
                    let selected;
                    let radios = $("#theme");
                    for (i = 0; i < radios.length; i++) {
                        selected = radios[i].value;
                        break;
                    }
                }
                if (selected == 0) {
                    mainContent.removeClass("nature")
                    mainContent.addClass("fire")
                    header.removeClass("nature-image")
                    header.addClass("fire-image")
                } else if (selected == 1) {
                    mainContent.addClass("nature");
                    header.addClass("nature-image");
                } else if (selected == 2) {
                    mainContent.removeClass("fire");
                    mainContent.removeClass("nature");
                    header.removeClass("fire-image");
                    header.removeClass("nature-image");
                }
            )
        };
