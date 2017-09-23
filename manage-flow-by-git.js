module.exports = function (RED) {
    function gitNode(config) {
        RED.nodes.createNode(this, config);
        this.target = config.target;
        var node = this;

        //var nns = RED.nodes.createExportableNodeSet(RED.view.selection().nodes);

        this.on('input', function (msg) {
            var s = JSON.stringify(node);
            //var s = "s";
            msg[node.target] = s;
            node.send(msg);
        });
    }
    RED.nodes.registerType('git', gitNode);
};