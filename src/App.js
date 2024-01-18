import { lazy, Suspense } from "react";
import Loading from "./components/loading.jsx";
const Index = lazy( () => import('./components/index.jsx'))


const App = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-[100px] font-body bg-neutral-300">
      <Suspense fallback ={<Loading />}>
        <Index />
      </Suspense> 
    </main>
  )
}

export default App;
