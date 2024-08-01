// MODULE
import { Suspense } from "react";
// COMPONENT
import { Layout } from "./components/layout/Layout";
function App() {
  return (
    <Suspense fallback={<div>로딩중입니다</div>}>
      <Layout />
    </Suspense>
  );
}

export default App;
