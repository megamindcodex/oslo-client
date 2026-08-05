<script setup>
import { computed } from 'vue'

const props = defineProps({
  text: { type: String, default: '     FAKE SITE/DEMO ONLY' },
  opacity: { type: Number, default: 0.5 },
  fontSize: { type: Number, default: 22 },
})

// Tiled diagonal text drawn as an SVG background pattern so it repeats
// seamlessly across the whole viewport without any layout-affecting DOM.
// The tile canvas is sized from the text's own dimensions so the rotated
// label always fits inside the SVG viewport — a fixed canvas would clip
// longer/larger text at the edges (only part of the label would render).
const backgroundImage = computed(() => {
  const label = props.text.replace(/&/g, '&amp;').replace(/</g, '&lt;')
  const angle = -30

  const textWidth = props.text.length * props.fontSize * 0.62
  const textHeight = props.fontSize * 1.3
  const rad = (Math.abs(angle) * Math.PI) / 180
  const rotatedWidth = textWidth * Math.cos(rad) + textHeight * Math.sin(rad)
  const rotatedHeight = textWidth * Math.sin(rad) + textHeight * Math.cos(rad)

  const gap = props.fontSize * 2.5
  const tileWidth = Math.ceil(rotatedWidth + gap)
  const tileHeight = Math.ceil(rotatedHeight + gap)
  const cx = tileWidth / 2
  const cy = tileHeight / 2

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${tileWidth}" height="${tileHeight}">
      <text x="${cx}" y="${cy}" transform="rotate(${angle} ${cx} ${cy})"
        text-anchor="middle" dominant-baseline="central"
        font-family="'Plus Jakarta Sans', ui-sans-serif, sans-serif"
        font-size="${props.fontSize}" font-weight="900" letter-spacing="3" text-rendering="geometricPrecision"
        fill="#A93226" fill-opacity="1">${label}</text>
    </svg>
  `
    .trim()
    .replace(/\s+/g, ' ')

  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`
})
</script>

<template>
  <div
    aria-hidden="true"
    class="pointer-events-none fixed inset-0 z-[9999] select-none"
    :style="{
      backgroundImage,
      backgroundRepeat: 'repeat',
      opacity,
    }"
  />
</template>
