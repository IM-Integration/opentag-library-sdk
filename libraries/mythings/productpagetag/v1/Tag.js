//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("mythings.productpagetag.v1.Tag", {
	config: {
		/*DATA*/
		name: "Product Page Tag",
		async: true,
		description: "Only place the following tag on ALL products pages",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: true,
		upgradeable: true,
		parameters: [{
			name: "Advertiser Token",
			description: "advertiser token provided by myThings",
			token: "token",
			uv: ""
		}, {
			name: "Subdomain",
			description: "subdomain value provided by myThings",
			token: "subdomain",
			uv: ""
		}, {
			name: "Product ID",
			description: "",
			token: "productId",
			uv: "universal_variable.product.id"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		window._mt_ready = function() {
			if (typeof(MyThings) != "undefined") {
				MyThings.Track({
					EventType: MyThings.Event.Visit,
					Action: "1010",
					ProductID: "" + this.valueForToken("productId")
				});
			}
		}
		window.mtHost = (("https:" == document.location.protocol) ? "https" : "http") +
			"://" + this.valueForToken("subdomain") + ".mythings.com";
		window.mtAdvertiserToken = "" + this.valueForToken("token");
		document.write(unescape("%3Cscript src='" + mtHost + "/c.aspx?atok=" +
			mtAdvertiserToken + "' type='text/javascript'%3E%3C/script%3E"));
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