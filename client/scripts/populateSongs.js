const songs = require("./songs");
const fetch = require("node-fetch");

const API_HOST =
  process.env.API_HOST ||
  "e8j6pjc91j.execute-api.eu-west-3.amazonaws.com/production";

const API_SECRET =
  process.env.API_SECRET ||
  "2OzpOMaCAd92ROHvHqeEP6sV0swkAnrg6sBoBRNF" ||
  (() => {
    throw new Error("MISSING process.env.API_SECRET");
  })();

const computeUrl = path => `https://${API_HOST}${path}`;
const headers = { "x-api-key": API_SECRET };

async function postSong(songRaw) {
  const response = await fetch(computeUrl("/songs"), {
    method: "POST",
    body: JSON.stringify(songRaw),
    headers
  });

  if (response.status !== 201) {
    throw new Error("Status is " + response.status);
  }
  const song = await response.json();
  global.console.log("Successfully created song", song);
}

songs.forEach(postSong);
