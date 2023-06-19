import getCurrentUser from "@/actions/getCurrentUser";
import Navbar from "@/components/navbar/Navbar";

const Home = async () => {
  const currentUser = await getCurrentUser();

  return (
    <>
      <Navbar currentUser={currentUser} />
      <h1 className="text-4xl text-red-500">Netflix</h1>
    </>
  )
}

export default Home;