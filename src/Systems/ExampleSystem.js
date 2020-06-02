import Heko from '@hekojs/core'

export default class ExampleSystem extends Heko.System {
  static queries = {
    // Here the queries you may want to create for requesting entities, example :
    // entities: { components: [ExampleComponent] }
  }

  onTick () {
    // Here the logic of your system, you can use your queries, example :
    // this.queries.entities.results.forEach(entity => { })
  }
}