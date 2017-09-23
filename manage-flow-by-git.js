module.exports = function (RED) {
    function gitNode(config) {
        RED.nodes.createNode(this, config);
        this.target = config.target;
        var node = this;
        this.on('input', function (msg) {
            var s = JSON.stringify(node);
            //var s = "s";
            msg[node.target] = s;
            node.send(msg);
        });
    }
    RED.nodes.registerType('manage-flow-by-git', gitNode);
};