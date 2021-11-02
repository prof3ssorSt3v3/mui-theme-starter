import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

export default function Sample() {
  const theme = useTheme();
  console.log(theme);

  return (
    <div>
      <Typography variant="body1" sx={{ color: theme.palette.primary.main }}>
        The Sample component {theme.palette.primary.main}
      </Typography>
    </div>
  );
}
