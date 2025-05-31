const BASE_URL = 'https://683a166d43bb370a8671cf80.mockapi.io/api/gm1/games';


export async function getGames() {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export async function getGameById(id: string) {
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
}

export async function createGame(gameData: any) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(gameData),
  });
  return res.json();
}

export async function updateGame(id: string, gameData: any) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(gameData),
  });
  return res.json();
}

export async function deleteGame(id: string) {
  const res = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
  return res.json();
}
