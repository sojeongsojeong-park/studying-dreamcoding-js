import increase1 from "./counter.js";
//default는 이름을 마음대로 해서 받아올 수 있음!

//import{ increase as increase1} from './counter.js'
//그냥 Export는 정해진 이름으로 받아와야함!

//export들을 그룹화해서 가져오기!
//import * as counter from './counter.js'
//counter.increase();

increase1(); //1
increase1(); //2
increase1(); //3
