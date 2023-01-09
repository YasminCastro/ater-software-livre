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
          </PageContainer>
        </PageWrapper>
      </Layout>
    </>
  );
}
