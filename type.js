"use strict";

{
	const SDK = globalThis.SDK;
const PLUGIN_CLASS = SDK.Plugins.MassiveCube_LengthJS;
	
	PLUGIN_CLASS.Type = class MCubeLengthJSPluginType extends SDK.ITypeBase
	{
		constructor(sdkPlugin, iObjectType)
		{
			super(sdkPlugin, iObjectType);
		}
	};
}