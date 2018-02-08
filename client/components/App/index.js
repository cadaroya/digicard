import './style.css'

export default {
  render(h) {
    return (
      <div id="app">
        <h1> Digital Pink Card (Librarian Interface) </h1>
        <hr />
        <router-view></router-view>
      </div>
    )
  }
}
