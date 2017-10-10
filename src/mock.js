
import Mock from "mockjs"

let data = Mock.mock({
        'list|1-10': [{
            'id|+1': 1
        }]
    })

Mock.mock("aa/bb",data)