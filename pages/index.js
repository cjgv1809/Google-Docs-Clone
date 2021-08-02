import Head from "next/head";
import Header from "../components/Header/Header";
import Section from "../components/Section/Section";
import { getSession, useSession } from "next-auth/client";
import Login from "../components/Login/Login";

export default function Home() {
  const [session] = useSession();

  if (!session) return <Login />;

  return (
    <div>
      <Head>
        <title>Google Docs Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Section />
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
