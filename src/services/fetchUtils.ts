export function fetchWithRetry(
  url: RequestInfo | URL,
  options: RequestInit = {},
  retries = 3,
  delay = 1000
): Promise<Response> {
  return new Promise(async (resolve, reject) => {
    for (let i = 0; i < retries; i++) {
      try {
        const response = await fetch(url, options);

        if (response.ok) {
          resolve(response);
          return;
        }

        throw new Error(`Request failed with status ${response.status}`);
      } catch (error) {
        if (i < retries - 1) {
          await new Promise((resolve) => setTimeout(resolve, delay));
          console.log(
            `Retrying fetch request (${i + 1} of ${retries - 1} retries)...`
          );
        } else {
          reject(error);
          return;
        }
      }
    }
  });
}
