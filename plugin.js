"use strict"; 
 // Porting BY EMI INDO with c3addon-ide-plus
{
	const PLUGIN_ID = "MassiveCube_LengthJS";
	// callMap Deprecated const PLUGIN_VERSION = "1.1.0.0";
	const PLUGIN_CATEGORY = "general";
	const SDK = globalThis.SDK;
const PLUGIN_CLASS = SDK.Plugins.MassiveCube_LengthJS = class MCubeLengthJSPlugin extends SDK.IPluginBase
	{
		constructor()
		{
			super(PLUGIN_ID);
			
			SDK.Lang.PushContext("plugins." + PLUGIN_ID.toLowerCase());
			
			this._info.SetName(globalThis.lang(".name"));
			this._info.SetDescription(globalThis.lang(".description"));
			// callMap Deprecated this._info.SetVersion(PLUGIN_VERSION);
			this._info.SetCategory(PLUGIN_CATEGORY);
			this._info.SetAuthor("Massive Cube");
			this._info.SetHelpUrl(globalThis.lang(".help-url"));
            this._info.SetRuntimeModuleMainScript("c3runtime/main.js");
			this._info.SetIsSingleGlobal(true);
			
			this._info.SetSupportedRuntimes(["c3"]);
			
			SDK.Lang.PushContext(".properties");
			
			this._info.SetProperties([	]);
			
			this._info.AddFileDependency({
				filename: "c3runtime/length.min.js",
				type: "external-script"
			});
			
			SDK.Lang.PopContext();
			SDK.Lang.PopContext();
		}
	};
	
	PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS);
}