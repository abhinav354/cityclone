var App = function(){
    this.gameProperties = new GameProperties();
    this.current = new Game(this.gameProperties);
    this.current.initialize();
};

App.prototype.update = function(interval){
    var continueObject = this.current.update(interval);
    if (!continueObject){
        this.current = this.gameProperties.next;
        this.current.initialize();
    }
    return true;
};

App.prototype.draw = function(){
    this.current.draw();
};

var getFrameFunctions = function(){
    app = new App();
    return {
        'update': function(){
            var interval = timeFeed.getInterval();
            return app.update(interval);
        },
        'draw': function(){
            app.draw();
        }
    };
};

var main = function(){
    var functions = getFrameFunctions();
    var tickFun = function(){
        var cont = functions.update();
        functions.draw();
        if (cont){
            requestAnimFrame(tickFun, canvas);
        }
    };
    tickFun();
};

window.onload = main;
