import { useState, useMemo, useRef, useCallback } from "react";

// ============================================================================
// INLINE SVG ICONS (100% Compatible with React 18 Preview & React 19 Vite)
// ============================================================================

const SvgIcon = ({ children, className = "w-4 h-4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

const Camera = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
    <circle cx="12" cy="13" r="3" />
  </SvgIcon>
);
const HardHat = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" />
    <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
    <path d="M4 15v-3a6 6 0 0 1 6-6h0" />
    <path d="M14 6h0a6 6 0 0 1 6 6v3" />
  </SvgIcon>
);
const ClipboardList = ({ className }) => (
  <SvgIcon className={className}>
    <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <path d="M12 11h4" />
    <path d="M12 16h4" />
    <path d="M8 11h.01" />
    <path d="M8 16h.01" />
  </SvgIcon>
);
const IndianRupee = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M6 3h12" />
    <path d="M6 8h12" />
    <path d="m6 13 8.5 8" />
    <path d="M6 13h3" />
    <path d="M9 13c6.667 0 6.667-10 0-10" />
  </SvgIcon>
);
const Home = ({ className }) => (
  <SvgIcon className={className}>
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </SvgIcon>
);
const Settings = ({ className }) => (
  <SvgIcon className={className}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </SvgIcon>
);
const LogOut = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" x2="9" y1="12" y2="12" />
  </SvgIcon>
);
const AlertCircle = ({ className }) => (
  <SvgIcon className={className}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" x2="12" y1="8" y2="12" />
    <line x1="12" x2="12.01" y1="16" y2="16" />
  </SvgIcon>
);
const RefreshCw = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
    <path d="M8 16H3v5" />
  </SvgIcon>
);
const Eye = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </SvgIcon>
);
const X = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </SvgIcon>
);
const Mic = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" x2="12" y1="19" y2="22" />
  </SvgIcon>
);
const ChevronRight = ({ className }) => (
  <SvgIcon className={className}>
    <path d="m9 18 6-6-6-6" />
  </SvgIcon>
);
const ArrowLeft = ({ className }) => (
  <SvgIcon className={className}>
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </SvgIcon>
);
const Search = ({ className }) => (
  <SvgIcon className={className}>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </SvgIcon>
);
const Share2 = ({ className }) => (
  <SvgIcon className={className}>
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
    <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
  </SvgIcon>
);
const Copy = ({ className }) => (
  <SvgIcon className={className}>
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </SvgIcon>
);
const Users = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </SvgIcon>
);
const Truck = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
    <path d="M15 18H9" />
    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
    <circle cx="17" cy="18" r="2" />
    <circle cx="7" cy="18" r="2" />
  </SvgIcon>
);
const Building2 = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
    <path d="M10 6h4" />
    <path d="M10 10h4" />
    <path d="M10 14h4" />
    <path d="M10 18h4" />
  </SvgIcon>
);
const Wifi = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M12 20h.01" />
    <path d="M2 8.82a15 15 0 0 1 20 0" />
    <path d="M5 12.859a10 10 0 0 1 14 0" />
    <path d="M8.5 16.429a5 5 0 0 1 7 0" />
  </SvgIcon>
);
const WifiOff = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M12 20h.01" />
    <path d="M8.5 16.429a5 5 0 0 1 7 0" />
    <path d="M5 12.859a10 10 0 0 1 5.17-2.69" />
    <path d="M19 12.859a10 10 0 0 0-2.007-1.523" />
    <path d="M2 8.82a15 15 0 0 1 4.177-2.643" />
    <path d="M22 8.82a15 15 0 0 0-11.288-3.764" />
    <path d="m2 2 20 20" />
  </SvgIcon>
);
const Key = ({ className }) => (
  <SvgIcon className={className}>
    <circle cx="7.5" cy="15.5" r="5.5" />
    <path d="m21 2-9.6 9.6" />
    <path d="m15.5 7.5 3 3L22 7l-3-3" />
  </SvgIcon>
);
const Sparkles = ({ className }) => (
  <SvgIcon className={className}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
  </SvgIcon>
);
const ArrowUp = ({ className }) => (
  <SvgIcon className={className}>
    <path d="m5 12 7-7 7 7" />
    <path d="M12 19V5" />
  </SvgIcon>
);
const ArrowDown = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M12 5v14" />
    <path d="m19 12-7 7-7-7" />
  </SvgIcon>
);
const ZoomIn = ({ className }) => (
  <SvgIcon className={className}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" x2="16.65" y1="21" y2="16.65" />
    <line x1="11" x2="11" y1="8" y2="14" />
    <line x1="8" x2="14" y1="11" y2="11" />
  </SvgIcon>
);
const ZoomOut = ({ className }) => (
  <SvgIcon className={className}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" x2="16.65" y1="21" y2="16.65" />
    <line x1="8" x2="14" y1="11" y2="11" />
  </SvgIcon>
);

// ============================================================================
// SYNTHETIC SVG DOCUMENT & SITE PHOTO GENERATORS (Zero External Image URLs)
// ============================================================================

const makeSampleDocSvg = (title, subtitle, lines = [], bg = "#f8fafc") => {
  const lineMarkup = lines
    .map(
      (line, idx) =>
        `<text x="24" y="${114 + idx * 24}" font-family="monospace" font-size="13" fill="#0f172a">${line}</text>`,
    )
    .join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="420" height="280" viewBox="0 0 420 280">
    <rect width="420" height="280" fill="${bg}" rx="10"/>
    <rect width="420" height="72" fill="#0f172a" rx="10"/>
    <text x="24" y="34" font-family="sans-serif" font-weight="bold" font-size="16" fill="#ffffff">${title}</text>
    <text x="24" y="56" font-family="sans-serif" font-size="12" fill="#bfdbfe">${subtitle}</text>
    <line x1="20" y1="86" x2="400" y2="86" stroke="#cbd5e1" stroke-dasharray="4 4"/>
    ${lineMarkup}
    <rect x="250" y="215" width="146" height="42" fill="none" stroke="#dc2626" stroke-width="2" rx="4"/>
    <text x="264" y="241" font-family="sans-serif" font-weight="bold" font-size="13" fill="#dc2626">SITE GATE STAMP</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const makeSitePhotoSvg = (label, detail, color = "#0f172a") => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="480" height="300" viewBox="0 0 480 300">
    <defs>
      <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#38bdf8"/>
        <stop offset="100%" stop-color="#e0f2fe"/>
      </linearGradient>
    </defs>
    <rect width="480" height="190" fill="url(#sky)"/>
    <rect y="190" width="480" height="110" fill="#78716c"/>
    <rect x="60" y="90" width="360" height="110" fill="#cbd5e1" stroke="#475569" stroke-width="3"/>
    <line x1="60" y1="125" x2="420" y2="125" stroke="#475569" stroke-width="2"/>
    <line x1="150" y1="90" x2="150" y2="200" stroke="#475569" stroke-width="2"/>
    <line x1="240" y1="90" x2="240" y2="200" stroke="#475569" stroke-width="2"/>
    <line x1="330" y1="90" x2="330" y2="200" stroke="#475569" stroke-width="2"/>
    <rect x="0" y="228" width="480" height="72" fill="${color}" fill-opacity="0.9"/>
    <text x="20" y="256" font-family="sans-serif" font-weight="bold" font-size="16" fill="#ffffff">${label}</text>
    <text x="20" y="280" font-family="sans-serif" font-size="12" fill="#fde68a">${detail}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

// ============================================================================
// INITIAL MULTI-SITE DATA (Shared Live Between Supervisor & Contractor)
// ============================================================================

const INITIAL_SITES = [
  {
    id: "baner",
    name: "BANER COMMERCIAL COMPLEX",
    supervisor: "Santosh Shinde",
  },
  {
    id: "wakad",
    name: "WAKAD HIGHSTREET TOWER B",
    supervisor: "Mahendra Patil",
  },
  {
    id: "hinjawadi",
    name: "HINJAWADI WAREHOUSE PHASE 2",
    supervisor: "Vikas Ghorpade",
  },
  {
    id: "tathawade",
    name: "TATHAWADE RESIDENTIAL ENCLAVE",
    supervisor: "Sachin Kadam",
  },
];

const KNOWN_VENDORS = [
  {
    name: "Jagdamba Stone Crusher",
    marathi: "जगदंबा स्टोन क्रशर",
    category: "Aggregates & Crush Sand",
    phone: "+91 98220 44120",
  },
  {
    name: "Raj Mud Suppliers",
    marathi: "राज मड सप्लायर्स",
    category: "River Sand & Rubble",
    phone: "+91 98501 77219",
  },
  {
    name: "Ultratech Concrete Ltd.",
    marathi: "अल्ट्राटेक सिमेंट लिमिटेड",
    category: "Ready-Mix Concrete (RMC)",
    phone: "+91 97654 11002",
  },
  {
    name: "Tata Tiscon Dealers",
    marathi: "टाटा टिस्कॉन डीलर्स",
    category: "TMT Steel Bars",
    phone: "+91 98231 55410",
  },
  {
    name: "BuildPro Aggregates Pvt Ltd",
    marathi: "बिल्डप्रो अ‍ॅग्रीगेट्स",
    category: "AAC Blocks & Sand",
    phone: "+91 90110 88912",
  },
];

const INITIAL_CHALLANS = [
  {
    id: "ch-101",
    siteId: "baner",
    vendorName: "Jagdamba Stone Crusher",
    vendorMarathi: "जगदंबा स्टोन क्रशर",
    particulars:
      "20mm Aggregate (Khadi) - 3.5 Brass\n10mm Aggregate (Khadi) - 1.5 Brass\nCrushed Stone Dust - 2.0 Brass",
    vehicleNo: "MH 12 RN 8821",
    challanNo: "1084",
    challanDate: "18 Oct 2026",
    time: "04:15 PM",
    syncStatus: "UPLOADED",
    reviewStatus: "PENDING",
    imageUrl: makeSampleDocSvg(
      "JAGDAMBA STONE CRUSHER",
      "Challan #1084 • 18 Oct 2026",
      [
        "1. 20mm Khadi : 3.5 Brass",
        "2. 10mm Khadi : 1.5 Brass",
        "3. Stone Dust : 2.0 Brass",
        "Vehicle: MH 12 RN 8821",
      ],
    ),
  },
  {
    id: "ch-102",
    siteId: "baner",
    vendorName: "Raj Mud Suppliers",
    vendorMarathi: "राज मड सप्लायर्स",
    particulars:
      "River Sand Plaster Grade - 4 Brass\nScreened Rubble - 1 Brass",
    vehicleNo: "MH 12 EF 4920",
    challanNo: "0341",
    challanDate: "18 Oct 2026",
    time: "02:30 PM",
    syncStatus: "NOT_UPLOADED",
    reviewStatus: "PENDING",
    imageUrl: makeSampleDocSvg(
      "RAJ MUD SUPPLIERS",
      "Challan #0341 • 18 Oct 2026",
      [
        "1. River Sand (Plaster) : 4 Brass",
        "2. Screened Rubble : 1 Brass",
        "Vehicle: MH 12 EF 4920",
      ],
    ),
  },
  {
    id: "ch-103",
    siteId: "baner",
    vendorName: "Ultratech Concrete Ltd.",
    vendorMarathi: "अल्ट्राटेक सिमेंट लिमिटेड",
    particulars:
      "Ready Mix Concrete M25 grade (7.0 m3) with Admixture CICO Plast Super (3.5 kg).",
    vehicleNo: "MH 12 RN 4821",
    challanNo: "CH-88412",
    challanDate: "18 Oct 2026",
    time: "11:20 AM",
    syncStatus: "UPLOADED",
    reviewStatus: "PENDING",
    imageUrl: makeSampleDocSvg(
      "ULTRATECH CONCRETE LTD",
      "Challan #CH-88412 • 18 Oct 2026",
      [
        "1. M25 RMC Pumpable : 7.0 m3",
        "2. Admixture CICO : 3.5 kg",
        "Vehicle: MH 12 RN 4821",
      ],
    ),
  },
  {
    id: "ch-104",
    siteId: "baner",
    vendorName: "BuildPro Aggregates Pvt Ltd",
    vendorMarathi: "बिल्डप्रो अ‍ॅग्रीगेट्स",
    particulars: "AAC Blocks 600x200x150mm - 480 Nos",
    vehicleNo: "MH 14 JK 2219",
    challanNo: "BP-1092",
    challanDate: "18 Oct 2026",
    time: "10:15 AM",
    syncStatus: "UPLOADED",
    reviewStatus: "VERIFIED",
    imageUrl: makeSampleDocSvg(
      "BUILDPRO AGGREGATES",
      "Challan #BP-1092 • 18 Oct 2026",
      ["1. AAC Blocks (6 inch) : 480 Nos", "Vehicle: MH 14 JK 2219"],
    ),
  },
  {
    id: "ch-201",
    siteId: "wakad",
    vendorName: "Ultratech Concrete Ltd.",
    vendorMarathi: "अल्ट्राटेक सिमेंट लिमिटेड",
    particulars: "M30 Ready-Mix Concrete Transit #1 - 6.0 m3",
    vehicleNo: "MH 12 PQ 7741",
    challanNo: "UT-4410",
    challanDate: "18 Oct 2026",
    time: "03:10 PM",
    syncStatus: "UPLOADED",
    reviewStatus: "VERIFIED",
    imageUrl: makeSampleDocSvg(
      "ULTRATECH RMC",
      "Challan #UT-4410 • Wakad Tower B",
      ["1. M30 RMC : 6.0 m3", "Vehicle: MH 12 PQ 7741"],
    ),
  },
  {
    id: "ch-202",
    siteId: "wakad",
    vendorName: "Ultratech Concrete Ltd.",
    vendorMarathi: "अल्ट्राटेक सिमेंट लिमिटेड",
    particulars: "M30 Ready-Mix Concrete Transit #2 - 6.0 m3",
    vehicleNo: "MH 12 PQ 7742",
    challanNo: "UT-4411",
    challanDate: "18 Oct 2026",
    time: "04:05 PM",
    syncStatus: "UPLOADED",
    reviewStatus: "PENDING",
    imageUrl: makeSampleDocSvg(
      "ULTRATECH RMC",
      "Challan #UT-4411 • Wakad Tower B",
      ["1. M30 RMC : 6.0 m3", "Vehicle: MH 12 PQ 7742"],
    ),
  },
];

const INITIAL_LABOR_PACKAGES = [
  {
    id: "lp-1",
    siteId: "baner",
    workType: "Plinth Beam Pouring & Shuttering",
    rows: [
      { id: "r-1", trade: "Mason (Gawandi)", count: 6, isCompany: false },
      { id: "r-2", trade: "Carpenter (Sutar)", count: 4, isCompany: false },
      {
        id: "r-3",
        trade: "Company Labor (Internal)",
        count: 2,
        isCompany: true,
      },
    ],
  },
  {
    id: "lp-2",
    siteId: "baner",
    workType: "External Brickwork & Scaffolding",
    rows: [
      { id: "r-4", trade: "Mason (Gawandi)", count: 2, isCompany: false },
      { id: "r-5", trade: "Carpenter (Sutar)", count: 2, isCompany: false },
      {
        id: "r-6",
        trade: "Helper (Male / Female)",
        count: 3,
        isCompany: false,
      },
    ],
  },
  {
    id: "lp-3",
    siteId: "baner",
    workType: "Column Steel Reinforcement",
    rows: [
      { id: "r-7", trade: "Barbender (Fitter)", count: 5, isCompany: false },
      {
        id: "r-8",
        trade: "Company Labor (Internal)",
        count: 5,
        isCompany: true,
      },
    ],
  },
  {
    id: "lp-4",
    siteId: "wakad",
    workType: "7th Floor Slab Shuttering & Props",
    rows: [
      { id: "r-9", trade: "Carpenter (Sutar)", count: 16, isCompany: false },
      { id: "r-10", trade: "Barbender (Fitter)", count: 12, isCompany: false },
      {
        id: "r-11",
        trade: "Company Labor (Internal)",
        count: 4,
        isCompany: true,
      },
    ],
  },
  {
    id: "lp-5",
    siteId: "hinjawadi",
    workType: "Industrial Trimix Flooring Prep",
    rows: [
      { id: "r-12", trade: "Mason (Gawandi)", count: 11, isCompany: false },
      {
        id: "r-13",
        trade: "Helper (Male / Female)",
        count: 12,
        isCompany: false,
      },
    ],
  },
];

const INITIAL_WORK_LOGS = [
  {
    id: "wl-1",
    siteId: "baner",
    description:
      "Plinth beam casting Grid A to F (Zone 1) completed by 04:30 PM. Total 18 m3 poured. Shuttering removal scheduled for Tuesday morning.",
    time: "05:15 PM",
    date: "18 Oct 2026",
    syncStatus: "UPLOADED",
    photos: [
      makeSitePhotoSvg(
        "Plinth Beam Pouring - Zone 1",
        "Grid A to F • 18 m3 RMC Completed",
        "#0f172a",
      ),
      makeSitePhotoSvg(
        "Vibrator Compaction & Leveling",
        "Baner Commercial Complex • 04:10 PM",
        "#1e3a8a",
      ),
      makeSitePhotoSvg(
        "Cube Samples & Slump Test",
        "Slump measured 115 mm at pour",
        "#065f46",
      ),
    ],
  },
  {
    id: "wl-2",
    siteId: "baner",
    description:
      "2nd floor AAC blockwork in progress along East Wing corridor. Mortar mixing and plumb line alignment checked.",
    time: "02:15 PM",
    date: "18 Oct 2026",
    syncStatus: "UPLOADED",
    photos: [
      makeSitePhotoSvg(
        "2nd Floor AAC Blockwork",
        "East Wing Corridor • 150mm Blocks",
        "#1e293b",
      ),
      makeSitePhotoSvg(
        "Plumb & Bond Alignment Check",
        "Supervisor Santosh Shinde",
        "#0f766e",
      ),
    ],
  },
  {
    id: "wl-3",
    siteId: "wakad",
    description:
      "7th floor slab shuttering complete. Electrical conduit laying scheduled for tomorrow morning.",
    time: "04:45 PM",
    date: "18 Oct 2026",
    syncStatus: "UPLOADED",
    photos: [
      makeSitePhotoSvg(
        "7th Floor Slab Shuttering",
        "Wakad Highstreet Tower B",
        "#1e3a8a",
      ),
    ],
  },
];

const INITIAL_EXPENSES = [
  {
    id: "ex-1",
    siteId: "baner",
    amount: 425,
    paidTo: "Dhanlaxmi Hardware & Electricals",
    purpose: "Binding Wire - 5 kg",
    paidBy: "My Own Pocket",
    invoiceDate: "13/10/2026",
    uploadDateTime: "18/10/2026 - 11:04 AM",
    syncStatus: "UPLOADED",
    approvalStatus: "PENDING",
    photos: [
      makeSampleDocSvg("DHANLAXMI HARDWARE", "Cash Memo • 13/10/2026", [
        "Binding Wire (18 Gauge) - 5 kg",
        "Total Paid: Rs. 425/-",
      ]),
    ],
  },
  {
    id: "ex-2",
    siteId: "baner",
    amount: 800,
    paidTo: "HP Petrol Pump Baner",
    purpose: "Diesel for concrete vibrator engine",
    paidBy: "Site Advance",
    invoiceDate: "18/10/2026",
    uploadDateTime: "18/10/2026 - 08:30 AM",
    syncStatus: "UPLOADED",
    approvalStatus: "PENDING",
    photos: [
      makeSampleDocSvg("HP PETROL PUMP BANER", "Fuel Receipt • 18/10/2026", [
        "HSD Diesel : 8.5 Litres",
        "Total Paid: Rs. 800/-",
      ]),
    ],
  },
  {
    id: "ex-3",
    siteId: "baner",
    amount: 625,
    paidTo: "Local Tempo & Hamali",
    purpose: "Porter charges for cement bags shifting & curing pipe",
    paidBy: "Contractor",
    invoiceDate: "18/10/2026",
    uploadDateTime: "18/10/2026 - 01:13 PM",
    syncStatus: "UPLOADED",
    approvalStatus: "APPROVED",
    photos: [],
  },
  {
    id: "ex-4",
    siteId: "wakad",
    amount: 4200,
    paidTo: "Shree Sai Diesel & Oil",
    purpose: "DG Set Diesel & Shuttering Oil (20L)",
    paidBy: "Site Advance",
    invoiceDate: "18/10/2026",
    uploadDateTime: "18/10/2026 - 01:40 PM",
    syncStatus: "UPLOADED",
    approvalStatus: "PENDING",
    photos: [],
  },
  {
    id: "ex-5",
    siteId: "hinjawadi",
    amount: 2370,
    paidTo: "Omkar Hardware Hinjawadi",
    purpose: "GI Binding Wire, Cutting Wheels & Tape",
    paidBy: "My Own Pocket",
    invoiceDate: "18/10/2026",
    uploadDateTime: "18/10/2026 - 12:15 PM",
    syncStatus: "UPLOADED",
    approvalStatus: "PENDING",
    photos: [],
  },
];

// ============================================================================
// GEMINI VISION OCR & SMART VOICE PARSER
// ============================================================================

// Normalize any uploaded image (PNG/WebP/large phone photo) into a clean JPEG data URL
function normalizeImageToJpeg(dataUrl, maxDim = 1600) {
  return new Promise((resolve) => {
    if (!dataUrl || dataUrl.startsWith("data:image/svg+xml")) {
      resolve({ dataUrl, mimeType: "image/svg+xml" });
      return;
    }
    const img = new Image();
    img.onload = () => {
      try {
        let { width, height } = img;
        if (width > maxDim || height > maxDim) {
          const ratio = Math.min(maxDim / width, maxDim / height);
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);
        const jpegUrl = canvas.toDataURL("image/jpeg", 0.85);
        resolve({ dataUrl: jpegUrl, mimeType: "image/jpeg" });
      } catch {
        resolve({ dataUrl, mimeType: "image/jpeg" });
      }
    };
    img.onerror = () => resolve({ dataUrl, mimeType: "image/jpeg" });
    img.src = dataUrl;
  });
}

function safeParseJsonResponse(rawText) {
  const cleaned = String(rawText || "")
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .trim();
  try {
    return JSON.parse(cleaned);
  } catch {
    const start = cleaned.indexOf("{");
    const end = cleaned.lastIndexOf("}");
    if (start !== -1 && end !== -1 && end > start) {
      return JSON.parse(cleaned.slice(start, end + 1));
    }
    throw new Error("Model returned non-JSON text");
  }
}

async function runGeminiChallanOCR({
  apiKey,
  base64Data,
  mimeType,
  simulateOffline,
}) {
  if (simulateOffline) {
    await new Promise((r) => setTimeout(r, 450));
    throw new Error("Offline Mode is enabled in Settings");
  }

  // Simulated OCR response when no API key is configured (for rapid UI testing)
  if (!apiKey || !apiKey.trim()) {
    await new Promise((r) => setTimeout(r, 700));
    return {
      vendorName: "Sai Krupa Building Materials",
      vendorMarathi: "साई कृपा बिल्डिंग मटेरियल्स",
      particulars:
        "OPC 53 Grade Cement - 60 Bags\n6mm Crushed Sand (Khadi) - 2.0 Brass",
      vehicleNo: "MH 12 TY 6490",
      challanNo: String(Math.floor(1100 + Math.random() * 8800)),
      challanDate: "18 Oct 2026",
    };
  }

  // Gemini Vision does not accept raw SVG; return demo parse for simulated SVG snaps
  if (mimeType === "image/svg+xml") {
    await new Promise((r) => setTimeout(r, 500));
    return {
      vendorName: "Sai Krupa Building Materials",
      vendorMarathi: "साई कृपा बिल्डिंग मटेरियल्स",
      particulars:
        "OPC 53 Grade Cement - 60 Bags\n6mm Crushed Sand (Khadi) - 2.0 Brass",
      vehicleNo: "MH 12 TY 6490",
      challanNo: String(Math.floor(1100 + Math.random() * 8800)),
      challanDate: "18 Oct 2026",
    };
  }

  const prompt = `You are an Indian construction site accountant. Extract details from this handwritten material challan (English, Marathi, or Hindi).
Return ONLY valid JSON with these exact keys:
{
  "vendorName": "Normalized English vendor name",
  "vendorMarathi": "Original Marathi/Hindi vendor name if present or empty string",
  "particulars": "Multi-line string of materials and quantities (e.g. 20mm Aggregate - 3.5 Brass)",
  "vehicleNo": "Vehicle registration number or empty string",
  "challanNo": "Challan number or empty string",
  "challanDate": "DD MMM YYYY"
}`;

  const cleanKey = apiKey.trim();
  const payload = JSON.stringify({
    contents: [
      {
        role: "user",
        parts: [
          { text: prompt },
          {
            inline_data: {
              mime_type: mimeType || "image/jpeg",
              data: base64Data,
            },
          },
        ],
      },
    ],
    generationConfig: {
      temperature: 0.1,
      responseMimeType: "application/json",
    },
  });

  // Try active 2026 Gemini Flash models across both AI Studio (generativelanguage)
  // and Vertex AI Express Mode (aiplatform) using the required x-goog-api-key header
  const attempts = [
    {
      label: "AI Studio (gemini-3.5-flash-lite)",
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent",
    },
    {
      label: "AI Studio (gemini-3.6-flash)",
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent",
    },
    {
      label: "AI Studio (gemini-3.8-flash)",
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent",
    },
    {
      label: "Vertex Express (gemini-3.5-flash)",
      url: "https://aiplatform.googleapis.com/v1/publishers/google/models/gemini-3.5-flash:generateContent",
    },
    {
      label: "Vertex Express (gemini-3.5-flash-lite)",
      url: "https://aiplatform.googleapis.com/v1/publishers/google/models/gemini-3.5-flash-lite:generateContent",
    },
  ];

  let lastError = "Gemini OCR API Error";

  for (const attempt of attempts) {
    try {
      const response = await fetch(attempt.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": cleanKey,
        },
        body: payload,
      });

      const data = await response.json();
      if (!response.ok) {
        const apiMsg = data.error?.message || `HTTP ${response.status}`;
        lastError = `[${attempt.label}] ${apiMsg}`;
        console.warn(`[OCR] ${lastError}`);
        continue;
      }

      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!text) {
        lastError = `[${attempt.label}] Empty response from model`;
        continue;
      }
      return safeParseJsonResponse(text);
    } catch (err) {
      lastError = `[${attempt.label}] ${err?.message || "Network/CORS error"}`;
      console.warn(`[OCR] ${lastError}`);
    }
  }

  throw new Error(lastError);
}

