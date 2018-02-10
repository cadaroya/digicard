import style from './style.css'
import NavBar from '../NavBar'

export default {
     components: { 'app-navbar': NavBar },
     render(h) {
          return (
               <div id="app" class="app-wrapper">
                    <div class={ style.app }>
                         <app-navbar></app-navbar>
                         <router-view></router-view>
                    </div>
               </div>
          )
     }
}
