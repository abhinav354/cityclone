/*jshint -W099*/
/* global _*/


var ROOT_THREE = Math.sqrt(3);

var HexCell = function(rect){
    this.image = getImage('hex');
    this.activeImage = getImage('activeHex');
    this.rect = rect;
    this.active = false;
};

HexCell.prototype.draw = function(i, j){
    ctx.drawImage(this.active ? this.activeImage : this.image, this.rect[0], this.rect[1]);
};

var HexMap = function(side, rows, columns, create){
    var dx = side * 1.5;
    var dy = side * Math.sqrt(3);
    this.hexMap = [];
    for (var i = 0; i < rows; i++){
        this.hexMap.push([]);
        for (var j = 0; j < columns; j++){
            var offset = (j % 2) ? dy / 2 : 0;
            this.hexMap[i].push(create(i, j, [j * dx - side, i * dy + offset - dy / 2, side * 2, dy]));
        }
    }
    this.side = side;
};

HexMap.prototype.posOffset = function(i, j, dir){
    var offsetDicts = [
        [
            [0, 0],
            [-1, 0],
            [-1, 1],
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, -1]
        ],
        [
            [0, 0],
            [-1, 0],
            [0, 1],
            [1, 1],
            [1, 0],
            [1, -1],
            [0, -1]
        ]
    ];
    var offset = offsetDicts[j % 2][dir];
    return [i + offset[0], j + offset[1]];
};

HexMap.prototype.cellOffset = function(i, j, dir){
    var offsetPos = this.posOffset(i, j, dir);
    return this.hexMap[offsetPos[0]][offsetPos[1]];
};

HexMap.prototype.convertPos = function(pos){
    for (var i = 0; i < this.hexMap.length; i++){
        var row = this.hexMap[i];
        for (var j = 0; j < row.length; j++){
            var cell = row[j];
            if (containsPos(cell.rect, pos)){
                var relX = pos[0] - cell.rect[0];
                var relY = pos[1] - cell.rect[1];
                
                if (relX * ROOT_THREE + relY < ROOT_THREE * this.side / 2){
                    return this.posOffset(i, j, 6);
                }
                if (relX - (relY / ROOT_THREE) > 1.5 * this.side){
                    return this.posOffset(i, j, 2);
                }
                if (relX * ROOT_THREE + relY > 2.5 * ROOT_THREE * this.side){
                    return this.posOffset(i, j, 3);
                }
                if (relX - (relY / ROOT_THREE) < -1 * this.side / 2){
                    return this.posOffset(i, j, 5);
                }
                return [i, j];
            }
        }
    }
}

HexMap.prototype.draw = function(){
    for (var i = 0; i < this.hexMap.length; i++){
        for (var j = 0; j < this.hexMap[i].length; j++){
            this.hexMap[i][j].draw(i, j);
        }
    }
};

HexMap.prototype.cellForPosComp = function(posComp){
    return this.hexMap[posComp.x][posComp.y];
};

HexMap.prototype.neighbors = function(i, j){
    var that = this;
    return _.map(_.range(1, 7), function(dir){
        return that.posOffset(i, j, dir);
    });
};
