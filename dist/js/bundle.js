(function () {
'use strict';

//Temporary. Just a static animation to show that the viewport works.

var c = document.getElementById("mapwindow");
var ctx = c.getContext("2d");
var counter = 0;
var space = new Image();
space.src = '/space.png';
var clown = new Image();
clown.src = '/clown.gif';

function animate(){
	c.height = c.clientHeight;
	c.width = c.height;
	ctx.save();
	ctx.drawImage(space, 0, 0, c.width, c.height);
	ctx.translate((c.width / 2 + ++counter) % (c.width + 200) - 100, c.height / 2);
	ctx.rotate(counter / 100);
	ctx.drawImage(clown, -50, -50, 100, 100);
	ctx.restore();

	window.requestAnimationFrame(animate);
}

window.onload = function(){
	animate();
};

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi8uLi9hcHAvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL1RlbXBvcmFyeS4gSnVzdCBhIHN0YXRpYyBhbmltYXRpb24gdG8gc2hvdyB0aGF0IHRoZSB2aWV3cG9ydCB3b3Jrcy5cclxuXHJcbnZhciBjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXB3aW5kb3dcIik7XHJcbnZhciBjdHggPSBjLmdldENvbnRleHQoXCIyZFwiKTtcclxudmFyIGNvdW50ZXIgPSAwO1xyXG52YXIgc3BhY2UgPSBuZXcgSW1hZ2UoKTtcclxuc3BhY2Uuc3JjID0gJy9zcGFjZS5wbmcnO1xyXG52YXIgY2xvd24gPSBuZXcgSW1hZ2UoKTtcclxuY2xvd24uc3JjID0gJy9jbG93bi5naWYnO1xyXG5cclxuZnVuY3Rpb24gYW5pbWF0ZSgpe1xyXG5cdGMuaGVpZ2h0ID0gYy5jbGllbnRIZWlnaHQ7XHJcblx0Yy53aWR0aCA9IGMuaGVpZ2h0O1xyXG5cdGN0eC5zYXZlKCk7XHJcblx0Y3R4LmRyYXdJbWFnZShzcGFjZSwgMCwgMCwgYy53aWR0aCwgYy5oZWlnaHQpO1xyXG5cdGN0eC50cmFuc2xhdGUoKGMud2lkdGggLyAyICsgKytjb3VudGVyKSAlIChjLndpZHRoICsgMjAwKSAtIDEwMCwgYy5oZWlnaHQgLyAyKTtcclxuXHRjdHgucm90YXRlKGNvdW50ZXIgLyAxMDApO1xyXG5cdGN0eC5kcmF3SW1hZ2UoY2xvd24sIC01MCwgLTUwLCAxMDAsIDEwMCk7XHJcblx0Y3R4LnJlc3RvcmUoKTtcclxuXHJcblx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxufVxyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCl7XHJcblx0YW5pbWF0ZSgpO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7QUFFQSxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzdDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0IsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0FBQ2hCLElBQUksS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7QUFDeEIsS0FBSyxDQUFDLEdBQUcsR0FBRyxZQUFZLENBQUM7QUFDekIsSUFBSSxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztBQUN4QixLQUFLLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQzs7QUFFekIsU0FBUyxPQUFPLEVBQUU7Q0FDakIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDO0NBQzFCLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztDQUNuQixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7Q0FDWCxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0NBQzlDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxFQUFFLE9BQU8sS0FBSyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0NBQy9FLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0NBQzFCLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztDQUN6QyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7O0NBRWQsTUFBTSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0NBQ3RDOztBQUVELE1BQU0sQ0FBQyxNQUFNLEdBQUcsVUFBVTtDQUN6QixPQUFPLEVBQUUsQ0FBQztDQUNWOzs7OyJ9
