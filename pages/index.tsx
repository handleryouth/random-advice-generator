import type { NextPage } from "next";
import Skeleton from "react-loading-skeleton";
import { QUERY_GET_ADVICE } from "utils";
import { AdviceResponse } from "types";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import Head from "next/head";

const Home: NextPage = () => {
  const { loading, data, refetch } = useQuery<AdviceResponse>(
    QUERY_GET_ADVICE,
    {
      notifyOnNetworkStatusChange: true,
    }
  );

  return (
    <>
      <Head>
        <title>Random Advice Page</title>
        <meta name="description" content="Random Advice Web" />
        <meta name="language" content="English" />
        <meta name="author" content="Tony David" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <div
        className={`bg-dark-grayish-blue p-8 m-4 rounded-md min-w-[15rem] w-full max-w-lg `}
      >
        <div className="text-center  ">
          <h3 className="text-neon-green font-semibold">
            ADVICE #{data?.getAdvice.id ?? ""}
          </h3>
          <p className="text-light-cyan my-4 font-bold text-3xl">
            {!loading ? data?.getAdvice.advice : <Skeleton />}
          </p>
        </div>

        <div className=" relative w-full h-8 my-8 ">
          <Image
            src="/pattern-divider-desktop.svg"
            alt="pattern divider"
            layout="fill"
          />
          <Image
            src="/pattern-divider-desktop.svg"
            alt="pattern divider"
            layout="fill"
          />
        </div>

        <div className="flex items-center justify-center mt-4">
          <div
            className="bg-green-500 hover:bg-blue-500 cursor-pointer transition-colors flex items-center justify-center rounded-full w-min p-3"
            onClick={() => refetch()}
          >
            <Image
              src="/icon-dice.svg"
              alt="dice"
              layout="fixed"
              width="30px"
              height="30px"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
