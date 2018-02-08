import style from './style.css'

export default {
     render(h) {
          return (
               <div class="navbar-wrapper">
                    <div class={ style.navbar }>
                         <h1>Digital Pink Card (Librarian Interface)</h1>
                         <button><router-link to='/home'>Home</router-link></button>
                         <button><router-link to='/'>"Log out"</router-link></button>
                         <hr />
                    </div>
               </div>
          )
     }
}