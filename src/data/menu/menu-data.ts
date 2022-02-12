import Menu from './Menu'
import MenuItem from './MenuItem'

const appetizers = [
  new MenuItem(
    'Charcuterie',
    `Seasonal hard and soft cheeses with an assortment of cured meats.`
  ),
  new MenuItem('Pommes frites', 'Crisped julienned potates.'),
  new MenuItem('Shrim cocktails', 'Served with classic cocktail sauce.')
]
const entrees = [
  new MenuItem(
    'Butternut squash ravioli',
    `Homemade ravioli filled with a creamy butternut squash filling, served with garlicy swiss chard and glazed carrots.`
  ),
  new MenuItem(
    'Catch of the day',
    `The freshest fish in the market pan-fried to perfection,
   served with buttery fingerling potatoes and sauted green beans.`
  ),
  new MenuItem(
    'Ribeye steak',
    `Steak cooked to your liking, seved with garlicy mashed potatoes and glazed carrots.`
  ),
]

const menuData = new Menu(appetizers, entrees)

export default menuData
