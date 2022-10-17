export async function getPokemon() {
  const data = await fetch("http://localhost:8080/api/pokemon/get");
  return await data.json();
}
export function postPokemon(name) {
  fetch("http://localhost:8080/api/pokemon/post", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });
}
