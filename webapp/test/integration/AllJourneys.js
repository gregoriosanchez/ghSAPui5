/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"ui16/productos/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"ui16/productos/test/integration/pages/Worklist",
	"ui16/productos/test/integration/pages/Object",
	"ui16/productos/test/integration/pages/NotFound",
	"ui16/productos/test/integration/pages/Browser",
	"ui16/productos/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "ui16.productos.view."
	});

	sap.ui.require([
		"ui16/productos/test/integration/WorklistJourney",
		"ui16/productos/test/integration/ObjectJourney",
		"ui16/productos/test/integration/NavigationJourney",
		"ui16/productos/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});