import { QueryClient } from '@tanstack/react-query';

async function throwIfResNotOk(res) {
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }
}

export async function apiRequest(url, options = {}) {
  const res = await fetch(url, {
    credentials: 'include',
    ...options,
  });
  await throwIfResNotOk(res);
  
  if (res.headers.get('content-type')?.includes('application/json')) {
    return res.json();
  }
  return res.text();
}

export const getQueryFn = (options) => {
  const { on401 = 'throw' } = options;
  
  return async ({ queryKey }) => {
    const url = Array.isArray(queryKey) ? queryKey.join('') : queryKey;
    try {
      return await apiRequest(url);
    } catch (error) {
      if (error.message.includes('401') && on401 === 'returnNull') {
        return null;
      }
      throw error;
    }
  };
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: 'throw' }),
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});