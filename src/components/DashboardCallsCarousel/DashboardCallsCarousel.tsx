import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import DashboardCallsCarouselCell from "./DashboardCallsCarouselCell";

interface DashboardCallsCarouselInterface {
    calls: Array<any>;
}

const DashboardCallsCarousel = ({ calls }: DashboardCallsCarouselInterface) => {

    const responsive = {

        stage_7: {
            // the naming can be any, depends on you.
            breakpoint: { max: 3000, min: 1800 },
            items: 5
        },
        stage_6: {
            // the naming can be any, depends on you.
            breakpoint: { max: 1800, min: 1400 },
            items: 4
        },
        stage_5: {
            // the naming can be any, depends on you.
            breakpoint: { max: 1400, min: 1100 },
            items: 3
        },
        stage_4: {
            // the naming can be any, depends on you.
            breakpoint: { max: 1100, min: 875 },
            items: 2
        },
        stage_3: {
            breakpoint: { max: 875, min: 768 },
            items: 1
        },
        stage_2: {
            breakpoint: { max: 768, min: 600 },
            items: 2
        },
        stage_1: {
            breakpoint: { max: 600, min: 0 },
            items: 1
        }
    };

    return (
        <div className="h-min w-full flex flex-col gap-5">
            <h2 className="text-primary_color text-2xl font-bold">Últimas Chamadas Recebidas</h2>
            <Carousel
                className="flex items-center"
                arrows
                pauseOnHover
                centerMode
                rewindWithAnimation
                draggable
                autoPlay
                responsive={responsive}
                autoPlaySpeed={5000}
                transitionDuration={500}>
                    {calls.map((call, index) => <DashboardCallsCarouselCell key={index} call={call} />)}
            </Carousel>
        </div>
    )
}

export default DashboardCallsCarousel;