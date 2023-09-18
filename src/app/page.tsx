"use client";

import { Layout } from "@/components/Layout";
import { Header } from "@/components/Header";
import { CuriositySection } from "@/components/CuriositySection";
import { WhereWatchSection } from "@/components/WhereWatchSection";
import { CastSection } from "@/components/CastSection";
import { Footer } from "@/components/Footer";
import { SeasonsSection } from "@/components/SeasonsSection";

const Page = () => {
    return (
        <Layout>
            <Header />
            <CuriositySection />
            <WhereWatchSection />
            <CastSection />
            <SeasonsSection />
            <Footer />
        </Layout>
    );
};

export default Page;
