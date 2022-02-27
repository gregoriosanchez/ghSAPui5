sap.ui.define([
		"ui16/productos/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("ui16.productos.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);