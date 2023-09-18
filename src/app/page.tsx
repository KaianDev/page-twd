"use client";

import { Header } from "@/components/Header";
import { CuriositySection } from "@/components/CuriositySection";
import { WhereWatchSection } from "@/components/WhereWatchSection";
import { CastSection } from "@/components/CastSection";
import { Footer } from "@/components/Footer";

const Page = () => {
    return (
        <>
            <Header />
            <CuriositySection />
            <WhereWatchSection />
            <CastSection />
            <Footer />
        </>
    );
};

export default Page;
