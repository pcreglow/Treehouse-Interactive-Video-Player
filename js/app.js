var videoCaptions = document.getElementById('treehouseVideo');
var captions = [
    ['caption1', 0.240, 4.130],
    ['caption2', 4.130, 7.535]
];

videoCaptions.addEventListener('timeupdate', function() {

    var captionTime = videoCaptions.currentTime;

    captions.forEach(function(caption) {
        var captionID = caption[0];
        var captionText = document.getElementById(captionID);

        if (captionTime >= caption[1] && captionTime < caption[2]) {
            captionText.className = "caption-highlight";
        } else {
            captionText.className = '';
        }
    });
});
