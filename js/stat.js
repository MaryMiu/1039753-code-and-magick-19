'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 20;
var CLOUD_SHADOW_GAP = 10;
var GISTOGRAMMA_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var TEXT_HEIGHT = 25;
var barHeight = GISTOGRAMMA_HEIGHT - TEXT_HEIGHT * 2;
var GISTOGRAMMA_COLOR = '#000000';
var GISTOGRAMMA_FONT = '16px PT Mono';
var GISTOGRAMMA_BASELINE = 'hanging';
var timeTopGap = CLOUD_Y + BAR_GAP * 1.7;
var nameTopGap = timeTopGap + GISTOGRAMMA_HEIGHT;

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

var renderText = function (ctx, color, font, baseline, text) {
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.textBaseline = baseline;
  ctx.fillText(text, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP);
};

window.renderStatistics = function (ctx, names, times) {
  var maxTime = getMaxElement(times);

  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_SHADOW_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  renderText(ctx, GISTOGRAMMA_COLOR, GISTOGRAMMA_FONT, GISTOGRAMMA_BASELINE, 'Ура вы победили!');
  renderText(ctx, GISTOGRAMMA_COLOR, GISTOGRAMMA_FONT, GISTOGRAMMA_BASELINE, 'Список результатов:');

  for (var i = 0; i < names.length; i++) {
    var gistLeftGap = CLOUD_X + CLOUD_GAP + (BAR_WIDTH + BAR_GAP) * i;
    var barNewHeight = (barHeight * times[i]) / maxTime;
    ctx.fillText(Math.floor(times[i]), gistLeftGap, timeTopGap);
    ctx.fillStyle = 'hsl(255, ' + (100 * Math.random()) + '%, 50%)';
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(gistLeftGap, GISTOGRAMMA_HEIGHT - barNewHeight + timeTopGap - TEXT_HEIGHT, BAR_WIDTH, barNewHeight);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], gistLeftGap, nameTopGap);
  }
};
