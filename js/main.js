var cats = [
    "https://media.giphy.com/media/lBGAoXsXxb0ty/giphy.gif",
    "https://media.giphy.com/media/x33p3SDzDM1ji/giphy.gif",
    "https://media.giphy.com/media/SjqU4gjf6FYpa/giphy.gif",
    "https://media.giphy.com/media/RdzzVrtvfqnM4/giphy.gif",
    "https://media.giphy.com/media/R06WhFXLF1Fmw/giphy.gif",
    "https://media.giphy.com/media/10k8HMhtzzk73W/giphy.gif",
    "https://media.giphy.com/media/RihiNYXpeUEJL5Yxzp/giphy.gif",
    "https://media.giphy.com/media/3o6ZtnNhwI9fdJjpw4/giphy.gif",
    "https://media.giphy.com/media/J5AXZK4PpCLkwHTclt/giphy.gif",
    "https://media.giphy.com/media/iJPXlapIoPp11cNNNY/giphy.gif",
    "https://media.giphy.com/media/2jv2IM7lfnMEBMRZ9L/giphy.gif",
    "https://media.giphy.com/media/7v23nKQW50xyM/giphy.gif",
    "https://media.giphy.com/media/KcxTf64hiTXjO/giphy.gif",
    "https://media.giphy.com/media/3oriNXfR7v70JWq0dG/giphy.gif",
    "https://media.giphy.com/media/11pnGyUya4WJYk/giphy.gif",
    "https://media.giphy.com/media/nxIb6orQfYw0M/giphy.gif",
    "https://media.giphy.com/media/4Jy4QfhAgMR1K/giphy.gif",
    "https://media.giphy.com/media/3oz8xs53EBnunzqxck/giphy.gif",
    "https://media.giphy.com/media/KzKHlzSlfHZV44EdTy/giphy.gif",
    "https://media.giphy.com/media/MuwJJ78y1i58Y/giphy.gif",
    "https://media.giphy.com/media/l29c52uHWfHIWPo2ap/giphy.gif",
    "https://media.giphy.com/media/5XKm5cq4Kik9O/giphy.gif",
    "https://media.giphy.com/media/xUPOqap37zDEgO6zx6/giphy.gif",
    "https://media.giphy.com/media/LSBKPnfyRBHG/giphy.gif",
    "https://media.giphy.com/media/26FLa1GU13qQkfnCE/giphy.gif",
    "https://media.giphy.com/media/xT1R9DfWq0N0WUiluU/giphy.gif",
    "https://media.giphy.com/media/j1QQj6To9Pbxu/giphy.gif",
    "https://media.giphy.com/media/gd0JxLGlgOA3jaVrk2/giphy.gif",
    "https://media.giphy.com/media/ECtuHAGUrcITK/giphy.gif",
    "https://media.giphy.com/media/10ESTh0pajQapW/giphy.gif",
    "https://media.giphy.com/media/26tPpg2GwvikXrR7y/giphy.gif",
    "https://media.giphy.com/media/cOo3aeD9Jzxh6/giphy.gif",
    "https://media.giphy.com/media/htdXvEJUypZjCmqjjK/giphy.gif",
    "https://media.giphy.com/media/hHxHEEfFS6E0xxuXJE/giphy.gif",
    "https://media.giphy.com/media/OJp5pne69OeY/giphy.gif",
    "https://media.giphy.com/media/g2059cCejZLtS/giphy.gif",
    "https://media.giphy.com/media/g0slW347cq8gruOczJ/giphy.gif",
    "https://media.giphy.com/media/xUPOqrEOLf9WSOdLyg/giphy.gif",
    "https://media.giphy.com/media/Yl4ZoTRG0ddnGW4ANA/giphy.gif",
    "https://media.giphy.com/media/xT0xePcPgTt6TJeVj2/giphy.gif",
    "https://media.giphy.com/media/5gYoCKh1XWggLtenpM/giphy.gif",
    "https://media.giphy.com/media/3ohA2C7u7VqZP5AWcw/giphy.gif",
    "https://media.giphy.com/media/p4BDrqz593HQA/giphy.gif",
    "https://media.giphy.com/media/elPyE26gwwJgUkbuoT/giphy.gif",
    "https://media.giphy.com/media/l0HlAON0eyrzbPzsQ/giphy.gif",
]

function getRandomCat() {
    const random = Math.floor(Math.random() * cats.length)
    catGif.src = cats[random];
    console.log("new cat! ㅇㅅㅇ", cats[random]);
}

// function getRandomCatFromGIPHY() {
//     const apiKey = 'AP7wjguv7wmFsW3L0jsPaY0S2DGPVoLn';
//     const tag = 'christmas_cat';
//     const rating = 'pg';
//     const random = Math.floor(Math.random() * 100)

//     var xhr = $.get(`http://api.giphy.com/v1/gifs/search?q=${tag}&api_key=${apiKey}&rating=${rating}`);
//     xhr.done(
//         function(response) {
//             console.log("new cat! ㅇㅅㅇ", response);
//             var newUrl = response.data[0].images.downsized.url;
//             if (newUrl == catGif.src) {
//                 getRandomCat();
//             }
//             catGif.src = newUrl;
//         }
//     );
// }