import styled from "@emotion/styled";

export const Card = styled.div(({ theme }) => ({
  backgroundColor: theme.palette.white,
  borderRadius: theme.shapes.borderRadius,
  boxShadow: "0 4px 16px #0003",
  padding: "15px 30px",
  margin: "15px 0",
}));
