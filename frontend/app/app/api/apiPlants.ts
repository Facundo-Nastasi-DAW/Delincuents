const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_API_PLANTS;
const apiKey = process.env.NEXT_PUBLIC_PERENUAL_API_KEY;

export async function getPlants() {
    return await fetch(`${baseUrl}/api/v2/species-list?key=${apiKey}&page=1`, {
        method: 'GET'
    });
};

export async function getPlantById(id: string) {
  return await fetch(`${baseUrl}/api/v2/species/details/${id}?key=${apiKey}`, {
    method: 'GET',
    cache: 'no-store', 
  });
}
