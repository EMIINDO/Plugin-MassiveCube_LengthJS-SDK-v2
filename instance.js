"use strict";

{
	const SDK = globalThis.SDK;
    const PLUGIN_CLASS = SDK.Plugins.MassiveCube_LengthJS;
	
	PLUGIN_CLASS.Instance = class MCubeLengthJSInstance extends SDK.IInstanceBase
	{
		constructor(sdkType, inst)	{	super(sdkType, inst);	}
		
		Release()	{	}
		
		OnCreate()	{	}
		
		OnPropertyChanged(id, value){	}
		
		LoadC2Property(name, valueString)	{
			return false;
		}
	};
}