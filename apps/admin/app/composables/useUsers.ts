const Me = async () => {
  const result = await useRpc().api.users.me.$get();
  const { payload, error } = await result.json();
  return { payload, error };
};

const Login = async (email: string, password: string) => {
  const result = await useRpc().api.auth.login.$post({ json: { email, password } });
  const { payload, error } = await result.json();

  if (payload) useAppStore().setToken(payload.token);
  return { payload, error };
};

export const useUsers = {
  Me,
  Login,
};
