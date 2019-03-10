import moment from "moment";
import Mock from "mockjs";
const colorList = "#fc6964,#f7a7471,#f3ce4b,#74ca5a1,#46b7f2,#a6a6a8".split(',')
const nameList = "希望号,飞翼号,光明号,窥探号,力神号,警官号,闪电流星号,博士号,霹雳火神号,狙击手号,希望之光号,南海忍者号,火速E3号,山神号,安全卫士号,铁锤号,寿星号,星星号,罗曼斯卡,欲望号,霹雳雷电号,消防号,欧洲之星号".split(',')

const typeList ='🚅,🚈,🚄'.split(',')

const Random = Mock.Random
var template = {
  'id': () => 'JHR'+Random.natural(100, 999)+Random.character('upper'),
  'name':()=>Random.pick(nameList),
  'type':()=> Random.pick(typeList),
  'color':()=>Random.pick(colorList),
  'speed': ()=>Random.natural(0, 200),
  'gtArray': () => {
    let temp = [];
    let i = 0;
    let j = Random.natural(1, 9);
    let tempStart = moment().subtract(12,'h');
    let tempEnd = moment().subtract(12,'h');

    while (i < j) {
      tempStart = tempEnd.clone().add(Random.natural(1, 5), 'h');
      tempEnd =  tempStart.clone().add(Random.natural(1, 5), 'h');
      temp.push({
        'id': 'D'+Random.natural(1000, 9999),
        'passenger':Random.natural(10, 200),
        'start':tempStart.toString(),
        'end': tempEnd.toString(),
      })
      
      i++;
    }
    return temp;
  },
  
}

function mockDatas(nums) {
  let datas = [];
  for (let i = 0,
      j = Random.natural(nums, nums); i < j; i++) {
    datas.push(Mock.mock(template))
  }
  return datas
}

export {
  mockDatas
}