'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var BAR_GAP = 50;
var GAP = 10;
var TEXT_HEIGHT = 60;
var BAR_WIDTH = 40;
var BAR_HEIGHT_MAX = 150;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);

};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 55);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var barHeight = BAR_HEIGHT_MAX * times[i] / maxTime;
    var cloudX = CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i;
    var cloudY = CLOUD_HEIGHT - barHeight - (CLOUD_Y + GAP * 2);

    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), cloudX, cloudY - GAP);
    ctx.fillText(players [i], CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - CLOUD_Y);

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + i * 25 + '%, 30%)';
    }




    ctx.fillRect(cloudX, cloudY, BAR_WIDTH, barHeight);


  }


};

