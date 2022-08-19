import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const query = useQuery(
    ["bad"],
    () => Promise.reject(new Error("Bad query error")),
    { retry: false }
  );

  return <div>{query.status}</div>;
}
