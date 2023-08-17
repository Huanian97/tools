let { pinyin, match } =require('pinyin-pro')
let sum = arr => arr.reduce((prev, curr) => prev + curr)
module.exports = {
  // 文字转拼音列表     我爱我家 => wo ai wo jia
  pinyin(txt) {
    let py = [];
    try {
      py = pinyin(txt, { toneType: 'symbol', nonZh: 'consecutive' });
    } catch (error) {
      // 兼容出现转换bug的部分短词，拆分成单个文字进行转换拼接
      let res = "";
      let tmp = txt.split('').map(item => this.pinyin(item));
      tmp.forEach((item,index) => {
        if (index && (item != txt[index] || tmp[index-1] != txt[index-1])) {
          res+=' ';
        }
        res+=item;
      });
      py = res;
    }
    return py
  },
  // 用于搜索list内能够匹配上input的item 匹配指定属性则传入key
  search(input, list, key="") {
    input = input.replace(' ', '');
    return list.map(item => {
      let txt = key ? item[key] : item;
      if (typeof txt != 'string') txt = JSON.stringify(txt)
      return {item, length: txt.length, match: match(txt, input)}
    }).filter(v=>v.match).map(v=>({
      ...v, 
      value: sum(v.match.map(r=>v.length - r)) / sum(Array(v.length).fill().map((v,i)=>i+1))
    })).sort((a,b)=>b.value-a.value).map(v=>v.item)
  },
}
