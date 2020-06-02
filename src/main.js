import './index.html'
import Heko from '@hekojs/core'
import HekoRenderer from '@hekojs/2d-renderer'
import Components from './Components'
import Entities from './Entities'
import Systems from './Systems'

// Register all your entities and components
Heko.registerEntities(Entities)
Heko.registerComponents(Components)

// Create a world with a renderer
const world = new Heko.World()

world.plugins.add(HekoRenderer.Plugin, {
  target: document.getElementById('container'),
  statistics: true
})

// Here your can add some of your systems, example :
// world.systems.add(Systems.ExampleSystem)

world.start()

// Finally spawn some entities, example :
// this.world.entities.add(Entities.ExampleEntity, /* params */)