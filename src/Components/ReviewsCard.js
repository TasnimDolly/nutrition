import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";

export default function ReviewsCard({ name, age, review }) {
  return (
    <Container
      sx={{
        height: "55vh",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Avatar
        sx={{ margin: "7px auto", width: "100px", height: "100px" }}
        src="/broken-image.jpg"
      />
      <Typography variant="h4" gutterBottom sx={{ color: "text.hover" }}>
        {name}
      </Typography>
      <Typography variant="h6" gutterBottom>
        {age}
      </Typography>
      <Rating name="read-only" value="5" readOnly />
      <Typography padding={3}>{review}</Typography>
    </Container>
  );
}
