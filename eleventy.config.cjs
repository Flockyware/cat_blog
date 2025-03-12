module.exports = (config)=>{

	// Markdown add-ons
	let markdownIt = require("markdown-it");
	let markdownItFootnote = require("markdown-it-footnote");
	let options = {
		html: true, // Enable HTML tags in source
		linkify: true // Autoconvert URL-like text to links
	};
	let markdownLib =  markdownIt(options).use(markdownItFootnote);
	config.setLibrary("md", markdownLib);



	// 11ty image plugin
	const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

	module.exports = function (config) {
		config.addPlugin(eleventyImageTransformPlugin);
	};




	config.addFilter('stripPostsInURL', postURL=>{
		return postURL.replace('/posts/','/');
	});



	
	// Sh sh sh. No console, only dreams now.
	config.setQuietMode(true);

	// Old layout, whoops
	config.addLayoutAlias('base-layout.njk', 'page.njk');

	// To copy through
	config.addPassthroughCopy("src/images");
	config.addPassthroughCopy("src/styles");
	/* config.addPassthroughCopy("src/styles");
	config.addPassthroughCopy("src/scripts"); 
	config.addPassthroughCopy("rss");
	config.addPassthroughCopy("src/favicon.png");
	config.addPassthroughCopy("src/CNAME"); */

	// configig file
	config.setFrontMatterParsingOptions({
		language: "yaml", // default is "yaml"
	});
	return {

		// Where?
		dir: {
			
            input: "src", // stuff it in 'src' so real root's less messy
			output: "docs", // for GitHub pages

			includes: "_includes" // includes set tu

		}, 

		// Use nunjucks, please
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk"

	};

};