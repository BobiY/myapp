
import Mock from "mockjs"
import templateData from '../mockConfig/mockData'
// templateData 是生成最终 mock 模拟数据的对象
// 在这里对 mock 进行封装，目的是直接生成对应的 mock 数据
let data = Mock.mock({
        'list|1-10': [{
            'id|+1': 1
        }]
    })

Mock.mock("aa/bb",data)