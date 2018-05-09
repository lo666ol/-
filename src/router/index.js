import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Naver from '../components/navBotm.vue'
import page2 from '../components/page2.vue'
import page3 from '../components/page3.vue'
import page4 from '../components/page4.vue'
import page5 from '../components/page5.vue'
import page6 from '../components/dl.vue'
import page3sy from '../components/page3sy.vue'
import search from '../components/search.vue'
import VueResource from 'vue-resource'
import { Search } from 'mint-ui';

Vue.component(Search.name, Search);
/*使用VueResource插件*/

// import page7 from '../components/zc.vue'
import Muse from 'muse-ui'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'muse-ui/dist/muse-ui.css'
Vue.use(Router)
Vue.use(Muse)
Vue.use(Mint)
Vue.use(VueResource)
export default new Router({
  routes: [
 
    {path: '/',
    name: 'HelloWorld',
    component: HelloWorld
      
    },
      {path: '/page2',
      name: 'page2',
      component: page2
        
      }, {path: '/page3',
      name: 'page3',
      component: page3
        
      }, {path: '/page4',
      name: 'page4',
      component: page4
        
      }, {path: '/page5',
      name: 'page5',
      component: page5
        
      },{path: '/page6',
      name: 'page6',
      component: page6
        
      },{path: '/page3sy',
      name: 'page3sy',
      component: page3sy
        
      },{path: '/search',
      name: 'search',
      component: search
        
      }
    
    
  ]
})
