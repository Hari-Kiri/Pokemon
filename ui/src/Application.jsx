import { Component } from 'react';
import { App, View } from 'framework7-react';
import WelcomePage from './WelcomePage';

const f7params = {
    name: 'Pokemon',
    id: 'com.poke.hari',
    theme: 'ios',
    routes: [
        {
            path: '/',
            component: WelcomePage
        },
        {
            path: '/list/',
            async({ resolve }) {
                const reactComponent = () => import('./ListPage');
                reactComponent().then((listPage) => {
                    resolve({ component: listPage.default })
                });
            },
        },
        {
            path: '/detail/',
            async({ resolve }) {
                const reactComponent = () => import('./DetailPage');
                reactComponent().then((detailPage) => {
                    resolve({ component: detailPage.default })
                });
            },
        },
        {
            path: '/mypokemon/',
            async({ resolve }) {
                const reactComponent = () => import('./MyPokemonPage');
                reactComponent().then((myPokemonPage) => {
                    resolve({ component: myPokemonPage.default })
                });
            },
        },
    ],
    autoDarkMode: true,
};

class Application extends Component {
    render () {
        return (
            <App {...f7params}>
                <View main url="/" />
            </App>
        )
    }
}

export default Application;