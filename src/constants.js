export const C = {
  teal900: "#0a2e2a",
  teal800: "#0f3d37",
  teal700: "#145c54",
  teal600: "#1a7a6f",
  teal500: "#1f9b8d",
  teal400: "#2bbfaf",
  teal300: "#5cd4c6",
  teal200: "#9de8e0",
  teal100: "#d0f5f1",
  teal50:  "#edfbf9",
  sand:    "#f5f2eb",
  sandDark:"#e8e3d8",
  white:   "#ffffff",
  ink:     "#0d1f1e",
  ink2:    "#2a3d3b",
  ink3:    "#4a5e5c",
  ink4:    "#7a9290",
  red:     "#c0392b",
  redBg:   "#fdf2f1",
  green:   "#1a7a4a",
  greenBg: "#f0faf4",
};

export const css = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@400;500;600&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'DM Sans', sans-serif; background: ${C.sand}; color: ${C.ink}; }
  input { font-family: 'DM Sans', sans-serif; }
  button { font-family: 'DM Sans', sans-serif; }
  .page-fade { animation: fadeUp 0.4s ease both; }
  @keyframes fadeUp { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
  .card-hover { transition: box-shadow 0.2s, transform 0.2s; cursor: pointer; }
  .card-hover:hover { box-shadow: 0 4px 20px rgba(10,46,42,0.12); transform: translateY(-1px); }
  .action-btn { transition: opacity 0.15s; }
  .action-btn:hover { opacity: 0.7; }
  .pill { display:inline-flex; align-items:center; padding: 3px 10px; border-radius:99px; font-size:12px; font-weight:500; }
`;

export const mockReports = [
  { id:1, username:"lakeWatcher99",  comment:"Algae bloom spotted near the east bank, quite dense.",   date:"10/02/2026", status:"pending" },
  { id:2, username:"enviroUser42",   comment:"Water clarity looks much better than last month.",         date:"10/02/2026", status:"pending" },
  { id:3, username:"sampleUser1234", comment:"Noticed some unusual foam near the inlet pipes.",          date:"09/30/2026", status:"pending" },
  { id:4, username:"lakeWatcher99",  comment:"Temperature reading was 18°C at the surface today.",       date:"09/28/2026", status:"pending" },
];

export const mockSavedLocations = [
  { id:1, name:"Elk Island Lake", algae:"Green Algae",      level:"Moderate", ph:"7.2", temp:"16°C" },
  { id:2, name:"Beaverhill Lake", algae:"Blue-Green Algae", level:"High",     ph:"8.1", temp:"19°C" },
  { id:3, name:"Whitemud Creek",  algae:"Diatom",           level:"Low",      ph:"6.9", temp:"14°C" },
];

export const mockComments = [
  { id:1, location:"Elk Island Lake", date:"10/02/2026", comment:"Caught a shark last week on the north side. Very nice." },
  { id:2, location:"Beaverhill Lake", date:"09/28/2026", comment:"Water looks cleaner than expected for this time of year." },
  { id:3, location:"Whitemud Creek",  date:"09/20/2026", comment:"Noticed increased turbidity after the rainstorm." },
];

export const levelColor = (lvl) => {
  if (lvl === "High")     return { bg:"#fff0ef", text:"#b93a2b", border:"#f5bfbb" };
  if (lvl === "Moderate") return { bg:"#fff8e6", text:"#966a00", border:"#f5d98a" };
  return                         { bg:"#edfaf4", text:"#1a7a4a", border:"#9de0bb" };
};
