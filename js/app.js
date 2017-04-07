var videoCaptions = document.getElementById('treehouseVideo');
var captions = [
    ['caption1', 0.240, 4.130],
    ['caption2', 4.130, 7.535],
    ['caption3', 7.535, 11.270],
    ['caption4', 11.270, 13.960],
    ['caption5', 13.960, 17.940],
    ['caption6', 17.940, 22.370],
    ['caption7', 22.370, 26.880],
    ['caption8', 26.880, 30.920],
    ['caption9', 32.100, 34.730],
    ['caption10', 34.730, 39.430],
    ['caption11', 39.430, 41.190],
    ['caption12', 42.350, 46.300],
    ['caption13', 46.300, 49.270],
    ['caption14', 49.270, 53.760],
    ['caption15', 53.760, 57.780],
    ['caption16', 57.780, 60.150]
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
