export default function handler(request, response) {
  if (request.method !== 'GET') {
    response.setHeader('Allow', 'GET');
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const url = process.env.SUPABASE_URL;
  const publishableKey = process.env.SUPABASE_PUBLISHABLE_KEY;

  if (!url || !publishableKey) {
    return response.status(500).json({ error: 'Supabase environment variables are not configured.' });
  }

  response.setHeader('Cache-Control', 'no-store');
  return response.status(200).json({ url, publishableKey });
}