// Natural language parser for Supervisor Smart Voice (Marathi / Hinglish / English)
function parseVoiceMusterTranscript(transcript) {
  const clean = transcript.trim();
  if (!clean) {
    return {
      workType: "General Site Work",
      rows: [
        {
          id: "vr-" + Date.now(),
          trade: "Helper (Male / Female)",
          count: 2,
          isCompany: false,
        },
      ],
    };
  }

  // Extract work type prefix before numbers or keywords like 'sathi' / 'for'
  let workType = "Plinth Beam & Shuttering Work";
  const sathiMatch = clean.match(/^(.*?)\s+(?:sathi|साठी|for|ke liye)\b/i);
  if (sathiMatch && sathiMatch[1].trim().length > 2) {
    workType = sathiMatch[1].trim().replace(/^./, (c) => c.toUpperCase());
  } else {
    const firstChunk = clean.split(/,|\d+/)[0].trim();
    if (firstChunk.length > 3) {
      workType = firstChunk.replace(/^./, (c) => c.toUpperCase());
    }
  }

  const tradePatterns = [
    {
      regex: /(\d+)\s*(?:gawandi|gavandi|mason|masons|गवंडी)/gi,
      trade: "Mason (Gawandi)",
      isCompany: false,
    },
    {
      regex: /(\d+)\s*(?:sutar|carpenter|carpenters|सुतार)/gi,
      trade: "Carpenter (Sutar)",
      isCompany: false,
    },
    {
      regex: /(\d+)\s*(?:fitter|barbender|bar bender|सळई|फिटर)/gi,
      trade: "Barbender (Fitter)",
      isCompany: false,
    },
    {
      regex: /(\d+)\s*(?:company\s*labor|company\s*labour|company|कंपनी)/gi,
      trade: "Company Labor (Internal)",
      isCompany: true,
    },
    {
      regex:
        /(\d+)\s*(?:coolie|helper|helpers|majoor|majur|bigari|बिगारी|मजूर)/gi,
      trade: "Helper (Male / Female)",
      isCompany: false,
    },
  ];

  const rows = [];
  tradePatterns.forEach((pattern, idx) => {
    let match;
    while ((match = pattern.regex.exec(clean)) !== null) {
      const count = parseInt(match[1], 10);
      if (count > 0) {
        rows.push({
          id: `vr-${Date.now()}-${idx}-${rows.length}`,
          trade: pattern.trade,
          count,
          isCompany: pattern.isCompany,
        });
      }
    }
  });

  if (rows.length === 0) {
    rows.push(
      {
        id: `vr-${Date.now()}-1`,
        trade: "Mason (Gawandi)",
        count: 4,
        isCompany: false,
      },
      {
        id: `vr-${Date.now()}-2`,
        trade: "Helper (Male / Female)",
        count: 4,
        isCompany: false,
      },
    );
  }

  return { workType, rows };
}

// ============================================================================
// MAIN APPLICATION COMPONENT
// ============================================================================

