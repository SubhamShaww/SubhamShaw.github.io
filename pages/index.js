import Head from "next/head";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Project from "../components/Project";

export default function Home() {
    return (
        <div className="w-full overflow-hidden">
            <Head>
                <title>Portfolio</title>
                <meta name="description" content="Portfolio of Subham Shaw" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* body */}
            <Intro />

            <p className="text-3xl text-center font-black text-gray-900 mt-12">
                Recent Projects
            </p>
            <div className="flex flex-col space-y-10 p-[5%] sm:flex-row sm:space-y-0 sm:space-x-10  sm:overflow-x-scroll sm:mx-[5%]">
                <Project title="Amazon-clone" />
                <Project title="Google-clone" />
                <Project title="WhatsApp-clone" />
                <Project title="TMDB-clone" />
                <Project title="TMDB-clone" />
            </div>

            {/* Footer */}
            {/* footer will contain contact links and it will be sticky */}
            <Footer />
        </div>
    );
}
