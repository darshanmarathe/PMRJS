# PMRJS
----------
**Poor Man's Require JS alternative**

PMRJS is a cool alternative to require js it allows you to load your js files in levels 

for example 

 1. JQuery
 2. Bootstrap (As Bootstrap has a dependency of JQuery)
 3. Bootstrap UI (Which has dependency of both)

It can be easy set up with setting up a basic JSON variable 

    var ScriptDef =  {
    "Depth"  : 5,
    "Scripts" : [
        { "level"  : 0 , "src" : "https://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.0.1.js"},
               { "level"  : 0 , "src" : "https://ajax.aspnetcdn.com/ajax/modernizr/modernizr-2.0.6-development-only.js"},
                    { "level"  : 1 , "src" : "https://ajax.aspnetcdn.com/ajax/knockout/knockout-2.2.1.js"},
                    { "level"  : 2 , "src" : "https://code.jquery.com/ui/1.10.3/jquery-ui.min.js"},
                    { "level"  : 1 , "src" : "https://ajax.aspnetcdn.com/ajax/jquery.migrate/jquery-migrate-1.2.1.js"},
                    { "level"  : 3 , "src" : "http://cdn-na.infragistics.com/igniteui/2015.1/latest/js/infragistics.core.js"},
                         { "level"  : 3 , "src" : "http://cdn-na.infragistics.com/igniteui/2015.1/latest/js/infragistics.lob.js"},
        {"level" : 4 , "src" : "https://ajax.googleapis.com/ajax/libs/angularjs/1.3.16/angular.js"}


    ]

}


And it loads it automatically
Also it has power of Async Loading so you don't see Loading Symbol in the title bar after the level 0 dependencies are loaded 

Its Fast And Awesome  
Written in typescript to ensure rock solid code 
