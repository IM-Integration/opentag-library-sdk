//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("smartfocus.productpage.v1.Tag", {
	config: {
		/*DATA*/
		name: "Product Page",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "js.advisor.smartfocus.com/advisor.min.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Product SKU Code",
			description: "Product SKU Code",
			token: "sku",
			uv: "universal_variable.product.sku_code"
		}, {
			name: "Full Category Path",
			description: "e.g. men,shoes,trainers",
			token: "path",
			uv: ""
		}, {
			name: "div ID or Class",
			description: "div ID or Class",
			token: "selector",
			uv: ""
		}, {
			name: "Title",
			description: "e.g. Recommendations for You",
			token: "title",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		window._advisorq = window._advisorq || [];

		window._advisorq.push({
			_setConfig: {
				sku: "" + this.valueForToken("sku"),
				currentPath: "" + this.valueForToken("path")
			}
		});

		window._advisorq.push({
			_suggest: {
				code: "product",
				layout: {
					selector: "" + this.valueForToken("selector"),
					title: "" + this.valueForToken("title")
				}
			}
		});
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});