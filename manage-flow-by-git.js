module.exports = function (RED) {
    function manageflowbygitNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        this.on('input', function (msg) {
            node.send(msg);
        });
    }
    RED.nodes.registerType('manage-flow-by-git', manageflowbygitNode);
};