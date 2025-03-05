import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

function PostsComponent() {
  // ✅ Ensure isError is included in the destructuring
  const { data, error, isLoading, isError } = useQuery({
      queryKey: ["posts"],
      queryFn: fetchPosts,
      cacheTime: 1000 * 60 * 10, // Keep data in cache for 10 minutes
      staleTime: 1000 * 60 * 5, // Consider fresh for 5 minutes
      refetchOnWindowFocus: false, // Don't refetch on tab switch
      keepPreviousData: true, // Keep old data while fetching new
    });
    

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>Refetch Data</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;