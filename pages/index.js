import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>WhatsApp by papa Dzela ✉</title>
        <meta name="description" content="Tata igrice" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
    </div>
  );
}
