import MainPage from "@/components/MainPage";
import { auth0 } from "@/lib/auth0";

async function page() {
  const session = await auth0.getSession();
  return <MainPage session={session} />;
}
export default page;
