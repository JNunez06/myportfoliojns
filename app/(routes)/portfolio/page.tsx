import { dataPortfolio } from "@/data";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import PortfolioBox from "@/components/portfolio-box";
import FuturisticPortfolioSlider from "@/components/portfolio-slider";



const PortfolioPage = () => {

    return (
        <ContainerPage offsetTop="mt-40">
            <TransitionPage />
            <div className="flex flex-col pb-10">
                <h1 className=" text-2xl text-center md:text-4xl md:mb-5">Mis últimos <span className="font-bold text-secondary">trabajos realizados</span></h1>
                 <FuturisticPortfolioSlider data={dataPortfolio} />
            </div>
        </ContainerPage>
    );
}

export default PortfolioPage;