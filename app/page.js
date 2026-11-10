import Confetti from "./confetti";

export const revalidate = 60;

export default async function Home() {
  const response = await fetch("https://www.tabnews.com.br/api/v1/contents?strategy=new&per_page=1");
  const total = Number(response.headers.get("x-pagination-total-rows"));

  return (
    <main>
      <Confetti recycle={false} />
      <h1>Under Construction</h1>
      <p>
        We are right at this moment rebuilding TabNews, a place on the internet for people that work with
        technology and need to consume content with concrete value
      </p>
      <p>
        <strong>{total.toLocaleString("en-US")}</strong> contents published on TabNews
      </p>
      <a href="https://www.tabnews.com.br">Visit TabNews</a>
    </main>
  );
}
