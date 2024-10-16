/**
 * TrailerBox SDK is a client library for TrailerBox API.
 * @param endpoint - The endpoint of the TrailerBox API.
 */

import { hc } from "hono/client";
import type { AppRouter } from "@trailer-box/server/src/index";

interface SDKOptions {
  endpoint: string;
  onError?: () => void;
}

class SDKClient {
  private endpoint: string;
  private onError?: () => void;

  constructor({ endpoint, onError }: SDKOptions) {
    this.endpoint = endpoint;
    this.onError = onError;
  }

  public client(token?: string) {
    return hc<AppRouter>(this.endpoint, {
      fetch: async (input: RequestInfo | URL, init?: RequestInit | undefined) => {
        return fetch(input, {
          ...init,
          credentials: "include",
          headers: {
            ...init?.headers,
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }).then((res) => {
          if (res.status === 401 && this.onError) {
            this.onError();
          }
          return res;
        });
      },
    });
  }
}

export const useRpc = () => {
  const { token } = useAppStore();
  return new SDKClient({
    endpoint: useConstants().apiUrl,
    //onError: () => (window.location.href = "/"),
  }).client(token);
};
