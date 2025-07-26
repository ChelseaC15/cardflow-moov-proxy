export default async function handler(req, res) {
  const { method, body } = req;

  try {
    const response = await fetch('https://api.moov.io/transfers', {
      method,
      headers: {
        'Authorization': `Bearer ${process.env.MOOV_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Proxy request failed', details: error.message });
  }
}
