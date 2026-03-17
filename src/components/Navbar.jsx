import { C } from "../constants";
import { NAV_LOGO } from "./UI";

export default function Navbar({ page, setPage, currentUser }) {
  const isAdmin = currentUser?.role === "admin";

  return (
    <nav style={{ background:C.teal800, display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 2rem", height:"62px", flexShrink:0 }}>
      <div style={{ display:"flex", alignItems:"center", gap:"10px", cursor:"pointer" }}
        onClick={() => currentUser && setPage(isAdmin ? "admin" : "profile")}>
        <NAV_LOGO />
        <span style={{ color:C.white, fontFamily:"'DM Serif Display', serif", fontSize:"18px", letterSpacing:"0.01em" }}>LakeWatch</span>
      </div>

      <div style={{ display:"flex", gap:"1.75rem", alignItems:"center" }}>
        {["Home", "About"].map(label => (
          <span key={label} style={{ fontSize:"14px", color:C.teal200, cursor:"pointer", fontWeight:"400" }}>{label}</span>
        ))}

        {isAdmin && (
          <span onClick={() => setPage("admin")} style={{ fontSize:"14px", fontWeight:"500", cursor:"pointer", color: page==="admin" ? C.teal300 : C.teal200, borderBottom: page==="admin" ? `2px solid ${C.teal300}` : "none", paddingBottom:"2px" }}>
            Admin
          </span>
        )}

        {currentUser ? (
          <span onClick={() => setPage("profile")} style={{ fontSize:"14px", fontWeight:"500", cursor:"pointer", color: page==="profile" ? C.teal300 : C.white, background: page==="profile" ? C.teal700 : "transparent", padding:"6px 14px", borderRadius:"99px", border:`1px solid ${C.teal600}`, transition:"all 0.15s" }}>
            {currentUser.username}
          </span>
        ) : (
          <span onClick={() => setPage("login")} style={{ fontSize:"14px", cursor:"pointer", color:C.white, background:C.teal500, padding:"6px 16px", borderRadius:"99px", fontWeight:"500" }}>
            Sign In
          </span>
        )}
      </div>
    </nav>
  );
}
