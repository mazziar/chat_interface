import { AppBar, Toolbar, Typography, IconButton, Tooltip } from "@mui/material";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/core/hooks";
import { changeTheme } from "@/core/features/settingSlice";
import { removeToken, removeName } from "@/core/features/sessionSlice";

export default function Header() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const isDarkTheme = useAppSelector((state) => state.settingSlice.darkTheme === 'ok');
  const token = useAppSelector((state) => state.sessionSlice.token);

  const handleLogout = () => {
    dispatch(removeToken());
    dispatch(removeName());
    router.push('/');
  };

  return (
    <AppBar position="static" color="primary" elevation={0} sx={{ borderRadius: 2 }} >
      <Toolbar >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Doodle chat
        </Typography>

        {token && (
          <Tooltip title="Logout">
            <IconButton
              onClick={handleLogout}
              color="inherit"
              aria-label="Logout"
            >
              🚪
            </IconButton>
          </Tooltip>
        )}

        <Tooltip title={isDarkTheme ? 'Switch to light mode' : 'Switch to dark mode'}>
          <IconButton
            onClick={() => dispatch(changeTheme())}
            color="inherit"
            aria-label="Toggle dark theme"
          >
            {isDarkTheme ? '☀️' : '🌙'}
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}
