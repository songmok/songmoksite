
const queryClient = new QueryClient();
export const ReactQueryProvider = (children) => {
  return (
    <QueryClientProvider client={queryClient}></QueryClientProvider>
  )
};