export default function App() {
  // Authentication & Global Utility States
  const [authRole, setAuthRole] = useState(null); // null | 'supervisor' | 'owner'
  const [selectedLoginRole, setSelectedLoginRole] = useState("supervisor"); // 'supervisor' | 'owner'
  const [passwordInput, setPasswordInput] = useState("");
  const [loginError, setLoginError] = useState("");
  const [geminiApiKey, setGeminiApiKey] = useState(() => {
    try {
      return localStorage.getItem("civil_field_gemini_key") || "";
    } catch {
      return "";
    }
  });
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [simulateOffline, setSimulateOffline] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const handleSaveApiKey = (val) => {
    setGeminiApiKey(val);
    try {
      localStorage.setItem("civil_field_gemini_key", val);
    } catch {
      // ignore storage quota errors
    }
  };

  // Shared Operational State (Synced live across Supervisor & Contractor)
  const [challans, setChallans] = useState(INITIAL_CHALLANS);
  const [laborPackages, setLaborPackages] = useState(INITIAL_LABOR_PACKAGES);
  const [workLogs, setWorkLogs] = useState(INITIAL_WORK_LOGS);
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  // Supervisor Navigation & Sub-screen State
  // Screens: 'HOME' | 'CHALLAN_FEED' | 'CHALLAN_VERIFY' | 'DPR_HUB' | 'LABOR_MUSTER' | 'VOICE_INPUT' | 'MANUAL_LABOR' | 'WORK_UPDATE' | 'PHOTO_INSPECT' | 'EXPENSES'
  const [supScreen, setSupScreen] = useState("HOME");
  const [activeChallanDraft, setActiveChallanDraft] = useState(null); // For 1B / 1B-ALT
  const [isFallbackAltMode, setIsFallbackAltMode] = useState(false);
  const [ocrErrorReason, setOcrErrorReason] = useState("");
  const [isScanningOcr, setIsScanningOcr] = useState(false);
  const [inspectingChallan, setInspectingChallan] = useState(null);
  const [inspectingWorkLog, setInspectingWorkLog] = useState(null); // Screen 2E
  const [showShareDprModal, setShowShareDprModal] = useState(false);

  // Supervisor Smart Voice (Screen 2B) State
  const [voiceTranscript, setVoiceTranscript] = useState(
    "Plinth beam casting sathi 6 gawandi, 4 sutar, 2 company labor",
  );
  const [isListeningMic, setIsListeningMic] = useState(false);

  // Supervisor Manual Labor Entry (Screen 2C) State
  const [manualWorkType, setManualWorkType] = useState("RCC");
  const [manualRows, setManualRows] = useState([
    { id: "m-1", trade: "Mason (Gawandi)", count: 4, isCompany: false },
    { id: "m-2", trade: "Male Coolie (M/C)", count: 4, isCompany: false },
  ]);

  // Supervisor Work Update (Screen 2D) State
  const [workDescInput, setWorkDescInput] = useState("");
  const [selectedWorkPhotos, setSelectedWorkPhotos] = useState([]);

  // Supervisor Expenses (Screen 3 / Spec Screen 1 & 1A) State
  const [expPhotos, setExpPhotos] = useState([]);
  const [expPaidBy, setExpPaidBy] = useState("My Own Pocket");
  const [expAmount, setExpAmount] = useState("");
  const [expPaidTo, setExpPaidTo] = useState("");
  const [expPurpose, setExpPurpose] = useState("");
  const [expInvoiceDate, setExpInvoiceDate] = useState("18/10/2026");
  const [editingExpenseId, setEditingExpenseId] = useState(null);
  const [viewingExpenseModal, setViewingExpenseModal] = useState(null); // Screen 1A popup

  // Contractor Navigation & Sub-screen State
  // Screens: 'HOME' | 'SITE_HUB' | 'DPR' | 'LABOR' | 'CHALLANS' | 'PENDING_SLIPS' | 'UPLOAD_CHALLAN' | 'EXPENSES' | 'VENDORS'
  const [conScreen, setConScreen] = useState("HOME");
  const [selectedSiteId, setSelectedSiteId] = useState("baner");
  const [conDateFilter, setConDateFilter] = useState("18 Oct 2026");
  const [conChallanSearch, setConChallanSearch] = useState("");
  const [conPhotoPopupLog, setConPhotoPopupLog] = useState(null); // Screen 2AA
  const [showLaborBreakdownModal, setShowLaborBreakdownModal] = useState(false); // Screen 2BA
  const [conVerifyChallanModal, setConVerifyChallanModal] = useState(null); // Screen 2CA
  const [zoomChallanImg, setZoomChallanImg] = useState(false);

  // Contractor Upload New Challan (Screen 2CC) State
  const [conNewChallan, setConNewChallan] = useState({
    vendorName: "",
    vendorMarathi: "",
    challanNo: "",
    vehicleNo: "",
    challanDate: "18 Oct 2026",
    particulars: "",
    imageUrl: makeSampleDocSvg(
      "NEW CHALLAN UPLOAD",
      "Contractor Direct Entry • 18 Oct 2026",
      ["Awaiting physical slip details"],
    ),
  });
  const [conOcrLoading, setConOcrLoading] = useState(false);

  const challanFileInputRef = useRef(null);
  const workPhotosInputRef = useRef(null);
  const expensePhotosInputRef = useRef(null);
  const conChallanFileInputRef = useRef(null);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3200);
  };

  // ============================================================================
  // DERIVED STATE & SITE SUMMARIES
  // ============================================================================

  const banerChallans = useMemo(
    () => challans.filter((c) => c.siteId === "baner"),
    [challans],
  );

  const banerLabor = useMemo(
    () => laborPackages.filter((p) => p.siteId === "baner"),
    [laborPackages],
  );

  const banerWorkLogs = useMemo(
    () => workLogs.filter((w) => w.siteId === "baner"),
    [workLogs],
  );

  const banerExpenses = useMemo(
    () => expenses.filter((e) => e.siteId === "baner"),
    [expenses],
  );

  const getSiteLaborSummary = useCallback(
    (siteId) => {
      const pkgs = laborPackages.filter((p) => p.siteId === siteId);
      let total = 0;
      let company = 0;
      const tradeMap = {};
      pkgs.forEach((pkg) => {
        pkg.rows.forEach((r) => {
          const cnt = parseInt(r.count, 10) || 0;
          total += cnt;
          if (r.isCompany || r.trade.toLowerCase().includes("company")) {
            company += cnt;
          }
          tradeMap[r.trade] = (tradeMap[r.trade] || 0) + cnt;
        });
      });
      return { total, company, tradeMap, packages: pkgs };
    },
    [laborPackages],
  );

  const banerLaborSummary = useMemo(
    () => getSiteLaborSummary("baner"),
    [getSiteLaborSummary],
  );

  const banerTodayTotalCashOut = useMemo(
    () => banerExpenses.reduce((sum, e) => sum + (Number(e.amount) || 0), 0),
    [banerExpenses],
  );

  const banerTotalPhotosCount = useMemo(
    () => banerWorkLogs.reduce((sum, w) => sum + (w.photos?.length || 0), 0),
    [banerWorkLogs],
  );

  const activeContractorSite = useMemo(
    () =>
      INITIAL_SITES.find((s) => s.id === selectedSiteId) || INITIAL_SITES[0],
    [selectedSiteId],
  );

  // ============================================================================
  // AUTH & ROLE SWITCHING HANDLERS
  // ============================================================================

  const handleLogin = (e) => {
    e.preventDefault();
    const cleaned = passwordInput.trim().toLowerCase();
    if (selectedLoginRole === "supervisor") {
      if (cleaned === "supervisor") {
        setAuthRole("supervisor");
        setSupScreen("HOME");
        setPasswordInput("");
        setLoginError("");
        triggerToast("Logged in as Santosh Shinde (Site Supervisor)");
      } else {
        setLoginError(
          'Invalid password. Type "supervisor" to enter Field Terminal.',
        );
      }
    } else {
      if (cleaned === "owner") {
        setAuthRole("owner");
        setConScreen("HOME");
        setPasswordInput("");
        setLoginError("");
        triggerToast("Logged in as Rajesh Metkari Infra (Contractor Owner)");
      } else {
        setLoginError(
          'Invalid password. Type "owner" to enter Contractor Dashboard.',
        );
      }
    }
  };

  const switchRoleQuickly = (role) => {
    setAuthRole(role);
    if (role === "supervisor") {
      setSupScreen("HOME");
      triggerToast("Switched to Site Supervisor View");
    } else {
      setConScreen("HOME");
      triggerToast("Switched to Contractor Owner View");
    }
  };

  // ============================================================================
  // SUPERVISOR HANDLERS (CHALLAN, LABOR, VOICE, WORK UPDATE, EXPENSES)
  // ============================================================================

  const handleChallanFileSelected = async (e) => {
    const file = e.target.files?.[0];
    if (e.target && "value" in e.target) e.target.value = "";
    setIsScanningOcr(true);
    setOcrErrorReason("");

    const processImage = async (rawDataUrl) => {
      const { dataUrl, mimeType } = await normalizeImageToJpeg(rawDataUrl);
      const base64Data = dataUrl.includes(",") ? dataUrl.split(",")[1] : "";
      try {
        const parsed = await runGeminiChallanOCR({
          apiKey: geminiApiKey,
          base64Data,
          mimeType,
          simulateOffline,
        });
        setIsFallbackAltMode(false);
        setOcrErrorReason("");
        setActiveChallanDraft({
          id: "ch-" + Date.now(),
          siteId: "baner",
          vendorName: parsed.vendorName || "",
          vendorMarathi: parsed.vendorMarathi || "",
          particulars: parsed.particulars || "",
          vehicleNo: parsed.vehicleNo || "",
          challanNo: parsed.challanNo || "",
          challanDate: parsed.challanDate || "18 Oct 2026",
          imageUrl: dataUrl,
        });
        setSupScreen("CHALLAN_VERIFY");
        triggerToast("Challan parsed successfully! Review fields below.");
      } catch (err) {
        const reason = err?.message || "Offline / Illegible Photo";
        setIsFallbackAltMode(true);
        setOcrErrorReason(reason);
        setActiveChallanDraft({
          id: "ch-" + Date.now(),
          siteId: "baner",
          vendorName: "",
          vendorMarathi: "",
          particulars: "",
          vehicleNo: "",
          challanNo: "",
          challanDate: "18 Oct 2026",
          imageUrl: dataUrl,
        });
        setSupScreen("CHALLAN_VERIFY");
        triggerToast(`OCR Fallback: ${reason}`);
      } finally {
        setIsScanningOcr(false);
      }
    };

    if (file) {
      const reader = new FileReader();
      reader.onload = () => processImage(reader.result);
      reader.readAsDataURL(file);
    } else {
      const demoImg = makeSampleDocSvg(
        "SAI KRUPA MATERIALS",
        "Gate Snap Slip • 18 Oct 2026",
        [
          "1. OPC 53 Cement : 60 Bags",
          "2. 6mm Crush Sand : 2.0 Brass",
          "Vehicle: MH 12 TY 6490",
        ],
      );
      await processImage(demoImg);
    }
  };

  const handleConfirmChallanSubmit = () => {
    if (!activeChallanDraft) return;
    const nowStr = new Date().toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const newRecord = {
      ...activeChallanDraft,
      vendorName: activeChallanDraft.vendorName.trim() || "Unnamed Site Vendor",
      particulars:
        activeChallanDraft.particulars.trim() || "Material Details Pending",
      vehicleNo: activeChallanDraft.vehicleNo.trim() || "N/A",
      challanNo:
        activeChallanDraft.challanNo.trim() ||
        "LOC-" + Math.floor(100 + Math.random() * 900),
      time: nowStr,
      syncStatus: simulateOffline ? "NOT_UPLOADED" : "UPLOADED",
      reviewStatus: "PENDING",
    };
    setChallans((prev) => [newRecord, ...prev]);
    setActiveChallanDraft(null);
    setSupScreen("CHALLAN_FEED");
    triggerToast(
      simulateOffline
        ? "Saved locally [NOT UPLOADED: RED] — Queued for sync"
        : "Challan uploaded & synced to Contractor HITL queue!",
    );
  };

  const handleRetryChallanUpload = (id) => {
    if (simulateOffline) {
      triggerToast("Still offline! Turn off Offline Mode in top bar to sync.");
      return;
    }
    setChallans((prev) =>
      prev.map((c) => (c.id === id ? { ...c, syncStatus: "UPLOADED" } : c)),
    );
    triggerToast("Challan synced successfully [UPLOADED: GREEN]!");
  };

  const handleCopyYesterdaysLog = () => {
    const newPkg = {
      id: "lp-copy-" + Date.now(),
      siteId: "baner",
      workType: "2nd Floor Internal Plastering (Copied)",
      rows: [
        {
          id: "rc-" + Date.now() + "1",
          trade: "Mason (Gawandi)",
          count: 4,
          isCompany: false,
        },
        {
          id: "rc-" + Date.now() + "2",
          trade: "Helper (Male / Female)",
          count: 4,
          isCompany: false,
        },
      ],
    };
    setLaborPackages((prev) => [newPkg, ...prev]);
    triggerToast("Copied yesterday's work package — tap digits to adjust!");
  };

  const handleMovePackage = (index, direction) => {
    const targetIdx = index + direction;
    if (targetIdx < 0 || targetIdx >= banerLabor.length) return;
    const reorderedBaner = [...banerLabor];
    const [moved] = reorderedBaner.splice(index, 1);
    reorderedBaner.splice(targetIdx, 0, moved);
    const otherSites = laborPackages.filter((p) => p.siteId !== "baner");
    setLaborPackages([...reorderedBaner, ...otherSites]);
  };

  const handleRemoveLaborPackage = (pkgId) => {
    setLaborPackages((prev) => prev.filter((p) => p.id !== pkgId));
    triggerToast("Work package removed");
  };

  const handleUpdateLaborRowCount = (pkgId, rowId, value) => {
    const num = Math.max(0, parseInt(value, 10) || 0);
    setLaborPackages((prev) =>
      prev.map((pkg) =>
        pkg.id === pkgId
          ? {
              ...pkg,
              rows: pkg.rows.map((r) =>
                r.id === rowId ? { ...r, count: num } : r,
              ),
            }
          : pkg,
      ),
    );
  };

  const handleAddLaborCategoryToPkg = (pkgId) => {
    setLaborPackages((prev) =>
      prev.map((pkg) =>
        pkg.id === pkgId
          ? {
              ...pkg,
              rows: [
                ...pkg.rows,
                {
                  id: "r-" + Date.now(),
                  trade: "Helper (Male / Female)",
                  count: 2,
                  isCompany: false,
                },
              ],
            }
          : pkg,
      ),
    );
  };

  const handleSimulateMicSpeak = () => {
    setIsListeningMic(true);
    const samples = [
      "Slab shuttering sathi 5 sutar, 3 fitter, 2 company labor",
      "2nd floor brickwork sathi 4 gawandi, 6 bigari",
      "Plinth beam casting sathi 6 gawandi, 4 sutar, 2 company labor",
    ];
    const nextSample = samples[Math.floor(Math.random() * samples.length)];
    setTimeout(() => {
      setVoiceTranscript(nextSample);
      setIsListeningMic(false);
    }, 900);
  };

  const handleSmartVoiceAdd = () => {
    const parsed = parseVoiceMusterTranscript(voiceTranscript);
    const newPkg = {
      id: "lp-voice-" + Date.now(),
      siteId: "baner",
      workType: parsed.workType,
      rows: parsed.rows,
    };
    setLaborPackages((prev) => [newPkg, ...prev]);
    setSupScreen("LABOR_MUSTER");
    triggerToast("Voice muster parsed & added to Today's Feed!");
  };

  const handleManualLaborSubmit = () => {
    const newPkg = {
      id: "lp-man-" + Date.now(),
      siteId: "baner",
      workType: manualWorkType.trim() || "RCC Work",
      rows: manualRows.map((r) => ({
        ...r,
        count: parseInt(r.count, 10) || 0,
      })),
    };
    setLaborPackages((prev) => [newPkg, ...prev]);
    setSupScreen("LABOR_MUSTER");
    triggerToast("Manual labor package committed to Today's Feed!");
  };

  const handleWorkPhotosSelected = (e) => {
    const files = Array.from(e.target.files || []);
    const remaining = 10 - selectedWorkPhotos.length;
    files.slice(0, remaining).forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedWorkPhotos((prev) =>
          prev.length < 10 ? [...prev, reader.result] : prev,
        );
      };
      reader.readAsDataURL(file);
    });
  };

  const handleAddSampleWorkPhoto = () => {
    if (selectedWorkPhotos.length >= 10) {
      triggerToast("Maximum 10 photos per work log reached");
      return;
    }
    const idx = selectedWorkPhotos.length + 1;
    setSelectedWorkPhotos((prev) => [
      ...prev,
      makeSitePhotoSvg(
        `Site Progress Photo #${idx}`,
        `Baner Commercial Complex • 18 Oct 2026`,
        idx % 2 === 0 ? "#1e3a8a" : "#065f46",
      ),
    ]);
  };

  const handleSubmitWorkUpdate = () => {
    if (!workDescInput.trim()) {
      triggerToast("Please enter a brief work description first");
      return;
    }
    const nowStr = new Date().toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const newLog = {
      id: "wl-" + Date.now(),
      siteId: "baner",
      description: workDescInput.trim(),
      time: nowStr,
      date: "18 Oct 2026",
      syncStatus: simulateOffline ? "NOT_UPLOADED" : "UPLOADED",
      photos:
        selectedWorkPhotos.length > 0
          ? selectedWorkPhotos
          : [
              makeSitePhotoSvg(
                "Site Activity Snapshot",
                workDescInput.trim().slice(0, 42),
              ),
            ],
    };
    setWorkLogs((prev) => [newLog, ...prev]);
    setWorkDescInput("");
    setSelectedWorkPhotos([]);
    triggerToast("Work update logged & synced to Contractor DPR!");
  };

  const handleExpensePhotoSelected = (e) => {
    const files = Array.from(e.target.files || []);
    const remaining = 2 - expPhotos.length;
    files.slice(0, remaining).forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        setExpPhotos((prev) =>
          prev.length < 2 ? [...prev, reader.result] : prev,
        );
      };
      reader.readAsDataURL(file);
    });
  };

  const handleSnapSampleExpenseBundle = () => {
    const slip = makeSampleDocSvg(
      "LOCAL HARDWARE CASH SLIP",
      "Date: 18/10/2026 | Cash Paid",
      ["Item: PVC Curing Pipe & Nails", "Amount: Rs. 350/-"],
    );
    setExpPhotos((prev) => (prev.length < 2 ? [...prev, slip] : prev));
    if (!expAmount) setExpAmount("350");
    if (!expPaidTo) setExpPaidTo("Shree Ganesh Hardware");
    if (!expPurpose) setExpPurpose("PVC Curing Pipe & 3-inch Nails");
    triggerToast("Composite slip & material photo captured!");
  };

  const handleSaveExpense = () => {
    const amt = parseFloat(expAmount);
    if (!amt || amt <= 0) {
      triggerToast("Please enter a valid expense amount");
      return;
    }
    const nowStr = new Date().toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });

    if (editingExpenseId) {
      setExpenses((prev) =>
        prev.map((ex) =>
          ex.id === editingExpenseId
            ? {
                ...ex,
                amount: amt,
                paidTo: expPaidTo.trim() || "Local Site Vendor",
                purpose: expPurpose.trim() || "Site Petty Cash Expense",
                paidBy: expPaidBy,
                invoiceDate: expInvoiceDate || "18/10/2026",
                photos: expPhotos,
              }
            : ex,
        ),
      );
      setEditingExpenseId(null);
      triggerToast("Expense entry updated!");
    } else {
      const newEx = {
        id: "ex-" + Date.now(),
        siteId: "baner",
        amount: amt,
        paidTo: expPaidTo.trim() || "Local Site Vendor",
        purpose: expPurpose.trim() || "Site Petty Cash Expense",
        paidBy: expPaidBy,
        invoiceDate: expInvoiceDate || "18/10/2026",
        uploadDateTime: `18/10/2026 - ${nowStr}`,
        syncStatus: simulateOffline ? "NOT_UPLOADED" : "UPLOADED",
        approvalStatus: "PENDING",
        photos: expPhotos,
      };
      setExpenses((prev) => [newEx, ...prev]);
      triggerToast("Site expense logged & sent for Contractor review!");
    }

    setExpAmount("");
    setExpPaidTo("");
    setExpPurpose("");
    setExpPhotos([]);
  };

  // ============================================================================
  // CONTRACTOR HANDLERS (CHALLAN HITL, UPLOAD, EXPENSE APPROVAL)
  // ============================================================================

  const handleContractorUploadChallanFile = async (e) => {
    const file = e.target.files?.[0];
    if (e.target && "value" in e.target) e.target.value = "";
    setConOcrLoading(true);

    const runParse = async (rawDataUrl) => {
      const { dataUrl, mimeType } = await normalizeImageToJpeg(rawDataUrl);
      const base64Data = dataUrl.includes(",") ? dataUrl.split(",")[1] : "";
      try {
        const parsed = await runGeminiChallanOCR({
          apiKey: geminiApiKey,
          base64Data,
          mimeType,
          simulateOffline,
        });
        setConNewChallan({
          vendorName: parsed.vendorName || "",
          vendorMarathi: parsed.vendorMarathi || "",
          challanNo: parsed.challanNo || "",
          vehicleNo: parsed.vehicleNo || "",
          challanDate: parsed.challanDate || "18 Oct 2026",
          particulars: parsed.particulars || "",
          imageUrl: dataUrl,
        });
        triggerToast("Challan OCR auto-filled! Review and tap Save.");
      } catch (err) {
        setConNewChallan((prev) => ({ ...prev, imageUrl: dataUrl }));
        triggerToast(`OCR Failed: ${err?.message || "Fill manually"}`);
      } finally {
        setConOcrLoading(false);
      }
    };

    if (file) {
      const reader = new FileReader();
      reader.onload = () => runParse(reader.result);
      reader.readAsDataURL(file);
    } else {
      const sample = makeSampleDocSvg(
        "ULTRATECH RMC PLANT",
        "Direct Contractor Upload",
        ["1. M25 RMC Pumpable : 7.0 m3", "Vehicle: MH 12 RN 4821"],
      );
      await runParse(sample);
    }
  };

  const handleContractorSaveNewChallan = () => {
    if (!conNewChallan.vendorName.trim()) {
      triggerToast("Please enter a Vendor Name before saving");
      return;
    }
    const nowStr = new Date().toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const created = {
      id: "ch-con-" + Date.now(),
      siteId: selectedSiteId,
      vendorName: conNewChallan.vendorName.trim(),
      vendorMarathi: conNewChallan.vendorMarathi.trim(),
      challanNo:
        conNewChallan.challanNo.trim() ||
        "CON-" + Math.floor(100 + Math.random() * 900),
      vehicleNo: conNewChallan.vehicleNo.trim() || "N/A",
      challanDate: conNewChallan.challanDate || "18 Oct 2026",
      particulars:
        conNewChallan.particulars.trim() || "Direct Contractor Entry",
      time: nowStr,
      syncStatus: "UPLOADED",
      reviewStatus: "VERIFIED",
      imageUrl: conNewChallan.imageUrl,
    };
    setChallans((prev) => [created, ...prev]);
    setConNewChallan({
      vendorName: "",
      vendorMarathi: "",
      challanNo: "",
      vehicleNo: "",
      challanDate: "18 Oct 2026",
      particulars: "",
      imageUrl: makeSampleDocSvg(
        "NEW CHALLAN UPLOAD",
        "Contractor Direct Entry • 18 Oct 2026",
        ["Awaiting physical slip details"],
      ),
    });
    setConScreen("CHALLANS");
    triggerToast("Challan saved & marked Verified & Locked!");
  };

  const handleContractorVerifyChallan = (updated) => {
    setChallans((prev) =>
      prev.map((c) =>
        c.id === updated.id
          ? { ...updated, reviewStatus: "VERIFIED", syncStatus: "UPLOADED" }
          : c,
      ),
    );
    setConVerifyChallanModal(null);
    triggerToast("Challan verified & locked in site ledger!");
  };

  const handleContractorDeleteChallan = (chId) => {
    setChallans((prev) => prev.filter((c) => c.id !== chId));
    setConVerifyChallanModal(null);
    triggerToast("Challan permanently deleted from ledger.");
  };

  const handleContractorExpenseAction = (expId, status) => {
    setExpenses((prev) =>
      prev.map((ex) =>
        ex.id === expId ? { ...ex, approvalStatus: status } : ex,
      ),
    );
    triggerToast(
      status === "APPROVED"
        ? "Cash claim approved!"
        : "Cash claim flagged for supervisor audit.",
    );
  };

  // ============================================================================
  // RENDER: TOP DESKTOP / LAPTOP UTILITY BAR (Hidden on real mobile devices)
  // ============================================================================

  const renderDesktopUtilityBar = () => (
    <div className="hidden sm:flex bg-slate-900 text-slate-200 border-b border-slate-800 px-4 py-2 flex-wrap items-center justify-between gap-2 text-xs shrink-0">
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 font-bold text-amber-400 tracking-wide">
          <HardHat className="w-4 h-4" /> CIVIL FIELD OS
        </span>
        <span className="hidden sm:inline text-slate-500">|</span>
        <span className="hidden sm:inline text-slate-400">
          Interactive Dual-Role Mobile Prototype
        </span>
      </div>

      <div className="flex items-center gap-2">
        {authRole && (
          <div className="flex items-center bg-slate-800 rounded-lg p-0.5 border border-slate-700">
            <button
              onClick={() => switchRoleQuickly("supervisor")}
              className={`px-2.5 py-1 rounded-md font-semibold transition ${
                authRole === "supervisor"
                  ? "bg-amber-500 text-slate-950"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              Supervisor View
            </button>
            <button
              onClick={() => switchRoleQuickly("owner")}
              className={`px-2.5 py-1 rounded-md font-semibold transition ${
                authRole === "owner"
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              Contractor View
            </button>
          </div>
        )}

        <button
          onClick={() => setSimulateOffline((prev) => !prev)}
          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border font-semibold transition ${
            simulateOffline
              ? "bg-red-950/80 border-red-600 text-red-300"
              : "bg-emerald-950/60 border-emerald-700 text-emerald-300"
          }`}
          title="Toggle offline mode to test Screen 1B-ALT fallback & red unsynced badges"
        >
          {simulateOffline ? (
            <WifiOff className="w-3.5 h-3.5" />
          ) : (
            <Wifi className="w-3.5 h-3.5" />
          )}
          <span>{simulateOffline ? "Offline Mode" : "Online"}</span>
        </button>

        <button
          onClick={() => setShowSettingsModal(true)}
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold"
        >
          <Key className="w-3.5 h-3.5 text-amber-400" />
          <span>{geminiApiKey ? "API Key Set" : "Set API Key"}</span>
        </button>
      </div>
    </div>
  );

  // ============================================================================
  // RENDER: ROLE-BASED LOGIN SCREEN
  // ============================================================================

  const renderLoginScreen = () => (
    <div className="flex-1 flex flex-col justify-between p-5 bg-slate-50 overflow-y-auto">
      <div className="pt-2 space-y-4">
        <div className="text-center space-y-1.5">
          <div className="w-12 h-12 rounded-2xl bg-slate-900 text-amber-400 flex items-center justify-center mx-auto shadow-lg">
            <HardHat className="w-7 h-7" />
          </div>
          <h1 className="text-xl font-black tracking-tight text-slate-900">
            CIVIL FIELD OS
          </h1>
          <p className="text-xs font-medium text-slate-500">
            High-Contrast Construction Site Operations & HITL Ledger
          </p>
        </div>

        {/* Role Selector Toggle */}
        <div className="bg-slate-200 p-1.5 rounded-xl grid grid-cols-2 gap-1.5 border border-slate-300">
          <button
            type="button"
            onClick={() => {
              setSelectedLoginRole("supervisor");
              setLoginError("");
            }}
            className={`py-3 px-2 rounded-lg text-xs font-extrabold uppercase tracking-wide transition flex flex-col items-center gap-1 ${
              selectedLoginRole === "supervisor"
                ? "bg-slate-900 text-amber-400 shadow"
                : "text-slate-700 hover:bg-slate-300/60"
            }`}
          >
            <HardHat className="w-5 h-5" />
            <span>Site Supervisor</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setSelectedLoginRole("owner");
              setLoginError("");
            }}
            className={`py-3 px-2 rounded-lg text-xs font-extrabold uppercase tracking-wide transition flex flex-col items-center gap-1 ${
              selectedLoginRole === "owner"
                ? "bg-blue-900 text-white shadow"
                : "text-slate-700 hover:bg-slate-300/60"
            }`}
          >
            <Building2 className="w-5 h-5" />
            <span>Contractor Owner</span>
          </button>
        </div>

        {/* Active Role Profile Preview Card */}
        <div className="bg-white border-2 border-slate-900 rounded-xl p-4 shadow-sm">
          {selectedLoginRole === "supervisor" ? (
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                Field Execution Terminal (v5.1)
              </span>
              <p className="text-base font-bold text-slate-900 pt-1">
                Santosh Shinde
              </p>
              <p className="text-xs font-medium text-slate-600">
                Assigned Site: Baner Commercial Complex
              </p>
            </div>
          ) : (
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-2 py-0.5 rounded">
                Multi-Site Command & HITL Audit
              </span>
              <p className="text-base font-bold text-slate-900 pt-1">
                Rajesh Metkari Infra
              </p>
              <p className="text-xs font-medium text-slate-600">
                Portfolio: 4 Active Construction Sites (Pune)
              </p>
            </div>
          )}
        </div>

        {/* Password Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-extrabold uppercase text-slate-800 mb-1.5">
              Enter Role Password
            </label>
            <input
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              placeholder={
                selectedLoginRole === "supervisor"
                  ? 'Type "supervisor"'
                  : 'Type "owner"'
              }
              className="w-full border-2 border-slate-900 rounded-xl px-4 py-3 text-base font-bold bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <div className="flex justify-between items-center mt-1.5">
              <span className="text-[11px] text-slate-500">
                Hint: Use{" "}
                <button
                  type="button"
                  onClick={() =>
                    setPasswordInput(
                      selectedLoginRole === "supervisor"
                        ? "supervisor"
                        : "owner",
                    )
                  }
                  className="font-bold underline text-blue-700"
                >
                  {selectedLoginRole === "supervisor" ? "supervisor" : "owner"}
                </button>
              </span>
              <button
                type="button"
                onClick={() => setShowSettingsModal(true)}
                className="text-[11px] font-semibold text-slate-600 hover:text-slate-900 underline"
              >
                + Optional Gemini API Key
              </button>
            </div>
          </div>

          {loginError && (
            <div className="p-3 rounded-lg bg-red-100 border border-red-400 text-red-800 text-xs font-bold">
              {loginError}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-slate-900 hover:bg-slate-800 active:scale-[0.99] text-white font-black text-base py-4 rounded-xl shadow-lg transition tracking-wide"
          >
            OPEN{" "}
            {selectedLoginRole === "supervisor" ? "SUPERVISOR" : "CONTRACTOR"}{" "}
            APP →
          </button>
        </form>
      </div>

      <div className="text-center text-[11px] text-slate-400 pt-4">
        Shared Reactive State • Zero-Friction Field Capture
      </div>
    </div>
  );

  // ============================================================================
  // RENDER: SUPERVISOR HEADER & PERSISTENT BOTTOM [ HOME ] STRIP
  // ============================================================================

  const renderSupervisorHeader = (showSubRow = false) => (
    <div className="bg-slate-900 text-white text-left px-4 py-3 border-b-2 border-amber-500 shrink-0">
      <div className="flex items-start justify-between gap-2">
        <div className="text-left">
          <div className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
            [Site]
          </div>
          <h2 className="text-sm font-black leading-tight text-white !text-white">
            Baner Commercial Complex
          </h2>
        </div>
        <div className="text-right shrink-0">
          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-300">
            [Date]
          </div>
          <div className="text-xs font-extrabold text-amber-300">
            Sunday, 18 Oct
          </div>
        </div>
      </div>

      {showSubRow && (
        <div className="mt-2 pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
          <span className="font-bold text-slate-200">
            [Supervisor]{" "}
            <span className="text-white font-black">Santosh Shinde</span>
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowSettingsModal(true)}
              className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-white font-bold text-[11px] flex items-center gap-1"
            >
              <Settings className="w-3 h-3 text-amber-400" /> Settings
            </button>
            <button
              onClick={() => setAuthRole(null)}
              className="p-1 rounded bg-red-950 hover:bg-red-900 text-red-200"
              title="Logout"
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );

  const renderSupervisorBottomNav = () => (
    <div className="bg-slate-900 border-t-2 border-slate-800 p-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shrink-0">
      <button
        onClick={() => setSupScreen("HOME")}
        className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-amber-500 active:text-slate-950 text-white font-black text-sm tracking-wider uppercase flex items-center justify-center gap-2 border border-slate-700 transition"
      >
        <Home className="w-4 h-4" /> [ Home ]
      </button>
    </div>
  );

  // ============================================================================
  // RENDER: SUPERVISOR SCREENS (0, 1A, 1B/1B-ALT, 2, 2A, 2B, 2C, 2D, 2E, 3)
  // ============================================================================

  const renderSupervisorApp = () => {
    return (
      <div className="flex-1 flex flex-col bg-slate-100 overflow-hidden">
        {renderSupervisorHeader(supScreen === "HOME")}

        <div className="flex-1 overflow-y-auto p-4 pb-8 space-y-4">
          {/* SCREEN 0: SUPERVISOR HOME SCREEN */}
          {supScreen === "HOME" && (
            <div className="min-h-full flex flex-col justify-center space-y-3.5 py-2">
              <div className="text-center">
                <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">
                  PRIMARY SITE ACTIONS
                </span>
              </div>

              <button
                onClick={() => setSupScreen("CHALLAN_FEED")}
                className="w-full py-4 px-4 bg-white hover:bg-amber-50 border-2 border-slate-900 rounded-2xl shadow-[3px_3px_0px_#0f172a] active:translate-y-0.5 transition flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center border border-slate-900 shrink-0">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div className="text-left min-w-0">
                    <div className="text-base font-black text-slate-900 leading-tight">
                      Material Challan
                    </div>
                    <div className="text-xs font-semibold text-slate-500 mt-0.5">
                      {banerChallans.length} Logged Today • Gate Inward
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-900 shrink-0" />
              </button>

              <button
                onClick={() => setSupScreen("DPR_HUB")}
                className="w-full py-4 px-4 bg-white hover:bg-blue-50 border-2 border-slate-900 rounded-2xl shadow-[3px_3px_0px_#0f172a] active:translate-y-0.5 transition flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center border border-slate-900 shrink-0">
                    <ClipboardList className="w-5 h-5" />
                  </div>
                  <div className="text-left min-w-0">
                    <div className="text-base font-black text-slate-900 leading-tight">
                      Daily Progress Report
                    </div>
                    <div className="text-xs font-semibold text-slate-500 mt-0.5">
                      {banerLaborSummary.total} Workers • {banerWorkLogs.length}{" "}
                      Work Logs
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-900 shrink-0" />
              </button>

              <button
                onClick={() => setSupScreen("EXPENSES")}
                className="w-full py-4 px-4 bg-white hover:bg-emerald-50 border-2 border-slate-900 rounded-2xl shadow-[3px_3px_0px_#0f172a] active:translate-y-0.5 transition flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center border border-slate-900 shrink-0">
                    <IndianRupee className="w-5 h-5" />
                  </div>
                  <div className="text-left min-w-0">
                    <div className="text-base font-black text-slate-900 leading-tight">
                      Site Expenses
                    </div>
                    <div className="text-xs font-semibold text-slate-500 mt-0.5">
                      Today's Cash Out: ₹
                      {banerTodayTotalCashOut.toLocaleString("en-IN")}
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-900 shrink-0" />
              </button>
            </div>
          )}

          {/* SCREEN 1A: MATERIAL CHALLAN STREAM */}
          {supScreen === "CHALLAN_FEED" && (
            <div className="space-y-4">
              <input
                ref={challanFileInputRef}
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleChallanFileSelected}
                className="hidden"
              />

              {/* Big High-Contrast Camera Trigger */}
              <div className="bg-amber-400 border-2 border-slate-900 rounded-2xl p-4 shadow-[4px_4px_0px_#0f172a] space-y-2.5">
                <button
                  onClick={() => challanFileInputRef.current?.click()}
                  disabled={isScanningOcr}
                  className="w-full py-4 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl flex items-center justify-center gap-3 font-black text-base transition"
                >
                  <Camera className="w-6 h-6 text-amber-400" />
                  <div className="text-left">
                    <div>
                      {isScanningOcr
                        ? "SCANNING CHALLAN..."
                        : "TAP TO SNAP CHALLAN"}
                    </div>
                    <div className="text-xs font-semibold text-amber-300">
                      "Pawati Photo Kadha"
                    </div>
                  </div>
                </button>

                {/* Quick Demo Snap Trigger for Laptop Users */}
                <button
                  onClick={() =>
                    handleChallanFileSelected({ target: { files: [] } })
                  }
                  disabled={isScanningOcr}
                  className="w-full py-1.5 px-3 bg-amber-300 hover:bg-amber-200 border border-slate-900 rounded-lg text-xs font-extrabold text-slate-950 flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Simulate Gate Snap (Instant Demo Slip)
                </button>
              </div>

              <div className="flex items-center justify-between pt-1">
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-700">
                  TODAY'S CHALLANS ({banerChallans.length})
                </h3>
                <span className="text-[11px] font-semibold text-slate-500">
                  Scroll to view all
                </span>
              </div>

              <div className="space-y-3">
                {banerChallans.map((ch) => (
                  <div
                    key={ch.id}
                    className="bg-white border-2 border-slate-900 rounded-xl p-3.5 shadow-sm space-y-2.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      {ch.syncStatus === "UPLOADED" ? (
                        <span className="px-2.5 py-0.5 rounded bg-emerald-100 border border-emerald-600 text-emerald-900 font-black text-[11px]">
                          [UPLOADED: GREEN]
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded bg-red-100 border border-red-600 text-red-900 font-black text-[11px]">
                          [NOT UPLOADED: RED]
                        </span>
                      )}

                      {ch.syncStatus !== "UPLOADED" && (
                        <button
                          onClick={() => handleRetryChallanUpload(ch.id)}
                          className="px-2.5 py-1 rounded-lg bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs flex items-center gap-1"
                        >
                          <RefreshCw className="w-3 h-3" /> [Retry Upload]
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-12 gap-1 text-xs">
                      <span className="col-span-4 font-bold text-slate-500">
                        Vendor:
                      </span>
                      <span className="col-span-8 font-black text-slate-900">
                        {ch.vendorName}
                      </span>

                      <span className="col-span-4 font-bold text-slate-500">
                        Particulars:
                      </span>
                      <span className="col-span-8 font-semibold text-slate-800 whitespace-pre-line">
                        {ch.particulars}
                      </span>

                      <span className="col-span-4 font-bold text-slate-500">
                        Vehicle No:
                      </span>
                      <span className="col-span-8 font-mono font-bold text-slate-900">
                        {ch.vehicleNo}
                      </span>

                      <span className="col-span-4 font-bold text-slate-500">
                        Challan No:
                      </span>
                      <span className="col-span-8 font-mono font-bold text-slate-900">
                        {ch.challanNo}
                      </span>

                      <span className="col-span-4 font-bold text-slate-500">
                        Time:
                      </span>
                      <span className="col-span-8 font-semibold text-slate-600">
                        {ch.time}
                      </span>
                    </div>

                    <div className="pt-1 flex justify-end">
                      <button
                        onClick={() => setInspectingChallan(ch)}
                        className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-1.5"
                      >
                        <Eye className="w-3.5 h-3.5 text-amber-400" /> [View
                        Challan]
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SCREEN 1B & 1B-ALT: CHALLAN VERIFICATION / OFFLINE FALLBACK */}
          {supScreen === "CHALLAN_VERIFY" && activeChallanDraft && (
            <div className="bg-white border-2 border-slate-900 rounded-2xl p-4 space-y-4 shadow-md">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                <h3 className="text-sm font-black uppercase text-slate-900">
                  {isFallbackAltMode
                    ? "ENTER CHALLAN DETAILS"
                    : "VERIFY CHALLAN DETAILS"}
                </h3>
                <button
                  onClick={() => setSupScreen("CHALLAN_FEED")}
                  className="w-7 h-7 rounded-full bg-slate-200 hover:bg-slate-300 flex items-center justify-center font-black text-slate-800"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {isFallbackAltMode && (
                <div className="p-2.5 rounded-lg bg-amber-100 border border-amber-500 text-amber-950 text-xs font-bold flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-amber-700 mt-0.5" />
                  <div>
                    <div>[!] Parsing unavailable — Enter manually</div>
                    {ocrErrorReason && (
                      <div className="text-[11px] font-mono font-semibold text-red-800 mt-0.5 break-all">
                        Reason: {ocrErrorReason}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Thumbnail Preview */}
              <div
                onClick={() =>
                  setInspectingChallan({
                    ...activeChallanDraft,
                    time: "Just now",
                    syncStatus: "PENDING",
                  })
                }
                className="flex items-center gap-3 p-2 bg-slate-100 border border-slate-300 rounded-xl cursor-pointer hover:bg-slate-200"
              >
                <img
                  src={activeChallanDraft.imageUrl}
                  alt="Scanned Challan"
                  className="w-16 h-12 object-cover rounded border border-slate-400"
                />
                <div className="text-xs">
                  <div className="font-black text-slate-900">
                    Scanned Challan Thumbnail
                  </div>
                  <div className="text-blue-700 font-semibold">
                    {isFallbackAltMode
                      ? "(Saved to local storage)"
                      : "(Tap to inspect photo)"}
                  </div>
                </div>
              </div>

              {/* Editable Form Fields */}
              <div className="space-y-3">
                <div>
                  <label className="block text-[11px] font-black uppercase text-slate-700 mb-1">
                    CHALLAN VENDOR (Prefix Autocomplete)
                  </label>
                  <input
                    list="vendor-suggestions"
                    type="text"
                    value={activeChallanDraft.vendorName}
                    onChange={(e) =>
                      setActiveChallanDraft({
                        ...activeChallanDraft,
                        vendorName: e.target.value,
                      })
                    }
                    placeholder="Type vendor name..."
                    className="w-full border-2 border-slate-900 rounded-lg px-3 py-2 text-sm font-bold text-slate-900"
                  />
                  <datalist id="vendor-suggestions">
                    {KNOWN_VENDORS.map((v) => (
                      <option key={v.name} value={v.name} />
                    ))}
                  </datalist>
                </div>

                <div>
                  <label className="block text-[11px] font-black uppercase text-slate-700 mb-1">
                    PARTICULARS (Material & Quantity)
                  </label>
                  <textarea
                    rows={3}
                    value={activeChallanDraft.particulars}
                    onChange={(e) =>
                      setActiveChallanDraft({
                        ...activeChallanDraft,
                        particulars: e.target.value,
                      })
                    }
                    placeholder="Enter material details manually or via mic..."
                    className="w-full border-2 border-slate-900 rounded-lg px-3 py-2 text-sm font-semibold text-slate-900"
                  />
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    {isFallbackAltMode
                      ? "(Empty box: Enter material details manually or via mic)"
                      : "(Parsed from challan; tap to edit via keyboard if needed)"}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-black uppercase text-slate-700 mb-1">
                      VEHICLE NO.
                    </label>
                    <input
                      type="text"
                      value={activeChallanDraft.vehicleNo}
                      onChange={(e) =>
                        setActiveChallanDraft({
                          ...activeChallanDraft,
                          vehicleNo: e.target.value,
                        })
                      }
                      placeholder="MH 12 XX 0000"
                      className="w-full border-2 border-slate-900 rounded-lg px-3 py-2 text-sm font-mono font-bold text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-black uppercase text-slate-700 mb-1">
                      CHALLAN NO.
                    </label>
                    <input
                      type="text"
                      value={activeChallanDraft.challanNo}
                      onChange={(e) =>
                        setActiveChallanDraft({
                          ...activeChallanDraft,
                          challanNo: e.target.value,
                        })
                      }
                      placeholder="1084"
                      className="w-full border-2 border-slate-900 rounded-lg px-3 py-2 text-sm font-mono font-bold text-slate-900"
                    />
                  </div>
                </div>

                <button
                  onClick={handleConfirmChallanSubmit}
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm uppercase tracking-wider rounded-xl shadow border-2 border-slate-900"
                >
                  [ CONFIRM & SUBMIT ]
                </button>

                {isFallbackAltMode && (
                  <p className="text-[11px] font-semibold text-slate-500 text-center">
                    * Photo & manual details saved locally; queues for sync
                  </p>
                )}
              </div>
            </div>
          )}

          {/* SCREEN 2: DPR SCREEN HUB */}
          {supScreen === "DPR_HUB" && (
            <div className="min-h-full flex flex-col justify-center space-y-3.5 py-2">
              <div className="text-center">
                <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">
                  DAILY PROGRESS REPORT HUB
                </span>
              </div>

              <button
                onClick={() => setSupScreen("LABOR_MUSTER")}
                className="w-full py-5 px-5 bg-white hover:bg-blue-50 border-2 border-slate-900 rounded-2xl shadow-[3px_3px_0px_#0f172a] text-center space-y-1"
              >
                <div className="text-lg font-black text-slate-900">
                  Labor Muster
                </div>
                <div className="text-xs font-bold text-blue-700">
                  {banerLaborSummary.total} Total Workers (
                  {banerLaborSummary.company} Company)
                </div>
              </button>

              <button
                onClick={() => setSupScreen("WORK_UPDATE")}
                className="w-full py-5 px-5 bg-white hover:bg-amber-50 border-2 border-slate-900 rounded-2xl shadow-[3px_3px_0px_#0f172a] text-center space-y-1"
              >
                <div className="text-lg font-black text-slate-900">
                  Work Update
                </div>
                <div className="text-xs font-bold text-amber-700">
                  {banerWorkLogs.length} of 5 Logs Used •{" "}
                  {banerTotalPhotosCount} Photos Logged
                </div>
              </button>

              <div className="pt-2">
                <button
                  onClick={() => setShowShareDprModal(true)}
                  className="w-full py-3.5 px-5 bg-emerald-600 hover:bg-emerald-700 text-white border-2 border-slate-900 rounded-2xl shadow-[3px_3px_0px_#0f172a] font-black text-sm flex items-center justify-center gap-2"
                >
                  <Share2 className="w-4 h-4" /> Share DPR (WhatsApp Summary)
                </button>
              </div>
            </div>
          )}

          {/* SCREEN 2A: LABOR MUSTER LANDING SCREEN */}
          {supScreen === "LABOR_MUSTER" && (
            <div className="space-y-4">
              <div className="border-b-2 border-slate-300 pb-2">
                <h3 className="text-sm font-black uppercase text-slate-900">
                  DAILY LABOR MUSTER (Dainik Majur Hajiri)
                </h3>
              </div>

              {/* 3 Centered Action Triggers */}
              <div className="space-y-2">
                <button
                  onClick={handleCopyYesterdaysLog}
                  className="w-full py-3 px-4 bg-white hover:bg-slate-50 border-2 border-slate-900 rounded-xl font-black text-sm text-slate-900 shadow-sm"
                >
                  Copy Yesterday's Log
                </button>
                <button
                  onClick={() => setSupScreen("VOICE_INPUT")}
                  className="w-full py-3 px-4 bg-amber-400 hover:bg-amber-300 border-2 border-slate-900 rounded-xl font-black text-sm text-slate-950 shadow-sm flex items-center justify-center gap-2"
                >
                  <Mic className="w-4 h-4" /> Capture Smart Voice
                </button>
                <button
                  onClick={() => setSupScreen("MANUAL_LABOR")}
                  className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 border-2 border-slate-900 rounded-xl font-black text-sm text-white shadow-sm"
                >
                  Enter Manually
                </button>
              </div>

              <div className="text-[11px] font-black uppercase text-slate-600 pt-1">
                WORK PACKAGES (Tap arrows to reorder for contractor)
              </div>

              {/* Work Packages List */}
              <div className="space-y-3">
                {banerLabor.map((pkg, pkgIndex) => {
                  const subtotal = pkg.rows.reduce(
                    (s, r) => s + (Number(r.count) || 0),
                    0,
                  );
                  return (
                    <div
                      key={pkg.id}
                      className="bg-white border-2 border-slate-900 rounded-xl p-3 space-y-2.5 shadow-sm"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          <div className="flex flex-col">
                            <button
                              onClick={() => handleMovePackage(pkgIndex, -1)}
                              disabled={pkgIndex === 0}
                              className="text-slate-500 hover:text-slate-900 disabled:opacity-25"
                            >
                              <ArrowUp className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleMovePackage(pkgIndex, 1)}
                              disabled={pkgIndex === banerLabor.length - 1}
                              className="text-slate-500 hover:text-slate-900 disabled:opacity-25"
                            >
                              <ArrowDown className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <span className="text-xs font-black text-slate-500">
                            :: Work Type:
                          </span>
                        </div>
                        <button
                          onClick={() => handleRemoveLaborPackage(pkg.id)}
                          className="w-6 h-6 rounded-full bg-red-600 text-white font-black text-xs flex items-center justify-center"
                          title="Delete work package"
                        >
                          X
                        </button>
                      </div>

                      <input
                        type="text"
                        value={pkg.workType}
                        onChange={(e) =>
                          setLaborPackages((prev) =>
                            prev.map((p) =>
                              p.id === pkg.id
                                ? { ...p, workType: e.target.value }
                                : p,
                            ),
                          )
                        }
                        className="w-full border border-slate-400 rounded-lg px-2.5 py-1.5 text-xs font-black text-slate-900 bg-slate-50"
                      />

                      {/* 2-Color Alternating Rows with Right-Aligned Numbers */}
                      <div className="border border-slate-300 rounded-lg overflow-hidden divide-y divide-slate-200">
                        {pkg.rows.map((row, idx) => (
                          <div
                            key={row.id}
                            className={`flex items-center justify-between px-3 py-2 text-xs ${
                              idx % 2 === 0 ? "bg-[#EBF8FF]" : "bg-white"
                            }`}
                          >
                            <span className="font-bold text-slate-900">
                              {row.trade}
                            </span>
                            <div className="flex items-center gap-2">
                              <span className="text-slate-400 font-bold">
                                :
                              </span>
                              <input
                                type="number"
                                min="0"
                                value={row.count}
                                onChange={(e) =>
                                  handleUpdateLaborRowCount(
                                    pkg.id,
                                    row.id,
                                    e.target.value,
                                  )
                                }
                                className="w-14 text-right font-mono font-black text-sm border border-slate-400 rounded px-1.5 py-0.5 bg-white text-slate-900"
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <span className="text-xs font-black text-slate-800">
                          Subtotal: {subtotal} Workers
                        </span>
                        <button
                          onClick={() => handleAddLaborCategoryToPkg(pkg.id)}
                          className="px-2.5 py-1 rounded-lg border border-slate-900 bg-slate-100 hover:bg-slate-200 text-xs font-extrabold text-slate-900"
                        >
                          [+ Add Category]
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* TODAY'S SUMMARY ROLL-UP */}
              <div className="border-t-2 border-slate-900 pt-3 space-y-2">
                <div className="text-xs font-black uppercase text-slate-800">
                  TODAY'S SUMMARY (Daily Labor Roll-Up)
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white border-2 border-slate-900 rounded-xl p-3 text-center">
                    <div className="text-xs font-bold text-slate-600">
                      Company Labor
                    </div>
                    <div className="text-2xl font-black text-blue-700 mt-0.5">
                      [ {banerLaborSummary.company} ]
                    </div>
                  </div>
                  <div className="bg-slate-900 text-white border-2 border-slate-900 rounded-xl p-3 text-center">
                    <div className="text-xs font-bold text-slate-300">
                      Total Labor
                    </div>
                    <div className="text-2xl font-black text-amber-400 mt-0.5">
                      [ {banerLaborSummary.total} ]
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SCREEN 2B: SMART VOICE INPUT SCREEN */}
          {supScreen === "VOICE_INPUT" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b-2 border-slate-300 pb-2">
                <h3 className="text-sm font-black uppercase text-slate-900">
                  CAPTURE SMART VOICE (Bolun Hajiri Bhara)
                </h3>
                <button
                  onClick={() => setSupScreen("LABOR_MUSTER")}
                  className="text-xs font-black text-slate-600 underline"
                >
                  Cancel
                </button>
              </div>

              <div className="relative bg-white border-2 border-slate-900 rounded-2xl p-4 min-h-[230px] flex flex-col justify-between shadow-sm">
                <textarea
                  rows={5}
                  value={voiceTranscript}
                  onChange={(e) => setVoiceTranscript(e.target.value)}
                  placeholder="Speak or type: Plinth beam casting sathi 6 gawandi, 4 sutar, 2 company labor..."
                  className="w-full text-base font-bold text-slate-900 bg-transparent focus:outline-none resize-none z-10"
                />

                <div className="flex flex-col items-center justify-center py-2 space-y-1.5">
                  <button
                    type="button"
                    onClick={handleSimulateMicSpeak}
                    className={`w-16 h-16 rounded-full flex items-center justify-center border-2 border-slate-900 transition ${
                      isListeningMic
                        ? "bg-red-500 text-white animate-pulse scale-105"
                        : "bg-amber-400/80 hover:bg-amber-400 text-slate-950"
                    }`}
                  >
                    <Mic className="w-8 h-8" />
                  </button>
                  <span className="text-xs font-extrabold text-slate-600">
                    {isListeningMic
                      ? "Listening... Transcribing live"
                      : "Tap Mic to Simulate Marathi/Hinglish Voice"}
                  </span>
                </div>
              </div>

              <p className="text-xs font-medium text-slate-600">
                Speak work type, trades, and headcounts in Marathi, Hindi, or
                English (e.g.,{" "}
                <em>"gawandi", "sutar", "fitter", "company labor", "bigari"</em>
                ).
              </p>

              <button
                onClick={handleSmartVoiceAdd}
                className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-base rounded-xl border-2 border-slate-900 shadow-[4px_4px_0px_#0f172a]"
              >
                [ ADD ]
              </button>
            </div>
          )}

          {/* SCREEN 2C: MANUAL LABOR ENTRY SCREEN */}
          {supScreen === "MANUAL_LABOR" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b-2 border-slate-300 pb-2">
                <h3 className="text-sm font-black uppercase text-slate-900">
                  ENTER MANUALLY (Navin Kaam Nondva)
                </h3>
                <button
                  onClick={() => setSupScreen("LABOR_MUSTER")}
                  className="text-xs font-black text-slate-600 underline"
                >
                  Cancel
                </button>
              </div>

              <div className="bg-white border-2 border-slate-900 rounded-2xl p-4 space-y-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-slate-600">
                    :: Work Type:
                  </span>
                  <span className="text-[11px] font-bold text-blue-700">
                    [Editable]
                  </span>
                </div>

                <input
                  type="text"
                  value={manualWorkType}
                  onChange={(e) => setManualWorkType(e.target.value)}
                  className="w-full border-2 border-slate-900 rounded-xl px-3 py-2 text-sm font-black text-slate-900 bg-slate-50"
                />

                <div className="border border-slate-300 rounded-xl overflow-hidden divide-y divide-slate-200">
                  {manualRows.map((row, idx) => (
                    <div
                      key={row.id}
                      className={`flex items-center justify-between gap-2 px-3 py-2.5 ${
                        idx % 2 === 0 ? "bg-[#EBF8FF]" : "bg-white"
                      }`}
                    >
                      <input
                        type="text"
                        value={row.trade}
                        onChange={(e) =>
                          setManualRows((prev) =>
                            prev.map((r) =>
                              r.id === row.id
                                ? { ...r, trade: e.target.value }
                                : r,
                            ),
                          )
                        }
                        className="flex-1 text-xs font-bold text-slate-900 bg-transparent border-b border-dashed border-slate-400 focus:outline-none"
                      />
                      <span className="text-slate-400 font-bold">:</span>
                      <input
                        type="number"
                        min="0"
                        value={row.count}
                        onChange={(e) =>
                          setManualRows((prev) =>
                            prev.map((r) =>
                              r.id === row.id
                                ? { ...r, count: e.target.value }
                                : r,
                            ),
                          )
                        }
                        className="w-16 text-right font-mono font-black text-sm border-2 border-slate-900 rounded-lg px-2 py-1 bg-white"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs font-black text-slate-900">
                    Subtotal:{" "}
                    {manualRows.reduce(
                      (s, r) => s + (parseInt(r.count, 10) || 0),
                      0,
                    )}{" "}
                    Workers
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setManualRows((prev) => [
                        ...prev,
                        {
                          id: "m-" + Date.now(),
                          trade: "Company Labor (Internal)",
                          count: 2,
                          isCompany: true,
                        },
                      ])
                    }
                    className="px-3 py-1.5 rounded-lg border-2 border-slate-900 bg-slate-100 hover:bg-slate-200 text-xs font-black text-slate-900"
                  >
                    [+ Add Category]
                  </button>
                </div>

                <button
                  onClick={handleManualLaborSubmit}
                  className="w-full py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-black text-sm uppercase tracking-wider rounded-xl border-2 border-slate-900 shadow"
                >
                  [ SUBMIT ]
                </button>
              </div>
            </div>
          )}

          {/* SCREEN 2D: WORK UPDATE & PHOTOS SCREEN */}
          {supScreen === "WORK_UPDATE" && (
            <div className="space-y-4">
              <div className="border-b-2 border-slate-300 pb-2 space-y-1">
                <h3 className="text-sm font-black uppercase text-slate-900">
                  WORK UPDATE & PROGRESS (Kaamachi Nond)
                </h3>
                <div className="inline-block px-2.5 py-1 rounded bg-slate-900 text-amber-400 font-mono font-bold text-[11px]">
                  DAILY CAPACITY: [ {banerWorkLogs.length} of 5 Logs Used -{" "}
                  {banerTotalPhotosCount} of 50 Photos Logged ]
                </div>
              </div>

              <div className="bg-white border-2 border-slate-900 rounded-2xl p-4 space-y-3 shadow-sm">
                <div className="text-xs font-black uppercase text-slate-800">
                  RECORD WORK ACTIVITY
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">
                    Work Description:
                  </label>
                  <textarea
                    rows={3}
                    value={workDescInput}
                    onChange={(e) => setWorkDescInput(e.target.value)}
                    placeholder="e.g., Plinth beam casting Grid A to F completed..."
                    className="w-full border-2 border-slate-900 rounded-xl p-2.5 text-xs font-semibold text-slate-900"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-slate-700">
                      Site Photos (Maximum 10):
                    </span>
                    <span className="text-xs font-black text-blue-700">
                      ({selectedWorkPhotos.length} Photos Selected)
                    </span>
                  </div>

                  <input
                    ref={workPhotosInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleWorkPhotosSelected}
                    className="hidden"
                  />

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => workPhotosInputRef.current?.click()}
                      className="py-2.5 px-3 bg-blue-50 hover:bg-blue-100 border-2 border-dashed border-blue-700 rounded-xl text-xs font-black text-blue-900"
                    >
                      [+] Add Photos
                    </button>
                    <button
                      type="button"
                      onClick={handleAddSampleWorkPhoto}
                      className="py-2.5 px-3 bg-amber-50 hover:bg-amber-100 border-2 border-dashed border-amber-700 rounded-xl text-xs font-black text-amber-950"
                    >
                      + Sample Site Photo
                    </button>
                  </div>

                  {/* 5x2 Photo Preview Grid */}
                  {selectedWorkPhotos.length > 0 && (
                    <div className="mt-3">
                      <div className="text-[11px] font-bold text-slate-500 mb-1.5">
                        Selected Photos Preview (Max 5 per line):
                      </div>
                      <div className="grid grid-cols-5 gap-2">
                        {selectedWorkPhotos.map((src, idx) => (
                          <div
                            key={idx}
                            className="relative aspect-square rounded-lg border-2 border-slate-900 overflow-hidden bg-slate-200"
                          >
                            <img
                              src={src}
                              alt={`Pic${idx + 1}`}
                              className="w-full h-full object-cover"
                            />
                            <button
                              type="button"
                              onClick={() =>
                                setSelectedWorkPhotos((prev) =>
                                  prev.filter((_, i) => i !== idx),
                                )
                              }
                              className="absolute top-0.5 right-0.5 w-4 h-4 rounded-full bg-red-600 text-white text-[9px] font-black flex items-center justify-center"
                            >
                              X
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <button
                  onClick={handleSubmitWorkUpdate}
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm uppercase tracking-wider rounded-xl border-2 border-slate-900 shadow"
                >
                  [ SUBMIT ]
                </button>
              </div>

              {/* Today's Logged Activities */}
              <div className="space-y-2.5 pt-1">
                <h4 className="text-xs font-black uppercase text-slate-700">
                  TODAY'S LOGGED ACTIVITIES ({banerWorkLogs.length})
                </h4>

                {banerWorkLogs.map((log) => (
                  <div
                    key={log.id}
                    className="bg-white border-2 border-slate-900 rounded-xl p-3.5 space-y-2 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-black border ${
                          log.syncStatus === "UPLOADED"
                            ? "bg-emerald-100 border-emerald-600 text-emerald-900"
                            : "bg-red-100 border-red-600 text-red-900"
                        }`}
                      >
                        [
                        {log.syncStatus === "UPLOADED"
                          ? "UPLOADED: GREEN"
                          : "NOT UPLOADED: RED"}
                        ]
                      </span>
                      <span className="text-xs font-bold text-slate-500">
                        {log.time}
                      </span>
                    </div>

                    <p className="text-xs font-semibold text-slate-900 leading-relaxed">
                      {log.description}
                    </p>

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs font-bold text-slate-600">
                        Photos: {log.photos.length} Photos Attached
                      </span>
                      <button
                        onClick={() => {
                          setInspectingWorkLog(log);
                          setSupScreen("PHOTO_INSPECT");
                        }}
                        className="px-3 py-1.5 rounded-lg bg-slate-900 text-white font-bold text-xs"
                      >
                        [View Photos ({log.photos.length})]
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SCREEN 2E: DEDICATED GALLERY PHOTO INSPECTION */}
          {supScreen === "PHOTO_INSPECT" && inspectingWorkLog && (
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-slate-900 text-white px-3 py-2 rounded-xl">
                <button
                  onClick={() => setSupScreen("WORK_UPDATE")}
                  className="text-xs font-black text-amber-400 flex items-center gap-1"
                >
                  [&lt;- Back]
                </button>
                <span className="text-xs font-black uppercase">
                  WORK DETAILS
                </span>
                <span className="text-[11px] text-slate-400">
                  {inspectingWorkLog.time}
                </span>
              </div>

              <div className="bg-white border-2 border-slate-900 rounded-xl p-3 space-y-1.5">
                <span className="px-2 py-0.5 rounded bg-emerald-100 border border-emerald-600 text-emerald-900 font-black text-[10px]">
                  [UPLOADED: GREEN]
                </span>
                <p className="text-xs font-bold text-slate-900 pt-1">
                  {inspectingWorkLog.description}
                </p>
                <p className="text-[11px] font-semibold text-slate-500">
                  Photos: {inspectingWorkLog.photos.length} Photos Attached •{" "}
                  {inspectingWorkLog.time}
                </p>
              </div>

              {/* Full-Width Edge-to-Edge Vertical Photo Stream */}
              <div className="space-y-3">
                {inspectingWorkLog.photos.map((photoSrc, idx) => (
                  <div
                    key={idx}
                    className="border-2 border-slate-900 rounded-xl overflow-hidden bg-black"
                  >
                    <img
                      src={photoSrc}
                      alt={`Full Width ${idx + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SCREEN 3: SITE EXPENSES / PETTY CASH FLOW */}
          {supScreen === "EXPENSES" && (
            <div className="space-y-4">
              <div className="border-b-2 border-slate-300 pb-2 space-y-1">
                <h3 className="text-sm font-black uppercase text-slate-900">
                  SITE KHARCHI / EXPENSES (Site Kharch)
                </h3>
                <div className="inline-block px-3 py-1 rounded-lg bg-slate-900 text-emerald-400 font-mono font-black text-xs">
                  TODAY'S TOTAL CASH OUT: [ Rs.{" "}
                  {banerTodayTotalCashOut.toLocaleString("en-IN")} ]
                </div>
              </div>

              {/* Record / Edit Expense Card */}
              <div className="bg-white border-2 border-slate-900 rounded-2xl p-4 space-y-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase text-slate-900">
                    {editingExpenseId
                      ? "EDIT EXPENSE ENTRY"
                      : "RECORD NEW EXPENSE"}
                  </span>
                  {editingExpenseId && (
                    <button
                      onClick={() => {
                        setEditingExpenseId(null);
                        setExpAmount("");
                        setExpPaidTo("");
                        setExpPurpose("");
                        setExpPhotos([]);
                      }}
                      className="text-xs font-bold text-red-600 underline"
                    >
                      Cancel Edit
                    </button>
                  )}
                </div>

                {/* Proof-of-Purchase Bundle Capture (Up to 2 Photos) */}
                <input
                  ref={expensePhotosInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleExpensePhotoSelected}
                  className="hidden"
                />

                <div className="grid grid-cols-1 gap-2">
                  <button
                    type="button"
                    onClick={() => expensePhotosInputRef.current?.click()}
                    className="w-full py-3 px-3 bg-amber-400 hover:bg-amber-300 border-2 border-slate-900 rounded-xl text-left flex items-center gap-3"
                  >
                    <Camera className="w-6 h-6 text-slate-950 shrink-0" />
                    <div>
                      <div className="text-xs font-black text-slate-950">
                        [CAMERA] SNAP SLIP & MATERIAL PHOTO ({expPhotos.length}
                        /2)
                      </div>
                      <div className="text-[11px] font-bold text-slate-800">
                        Pawati ani maalaacha ekatra photo kadha
                      </div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={handleSnapSampleExpenseBundle}
                    className="w-full py-1.5 px-2 bg-slate-100 hover:bg-slate-200 border border-slate-400 rounded-lg text-[11px] font-bold text-slate-800"
                  >
                    + Simulate Composite Slip & Material Photo
                  </button>
                </div>

                {expPhotos.length > 0 && (
                  <div className="grid grid-cols-2 gap-2">
                    {expPhotos.map((p, idx) => (
                      <div
                        key={idx}
                        className="relative h-20 rounded-lg border-2 border-slate-900 overflow-hidden"
                      >
                        <img
                          src={p}
                          alt="Proof"
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setExpPhotos((prev) =>
                              prev.filter((_, i) => i !== idx),
                            )
                          }
                          className="absolute top-1 right-1 w-5 h-5 rounded-full bg-red-600 text-white text-xs font-black flex items-center justify-center"
                        >
                          X
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* Who Paid For This? */}
                <div>
                  <label className="block text-[11px] font-black uppercase text-slate-700 mb-1">
                    WHO PAID FOR THIS?
                  </label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {["My Own Pocket", "Site Advance", "Contractor"].map(
                      (option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setExpPaidBy(option)}
                          className={`py-2 px-1.5 rounded-lg border-2 text-[11px] font-black transition ${
                            expPaidBy === option
                              ? "bg-slate-900 text-amber-400 border-slate-900"
                              : "bg-slate-50 text-slate-700 border-slate-300"
                          }`}
                        >
                          {expPaidBy === option ? "🔘 " : "⚪ "}
                          {option}
                        </button>
                      ),
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[11px] font-black uppercase text-slate-700 mb-1">
                      AMOUNT (₹)
                    </label>
                    <input
                      type="number"
                      value={expAmount}
                      onChange={(e) => setExpAmount(e.target.value)}
                      placeholder="Rs. 425"
                      className="w-full border-2 border-slate-900 rounded-lg px-3 py-2 text-sm font-black text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-black uppercase text-slate-700 mb-1">
                      INVOICE DATE
                    </label>
                    <input
                      type="text"
                      value={expInvoiceDate}
                      onChange={(e) => setExpInvoiceDate(e.target.value)}
                      placeholder="18/10/2026"
                      className="w-full border-2 border-slate-900 rounded-lg px-3 py-2 text-sm font-bold text-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-black uppercase text-slate-700 mb-1">
                    PAID TO (Vendor / Shop)
                  </label>
                  <input
                    type="text"
                    value={expPaidTo}
                    onChange={(e) => setExpPaidTo(e.target.value)}
                    placeholder="e.g. Dhanlaxmi Hardware & Electricals"
                    className="w-full border-2 border-slate-900 rounded-lg px-3 py-2 text-xs font-bold text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-black uppercase text-slate-700 mb-1">
                    PARTICULARS / PAYMENT PURPOSE
                  </label>
                  <input
                    type="text"
                    value={expPurpose}
                    onChange={(e) => setExpPurpose(e.target.value)}
                    placeholder="e.g. Binding Wire - 5 kg"
                    className="w-full border-2 border-slate-900 rounded-lg px-3 py-2 text-xs font-bold text-slate-900"
                  />
                </div>

                <button
                  onClick={handleSaveExpense}
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm uppercase tracking-wider rounded-xl border-2 border-slate-900 shadow"
                >
                  {editingExpenseId
                    ? "[ UPDATE EXPENSE ]"
                    : "[ + ADD EXPENSE ]"}
                </button>
              </div>

              {/* Today's Expense Entries */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-black uppercase text-slate-700">
                  TODAY'S EXPENSE ENTRIES ({banerExpenses.length})
                </h4>

                {banerExpenses.map((ex) => (
                  <div
                    key={ex.id}
                    className="bg-white border-2 border-slate-900 rounded-xl p-3.5 space-y-2 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-black border ${
                          ex.syncStatus === "UPLOADED"
                            ? "bg-emerald-100 border-emerald-600 text-emerald-900"
                            : "bg-red-100 border-red-600 text-red-900"
                        }`}
                      >
                        [
                        {ex.syncStatus === "UPLOADED"
                          ? "UPLOADED: GREEN"
                          : "NOT UPLOADED: RED"}
                        ]
                      </span>
                      <span className="text-[11px] font-extrabold px-2 py-0.5 rounded bg-slate-100 text-slate-800">
                        Paid from: {ex.paidBy}
                      </span>
                    </div>

                    <div className="grid grid-cols-12 gap-1 text-xs">
                      <span className="col-span-5 font-bold text-slate-500">
                        Amount:
                      </span>
                      <span className="col-span-7 font-black text-slate-900 text-sm">
                        Rs. {ex.amount.toLocaleString("en-IN")}
                      </span>

                      <span className="col-span-5 font-bold text-slate-500">
                        Paid To:
                      </span>
                      <span className="col-span-7 font-bold text-slate-900">
                        {ex.paidTo}
                      </span>

                      <span className="col-span-5 font-bold text-slate-500">
                        Particulars:
                      </span>
                      <span className="col-span-7 font-semibold text-slate-800">
                        {ex.purpose}
                      </span>

                      <span className="col-span-5 font-bold text-slate-500">
                        Invoice Date:
                      </span>
                      <span className="col-span-7 font-mono font-bold text-slate-800">
                        {ex.invoiceDate}
                      </span>

                      <span className="col-span-5 font-bold text-slate-500">
                        Upload Date & Time:
                      </span>
                      <span className="col-span-7 font-mono text-[11px] text-slate-600">
                        {ex.uploadDateTime}
                      </span>
                    </div>

                    <div className="pt-1 flex justify-end">
                      <button
                        onClick={() => setViewingExpenseModal(ex)}
                        className="px-3 py-1.5 rounded-lg bg-slate-900 text-white font-bold text-xs flex items-center gap-1.5"
                      >
                        <Eye className="w-3.5 h-3.5 text-amber-400" /> [View
                        Photo / Edit]
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {renderSupervisorBottomNav()}
      </div>
    );
  };

  // ============================================================================
  // RENDER: CONTRACTOR INTERFACE (RAJESH METKARI INFRA)
  // ============================================================================

  const renderContractorHeader = () => {
    if (conScreen === "HOME") {
      return (
        <div className="bg-blue-950 text-white text-left px-4 py-3.5 border-b-2 border-blue-700 shrink-0">
          <div className="flex items-center justify-between gap-2">
            <div className="text-left">
              <h2 className="text-base font-black tracking-tight text-white !text-white">
                Rajesh Metkari Infra
              </h2>
              <p className="text-xs text-blue-200 font-medium">
                Sunday, 18 Oct 2026
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setShowSettingsModal(true)}
                className="p-2 rounded-lg bg-blue-900 hover:bg-blue-800 text-white"
                title="Settings & API Key"
              >
                <Settings className="w-4 h-4" />
              </button>
              <button
                onClick={() => setAuthRole(null)}
                className="p-2 rounded-lg bg-red-950 hover:bg-red-900 text-red-200"
                title="Logout"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-blue-950 text-white text-left px-4 py-3 border-b-2 border-blue-700 shrink-0">
        <div className="flex items-center justify-between gap-2">
          <div className="text-left min-w-0">
            <h2 className="text-sm font-black leading-tight text-white !text-white truncate">
              {conScreen === "VENDORS"
                ? "Master Vendor Directory"
                : activeContractorSite.name}
            </h2>
            <p className="text-xs text-blue-200 truncate">
              {conScreen === "VENDORS"
                ? "All 4 Sites Consolidated"
                : `👷 Supervisor: ${activeContractorSite.supervisor}`}
            </p>
          </div>
          <div className="text-right shrink-0">
            <span className="text-[11px] font-bold bg-blue-900 border border-blue-700 px-2 py-1 rounded text-white">
              📅 {conDateFilter}
            </span>
          </div>
        </div>
      </div>
    );
  };

  const renderContractorBottomNav = () => (
    <div className="bg-blue-950 border-t-2 border-blue-900 p-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shrink-0">
      {conScreen === "HOME" ? (
        <button
          onClick={() => setConScreen("VENDORS")}
          className="w-full py-2.5 rounded-xl bg-blue-800 hover:bg-blue-700 text-white font-black text-sm tracking-wide flex items-center justify-center gap-2 border border-blue-600 transition"
        >
          <Users className="w-4 h-4" /> Vendor Directory
        </button>
      ) : (
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() =>
              setConScreen(
                conScreen === "SITE_HUB" || conScreen === "VENDORS"
                  ? "HOME"
                  : "SITE_HUB",
              )
            }
            className="py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 border border-blue-700"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <button
            onClick={() => setConScreen("HOME")}
            className="py-2.5 rounded-xl bg-white hover:bg-blue-50 text-blue-950 font-black text-xs flex items-center justify-center gap-1.5"
          >
            <Home className="w-4 h-4" /> [ 🏠 Home ]
          </button>
        </div>
      )}
    </div>
  );

  const renderContractorApp = () => {
    const siteChallans = challans.filter((c) => c.siteId === selectedSiteId);
    const pendingSiteChallans = siteChallans.filter(
      (c) => c.reviewStatus === "PENDING",
    );
    const siteWorkLogs = workLogs.filter((w) => w.siteId === selectedSiteId);
    const siteExpenses = expenses.filter((e) => e.siteId === selectedSiteId);
    const pendingSiteExpenses = siteExpenses.filter(
      (e) => e.approvalStatus === "PENDING",
    );
    const siteLaborData = getSiteLaborSummary(selectedSiteId);

    const filteredSiteChallans = siteChallans.filter(
      (c) =>
        c.vendorName.toLowerCase().includes(conChallanSearch.toLowerCase()) ||
        c.challanNo.toLowerCase().includes(conChallanSearch.toLowerCase()) ||
        c.particulars.toLowerCase().includes(conChallanSearch.toLowerCase()),
    );

    return (
      <div className="flex-1 flex flex-col bg-slate-100 overflow-hidden">
        {renderContractorHeader()}

        <div className="flex-1 overflow-y-auto p-4 pb-8 space-y-3.5">
          {/* CONTRACTOR SCREEN 0: MULTI-SITE COMMAND DASHBOARD */}
          {conScreen === "HOME" && (
            <div className="space-y-3.5">
              {INITIAL_SITES.map((site) => {
                const sChallans = challans.filter((c) => c.siteId === site.id);
                const sPending = sChallans.filter(
                  (c) => c.reviewStatus === "PENDING",
                ).length;
                const sUnsynced = sChallans.filter(
                  (c) => c.syncStatus !== "UPLOADED",
                ).length;
                const sLabor = getSiteLaborSummary(site.id);
                const sLogs = workLogs.filter((w) => w.siteId === site.id);
                const sExpTotal = expenses
                  .filter((e) => e.siteId === site.id)
                  .reduce((sum, e) => sum + (Number(e.amount) || 0), 0);

                return (
                  <div
                    key={site.id}
                    onClick={() => {
                      setSelectedSiteId(site.id);
                      setConScreen("SITE_HUB");
                    }}
                    className="bg-white hover:bg-blue-50/60 border-2 border-slate-900 rounded-2xl p-4 shadow-[3px_3px_0px_#0f172a] cursor-pointer transition space-y-2"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-sm font-black uppercase text-slate-900">
                          {site.name}
                        </h3>
                        <p className="text-xs font-bold text-slate-600">
                          Supervisor: {site.supervisor}
                        </p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-blue-900 shrink-0" />
                    </div>

                    <div className="border-t border-slate-200 pt-2 space-y-1.5 text-xs">
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-slate-500 w-32 shrink-0">
                          • Work Progress:
                        </span>
                        <span className="font-semibold text-slate-900 line-clamp-2">
                          {sLogs.length > 0
                            ? sLogs[0].description
                            : "Not Updated"}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-500 w-32 shrink-0">
                          • Labor Strength:
                        </span>
                        <span className="font-black text-slate-900">
                          {sLabor.total > 0
                            ? `${sLabor.total} Workers (${sLabor.company} Company Labor)`
                            : "Not Updated"}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-500 w-32 shrink-0">
                          • Material Challan:
                        </span>
                        <span className="font-bold text-slate-900">
                          {sChallans.length > 0 ? (
                            <>
                              {sChallans.length} Challans Logged{" "}
                              {(sPending > 0 || sUnsynced > 0) && (
                                <span className="text-amber-700 font-black">
                                  ({sPending} Review
                                  {sUnsynced > 0
                                    ? `, ${sUnsynced} Unsynced`
                                    : ""}
                                  )
                                </span>
                              )}
                            </>
                          ) : (
                            "No Record"
                          )}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-500 w-32 shrink-0">
                          • Site Expenses:
                        </span>
                        <span className="font-black text-emerald-700">
                          {sExpTotal > 0
                            ? `Rs. ${sExpTotal.toLocaleString("en-IN")}`
                            : "No Expense"}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* CONTRACTOR SCREEN 1: SITE DETAIL HUB */}
          {conScreen === "SITE_HUB" && (
            <div className="space-y-3.5 py-2">
              <button
                onClick={() => setConScreen("DPR")}
                className="w-full p-5 bg-white hover:bg-blue-50 border-2 border-slate-900 rounded-2xl shadow-[3px_3px_0px_#0f172a] flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📋</span>
                  <div className="text-left">
                    <div className="text-base font-black text-slate-900">
                      Daily Progress Report
                    </div>
                    <div className="text-xs font-semibold text-slate-500">
                      {siteWorkLogs.length} Work Logs Recorded
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 text-slate-900" />
              </button>

              <button
                onClick={() => setConScreen("LABOR")}
                className="w-full p-5 bg-white hover:bg-blue-50 border-2 border-slate-900 rounded-2xl shadow-[3px_3px_0px_#0f172a] flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">👥</span>
                  <div className="text-left">
                    <div className="text-base font-black text-slate-900">
                      Labor Muster
                    </div>
                    <div className="text-xs font-semibold text-slate-500">
                      {siteLaborData.total} Total Workers (
                      {siteLaborData.company} Company)
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 text-slate-900" />
              </button>

              <button
                onClick={() => setConScreen("CHALLANS")}
                className="w-full p-5 bg-white hover:bg-amber-50 border-2 border-slate-900 rounded-2xl shadow-[3px_3px_0px_#0f172a] flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🚚</span>
                  <div className="text-left">
                    <div className="text-base font-black text-slate-900">
                      Material Challan
                    </div>
                    {pendingSiteChallans.length > 0 ? (
                      <div className="text-xs font-black text-amber-700 mt-0.5">
                        🟡 {pendingSiteChallans.length} Slips to Review
                      </div>
                    ) : (
                      <div className="text-xs font-bold text-emerald-700 mt-0.5">
                        🟢 All Slips Verified
                      </div>
                    )}
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 text-slate-900" />
              </button>

              <button
                onClick={() => setConScreen("EXPENSES")}
                className="w-full p-5 bg-white hover:bg-emerald-50 border-2 border-slate-900 rounded-2xl shadow-[3px_3px_0px_#0f172a] flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💵</span>
                  <div className="text-left">
                    <div className="text-base font-black text-slate-900">
                      Site Expenses
                    </div>
                    {pendingSiteExpenses.length > 0 ? (
                      <div className="text-xs font-black text-amber-700 mt-0.5">
                        🟡 {pendingSiteExpenses.length} Cash Claims to Review
                      </div>
                    ) : (
                      <div className="text-xs font-bold text-emerald-700 mt-0.5">
                        🟢 All Claims Reviewed
                      </div>
                    )}
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 text-slate-900" />
              </button>
            </div>
          )}

          {/* CONTRACTOR SCREEN 2A: DAILY PROGRESS REPORT */}
          {conScreen === "DPR" && (
            <div className="space-y-3.5">
              <div className="flex items-center justify-between border-b-2 border-slate-300 pb-2">
                <span className="text-xs font-black uppercase text-slate-900">
                  📋 DAILY PROGRESS REPORT
                </span>
                <select
                  value={conDateFilter}
                  onChange={(e) => setConDateFilter(e.target.value)}
                  className="text-xs font-bold border border-slate-400 rounded-lg px-2 py-1 bg-white"
                >
                  <option value="18 Oct 2026">📅 Sunday, 18 Oct</option>
                  <option value="17 Oct 2026">📅 Saturday, 17 Oct</option>
                </select>
              </div>

              <div className="text-[11px] font-black uppercase text-slate-500">
                WORK LOG & ACTIVITIES ({siteWorkLogs.length})
              </div>

              {siteWorkLogs.length === 0 ? (
                <div className="bg-white border-2 border-dashed border-slate-400 rounded-xl p-6 text-center text-xs font-bold text-slate-500">
                  No work progress logged for this site today.
                </div>
              ) : (
                siteWorkLogs.map((log) => (
                  <div
                    key={log.id}
                    className="bg-white border-2 border-slate-900 rounded-xl p-4 space-y-3 shadow-sm"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-800">
                        Site Progress Log
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-500">
                        {log.time}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-slate-900 leading-relaxed">
                      {log.description}
                    </p>
                    <button
                      onClick={() => setConPhotoPopupLog(log)}
                      className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs flex items-center justify-center gap-2"
                    >
                      [ 📷 View Photos ({log.photos.length}) ]
                    </button>
                  </div>
                ))
              )}
            </div>
          )}

          {/* CONTRACTOR SCREEN 2B: LABOR MUSTER ROLL-UP */}
          {conScreen === "LABOR" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b-2 border-slate-300 pb-2">
                <span className="text-xs font-black uppercase text-slate-900">
                  👥 LABOR MUSTER
                </span>
                <span className="text-xs font-bold text-slate-600">
                  [ 📅 {conDateFilter} ▾ ]
                </span>
              </div>

              <div className="bg-white border-2 border-slate-900 rounded-2xl overflow-hidden shadow-sm">
                <div className="bg-slate-900 text-white px-4 py-2.5 text-xs font-black uppercase flex justify-between">
                  <span>LABOR TYPE</span>
                  <span>COUNT</span>
                </div>

                <div className="divide-y divide-slate-200">
                  {Object.entries(siteLaborData.tradeMap).length === 0 ? (
                    <div className="p-5 text-center text-xs font-bold text-slate-500">
                      No labor muster entries submitted today.
                    </div>
                  ) : (
                    Object.entries(siteLaborData.tradeMap).map(
                      ([trade, count], idx) => (
                        <div
                          key={trade}
                          className={`px-4 py-3 flex justify-between items-center text-xs ${
                            idx % 2 === 0 ? "bg-[#EBF8FF]" : "bg-white"
                          }`}
                        >
                          <span className="font-bold text-slate-900">
                            {trade}
                          </span>
                          <span className="font-mono font-black text-sm text-slate-900">
                            {String(count).padStart(2, "0")}
                          </span>
                        </div>
                      ),
                    )
                  )}
                </div>

                <div className="bg-slate-100 border-t-2 border-slate-900 px-4 py-3 flex justify-between items-center">
                  <span className="text-xs font-black uppercase text-slate-800">
                    Total Headcount:
                  </span>
                  <span className="text-base font-black text-blue-900">
                    {siteLaborData.total} Workers
                  </span>
                </div>
              </div>

              <button
                onClick={() => setShowLaborBreakdownModal(true)}
                className="w-full py-3.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-black text-xs uppercase tracking-wider border-2 border-slate-900 shadow"
              >
                [ 📋 View Detailed Breakdown ]
              </button>
            </div>
          )}

          {/* CONTRACTOR SCREEN 2C: MATERIAL CHALLAN HITL & LIST */}
          {conScreen === "CHALLANS" && (
            <div className="space-y-3.5">
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={conChallanSearch}
                    onChange={(e) => setConChallanSearch(e.target.value)}
                    placeholder="Search vendor, challan #, material..."
                    className="w-full pl-9 pr-3 py-2 text-xs font-bold border-2 border-slate-900 rounded-xl bg-white"
                  />
                </div>
              </div>

              <button
                onClick={() => setConScreen("UPLOAD_CHALLAN")}
                className="w-full py-3 px-4 bg-blue-900 hover:bg-blue-800 text-white font-black text-xs uppercase tracking-wider rounded-xl border-2 border-slate-900 shadow flex items-center justify-center gap-2"
              >
                ➕ Upload New Challan
              </button>

              {pendingSiteChallans.length > 0 && (
                <button
                  onClick={() => setConScreen("PENDING_SLIPS")}
                  className="w-full py-2.5 px-3 bg-amber-100 hover:bg-amber-200 border-2 border-amber-600 rounded-xl text-amber-950 font-black text-xs flex items-center justify-center gap-2"
                >
                  ⚠️ View All Pending Slips ({pendingSiteChallans.length})
                </button>
              )}

              <div className="text-center text-[11px] font-black uppercase tracking-wider text-slate-500">
                DELIVERIES TODAY ({filteredSiteChallans.length})
              </div>

              <div className="space-y-3">
                {filteredSiteChallans.map((ch) => (
                  <div
                    key={ch.id}
                    className="bg-white border-2 border-slate-900 rounded-xl p-3.5 space-y-2 shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="text-sm font-black text-slate-900">
                          {ch.vendorName}
                        </div>
                        {ch.vendorMarathi && (
                          <div className="text-xs font-semibold text-slate-600">
                            {ch.vendorMarathi}
                          </div>
                        )}
                      </div>
                      {ch.reviewStatus === "VERIFIED" ? (
                        <span className="px-2 py-0.5 rounded bg-emerald-100 border border-emerald-600 text-emerald-900 text-[10px] font-black shrink-0">
                          🟢 Verified & Locked
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded bg-amber-100 border border-amber-600 text-amber-950 text-[10px] font-black shrink-0">
                          🟡 Pending Review
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-600 font-mono">
                      <span>Challan No: {ch.challanNo}</span>
                      <span>{ch.time}</span>
                    </div>

                    <button
                      onClick={() => {
                        setZoomChallanImg(false);
                        setConVerifyChallanModal({ ...ch });
                      }}
                      className={`w-full py-2 rounded-lg font-black text-xs transition ${
                        ch.reviewStatus === "VERIFIED"
                          ? "bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-400"
                          : "bg-amber-400 hover:bg-amber-300 text-slate-950 border-2 border-slate-900"
                      }`}
                    >
                      {ch.reviewStatus === "VERIFIED"
                        ? "[ 👁️ View Details ]"
                        : "[ 🔍 Review Slip ]"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CONTRACTOR SCREEN 2CB: ALL PENDING SLIPS */}
          {conScreen === "PENDING_SLIPS" && (
            <div className="space-y-3">
              <div className="bg-amber-100 border-2 border-amber-600 rounded-xl p-3 text-xs font-black text-amber-950">
                ⚠️ ALL PENDING SLIPS ({pendingSiteChallans.length})
              </div>

              {pendingSiteChallans.map((ch) => (
                <div
                  key={ch.id}
                  className="bg-white border-2 border-slate-900 rounded-xl p-3.5 space-y-2 shadow-sm"
                >
                  <div className="text-[11px] font-bold text-blue-800">
                    📅 {ch.challanDate} • {ch.time}
                  </div>
                  <div className="text-sm font-black text-slate-900">
                    {ch.vendorName}
                  </div>
                  {ch.vendorMarathi && (
                    <div className="text-xs text-slate-600">
                      {ch.vendorMarathi}
                    </div>
                  )}
                  <div className="text-xs font-mono text-slate-700">
                    Challan No: {ch.challanNo} • {ch.vehicleNo}
                  </div>
                  <button
                    onClick={() => {
                      setZoomChallanImg(false);
                      setConVerifyChallanModal({ ...ch });
                    }}
                    className="w-full py-2 rounded-lg bg-amber-400 hover:bg-amber-300 border-2 border-slate-900 font-black text-xs text-slate-950"
                  >
                    [ 🔍 Review Slip ]
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* CONTRACTOR SCREEN 2CC: UPLOAD NEW CHALLAN */}
          {conScreen === "UPLOAD_CHALLAN" && (
            <div className="bg-white border-2 border-slate-900 rounded-2xl p-4 space-y-3.5 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <button
                  onClick={() => setConScreen("CHALLANS")}
                  className="text-xs font-black text-blue-800"
                >
                  ← Back to Challans
                </button>
                <span className="text-xs font-black uppercase text-slate-900">
                  UPLOAD NEW CHALLAN
                </span>
              </div>

              <input
                ref={conChallanFileInputRef}
                type="file"
                accept="image/*"
                onChange={handleContractorUploadChallanFile}
                className="hidden"
              />

              <div className="p-3 border-2 border-dashed border-slate-400 rounded-xl bg-slate-50 text-center space-y-2">
                {conOcrLoading ? (
                  <div className="py-4 text-xs font-black text-blue-800 animate-pulse">
                    ⏳ Processing State: "Scanning challan..." (Form fields
                    temporarily locked)
                  </div>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => conChallanFileInputRef.current?.click()}
                      className="w-full py-2.5 bg-slate-900 text-white rounded-lg text-xs font-black"
                    >
                      [ 📷 TAKE PHOTO / CHOOSE FROM GALLERY ]
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        handleContractorUploadChallanFile({
                          target: { files: [] },
                        })
                      }
                      className="text-[11px] font-bold text-blue-700 underline"
                    >
                      Simulate Slip Scan & Auto-Fill
                    </button>
                  </>
                )}
              </div>

              <div className="space-y-2.5 text-xs">
                <div>
                  <label className="block font-black text-slate-700 mb-1">
                    VENDOR NAME [✎]
                  </label>
                  <input
                    type="text"
                    disabled={conOcrLoading}
                    value={conNewChallan.vendorName}
                    onChange={(e) =>
                      setConNewChallan({
                        ...conNewChallan,
                        vendorName: e.target.value,
                      })
                    }
                    placeholder="Enter vendor / supplier name"
                    className="w-full border-2 border-slate-900 rounded-lg px-3 py-2 font-bold"
                  />
                  <input
                    type="text"
                    disabled={conOcrLoading}
                    value={conNewChallan.vendorMarathi}
                    onChange={(e) =>
                      setConNewChallan({
                        ...conNewChallan,
                        vendorMarathi: e.target.value,
                      })
                    }
                    placeholder="स्थानिक नाव (मराठी / हिंदी पर्यायी)"
                    className="w-full border border-slate-400 rounded-lg px-3 py-1.5 mt-1.5 font-semibold"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block font-black text-slate-700 mb-1">
                      CHALLAN NO [✎]
                    </label>
                    <input
                      type="text"
                      disabled={conOcrLoading}
                      value={conNewChallan.challanNo}
                      onChange={(e) =>
                        setConNewChallan({
                          ...conNewChallan,
                          challanNo: e.target.value,
                        })
                      }
                      placeholder="e.g. CH-99012"
                      className="w-full border-2 border-slate-900 rounded-lg px-2.5 py-2 font-mono font-bold"
                    />
                  </div>
                  <div>
                    <label className="block font-black text-slate-700 mb-1">
                      VEHICLE NO [✎]
                    </label>
                    <input
                      type="text"
                      disabled={conOcrLoading}
                      value={conNewChallan.vehicleNo}
                      onChange={(e) =>
                        setConNewChallan({
                          ...conNewChallan,
                          vehicleNo: e.target.value,
                        })
                      }
                      placeholder="MH-12-RN-4821"
                      className="w-full border-2 border-slate-900 rounded-lg px-2.5 py-2 font-mono font-bold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-black text-slate-700 mb-1">
                    PARTICULARS [✎]
                  </label>
                  <textarea
                    rows={3}
                    disabled={conOcrLoading}
                    value={conNewChallan.particulars}
                    onChange={(e) =>
                      setConNewChallan({
                        ...conNewChallan,
                        particulars: e.target.value,
                      })
                    }
                    placeholder="Enter item description, quantity, grade, remarks..."
                    className="w-full border-2 border-slate-900 rounded-lg p-2.5 font-semibold"
                  />
                </div>

                <button
                  type="button"
                  disabled={conOcrLoading}
                  onClick={handleContractorSaveNewChallan}
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black uppercase rounded-xl border-2 border-slate-900"
                >
                  [ 🔒 Save ]
                </button>
              </div>
            </div>
          )}

          {/* CONTRACTOR SCREEN: SITE EXPENSES & CASH CLAIMS REVIEW */}
          {conScreen === "EXPENSES" && (
            <div className="space-y-3.5">
              <div className="bg-white border-2 border-slate-900 rounded-xl p-3 flex items-center justify-between">
                <span className="text-xs font-black uppercase text-slate-700">
                  Total Site Claims:
                </span>
                <span className="text-base font-black text-emerald-700">
                  Rs.{" "}
                  {siteExpenses
                    .reduce((s, e) => s + (Number(e.amount) || 0), 0)
                    .toLocaleString("en-IN")}
                </span>
              </div>

              {siteExpenses.length === 0 ? (
                <div className="bg-white border-2 border-dashed border-slate-400 rounded-xl p-6 text-center text-xs font-bold text-slate-500">
                  No site expenses recorded yet.
                </div>
              ) : (
                siteExpenses.map((ex) => (
                  <div
                    key={ex.id}
                    className="bg-white border-2 border-slate-900 rounded-xl p-3.5 space-y-2.5 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-base font-black text-slate-900">
                        ₹ {ex.amount.toLocaleString("en-IN")}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-black border ${
                          ex.approvalStatus === "APPROVED"
                            ? "bg-emerald-100 border-emerald-600 text-emerald-900"
                            : ex.approvalStatus === "FLAGGED"
                              ? "bg-red-100 border-red-600 text-red-900"
                              : "bg-amber-100 border-amber-600 text-amber-950"
                        }`}
                      >
                        {ex.approvalStatus === "APPROVED"
                          ? "🟢 Approved"
                          : ex.approvalStatus === "FLAGGED"
                            ? "🔴 Flagged"
                            : "🟡 Pending Review"}
                      </span>
                    </div>

                    <div className="text-xs space-y-0.5">
                      <div className="font-bold text-slate-900">
                        {ex.purpose}
                      </div>
                      <div className="text-slate-600">Paid To: {ex.paidTo}</div>
                      <div className="text-[11px] font-semibold text-blue-800">
                        Source: {ex.paidBy} • Invoice: {ex.invoiceDate}
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-2 pt-1">
                      <button
                        onClick={() => setViewingExpenseModal(ex)}
                        className="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-400 text-xs font-bold text-slate-900"
                      >
                        [ 👁️ Proof ({ex.photos.length}) ]
                      </button>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() =>
                            handleContractorExpenseAction(ex.id, "FLAGGED")
                          }
                          className="px-2.5 py-1.5 rounded-lg bg-red-100 hover:bg-red-200 text-red-900 font-black text-xs"
                        >
                          Flag
                        </button>
                        <button
                          onClick={() =>
                            handleContractorExpenseAction(ex.id, "APPROVED")
                          }
                          className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs"
                        >
                          ✓ Approve
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* CONTRACTOR VENDOR DIRECTORY */}
          {conScreen === "VENDORS" && (
            <div className="space-y-3">
              {KNOWN_VENDORS.map((v) => {
                const count = challans.filter((c) =>
                  c.vendorName
                    .toLowerCase()
                    .includes(v.name.split(" ")[0].toLowerCase()),
                ).length;
                return (
                  <div
                    key={v.name}
                    className="bg-white border-2 border-slate-900 rounded-xl p-3.5 space-y-1 shadow-sm"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-sm font-black text-slate-900">
                          {v.name}
                        </div>
                        <div className="text-xs text-slate-600">
                          {v.marathi}
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-900 text-[10px] font-black">
                        {count} Challans
                      </span>
                    </div>
                    <div className="text-xs text-slate-600 pt-1 flex justify-between">
                      <span>{v.category}</span>
                      <span className="font-mono font-bold text-slate-800">
                        {v.phone}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {renderContractorBottomNav()}
      </div>
    );
  };

  // ============================================================================
  // RENDER: MODALS & POPUPS (Screen 2CA, 2AA, 2BA, Expense 1A, Share DPR, Settings)
  // ============================================================================

  const renderModals = () => (
    <>
      {/* 1. Settings & Gemini API Key Modal */}
      {showSettingsModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white border-2 border-slate-900 rounded-2xl max-w-sm w-full p-5 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b pb-2">
              <h3 className="text-sm font-black uppercase text-slate-900 flex items-center gap-1.5">
                <Key className="w-4 h-4 text-amber-500" /> AI & Sync
                Configuration
              </h3>
              <button
                onClick={() => setShowSettingsModal(false)}
                className="p-1 rounded-full bg-slate-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-extrabold text-slate-800">
                Gemini API Key (Optional for Live Vision OCR)
              </label>
              <input
                type="password"
                value={geminiApiKey}
                onChange={(e) => handleSaveApiKey(e.target.value)}
                placeholder="AQ... or AIzaSy..."
                className="w-full border-2 border-slate-900 rounded-xl px-3 py-2 text-xs font-mono"
              />
              <p className="text-[11px] text-slate-500">
                Saved automatically in browser storage. When blank, the app uses
                a simulated OCR parser.
              </p>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-100 border border-slate-300">
              <div>
                <div className="text-xs font-black text-slate-900">
                  Simulate Offline Mode
                </div>
                <div className="text-[11px] text-slate-500">
                  Triggers Screen 1B-ALT & [NOT UPLOADED: RED]
                </div>
              </div>
              <input
                type="checkbox"
                checked={simulateOffline}
                onChange={(e) => setSimulateOffline(e.target.checked)}
                className="w-5 h-5 accent-slate-900"
              />
            </div>

            <button
              onClick={() => {
                setShowSettingsModal(false);
                triggerToast("Configuration saved!");
              }}
              className="w-full py-2.5 bg-slate-900 text-white font-black text-xs uppercase rounded-xl"
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* 2. Supervisor Inspect Challan Photo Modal */}
      {inspectingChallan && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white border-2 border-slate-900 rounded-2xl max-w-md w-full p-4 space-y-3 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-2">
              <span className="text-xs font-black uppercase text-slate-900">
                CHALLAN SLIP PHOTO ({inspectingChallan.challanNo || "Preview"})
              </span>
              <button
                onClick={() => setInspectingChallan(null)}
                className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <img
              src={inspectingChallan.imageUrl}
              alt="Challan Full"
              className="w-full rounded-xl border border-slate-300"
            />
            <div className="text-xs bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1">
              <div className="font-black text-slate-900">
                {inspectingChallan.vendorName}
              </div>
              <div className="whitespace-pre-line text-slate-700">
                {inspectingChallan.particulars}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. Supervisor Share DPR WhatsApp Summary Modal */}
      {showShareDprModal && (
        <div className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4">
          <div className="bg-white border-2 border-slate-900 rounded-2xl max-w-md w-full p-4 space-y-3">
            <div className="flex items-center justify-between border-b pb-2">
              <span className="text-xs font-black uppercase text-slate-900">
                WHATSAPP DPR SUMMARY PREVIEW
              </span>
              <button
                onClick={() => setShowShareDprModal(false)}
                className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <pre className="bg-emerald-50 border border-emerald-400 rounded-xl p-3 text-xs font-mono whitespace-pre-wrap text-slate-900">
              {`*DAILY PROGRESS REPORT (DPR)*
Site: Baner Commercial Complex
Date: Sunday, 18 Oct 2026
Supervisor: Santosh Shinde

*1. LABOR STRENGTH:*
Total Workers: ${banerLaborSummary.total} (Company: ${banerLaborSummary.company})
${banerLabor
  .map(
    (p) =>
      `• ${p.workType}: ${p.rows.reduce((s, r) => s + (Number(r.count) || 0), 0)}`,
  )
  .join("\n")}

*2. WORK UPDATES (${banerWorkLogs.length}):*
${banerWorkLogs.map((w, i) => `${i + 1}. ${w.description}`).join("\n")}

*3. MATERIAL CHALLANS:* ${banerChallans.length} Logged
*4. SITE CASH OUT:* Rs. ${banerTodayTotalCashOut.toLocaleString("en-IN")}`}
            </pre>
            <button
              onClick={() => {
                setShowShareDprModal(false);
                triggerToast("DPR Summary copied! Ready to paste on WhatsApp.");
              }}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase rounded-xl flex items-center justify-center gap-2"
            >
              <Copy className="w-4 h-4" /> Copy & Share to Contractor WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* 4. Contractor Screen 2AA: Work Description & Photos Popup */}
      {conPhotoPopupLog && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white border-2 border-slate-900 rounded-2xl max-w-md w-full p-4 space-y-3 max-h-[88vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-2">
              <span className="text-xs font-black uppercase text-slate-900">
                WORK DESCRIPTION
              </span>
              <button
                onClick={() => setConPhotoPopupLog(null)}
                className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center font-black"
              >
                ✕
              </button>
            </div>
            <div className="text-right text-[11px] font-mono text-slate-500">
              {conPhotoPopupLog.time}
            </div>
            <p className="text-xs font-semibold text-slate-900 leading-relaxed">
              {conPhotoPopupLog.description}
            </p>
            <div className="space-y-3 pt-1">
              {conPhotoPopupLog.photos.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Work ${i + 1}`}
                  className="w-full rounded-xl border-2 border-slate-900"
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 5. Contractor Screen 2BA: Work-Wise Labor Breakdown Popup */}
      {showLaborBreakdownModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white border-2 border-slate-900 rounded-2xl max-w-md w-full p-4 space-y-3 max-h-[88vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-2">
              <span className="text-xs font-black uppercase text-slate-900">
                WORK-WISE LABOR BREAKDOWN
              </span>
              <button
                onClick={() => setShowLaborBreakdownModal(false)}
                className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center font-black"
              >
                ✕
              </button>
            </div>

            {laborPackages
              .filter((pkg) => pkg.siteId === selectedSiteId)
              .map((pkg) => {
                const sub = pkg.rows.reduce(
                  (s, r) => s + (Number(r.count) || 0),
                  0,
                );
                return (
                  <div
                    key={pkg.id}
                    className="border-2 border-slate-900 rounded-xl p-3 space-y-2 bg-slate-50"
                  >
                    <div className="text-xs font-black text-blue-950 border-b border-slate-300 pb-1.5">
                      {pkg.workType}
                    </div>
                    <div className="space-y-1 text-xs">
                      {pkg.rows.map((r) => (
                        <div key={r.id} className="flex justify-between">
                          <span className="text-slate-700 font-semibold">
                            • {r.trade}
                          </span>
                          <span className="font-mono font-black text-slate-900">
                            : {String(r.count).padStart(2, "0")}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-slate-300 pt-1.5 flex justify-between text-xs font-black">
                      <span>Subtotal:</span>
                      <span>{String(sub).padStart(2, "0")} Workers</span>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}

      {/* 6. Contractor Screen 2CA: Challan Verification HITL Popup */}
      {conVerifyChallanModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white border-2 border-slate-900 rounded-2xl max-w-md w-full p-4 space-y-3 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-2">
              <span className="text-xs font-black uppercase text-slate-900">
                CHALLAN VERIFICATION
              </span>
              <button
                onClick={() => setConVerifyChallanModal(null)}
                className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center font-black"
              >
                ✕
              </button>
            </div>

            {/* Pinch/Zoom Image Preview */}
            <div
              onClick={() => setZoomChallanImg((z) => !z)}
              className="relative border-2 border-slate-900 rounded-xl overflow-hidden bg-slate-900 cursor-zoom-in"
            >
              <img
                src={conVerifyChallanModal.imageUrl}
                alt="Physical Challan"
                className={`w-full transition-transform duration-200 ${
                  zoomChallanImg ? "scale-150" : "scale-100"
                }`}
              />
              <span className="absolute bottom-2 right-2 px-2 py-1 rounded bg-black/75 text-white text-[10px] font-bold flex items-center gap-1">
                {zoomChallanImg ? (
                  <ZoomOut className="w-3 h-3" />
                ) : (
                  <ZoomIn className="w-3 h-3" />
                )}
                {zoomChallanImg ? "Tap to Reset" : "Tap to Zoom Slip"}
              </span>
            </div>

            {/* Editable HITL Fields */}
            <div className="space-y-2.5 text-xs">
              <div>
                <label className="block font-black text-slate-700 mb-1">
                  VENDOR NAME [✎]
                </label>
                <input
                  type="text"
                  value={conVerifyChallanModal.vendorName}
                  onChange={(e) =>
                    setConVerifyChallanModal({
                      ...conVerifyChallanModal,
                      vendorName: e.target.value,
                    })
                  }
                  className="w-full border-2 border-slate-900 rounded-lg px-2.5 py-1.5 font-bold"
                />
                <input
                  type="text"
                  value={conVerifyChallanModal.vendorMarathi || ""}
                  onChange={(e) =>
                    setConVerifyChallanModal({
                      ...conVerifyChallanModal,
                      vendorMarathi: e.target.value,
                    })
                  }
                  placeholder="स्थानिक नाव (मराठी / हिंदी)"
                  className="w-full border border-slate-400 rounded-lg px-2.5 py-1 mt-1 text-slate-700"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-black text-slate-700 mb-1">
                    CHALLAN NO [✎]
                  </label>
                  <input
                    type="text"
                    value={conVerifyChallanModal.challanNo}
                    onChange={(e) =>
                      setConVerifyChallanModal({
                        ...conVerifyChallanModal,
                        challanNo: e.target.value,
                      })
                    }
                    className="w-full border-2 border-slate-900 rounded-lg px-2.5 py-1.5 font-mono font-bold"
                  />
                </div>
                <div>
                  <label className="block font-black text-slate-700 mb-1">
                    VEHICLE NO [✎]
                  </label>
                  <input
                    type="text"
                    value={conVerifyChallanModal.vehicleNo}
                    onChange={(e) =>
                      setConVerifyChallanModal({
                        ...conVerifyChallanModal,
                        vehicleNo: e.target.value,
                      })
                    }
                    className="w-full border-2 border-slate-900 rounded-lg px-2.5 py-1.5 font-mono font-bold"
                  />
                </div>
              </div>

              <div>
                <label className="block font-black text-slate-700 mb-1">
                  CHALLAN DATE [✎]
                </label>
                <input
                  type="text"
                  value={conVerifyChallanModal.challanDate}
                  onChange={(e) =>
                    setConVerifyChallanModal({
                      ...conVerifyChallanModal,
                      challanDate: e.target.value,
                    })
                  }
                  className="w-full border-2 border-slate-900 rounded-lg px-2.5 py-1.5 font-bold"
                />
              </div>

              <div>
                <label className="block font-black text-slate-700 mb-1">
                  PARTICULARS [✎]
                </label>
                <textarea
                  rows={3}
                  value={conVerifyChallanModal.particulars}
                  onChange={(e) =>
                    setConVerifyChallanModal({
                      ...conVerifyChallanModal,
                      particulars: e.target.value,
                    })
                  }
                  className="w-full border-2 border-slate-900 rounded-lg p-2 font-semibold"
                />
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={() =>
                    handleContractorDeleteChallan(conVerifyChallanModal.id)
                  }
                  className="py-2.5 rounded-xl bg-red-100 hover:bg-red-200 border-2 border-red-700 text-red-900 font-black"
                >
                  [ 🗑️ DELETE ]
                </button>
                <button
                  onClick={() =>
                    handleContractorVerifyChallan(conVerifyChallanModal)
                  }
                  className="py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 border-2 border-slate-900 text-white font-black"
                >
                  [ 🔒 Verify ]
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 7. Expense View / Edit Popup (Supervisor Spec Screen 1A + Contractor Proof Viewer) */}
      {viewingExpenseModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white border-2 border-slate-900 rounded-2xl max-w-md w-full p-4 space-y-3 max-h-[88vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-2">
              <span className="text-xs font-black uppercase text-slate-900">
                VIEW EXPENSE
              </span>
              <button
                onClick={() => setViewingExpenseModal(null)}
                className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center font-black"
              >
                ✕
              </button>
            </div>

            <div>
              <div className="text-[11px] font-black uppercase text-slate-600 mb-1">
                ATTACHED PHOTOS ({viewingExpenseModal.photos.length})
              </div>
              {viewingExpenseModal.photos.length === 0 ? (
                <div className="p-4 border border-dashed border-slate-400 rounded-xl text-center text-xs text-slate-500">
                  No photos attached to this expense
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  {viewingExpenseModal.photos.map((p, i) => (
                    <img
                      key={i}
                      src={p}
                      alt={`Expense Proof ${i + 1}`}
                      className="w-full h-32 object-cover rounded-xl border-2 border-slate-900"
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-2 text-xs bg-slate-50 p-3 rounded-xl border border-slate-200">
              <div>
                <span className="text-slate-500 block font-bold">AMOUNT</span>
                <span className="text-base font-black text-slate-900">
                  ₹ {viewingExpenseModal.amount.toLocaleString("en-IN")}
                </span>
              </div>
              <div>
                <span className="text-slate-500 block font-bold">
                  WHO PAID FOR THIS?
                </span>
                <span className="font-bold text-slate-900">
                  {viewingExpenseModal.paidBy}
                </span>
              </div>
              <div>
                <span className="text-slate-500 block font-bold">
                  EXPENSE DATE
                </span>
                <span className="font-bold text-slate-900">
                  {viewingExpenseModal.invoiceDate}
                </span>
              </div>
              <div>
                <span className="text-slate-500 block font-bold">
                  PAYMENT PURPOSE
                </span>
                <span className="font-bold text-slate-900">
                  {viewingExpenseModal.purpose}
                </span>
              </div>
            </div>

            {authRole === "supervisor" && (
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setEditingExpenseId(viewingExpenseModal.id);
                    setExpAmount(String(viewingExpenseModal.amount));
                    setExpPaidTo(viewingExpenseModal.paidTo);
                    setExpPurpose(viewingExpenseModal.purpose);
                    setExpPaidBy(viewingExpenseModal.paidBy);
                    setExpInvoiceDate(viewingExpenseModal.invoiceDate);
                    setExpPhotos(viewingExpenseModal.photos);
                    setViewingExpenseModal(null);
                    setSupScreen("EXPENSES");
                  }}
                  className="py-2.5 rounded-xl bg-amber-400 border-2 border-slate-900 font-black text-xs"
                >
                  [ ✏️ Edit ]
                </button>
                <button
                  onClick={() => setViewingExpenseModal(null)}
                  className="py-2.5 rounded-xl bg-slate-900 text-white font-black text-xs"
                >
                  [ 💾 Done ]
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );

  // ============================================================================
  // ROOT LAYOUT: DESKTOP UTILITY BAR + CENTERED MOBILE PHONE FRAME
  // ============================================================================
  // ROOT LAYOUT: PRODUCTION MOBILE-FIRST VIEWPORT (100dvh)
  // ============================================================================

  return (
    <div className="h-[100dvh] w-full overflow-hidden bg-slate-100 sm:bg-slate-950 flex flex-col text-left overscroll-none">
      {renderDesktopUtilityBar()}

      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed top-4 sm:top-14 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-amber-300 border-2 border-amber-400 px-4 py-2 rounded-full shadow-2xl text-xs font-extrabold whitespace-nowrap max-w-[92vw] truncate">
          {toastMessage}
        </div>
      )}

      {/* Full-bleed edge-to-edge on real phones; realistic 390x660 mobile browser viewport on desktop */}
      <div className="flex-1 min-h-0 flex items-center justify-center sm:p-4">
        <div className="w-full h-full sm:w-[390px] sm:h-[660px] sm:max-h-[calc(100dvh-5rem)] bg-white sm:rounded-2xl sm:shadow-2xl sm:border sm:border-slate-800 overflow-hidden flex flex-col relative">
          {!authRole && renderLoginScreen()}
          {authRole === "supervisor" && renderSupervisorApp()}
          {authRole === "owner" && renderContractorApp()}
        </div>
      </div>

      {renderModals()}
    </div>
  );
}
