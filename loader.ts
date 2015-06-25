String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

class Loader{

	ScriptsToLoad: Array<string> = [];
	DepsToLoad: Array<string> = [];

	public Callback: () => void;
	constructor(jSonToLoad: Array<string> , callback:any) {
		this.DivideJs(jSonToLoad);

		this.Callback = callback
		this.LoadMainScripts();
	}


	DivideJs(list: Array<string>)  {
		var that = this;
		list.forEach(function (item) {
			if (item.endsWith('|')) {
				that.DepsToLoad.push(item.replace('|' ,''));
			}
			else {

				that.ScriptsToLoad.push(item);
			}
		});
	}


	LoadMainScripts() {
		var count = this.ScriptsToLoad.length;
		var head= document.getElementsByTagName('body')[0];
		var that = this;
		this.ScriptsToLoad.forEach(function (item) {
			var script= document.createElement('script');
	      	script.type= 'text/javascript';
	      	script.src= item;
	      	head.appendChild(script);
            script.onload = function(e){
                count = count -1;
                if (count == 0) {
					setTimeout(
					that.LoadDependencies() , 100);
                }
            }
		});

	}


	LoadDependencies() {
			var count = this.DepsToLoad.length;
		var head= document.getElementsByTagName('body')[0];
		var that = this;
		this.DepsToLoad.forEach(function (item) {
			var script= document.createElement('script');
	      	script.type= 'text/javascript';
	      	script.src= item;
	      	head.appendChild(script);
            script.onload = function(e){
                count = count -1;
                if(count == 0){
					that.Callback();
                }
            }
		});

	}
}
