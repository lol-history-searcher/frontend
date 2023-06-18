import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { nickname } = context.query;
  return { props: { nickname } };
};

const SummonerPage: NextPage<any> = ({ nickname }) => {
  return <div>{nickname} 님의 전적검색 결과 페이지</div>;
};

export default SummonerPage;
