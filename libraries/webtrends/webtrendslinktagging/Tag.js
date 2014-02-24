//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("webtrends.webtrendslinktagging.Tag", {
	config: {
		/*DATA*/
		name: "Webtrends link tagging",
		async: true,
		description: "Designed to replace inline on click tagging. Usually you'll want one tag per link tagged. Uses jQuery selectors, so jQuery is required to exist on the page.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/webtrends.jpg",
		locationDetail: "",
		priv: false,
		url: "",
		usesDocWrite: false,
		parameters: [
		{
			name: "jQuery name",
			description: "This tag requires jQuery. Input the variable jQuery is assigned to on the page.",
			token: "jquery_name",
			uv: ""
		},
		{
			name: "jQuery selector",
			description: "The jQuery selector for the link you wish to tag. Learn about selectors here: http://bit.ly/1b6OPdn.",
			token: "selector",
			uv: ""
		},
		{
			name: "Page title",
			description: "The title of the page being linked to.",
			token: "title",
			uv: ""
		},
		{
			name: "URL path",
			description: "The URL path of the page being linked to, e.g. /about/contact",
			token: "url",
			uv: ""
		},
		{
			name: "Type",
			description: "Used to identify different types of web activity with a numeric value. See http://bit.ly/194oAXH.",
			token: "type",
			uv: ""
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

(function() {

  var $ = window["" + this.getValueForToken("jquery_name") + ""];

  $(document).ready(function() {

    $("" + this.getValueForToken("selector") + "").click(function() {
      Webtrends.multiTrack({
        element:this, 
        argsa:[
          "WT.ti", "" + this.getValueForToken("title") + "",
          "DCS.dcsuri", "" + this.getValueForToken("url") + "",
          'WT.dl', "" + this.getValueForToken("type") + ""
        ]
      });
    });
    
  });

}());


		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});
