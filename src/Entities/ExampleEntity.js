import Heko from '@hekojs/core'

export default class ExampleEntity extends Heko.EntityBuilder {
  create (entity, { /* Creation parameters */ }) {

    // Here you can add all your components to your new entity, example :
    // entity.addComponent(/* Component to add */, /* Component parameters */)

    return entity
  }
}