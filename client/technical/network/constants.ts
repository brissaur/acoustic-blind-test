export const API_HOST =
  process.env.API_HOST ||
  "e8j6pjc91j.execute-api.eu-west-3.amazonaws.com/production";

export const API_SECRET =
  process.env.API_SECRET ||
  "2OzpOMaCAd92ROHvHqeEP6sV0swkAnrg6sBoBRNF" ||
  (() => {
    throw new Error("MISSING process.env.API_SECRET");
  })();
