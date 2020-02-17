import Vue from 'vue'
import Component from 'vue-class-component'
import '../dist/'

@Component({
  template: `
    <div>
        <a href="https://github.com/plantain-00/text-input-component/tree/master/packages/vue/demo" target="_blank">the source code of the demo</a>
        <br/>
        <text-input>
        </text-input>
    </div>
    `
})
class App extends Vue {
}

new App({ el: '#container' })
