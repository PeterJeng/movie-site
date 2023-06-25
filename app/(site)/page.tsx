import ClientOnly from "@/components/ClientOnly";
import Main from "./Main";


const Home = () => {
  return (
    <ClientOnly>
        <Main />
    </ClientOnly>
  );
    
}

export default Home;