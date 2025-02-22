"use strict";

{
	globalThis.C3.Plugins.MassiveCube_LengthJS.Exps =
	{
		getString() {
			if(typeof this.lngvalue !== "undefined") {
				return this.lngvalue["getString"]();
			} else {
				return "";
			}
		},
		getUnit() {
			if(typeof this.lngvalue !== "undefined") {
				return this.lngvalue["getUnit"]();
			} else {
				return "";
			}
		},
		getValue() {
			if(typeof this.lngvalue !== "undefined") {
				return this.lngvalue["getValue"]();
			} else {
				return 0;
			}
		}
	};
}