import React, { useEffect, useState } from "react";
import { Typography, Paper } from "@mui/material";
import mqtt from "mqtt";

export function Reportes(props) {
  const [nombrePez, setNombrePez] = useState("Trucha");
  const [tipoPlanta, setTipoPlanta] = useState("Lechuga");

  useEffect(() => {
    // Configura el cliente MQTT
    const client = mqtt.connect("mqtt://tu-servidor-mqtt", {
      username: "tu-usuario",
      password: "tu-contrasena",
    });

    // Suscripción al tópico deseado
    client.on("connect", () => {
      console.log("Conectado al servidor MQTT");
      client.subscribe("tópico/deseado");
    });

    // Manejo de mensajes recibidos
    client.on("message", (topic, message) => {
      // Actualiza los estados con los datos recibidos
      if (topic === "tópico/deseado") {
        const datos = JSON.parse(message.toString());
        setNombrePez(datos.nombrePez);
        setTipoPlanta(datos.tipoPlanta);
      }
    });

    // Limpia la suscripción al desmontar el componente
    return () => {
      client.end();
    };
  }, []); // El array vacío asegura que este efecto se ejecute solo una vez al montar el componente

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Información de Acuaponía
      </Typography>
      <Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
        <Typography variant="h6">Nombre del Pez:</Typography>
        <Typography>{nombrePez}</Typography>
      </Paper>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h6">Tipo de Planta Cultivada:</Typography>
        <Typography>{tipoPlanta}</Typography>
      </Paper>
    </div>
  );
}
