import PostsComponent from "./components/PostsComponent";
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css'

  const queryClient = new QueryClient();
  const App = () => {

  function App() {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">React Query Demo</h1>
        <PostsComponent />
      </div>
      );
    };

    return (
      <QueryClientProvider client={queryClient}>
        <PostsComponent />
      </QueryClientProvider>
  );
}

export default App;
