import React from 'react';
import { Svg, Path, Circle, Polyline, Line, Rect, Polygon } from '@react-pdf/renderer';

export const PhoneIcon = ({ color = '#000', size = 16, style = {} }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <Path fill="none" d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
  </Svg>
);

export const MailIcon = ({ color = '#000', size = 16, style = {} }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <Path fill="none" d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
  <Rect fill="none" x="2" y="4" width="20" height="16" rx="2" />
  </Svg>
);

export const MapPinIcon = ({ color = '#000', size = 16, style = {} }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <Path fill="none" d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
  <Circle fill="none" cx="12" cy="10" r="3" />
  </Svg>
);

export const TerminalIcon = ({ color = '#000', size = 16, style = {} }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <Path fill="none" d="M12 19h8" />
  <Path fill="none" d="m4 17 6-6-6-6" />
  </Svg>
);

export const CodeIcon = ({ color = '#000', size = 16, style = {} }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <Path fill="none" d="m16 18 6-6-6-6" />
  <Path fill="none" d="m8 6-6 6 6 6" />
  </Svg>
);

export const BriefcaseIcon = ({ color = '#000', size = 16, style = {} }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <Path fill="none" d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  <Rect fill="none" width="20" height="14" x="2" y="6" rx="2" />
  </Svg>
);

export const GraduationCapIcon = ({ color = '#000', size = 16, style = {} }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <Path fill="none" d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
  <Path fill="none" d="M22 10v6" />
  <Path fill="none" d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
  </Svg>
);

export const WrenchIcon = ({ color = '#000', size = 16, style = {} }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <Path fill="none" d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" />
  </Svg>
);

export const GlobeIcon = ({ color = '#000', size = 16, style = {} }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <Circle fill="none" cx="12" cy="12" r="10" />
  <Path fill="none" d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
  <Path fill="none" d="M2 12h20" />
  </Svg>
);

export const MonitorDotIcon = ({ color = '#000', size = 16, style = {} }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <Path fill="none" d="M12 17v4" />
  <Path fill="none" d="M22 12.307V15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8.693" />
  <Path fill="none" d="M8 21h8" />
  <Circle fill="none" cx="19" cy="6" r="3" />
  </Svg>
);

export const DownloadIcon = ({ color = '#000', size = 16, style = {} }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <Path fill="none" d="M12 15V3" />
  <Path fill="none" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <Path fill="none" d="m7 10 5 5 5-5" />
  </Svg>
);

export const GithubIcon = ({ color = '#000', size = 16, style = {} }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <Path fill="none" d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <Path fill="none" d="M9 18c-4.51 2-5-2-7-2" />
  </Svg>
);
