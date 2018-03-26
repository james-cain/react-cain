#encoding=utf-8
import sys
reload(sys)
sys.setdefaultencoding('utf-8')
import json

with open("./banks.txt",'r') as load_f:
    load_dict = json.load(load_f)
    output = '['
    output_json = []
    for key in load_dict.keys():
        output_json.append({"label":load_dict[key], "value":key})
        output += '{"label":"%s", "value": "%s"},' %(load_dict[key].encode("utf-8"), key)
    output += ']'
    print output.encode("utf-8")
    with open("./banks_output.json", 'w') as out:
        out.write(json.dumps(output_json))
    #print json.dumps(output_json, encoding="GBK", ensure_ascii=False)

    print u'哈哈哈'
