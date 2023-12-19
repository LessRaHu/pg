import React from "react";
import { Avatar, Box, Typography, styled } from "@mui/material";

// Datos de los integrantes del equipo
const teamMembers = [
  { id: 1, name: "Nombre 1", position: "Cargo 1", image: "url_imagen_1" },
  { id: 2, name: "Nombre 2", position: "Cargo 2", image: "url_imagen_2" },
  // Añade más miembros del equipo según sea necesario
];

// Estilos personalizados para el contenedor de los integrantes
const TeamContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "20px",
  background: "linear-gradient(45deg, #000000 30%, #393941 90%)", // Gradiente oscuro similar al del Drawer
  color: "white",
});

// Componente para mostrar los integrantes del equipo
const Team = () => {
  return (
    <TeamContainer>
      {teamMembers.map((member) => (
        <Box key={member.id} textAlign="center">
          <Avatar alt={member.name} src={member.image} sx={{ width: 100, height: 100, marginBottom: 2 }} />
          <Typography variant="h6">{member.name}</Typography>
          <Typography variant="body2">{member.position}</Typography>
        </Box>
      ))}
    </TeamContainer>
  );
};

export default Team;
