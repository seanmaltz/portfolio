import React from 'react';
import ReactPlayer from 'react-player';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

const MediaCarousel = ({media}) => {

	let slides = [];
	if (media)
		for(let i=0; i<media.length; i++)
			if(media[i].indexOf(".jpg")>=0 || media[i].indexOf(".png")>=0)
				slides[i] = <div key={1} className="mediaImg"><img src={media[i]} /></div>
			else if (media[i].indexOf("youtube")>=0 || media[i].indexOf("vimeo")>=0)
				slides[i] = <div key={i} className="mediaVid"><ReactPlayer width="100%" height="100%" className="reactPlayer" url={media[i]}n /></div>

	var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToScroll: 1,
      variableWidth: true,
      rows: 1,
    };

	return (
			<Slider className="slider" {...settings}>
				{slides}
			</Slider>
	)

}

export default MediaCarousel;