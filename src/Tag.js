import React from 'react';

const Tag = ({string, setTag, active}) => {
	
	var className = active ? "activeTag" : "tag";
	return (
		<span className={className} onClick={() => setTag(string)}>{"#" + string}</span> 
  	)
}

export default Tag;