const video = document.querySelector("video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});
document.querySelector("#play").addEventListener("click", function() {
	video.play()
	document.querySelector("#volume").innerHTML = document.querySelector("#slider").nextSibling.nodeValue
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause()
});
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = document.querySelector(".video").playbackRate - (document.querySelector(".video").playbackRate * .10)
	console.log(document.querySelector(".video").playbackRate)
});
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = document.querySelector(".video").playbackRate * 1.111111111
	console.log(document.querySelector(".video").playbackRate)
});
document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime = video.currentTime + 10
	if(video.currentTime + 10 >= video.duration){
		video.currentTime = 0;
	}
	console.log(video.currentTime)

});

document.querySelector("#mute").addEventListener("click", function() {
	if(!video.muted){
		video.muted = true;
		document.querySelector("#mute").innerHTML ="Unmute"
	}
	else{
		video.muted = false;
		document.querySelector("#mute").innerHTML ="Mute"
	}
});
document.querySelector("#slider").addEventListener("change", function(e) {
	video.volume = (e.target.value) / 100;

	document.querySelector("#slider").nextSibling.nodeValue = `${e.target.value}%`
	
	document.querySelector("#volume").innerHTML = `${e.target.value}%`
});
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool')
});
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool')
});