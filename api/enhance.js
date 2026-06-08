const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Metodo no permitido." });
    return;
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: "Falta GROQ_API_KEY en variables de entorno." });
    return;
  }

  try {
    const { creature } = req.body || {};
    if (!creature?.parts || !creature?.description) {
      res.status(400).json({ error: "Falta la criatura generada." });
      return;
    }

    const response = await fetch(GROQ_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: process.env.GROQ_MODEL || "llama-3.3-70b-versatile",
        temperature: 0.72,
        max_completion_tokens: 1500,
        messages: [
          {
            role: "system",
            content: [
              "Eres un biologo de campo y diseñador de criaturas fantasticas para un bestiario argentino.",
              "Tu tarea es hacer que una criatura inventada sea biologicamente plausible sin quitarle fantasia.",
              "No digas que es magia generica. Explica mecanismos: organos, simbiosis, minerales, glandulas, conducta, ambiente.",
              "Escribe en español claro, util para desarrollo de videojuego y para generar imagenes."
            ].join(" ")
          },
          {
            role: "user",
            content: buildPrompt(creature)
          }
        ]
      })
    });

    const payload = await response.json();
    if (!response.ok) {
      res.status(response.status).json({ error: payload?.error?.message || "Groq devolvio un error." });
      return;
    }

    res.status(200).json({
      text: payload.choices?.[0]?.message?.content?.trim() || "",
      model: payload.model
    });
  } catch (error) {
    res.status(500).json({ error: error.message || "Error inesperado." });
  }
}

function buildPrompt(creature) {
  return `Criatura base:
${JSON.stringify(creature, null, 2)}

Genera una ficha mejorada con este formato exacto:

## Ficha naturalista
Un parrafo potente de bestiario.

## Anatomia funcional
Explica como encajan las partes animales elegidas.

## Elemento plausible
Explica como produce/usa su elemento de forma pseudo-biologica y ambiental.

## Conducta y ecosistema
Como vive, caza, se reproduce o evita depredadores en esa ecorregion argentina.

## Debilidades
Debilidades logicas por biologia, clima o territorio.

## Prompt de imagen
Un prompt visual en español, detallado, sin mencionar marcas ni estilos de artistas vivos.

## Prompt corto para juego
Una descripcion de 2 lineas para usar en un documento de diseño.`;
}
