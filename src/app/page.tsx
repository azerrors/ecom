import { Page } from "@/components/Page";
import { BrandsAndPartners } from "@/widgets/BrandsAndPartners";
import { ClubsAndCashBacks } from "@/widgets/ClubsAndCashbacks";
import Footer from "@/widgets/Footer";

export default function Home() {
  return (
    <Page>
      {/* <BrandsAndPartners /> */}
      <ClubsAndCashBacks />
      <Footer />
    </Page>
  );
}
