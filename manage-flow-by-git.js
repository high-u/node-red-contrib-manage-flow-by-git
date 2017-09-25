module.exports = function (RED) {
    "use strict";
    function gitNode(n) {
        RED.nodes.createNode(this, n);
        var node = this;
        this.on('input', function (msg) {
            node.send(msg);
        });
    }
    RED.nodes.registerType('manage-flow-by-git', gitNode);
};