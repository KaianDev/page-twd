"use client";

import { Header } from "@/components/Header";
import { CuriositySection } from "@/components/CuriositySection";
import { WhereWatchSection } from "@/components/WhereWatchSection";
import { CastSection } from "@/components/CastSection";
import { Footer } from "@/components/Footer";
import { SeasonsSection } from "@/components/SeasonsSection";
import { ButtonToTop } from "@/components/ButtonToTop";

const Page = () => {
    return (
        <>
            <Header />
            <CuriositySection />
            <WhereWatchSection />
            <CastSection />
            <SeasonsSection />
            <Footer />
            <ButtonToTop />
        </>
    );
};

export default Page;
