export const login = async (email: string, password: string) => {
  const res = await fetch("http://localhost:8000/login", {
    method: "POST",
    credentials: "include", // 🔐 importante para que se envíen las cookies
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      USERNAME: email,
      PASSWORD: password,
    }),
  });

  if (!res.ok) throw new Error("Login failed");
  return await res.json();
};
