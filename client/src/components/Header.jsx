import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { Book } from "@mui/icons-material";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography component="h1" variant="h5" fontWeight="bold" flex={1}>
            وبلاگ
          </Typography>
          <Book />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
