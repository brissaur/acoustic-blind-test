import { API_HOST, API_SECRET } from "./constants";

type PATHS = "/songs" | "/blindtest";
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
  path: PATHS;
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
    if (result.status !== 200) {
      global.console.error(result.text());
      throw new Error(`${result.status}: ${result.text()}`);
    }
    return result.json();
  } catch (e) {
    global.console.error(path, "=>", e.message);
  }
};