import { configureStore } from "@reduxjs/toolkit";
import DashboardSlice from "./Features/Dashboard";
import ToggleSlice from "./Features/SidebarToggle";
import ThemeSlice from "./Features/Theme";
import TokenSlice  from "./Features/Token";

export default configureStore({
  reducer: {
    token: TokenSlice,
    dashboard: DashboardSlice,
    toggle: ToggleSlice,
    theme: ThemeSlice,
  },
});
