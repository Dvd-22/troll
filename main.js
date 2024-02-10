console.log("Made by David A.");

let canvas = document.getElementById("canvas");
let yes = document.getElementById("yes");

const sus = () => {
	yes.innerHTML = "<img src='./susrock.jpg' width='90%'>";
};

function gay() {
	canvas.innerHTML = `
    <div
					id="reload"
					onclick="reload()"
				>
					<ion-icon name="reload"></ion-icon>
				</div>
    <iframe width="560" 
    height="315" 
    src="https://www.youtube.com/embed/4n4rBrs5-LY?si=krdOH2iF2xemKSn8&amp;start=11;autoplay=1" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen> </iframe>`;
}

function reload() {
	location.reload();
}
