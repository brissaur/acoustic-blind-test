import { API_HOST, API_SECRET } from "./constants";

export enum PATH {
  blindtests = "/blindtests",
  songs = "/songs"
}

type METHODS = "GET" | "POST";

const computeUrl = (path: string) => `https://${API_HOST}${path}`;

const DEFAULT_HEADERS: HeadersInit_ = {
  "x-api-key": API_SECRET
};

export const fetchApi = async ({
  path,
  method = "GET",
  headers,
  body
}: {
  path: PATH;
  method?: METHODS;
  headers?: HeadersInit_;
  body?: BodyInit_;
}) => {
  global.console.log(method, path);
  try {
    const targetUrl = computeUrl(path);
    const result = await fetch(targetUrl, {
      method,
      body,
      headers: { ...headers, ...DEFAULT_HEADERS }
    });
    global.console.log(path, "=>", result.status);
    if (![200, 201].includes(result.status)) {
      global.console.error(result.text());
      throw new Error(`${result.status}: ${result.text()}`);
    }
    return result.json();
  } catch (e) {
    global.console.error(path, "=>", e.message);
  }
};
