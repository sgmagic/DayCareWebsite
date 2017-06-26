import {MenuItem} from '../fw/services/menu.service';

export let initialMenuItems: Array<MenuItem> =[
{
    text: 'Home',
    route: '/home',
    submenu: null

},
{
    text: 'School / DayCare',
    route: '/organization',
    submenu: null

},
{
    text: 'Parents',
    route: '/parents',
    submenu: null

},
{
    text: 'Features',
    route: '/features',
    submenu: null
},
{
    text: 'About Us',
    route: '/aboutus',
    submenu: null

},
{
    text: 'Pricing',
    route: '/pricing',
    submenu: null
}
];