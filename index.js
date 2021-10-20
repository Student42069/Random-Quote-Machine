import { quotes } from "./text.js";

// JQuery

$(document).ready(function () {
  $("#new-quote").click(function () {
    const quote =
      quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)];
    // console.log(quote.quote, quote.author);
    $("#text").text(quote.quote.toString());
    $("#author").text(quote.author.toString());
    const color = () => {
      return Math.floor(Math.random() * (1000000 - 100000) + 100000).toString();
    };
    $("#quote-box").css("background-color", color());
    $("body").css("background-color", color());
    // console.log($("body").css("background-color"));
  });
});
