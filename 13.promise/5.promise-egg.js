function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  //return Promise.reject(new Error('치킨을 가져올 수 없음!!'))
  return Promise.resolve(`🥚 => 🐔`);
}
getChicken()
  .then((chicken) => fetchEgg(chicken))
  .then((egg) => fryEgg(egg))
  .then((friedEgg) => console.log(friedEgg))
  .catch((error) => console.log(error.name));

getChicken()
  .catch(() => "🐓")
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log);

fetchEgg("🐔").then((egg) => console.log(egg));
