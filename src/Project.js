import React from 'react';
import MediaCarousel from './MediaCarousel.js';
import Tag from './Tag.js';

//name, description, images/video, category, tags, link
const Project = ({content, setTag}) => {
	let headerLeft, headerRight;
	if (content.link)
	{
		headerLeft = <div className="headerOuter"></div>
		headerRight = <div className="headerOuter"><a href={content.link}>{content.linkText}</a></div>
	}
	const tags = content.tags ? content.tags.map((tag) => <Tag key={tag} string={tag} setTag={setTag}/>).sort((a, b) => a.props.string.localeCompare(b.props.string)) : null;

	return (
	  	<div className="Project">
	    	<header className="prHeader">
	    		{headerLeft}
	    		<h1>{content.title}</h1>
	    		{headerRight}
	    	</header>
		    <div className="prDescription">
		    	<p>{content.description}</p>
		    </div>
		    <MediaCarousel media={content.media} />
	    	<div className="prTags">
	    		{tags}
	    	</div>
	    </div>
  	)
}

export default Project;