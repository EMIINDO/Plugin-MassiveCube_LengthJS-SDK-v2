"use strict";

{
	globalThis.C3.Plugins.MassiveCube_LengthJS.Acts =
	{
		setupValue(val,unit) {
			this.lngvalue = undefined;
			let lst = this.list[unit];
			this.lngvalue = this.lengthjs(val, lst);
		},
		toValue(unit) {
			if(typeof this.lngvalue !== "undefined") {
				let lst = this.list[unit];
				this.lngvalue = this.lngvalue["to"](lst);
			}
		},
		addValue(val,unit) {
			if(typeof this.lngvalue !== "undefined") {
				let lst = this.list[unit];
				this.lngvalue = this.lngvalue["add"](val, lst);
			}
		},
		toPrecision(val) {
			if(typeof this.lngvalue !== "undefined") {
				this.lngvalue = this.lngvalue["toPrecision"](val);
			}
		}
	};
}