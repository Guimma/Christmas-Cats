function getRandomCat() {
    const apiKey = 'AP7wjguv7wmFsW3L0jsPaY0S2DGPVoLn';
    const tag = 'christmas_cat';
    const rating = 'pg';

    var xhr = $.get(`http://api.giphy.com/v1/gifs/random?tag=${tag}&api_key=${apiKey}&rating=${rating}`);
    xhr.done(
        function(response) {
            console.log("new cat! ㅇㅅㅇ", response);
            var newUrl = response.data.images.downsized.url;
            if (newUrl == catGif.src) {
                getRandomCat();
            }
            catGif.src = response.data.images.downsized.url;
        }
    );
}