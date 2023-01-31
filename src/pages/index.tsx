import IndicadoresSection from "@/components/Pages/Index/IndicadoresSection";
import MetodologiaSection from "@/components/Pages/Index/MetodologiaSection";
import ParticipeSection from "@/components/Pages/Index/ParticipeSection";
import SoftwareLivreSection from "@/components/Pages/Index/SoftwareLivreSection";
import { PageContainer, PageWrapper } from "@/styles/Page";
import Layout from "../components/Global/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <PageWrapper>
          <PageContainer>
            <SoftwareLivreSection />
            <MetodologiaSection />
            <IndicadoresSection />
            <ParticipeSection />
          </PageContainer>
        </PageWrapper>
      </Layout>
    </>
  );
}
