import Head from "next/head";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Project from "../components/Project";
import db from "../firebaseConfig";

export default function Home({ profileInfo, projects, contacts }) {
    return (
        <div className="w-full overflow-hidden">
            <Head>
                <title>Portfolio</title>
                <meta name="description" content="Portfolio of Subham Shaw" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* body */}
            <Intro
                picture={profileInfo[0].picture}
                resume={profileInfo[0].resume}
            />

            <p className="text-3xl text-center font-black text-gray-900 mt-12">
                Recent Projects
            </p>
            <div className="flex flex-col space-y-10 p-[5%] sm:flex-row sm:space-y-0 sm:space-x-10  sm:overflow-x-scroll sm:mx-[5%]">
                {projects?.map((project) => (
                    <Project
                        key={project.id}
                        image={project.image}
                        title={project.title}
                        website={project.website}
                        github={project.github}
                    />
                ))}
            </div>

            {/* Footer */}
            <Footer
                linkedin={contacts[0].linkedin}
                github={contacts[0].github}
                gmail={contacts[0].gmail}
            />
        </div>
    );
}

export const getStaticProps = async () => {
    const profileObject = await db.collection("profile").get();

    const profileInfo = profileObject.docs.map((info) => ({
        id: info.id,
        ...info.data(),
    }));

    const projectObject = await db
        .collection("projects")
        .orderBy("added", "desc")
        .get();

    const projects = projectObject.docs.map((entry) => ({
        id: entry.id,
        ...entry.data(),
        added: String(entry.data().added),
    }));

    const contactObjects = await db.collection("contacts").get();

    const contacts = contactObjects.docs.map((contact) => ({
        id: contact.id,
        ...contact.data(),
    }));

    return {
        props: { profileInfo, projects, contacts },
        revalidate: 600,
    };
};
