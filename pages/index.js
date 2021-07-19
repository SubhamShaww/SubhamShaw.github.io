import Head from "next/head";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Expertise from '../components/Expertise';
import RecentProjects from '../components/RecentProjects';
import db from "../firebaseConfig";

export default function Home({profileInfo, skillsInfo, projects, contacts}) {
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
                designation={profileInfo[0].designation}
            />

            <Expertise skills={skillsInfo} />
            {/* Qualifications */}


            <RecentProjects projects={projects} />

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

    const skillsObject = await db.collection("skills").get();

    const skillsInfo = skillsObject.docs.map((skills) => ({
        id: skills.id,
        ...skills.data(),
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
        props: {profileInfo, skillsInfo, projects, contacts},
        revalidate: 600,
    };
};
