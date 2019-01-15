var keyData = {
	a:{
		color: "#D32F2F",
		sound: new Howl({
					src: ['sounds/bubbles.mp3']
				})
	},
	b:{
		color: "#FF4081",
		sound: new Howl({
					src: ['sounds/clay.mp3']
				})
	},
	c:{
		color: "#6A1B9A",
		sound: new Howl({
					src: ['sounds/confetti.mp3']
				})
	},
	d:{
		color: "#651FFF",
		sound: new Howl({
					src: ['sounds/dotted-spiral.mp3']
				})
	},
	e:{
		color: "#304FFE",
		sound: new Howl({
					src: ['sounds/flash-1.mp3']
				})
	},
	f:{
		color: "#42A5F5",
		sound: new Howl({
					src: ['sounds/flash-2.mp3']
				})
	},
	g:{
		color: "#01579B",
		sound: new Howl({
					src: ['sounds/flash-3.mp3']
				})
	},
	h:{
		color: "#4DD0E1",
		sound: new Howl({
					src: ['sounds/glimmer.mp3']
				})
	},
	i:{
		color: "#26A69A",
		sound: new Howl({
					src: ['sounds/moon.mp3']
				})
	},
	j:{
		color: "#00E676",
		sound: new Howl({
					src: ['sounds/pinwheel.mp3']
				})
	},
	k:{
		color: "#9CCC65",
		sound: new Howl({
					src: ['sounds/piston-1.mp3']
				})
	},
	l:{
		color: "#76FF03",
		sound: new Howl({
					src: ['sounds/piston-2.mp3']
				})
	},
	m:{
		color: "#DCE775",
		sound: new Howl({
					src: ['sounds/piston-3.mp3']
				})
	},
	n:{
		color: "#EEFF41",
		sound: new Howl({
					src: ['sounds/prism-1.mp3']
				})
	},
	o:{
		color: "#FBC02D",
		sound: new Howl({
					src: ['sounds/prism-2.mp3']
				})
	},
	p:{
		color: "#FF6F00",
		sound: new Howl({
					src: ['sounds/prism-3.mp3']
				})
	},
	q:{
		color: "#FFA726",
		sound: new Howl({
					src: ['sounds/splits.mp3']
				})
	},
	r:{
		color: "#FF6E40",
		sound: new Howl({
					src: ['sounds/squiggle.mp3']
				})
	},
	s:{
		color: "#6D4C41",
		sound: new Howl({
					src: ['sounds/strike.mp3']
				})
	},
	t:{
		color: "#BDBDBD",
		sound: new Howl({
					src: ['sounds/suspension.mp3']
				})
	},
	u:{
		color: "#424242",
		sound: new Howl({
					src: ['sounds/timer.mp3']
				})
	},
	v:{
		color: "#78909C",
		sound: new Howl({
					src: ['sounds/ufo.mp3']
				})
	},
	w:{
		color: "#EC407A",
		sound: new Howl({
					src: ['sounds/veil.mp3']
				})
	},
	x:{
		color: "#CE93D8",
		sound: new Howl({
					src: ['sounds/wipe.mp3']
				})
	},
	y:{
		color: "#AA00FF",
		sound: new Howl({
					src: ['sounds/zig-zag.mp3']
				})
	},
	z:{
		color: "#FFCDD2",
		sound: new Howl({
					src: ['sounds/corona.mp3']
				})
	},
	space:{
		color: "#1DE9B6",
		sound: new Howl({
					src: ['sounds/bubbles.mp3']
				})
	}
}

//create circles
var point;
var circle;
var radius = 300;
var circleArray = [];

function onKeyDown(event){
	if(keyData[event.key]){
		point = new Point(view.size.width, view.size.height) * Point.random();
		circle = new Path.Circle(point, radius);
		circle.fillColor = keyData[event.key].color;
		circleArray.push(circle);
		console.log(circleArray.length);
	}
}

function onFrame(){
	for(var i = 0; i < circleArray.length; i++){
		circleArray[i].fillColor.hue += 1;
		circleArray[i].scale(0.9);
	}
}