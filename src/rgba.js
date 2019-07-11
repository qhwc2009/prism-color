import * as d3 from 'd3-color';

const cache = {};

function rgba(color, opacity) {
  const cacheKey = `${color}__${opacity}`;
  let cacheValue = cache[cacheKey];

  if (!cacheValue) {
    const d3Color = d3.color(color);
    d3Color.opacity = opacity;
    cacheValue = `${d3Color}`;
    cache[cacheKey] = cacheValue;
  }

  return cacheValue;
}

export default rgba;
