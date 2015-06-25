
var Loader = (function () {
    function Loader(data) {
        var _this = this;
        this.currentDepth = 0;
        this.tempList = [];
        this.NextLoad = function () {
            _this.currentDepth = _this.currentDepth + 1;
            console.log(_this.currentDepth + " reached " + _this.Data.Depth + " Is max depth");
            if (_this.Data.Depth <= _this.currentDepth) {
                return;
            }
            _this.SortData(_this.currentDepth);
            if (_this.tempList.length == 0) {
                _this.NextLoad();
            }
            if (_this.currentDepth == 1)
                {
                    setTimeout(function(){
                        _this.LoadScripts(_this.NextLoad);
                    } , 200)
                }else{
                    _this.LoadScripts(_this.NextLoad);
                }

        };
        this.Data = data;
        this.SortData(this.currentDepth);
        this.LoadScripts(this.NextLoad);
    }
    Loader.prototype.LoadScripts = function (callback) {
        var count = this.tempList.length;
        var elem;

if(this.currentDepth == 0)
    elem    = document.getElementsByTagName('head')[0];
else
    elem    = document.getElementsByTagName('body')[0];
        var that = this;
        this.tempList.forEach(function (item) {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = item;
            elem.appendChild(script);
            script.onload = script.onreadystatechange = function (e) {
                //For IE
                if(this.readyState === undefined )
                {
                    count = count - 1;
                    if (count == 0) {
                        callback();
                    }
                }else{
                    if(this.readyState === "loaded" ){
                        console.log('IE load completed for ' + item);
                         count = count - 1;
                        if (count == 0) {
                            callback();
                        }
                    }
                }
            };
        });
    };
    Loader.prototype.SortData = function (level) {
        this.tempList.splice(0, this.tempList.length);
        var that = this;
        this.Data.Scripts.forEach(function (item) {
            if (item.level == level) {
                that.tempList.push(item.src);
            }
        });
    };
    return Loader;
})();
