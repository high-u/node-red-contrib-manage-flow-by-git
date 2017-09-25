# node-red-contrib-manage-flow-by-git

## Feature

- Manage flow by git.
- It is easy to watch **diff** of `function node` and `template node`.
- Export XML. Flow(XML) optimized for git diff.
- Sort node by id.
- Committing this XML to git makes it easy to manage.
- JSON for restoration is also included in XML.
  - Be careful with handling due to it is informal processing.

## Released

|Date|Version|Description|
|:--:|:--:|:--|
|2017-09-24|0.0.7|Update README.|
|2017-09-23|0.0.1|Released|

## Install

- npm install --save node-red-contrib-manage-flow-by-git

## Usage

- Open "by git" tab.
  1. Select nodes.
  1. Get XML.
  1. Download XML.

## Warning

- `<json></json>` contains JSON that can be imported with Node-RED.
- However, It can not be guaranteed. 
- Please check it yourself.

## XML

```xml
<?xml version="1.0" encoding="utf-8"?>
<flow>
  <nodes>
    <node index="0">
      <id>584eb128.a27c8</id>
      <type>function</type>
      <name>get time</name>
      <func><![CDATA[
var datetime = new Date(msg.payload);
var to2digits = function(value) {
    return ("0" + value).slice(-2);
}
var time = [];
time.push(to2digits(datetime.getHours()));
time.push(to2digits(datetime.getMinutes()));
time.push(to2digits(datetime.getSeconds()));
msg.time = time.join(":");
return msg;
]]></func>
      <noerr>0</noerr>
      <wires>
        <0>
          <0>9a8e7d63.37d2e</0>
        </0>
      </wires>
    </node>
    <node index="1">
      <id>9a8e7d63.37d2e</id>
      <type>template</type>
      <name>toJson</name>
      <field>payload</field>
      <fieldType>msg</fieldType>
      <format>handlebars</format>
      <syntax>mustache</syntax>
      <template><![CDATA[
{
  "timestamp": "{{{payload}}}",
  "time": "{{{time}}}"
}
]]></template>
      <output>json</output>
      <wires>
        <0>
          <0>eda3572b.b93a28</0>
        </0>
      </wires>
    </node>
    <node index="2">
      <id>e33d76a.36b0288</id>
      <type>inject</type>
      <name>repeat 1m</name>
      <topic>foo</topic>
      <payload></payload>
      <payloadType>date</payloadType>
      <repeat>60</repeat>
      <crontab></crontab>
      <once>false</once>
      <wires>
        <0>
          <0>584eb128.a27c8</0>
        </0>
      </wires>
    </node>
    <node index="3">
      <id>eda3572b.b93a28</id>
      <type>debug</type>
      <name>debug</name>
      <console>false</console>
      <complete>payload</complete>
      <wires>
        <0>
        </0>
      </wires>
    </node>
  </nodes>
  <json><![CDATA[
[{"id":"584eb128.a27c8","type":"function","name":"get time","func":"var datetime = new Date(msg.payload);\nvar to2digits = function(value) {\n    return (\"0\" + value).slice(-2);\n}\nvar time = [];\ntime.push(to2digits(datetime.getHours()));\ntime.push(to2digits(datetime.getMinutes()));\ntime.push(to2digits(datetime.getSeconds()));\nmsg.time = time.join(\":\");\nreturn msg;","outputs":1,"noerr":"0","x":160,"y":140,"wires":[["9a8e7d63.37d2e"]]},{"id":"9a8e7d63.37d2e","type":"template","name":"toJson","field":"payload","fieldType":"msg","format":"handlebars","syntax":"mustache","template":"{\n  \"timestamp\": \"{{{payload}}}\",\n  \"time\": \"{{{time}}}\"\n}","output":"json","x":190,"y":200,"wires":[["eda3572b.b93a28"]]},{"id":"e33d76a.36b0288","type":"inject","name":"repeat 1m","topic":"foo","payload":"","payloadType":"date","repeat":"60","crontab":"","once":"false","x":130,"y":80,"wires":[["584eb128.a27c8"]]},{"id":"eda3572b.b93a28","type":"debug","name":"debug","active":true,"console":"false","complete":"payload","x":230,"y":260,"wires":[[]]}]
]]>
  </json>
<flow>
```

- If it is json

```json
[
    {
        "id": "e33d76a.36b0288",
        "type": "inject",
        "z": "37072f5.d943fd",
        "name": "repeat 1m",
        "topic": "foo",
        "payload": "",
        "payloadType": "date",
        "repeat": "60",
        "crontab": "",
        "once": false,
        "x": 130,
        "y": 80,
        "wires": [
            [
                "584eb128.a27c8"
            ]
        ]
    },
    {
        "id": "584eb128.a27c8",
        "type": "function",
        "z": "37072f5.d943fd",
        "name": "get time",
        "func": "var datetime = new Date(msg.payload);\nvar to2digits = function(value) {\n    return (\"0\" + value).slice(-2);\n}\nvar time = [];\ntime.push(to2digits(datetime.getHours()));\ntime.push(to2digits(datetime.getMinutes()));\ntime.push(to2digits(datetime.getSeconds()));\nmsg.time = time.join(\":\");\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 160,
        "y": 140,
        "wires": [
            [
                "9a8e7d63.37d2e"
            ]
        ]
    },
    {
        "id": "9a8e7d63.37d2e",
        "type": "template",
        "z": "37072f5.d943fd",
        "name": "toJson",
        "field": "payload",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "{\n  \"timestamp\": \"{{{payload}}}\",\n  \"time\": \"{{{time}}}\"\n}",
        "output": "json",
        "x": 190,
        "y": 200,
        "wires": [
            [
                "eda3572b.b93a28"
            ]
        ]
    },
    {
        "id": "eda3572b.b93a28",
        "type": "debug",
        "z": "37072f5.d943fd",
        "name": "debug",
        "active": true,
        "console": "false",
        "complete": "payload",
        "x": 230,
        "y": 260,
        "wires": []
    }
]
```


## Screenshots

- Tab

![Tab](./screenshots/tab.png)

- Node (do nothing)

![Node image](./screenshots/node.png)

