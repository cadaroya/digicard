import style from './style.css'

export default {
    data: function() {
        return {
            snquery: ''
        }
    },
    render(h) {
        return (
            <div class='searchbar-wrapper'>
                <div class={ style.searchbar }>
                    <input v-model={ this.snquery } placeholder="type a search here" />
                    <p> Looking for: { this.snquery } </p>
                    <p> (Dunno where or how to send SN typed yet) </p>
                </div>
            </div>
        )
    }
}