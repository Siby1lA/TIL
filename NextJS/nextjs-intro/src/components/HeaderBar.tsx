import Head from "next/head";

export default function HeaderBar({ title }: any) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}
