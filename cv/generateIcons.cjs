const fs = require('fs');
const path = require('path');

const icons = ['phone', 'mail', 'github', 'map-pin', 'terminal', 'code', 'briefcase', 'graduation-cap', 'wrench', 'globe', 'monitor-dot', 'download'];

let output = `import React from 'react';
import { Svg, Path, Circle, Polyline, Line, Rect, Polygon } from '@react-pdf/renderer';

`;

for (const icon of icons) {
  const filePath = path.join(__dirname, 'node_modules', 'lucide-static', 'icons', `${icon}.svg`);
  if (!fs.existsSync(filePath)) {
    console.error(`Missing icon: ${icon}`);
    continue;
  }

  const svg = fs.readFileSync(filePath, 'utf8');
  const innerMatch = svg.match(/<svg[^>]*>(.*?)<\/svg>/s);
  if (!innerMatch) continue;

  let inner = innerMatch[1]
    .replace(/<line /g, '<Line ')
    .replace(/<polyline /g, '<Polyline ')
    .replace(/<rect /g, '<Rect ')
    .replace(/<circle /g, '<Circle ')
    .replace(/<polygon /g, '<Polygon ')
    .replace(/<path /g, '<Path ')
    .replace(/stroke-width/g, 'strokeWidth')
    .replace(/stroke-linecap/g, 'strokeLinecap')
    .replace(/stroke-linejoin/g, 'strokeLinejoin');

  const componentName = icon.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('') + 'Icon';

  output += `export const ${componentName} = ({ color = '#000', size = 16, style = {} }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    ${inner.trim()}
  </Svg>
);\n\n`;
}

fs.writeFileSync(path.join(__dirname, 'src', 'app', 'IconsPdf.tsx'), output);
console.log('Icons generated successfully.');
