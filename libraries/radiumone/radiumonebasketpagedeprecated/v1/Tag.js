//:include tagsdk-current.js

qubit.opentag.LibraryTag.define(
	"radiumone.radiumonebasketpagedeprecated.v1.Tag", {
		config: {
			/*DATA*/
			name: "RadiumOne - Basket Page DEPRECATED",
			async: true,
			description: "",
			html: "",
			locationDetail: "",
			isPrivate: true,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Product ID List",
				description: "An array of product ids in the basket",
				token: "order_article",
				uv: "universal_variable.basket.line_items[#].product.id"
			}]
			/*~DATA*/
		},
		script: function() {
			/*SCRIPT*/
			// Get timestamp (cachebuster)
			var time = new Date().getTime();

			// Get comma separated list
			var i = 0,
				ii = this.valueForToken("order_article").length;
			var arr = [];
			for (; i < ii; i++) {
				arr[i] = this.valueForToken("order_article")[i];
			}
			var product_id_list = arr.join(',');

			// Iframe
			iframe = document.createElement('iframe');
			iframe.src = '//rs.gwallet.com/r1/pixel/x6035r' + time + '?order_article=' +
				product_id_list;
			iframe.width = 1;
			iframe.height = 1;
			iframe.frameBorder = 0;
			iframe.marginWidth = 0;
			iframe.marginHeight = 0;
			iframe.scrolling = 'no';
			document.body.appendChild(iframe);
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