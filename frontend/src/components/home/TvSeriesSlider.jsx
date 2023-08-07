import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";
import NextArrow from "./NextArrow";
import PrewArrow from "./PrewArrow";
import "../styles/Slider.css";

let slidesToShow = 6;

function PrevArrowComp(props) {
    const { className, onClick, currentSlide } = props;
    return (
        <>
            {currentSlide !== 0 && (
                <div className={className} onClick={onClick}>
                    <PrewArrow />
                </div>
            )}
        </>
    );
}

function NextArrowComp(props) {
    const { className, onClick, slideCount, currentSlide } = props;
    return (
        <>
            {currentSlide !== slideCount - slidesToShow && (
                <div className={className} onClick={onClick}>
                    <NextArrow />
                </div>
            )}
        </>
    );
}

export default function TvSeriesSlider() {
    const [series, setSeries] = useState([]);

    const sliderRef = useRef(null);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}`)
            .then((res) => res.json())
            .then(data => {
                setSeries(data.results);
            })
    }, [])

    const settings = {
        infinite: true,
        slidesToShow: slidesToShow,
        slidesToScroll: 6,
        arrows: false,
        useTransform: false,
        touchMove: false,
        nextArrow: <NextArrowComp />,
        prevArrow: <PrevArrowComp />,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 1255,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            }
        ],
    };

    return (
        <div className="container">
            <h2 className="movie-header">Diziler</h2>
            <div className="slider">
                <div onClick={() => sliderRef.current?.slickPrev()}>
                    <PrevArrowComp />
                </div>
                <div onClick={() => sliderRef.current?.slickNext()}>
                    <NextArrowComp />
                </div>
                <Slider {...settings} ref={sliderRef}> 
                    {series?.map((movieReq) =>
                        <MovieCard key={movieReq.id} {...movieReq} />)
                    }
                </Slider>
            </div>
        </div>
    )
}
