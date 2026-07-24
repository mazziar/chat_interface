import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/core/hooks";
import { changeTheme } from "@/core/features/settingSlice";

export default function Header() {
  const dispatch = useAppDispatch();
  const isDarkTheme = useAppSelector((state) => state.settingSlice.darkTheme === 'ok');

  return (
    <AppBar position="static" color="primary" elevation={0} sx={{ borderRadius: 2 }} >
      <Toolbar >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Doodle chat
        </Typography>

        <IconButton
          onClick={() => dispatch(changeTheme())}
          color="inherit"
          aria-label="Toggle dark theme"
        >
          {isDarkTheme ? '☀️' : '🌙'}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
