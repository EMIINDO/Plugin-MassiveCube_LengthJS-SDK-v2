"use strict";

{
	globalThis.C3.Plugins.MassiveCube_LengthJS.Instance = class MCubeLengthJSInstance extends globalThis.ISDKInstanceBase
	{
		constructor()
		{
			super();

            const properties = this._getInitProperties();
			if (properties){	}

			this.lengthjs = window["length"];

			this.list = ["pm","nm","um","mm","cm","dm","m","dam","hm","km","nmi","ft","in","yd","fm","mi","ld","au","ly","pc"];

			this.lngvalue;
		}
		
		_release()	{	super._release();	}
		_saveToJson()	{	return {	};	}
		_loadFromJson(o)	{	}
	};
}