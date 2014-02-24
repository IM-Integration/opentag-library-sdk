//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("google.googleremarketingwithcustomparameters.Tag", {
	config: {
		/*DATA*/
		name: "Google Remarketing with custom parameters",
		async: true,
		description: "The standard GA re-marketing tag, but allows for custom parameter as per the guide: http://bit.ly/14iZMqu. Return an object within an anonymous function to populate the parameters.",
		html: "\n",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Google.jpeg",
		locationDetail: "",
		priv: false,
		url: "www.googleadservices.com/pagead/conversion_async.js",
		usesDocWrite: false,
		parameters: [
		{
			name: "Google Conversion ID",
			description: "Your Google id provided in the script",
			token: "conversion_id",
			uv: ""
		},
		{
			name: "Google Conversion Label",
			description: "A alphanumeric label of your conversion tracking",
			token: "label",
			uv: ""
		},
		{
			name: "Product ID",
			description: "On a product page input the uv.product.id, on a transaction/listing, input an array of ids.",
			token: "product_id",
			uv: ""
		},
		{
			name: "Page Type",
			description: "Valid values: home, searchresults, category, product, basket, purchase, other",
			token: "page_type",
			uv: ""
		},
		{
			name: "Total value/price",
			description: "Specify the value of the product. On a basket/purchase page, this should be the total sum of items.",
			token: "total",
			uv: ""
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		/*~PRE*/
	},
	post: function() {
		/*POST*/
	window.google_trackConversion({
	  google_conversion_id: "" + this.getValueForToken("conversion_id") + "",
	  google_conversion_label: "" + this.getValueForToken("label") + "",
	  google_custom_params: {
	    ecomm_prodid: this.getValueForToken("product_id"), 
	    ecomm_pagetype: "" + this.getValueForToken("page_type") + "",
	    ecomm_totalvalue: this.getValueForToken("total")
	  },
	  google_remarketing_only: true
	});
		/*~POST*/
	}
});
