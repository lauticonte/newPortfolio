export default async function handler(req, res) {
    try {
      const response = await fetch("https://truco.contelautaro.com.ar/ads.txt");
      const originalText = await response.text();
  
      // Por si acaso, asegurate de que tenga la línea de Google (si no la tiene el original)
      const extraLine = "google.com, pub-3361247486635932, DIRECT, f08c47fec0942fa0";
  
      // Agregarla solo si no está ya incluida
      const finalText = originalText.includes(extraLine)
        ? originalText
        : `${originalText.trim()}\n${extraLine}`;
  
      res.setHeader("Content-Type", "text/plain");
      res.status(200).send(finalText);
    } catch (error) {
      res.status(500).send("Error al obtener el ads.txt");
    }
  }
  