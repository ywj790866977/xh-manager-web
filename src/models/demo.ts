// import { PushpinTwoTone } from "@ant-design/icons"

export default {
  namespace: 'demoText',
  state:{
    name:"ttt"
  },
  effects:{
    *setName({payload},{put,call}){
      
      yield console.log(payload,put,call)
      
    }

  }
  
}