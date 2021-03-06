//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("mythings.visitortag.v1.Tag", {
	config: {
		/*DATA*/
		name: "Visitor Tag",
		async: true,
		description: "This tag should be placed on ALL pages",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "${subdomain}.mythings.com/c.aspx?atok=${token}",
		usesDocWrite: true,
		upgradeable: true,
		parameters: [{
			name: "myThings Advertiser Token",
			description: "Value of mtAdvertiserToken",
			token: "token",
			uv: ""
		}, {
			name: "myThings Subdomain",
			description: "subdomian provided for tracking",
			token: "subdomain",
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
		window._mt_ready = function() {
			if (typeof(MyThings) !== "undefined") {
				MyThings.Track({
					EventType: MyThings.Event.Visit,
					Action: "300"
				});
			}
		};

		window.mtHost = (("https:" == document.location.protocol) ? "https://" +
			this.valueForToken("subdomain") : "http://" +
			this.valueForToken("subdomain")) + ".mythings.com";
		window.mtAdvertiserToken = "" + this.valueForToken("token");
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});